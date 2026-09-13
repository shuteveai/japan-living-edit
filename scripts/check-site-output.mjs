import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const origin = 'https://japanlivingedit.com';
const errors = [];
const fail = (file, reason) => errors.push(`${path.relative(root, file)}: ${reason}`);
const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
  const file = path.join(dir, entry.name);
  return entry.isDirectory() ? walk(file) : [file];
});
const read = (file) => fs.readFileSync(file, 'utf8');
const decode = (value) => value.replace(/&(#x[\da-f]+|#\d+|amp|quot|apos|lt|gt);/gi, (match, entity) => {
  if (entity.startsWith('#')) {
    const number = entity[1].toLowerCase() === 'x' ? parseInt(entity.slice(2), 16) : Number(entity.slice(1));
    return number > 0 && number <= 0x10ffff ? String.fromCodePoint(number) : match;
  }
  return { amp: '&', quot: '"', apos: "'", lt: '<', gt: '>' }[entity.toLowerCase()];
});

// Tokenize generated start tags, respecting quoted > characters and ignoring raw text.
function tags(html) {
  const clean = html.replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<(script|style|title|textarea)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, '<$1>');
  return [...clean.matchAll(/<([a-z][\w:-]*)\b((?:"[^"]*"|'[^']*'|[^'">])*)>/gi)].map((match) => {
    const attributes = {};
    for (const attr of match[2].matchAll(/([^\s=\/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g)) {
      attributes[attr[1].toLowerCase()] = decode(attr[2] ?? attr[3] ?? attr[4] ?? '');
    }
    return { name: match[1].toLowerCase(), attributes };
  });
}

function localFile(url) {
  const pathname = decodeURIComponent(url.pathname);
  const target = path.resolve(dist, `.${pathname}`);
  if (target !== dist && !target.startsWith(dist + path.sep)) return undefined;
  if (fs.existsSync(target) && fs.statSync(target).isFile()) return target;
  const index = path.join(target, 'index.html');
  return fs.existsSync(index) && fs.statSync(index).isFile() ? index : undefined;
}

function productionUrl(value, file, label) {
  try {
    const url = new URL(value);
    if (url.origin !== origin || url.username || url.password) throw new Error();
    return url;
  } catch {
    fail(file, `${label} must be an absolute ${origin}/ URL: ${value}`);
  }
}

function hasArticle(value) {
  if (Array.isArray(value)) return value.some(hasArticle);
  if (!value || typeof value !== 'object') return false;
  const types = Array.isArray(value['@type']) ? value['@type'] : [value['@type']];
  return types.includes('Article') || hasArticle(value['@graph']);
}

function check() {
  if (!fs.existsSync(dist) || !fs.statSync(dist).isDirectory()) {
    fail(dist, 'build output is missing; run pnpm run build first');
    return;
  }
  const files = walk(dist);
  const htmlFiles = files.filter((file) => file.endsWith('.html'));
  if (!htmlFiles.length) fail(dist, 'no HTML files found');
  const sitemapFiles = files.filter((file) => /sitemap[^/\\]*\.xml$/.test(file));
  if (!sitemapFiles.length) fail(dist, 'no sitemap files found');
  const draftPaths = [];
  // Read only the content collection, never the user-owned drafts/ directory.
  for (const file of walk(path.join(root, 'src/content/articles')).filter((file) => /\.mdx?$/.test(file))) {
    const frontmatter = read(file).match(/^---\r?\n([\s\S]*?)\r?\n---/u)?.[1] ?? '';
    if (!/^draft:\s*true\s*(?:#.*)?$/m.test(frontmatter)) continue;
    const customSlug = frontmatter.match(/^slug:\s*['"]?([^'"\r\n]+?)['"]?\s*$/m)?.[1];
    const slug = customSlug ?? path.relative(path.join(root, 'src/content/articles'), file)
      .replaceAll(path.sep, '/').replace(/\.mdx?$/, '').toLowerCase();
    draftPaths.push(`/articles/${slug}/`);
    const canonical = frontmatter.match(/^canonicalURL:\s*['"]?([^'"\r\n]+?)['"]?\s*$/m)?.[1];
    if (canonical) draftPaths.push(new URL(canonical).pathname);
  }
  for (const draftPath of new Set(draftPaths)) {
    if (localFile(new URL(draftPath, origin))) fail(dist, `draft page emitted: ${draftPath}`);
  }
  for (const file of [...htmlFiles, ...sitemapFiles]) {
    const html = read(file);
    if (/localhost|127\.0\.0\.1|github\.io/i.test(html)) fail(file, 'development/preview hostname found');
    for (const draftPath of new Set(draftPaths)) {
      if (decode(html).includes(draftPath)) fail(file, `draft reference found: ${draftPath}`);
    }
  }

  const canonicals = new Map();
  let internalLinks = 0;
  for (const file of htmlFiles) {
    const html = read(file);
    const elements = tags(html);
    const is404 = ['404.html', '404/index.html'].includes(path.relative(dist, file).replaceAll(path.sep, '/'));
    const head = html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? '';
    const headTags = tags(head);
    const metadata = (key, attribute = 'property') => {
      const found = headTags.filter((tag) => tag.name === 'meta' && tag.attributes[attribute] === key);
      if (found.length !== 1 || !found[0]?.attributes.content?.trim()) {
        fail(file, `${key}: expected exactly one nonempty metadata value (found ${found.length})`);
      }
      return found[0]?.attributes.content ?? '';
    };
    if (!is404) {
      for (const name of ['title', 'h1']) {
        if (elements.filter((tag) => tag.name === name).length !== 1) fail(file, `expected exactly one ${name}`);
      }
      const description = metadata('description', 'name');
      const canonicalTags = headTags.filter((tag) => tag.name === 'link' && tag.attributes.rel?.split(/\s+/).includes('canonical'));
      if (canonicalTags.length !== 1) fail(file, 'expected exactly one canonical');
      const canonical = canonicalTags[0]?.attributes.href ?? '';
      const canonicalUrl = productionUrl(canonical, file, 'canonical');
      if (canonicalUrl?.search || canonicalUrl?.hash) fail(file, 'canonical must not contain query or fragment');
      if (canonicals.has(canonical)) fail(file, `duplicate canonical also used by ${path.relative(root, canonicals.get(canonical))}`);
      canonicals.set(canonical, file);
      const required = ['og:type', 'og:title', 'og:description', 'og:url', 'og:site_name', 'og:locale', 'og:image', 'og:image:alt'];
      const values = Object.fromEntries(required.map((key) => [key, metadata(key)]));
      for (const key of ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image', 'twitter:image:alt']) {
        values[key] = metadata(key, 'name');
      }
      if (values['og:url'] !== canonical) fail(file, 'og:url does not match canonical');
      if (values['og:locale'] !== 'en_US') fail(file, 'og:locale must be en_US');
      if (values['twitter:card'] !== 'summary_large_image') fail(file, 'twitter:card must be summary_large_image');
      const title = decode(head.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? '').trim();
      if (!title || values['og:title'] !== title || values['twitter:title'] !== title) fail(file, 'social titles must match the page title');
      if (values['og:description'] !== description || values['twitter:description'] !== description) fail(file, 'social descriptions must match description');
      for (const key of ['og:image', 'twitter:image']) {
        const url = productionUrl(values[key], file, key);
        if (url && !localFile(url)) fail(file, `${key} asset does not exist in dist: ${url.pathname}`);
      }
      if (values['og:image'] !== values['twitter:image'] || values['og:image:alt'] !== values['twitter:image:alt']) fail(file, 'social images/alt text must agree');
      const isArticle = /^articles\/.+\/index\.html$/.test(path.relative(dist, file).replaceAll(path.sep, '/'));
      if (values['og:type'] !== (isArticle ? 'article' : 'website')) fail(file, 'incorrect og:type');
      if (isArticle) {
        for (const key of ['article:published_time', 'article:modified_time']) {
          const value = metadata(key);
          if (!Number.isFinite(Date.parse(value))) fail(file, `${key} is not a valid date`);
        }
        metadata('article:section');
        let articleFound = false;
        for (const script of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
          if (!/\btype\s*=\s*["']application\/ld\+json["']/i.test(script[1])) continue;
          try { articleFound ||= hasArticle(JSON.parse(script[2])); }
          catch { fail(file, 'invalid JSON-LD'); }
        }
        if (!articleFound) fail(file, 'missing Article JSON-LD');
      }
    }
    for (const { attributes } of elements) {
      const href = attributes.href;
      if (!href) continue;
      try {
        if (href.startsWith('/') && !href.startsWith('//')) {
          internalLinks++;
          if (!localFile(new URL(href, origin))) fail(file, `broken internal href: ${href}`);
        }
        const url = new URL(href, origin);
        const rel = (attributes.rel ?? '').split(/\s+/);
        const affiliate = rel.includes('sponsored') || ['tag', 'affiliate', 'affiliate_id', 'aff_id'].some((key) => url.searchParams.has(key));
        if (affiliate && !['sponsored', 'noopener', 'noreferrer'].every((token) => rel.includes(token))) fail(file, `affiliate link is missing sponsored/noopener/noreferrer: ${url.origin}${url.pathname}`);
      } catch { fail(file, `invalid href: ${href}`); }
    }
  }
  const sitemapUrls = new Set();
  for (const file of sitemapFiles) {
    const xml = read(file);
    const isIndex = /<sitemapindex\b/.test(xml);
    if (!isIndex && !/<urlset\b/.test(xml)) fail(file, 'unrecognized sitemap format');
    for (const match of xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)) {
      const value = decode(match[1]);
      const url = productionUrl(value, file, 'sitemap URL');
      if (isIndex) {
        if (url && !localFile(url)) fail(file, `missing referenced sitemap: ${value}`);
      } else {
        if (sitemapUrls.has(value)) fail(file, `duplicate sitemap URL: ${value}`);
        sitemapUrls.add(value);
        if (!canonicals.has(value)) fail(file, `sitemap URL has no indexable HTML canonical: ${value}`);
      }
    }
  }
  for (const [canonical, file] of canonicals) {
    if (!sitemapUrls.has(canonical)) fail(file, `canonical missing from sitemap: ${canonical}`);
  }
  if (!errors.length) console.log(`Site output OK: ${canonicals.size} HTML pages, ${sitemapUrls.size} sitemap URLs, ${internalLinks} internal links.`);
}

try { check(); }
catch (error) { fail(dist, `validation could not complete: ${error.message}`); }
if (errors.length) {
  for (const error of errors) console.error(error);
  process.exitCode = 1;
}
