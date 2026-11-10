import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const expectedAmazonTag = 'japanlivinged-22';
const productsFile = path.join(root, 'src', 'data', 'affiliateProducts.ts');
const articlesDir = path.join(root, 'src', 'content', 'articles');
const errors = [];

const fail = (file, message, offset = 0) => {
  const relative = path.relative(root, file) || file;
  const source = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
  const line = source.slice(0, offset).split(/\r?\n/u).length;
  errors.push(`${relative}:${line}: ${message}`);
};

const read = (file) => fs.readFileSync(file, 'utf8');

const walk = (dir) => {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
};

function parseProducts() {
  if (!fs.existsSync(productsFile)) {
    fail(productsFile, 'affiliateProducts.ts is missing');
    return new Map();
  }
  const source = read(productsFile);
  const products = new Map();
  const entryPattern = /^\s{2}([A-Za-z_$][\w$]*): \{([\s\S]*?)^\s{2}\},/gmu;
  for (const match of source.matchAll(entryPattern)) {
    const propertyKey = match[1];
    const block = match[2];
    const offset = match.index ?? 0;
    const key = block.match(/\bkey:\s*'([^']+)'/u)?.[1];
    const asin = block.match(/\basin:\s*'([^']+)'/u)?.[1];
    const urlMatch = block.match(/\bamazonJpUrl:\s*(?:\r?\n\s*)?'([^']+)'/u);
    if (!key || !asin || !urlMatch) {
      fail(productsFile, `product entry ${propertyKey} must contain static key, asin, and amazonJpUrl`, offset);
      continue;
    }
    if (key !== propertyKey) fail(productsFile, `object key ${propertyKey} does not match product key ${key}`, offset);
    if (products.has(key)) fail(productsFile, `duplicate product key ${key}`, offset);
    const url = urlMatch[1];
    let parsed;
    try {
      parsed = new URL(url);
    } catch {
      fail(productsFile, `invalid Amazon URL for ${key}`, offset);
      continue;
    }
    if (parsed.hostname !== 'www.amazon.co.jp') fail(productsFile, `Amazon URL for ${key} must use www.amazon.co.jp`, offset);
    const asinMatches = [...parsed.pathname.matchAll(/\/dp\/([A-Z0-9]{10})(?:[/?]|$)/giu)].map((item) => item[1].toUpperCase());
    if (asinMatches.length !== 1 || asinMatches[0] !== asin.toUpperCase()) {
      fail(productsFile, `ASIN mismatch for ${key}: registered ${asin}, URL ${asinMatches.join(', ') || 'missing'}`, offset);
    }
    const tags = parsed.searchParams.getAll('tag');
    if (tags.length !== 1 || tags[0] !== expectedAmazonTag) {
      fail(productsFile, `Amazon tag mismatch for ${key}: expected ${expectedAmazonTag}, found ${tags.join(', ') || 'missing'}`, offset);
    }
    products.set(key, { asin, url });
  }
  if (!products.size) fail(productsFile, 'no static affiliate products were parsed');
  return products;
}

function frontmatter(source, file) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/u);
  if (!match) {
    fail(file, 'missing frontmatter');
    return { text: '', draft: false, disclosure: null };
  }
  const text = match[1];
  const disclosure = text.match(/^affiliateDisclosure:\s*(["'])(.*?)\1\s*$/mu)?.[2] ?? null;
  return { text, draft: /^draft:\s*true\s*(?:#.*)?$/mu.test(text), disclosure };
}

function checkDisclosure(file, disclosure, hasAffiliate) {
  if (!disclosure) {
    fail(file, 'affiliateDisclosure is missing');
    return;
  }
  const normalized = disclosure.trim().toLowerCase();
  if (hasAffiliate) {
    if (!normalized.includes('affiliate') || normalized.includes('does not contain affiliate')) {
      fail(file, 'affiliate link exists but affiliateDisclosure is not an affiliate disclosure');
    }
  } else if (disclosure !== 'This article does not contain affiliate links.') {
    fail(file, 'article without affiliate links must use the non-affiliate disclosure');
  }
}

function checkArticles(products) {
  const articleFiles = walk(articlesDir).filter((file) => /\.mdx?$/u.test(file));
  if (!articleFiles.length) {
    fail(articlesDir, 'no article files found');
    return;
  }
  let publicArticles = 0;
  let affiliateArticles = 0;
  let affiliateReferences = 0;
  for (const file of articleFiles) {
    const source = read(file);
    const meta = frontmatter(source, file);
    if (meta.draft) continue;
    publicArticles += 1;
    let hasAffiliate = false;
    for (const match of source.matchAll(/<AffiliateProductLink\b/gu)) {
      const start = match.index ?? 0;
      const end = source.indexOf('/>', start);
      const closing = source.indexOf('</AffiliateProductLink>', start);
      const finish = end >= 0 && (closing < 0 || end < closing) ? end + 2 : closing >= 0 ? closing + '</AffiliateProductLink>'.length : -1;
      if (finish < 0) {
        fail(file, 'AffiliateProductLink has unsupported or unterminated syntax', start);
        continue;
      }
      const segment = source.slice(start, finish);
      const keyMatch = segment.match(/\bproductKey\s*=\s*(["'])(.*?)\1/u);
      if (!keyMatch) {
        fail(file, 'AffiliateProductLink productKey must be a static quoted value', start);
      } else if (!products.has(keyMatch[2])) {
        fail(file, `AffiliateProductLink references unregistered productKey ${keyMatch[2]}`, start);
      }
      hasAffiliate = true;
      affiliateReferences += 1;
    }
    const rakutenMatches = [...source.matchAll(/https:\/\/(?:hb|hbb)\.afl\.rakuten\.co\.jp\/[^\s"'<>}`]+/giu)];
    const rakutenHostOccurrences = [...source.matchAll(/(?:hb|hbb)\.afl\.rakuten\.co\.jp/giu)];
    if (rakutenHostOccurrences.length !== rakutenMatches.length) {
      fail(file, 'Rakuten affiliate reference must be a static, parseable URL');
      hasAffiliate = true;
    }
    if (/(?:href|src)\s*=\s*\{[^}]*rakuten/iu.test(source)
      || /set:html\s*=\s*\{`[^`]*\$\{[^`]*rakuten/iu.test(source)) {
      fail(file, 'dynamic Rakuten affiliate markup is unsupported');
      hasAffiliate = true;
    }
    for (const match of rakutenMatches) {
      try {
        const url = new URL(match[0].replace(/[),.;]+$/u, ''));
        if (!['hb.afl.rakuten.co.jp', 'hbb.afl.rakuten.co.jp'].includes(url.hostname)) throw new Error();
      } catch {
        fail(file, 'invalid Rakuten affiliate URL', match.index ?? 0);
      }
      hasAffiliate = true;
    }
    if (hasAffiliate) affiliateArticles += 1;
    checkDisclosure(file, meta.disclosure, hasAffiliate);
  }
  console.log(`Affiliate integrity scanned ${publicArticles} public articles, ${affiliateArticles} affiliate articles, and ${affiliateReferences} Amazon product references.`);
}

try {
  const products = parseProducts();
  checkArticles(products);
} catch (error) {
  fail(root, `validation could not complete: ${error.message}`);
}

if (errors.length) {
  for (const error of errors) console.error(error);
  process.exitCode = 1;
} else {
  console.log('Affiliate integrity OK.');
}
