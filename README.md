# Japan Living Edit

Japan Living Edit is an independent English-language editorial website for international readers, primarily in the United States. It introduces thoughtfully designed products, practical ideas and everyday approaches to living from Japan, with focus areas including organization, small-space living, kitchen and coffee.

This project intentionally avoids affiliate links, tracking scripts, advertising scripts, a backend server, a database, WordPress, CMS tooling and paid services at launch.

## Tech stack

- Astro
- TypeScript
- Markdown and Astro Content Collections
- Static output
- GitHub Pages
- GitHub Actions
- Custom domain: `japanlivingedit.com`

## Local development

```bash
npm install
npm run dev
```

This repository is configured with pnpm for reproducible GitHub Actions builds. If you prefer pnpm locally:

```bash
pnpm install
pnpm run dev
```

## Build

```bash
npm run build
```

or:

```bash
pnpm run build
```

The build runs `astro check` before generating the static site in `dist/`.

## Deployment

Deployment is configured through `.github/workflows/deploy.yml`.

On pushes to the `main` branch, GitHub Actions installs dependencies, builds the Astro site and deploys the `dist/` directory to GitHub Pages.

## GitHub Pages

In the GitHub repository settings:

1. Open Settings > Pages.
2. Set Source to GitHub Actions.
3. Confirm the custom domain is `japanlivingedit.com`.
4. Enable HTTPS.

The `public/CNAME` file contains only:

```text
japanlivingedit.com
```

The `public/.nojekyll` file is included so GitHub Pages serves Astro assets under `_astro/` correctly.

## Custom domain setup

The Astro canonical site URL is configured in `astro.config.mjs` as:

```js
site: 'https://japanlivingedit.com'
```

This keeps sitemap and canonical URLs on the production domain, not localhost or a `github.io` URL.

## Cloudflare DNS setup guidance

Cloudflare DNS must be configured manually. For an apex domain on GitHub Pages, add GitHub Pages A records:

```text
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

Optional `www` redirect support:

```text
Type: CNAME
Name: www
Value: <your-github-username>.github.io
```

Use Cloudflare proxy settings carefully with GitHub Pages. If certificate provisioning is delayed, temporarily set records to DNS only, confirm GitHub Pages HTTPS is issued, then review Cloudflare SSL/TLS settings.

## Content creation workflow

Repository-wide editorial and publishing instructions for coding agents are defined in `AGENTS.md`.

Articles live in `src/content/articles/` as Markdown files. Required frontmatter:

```yaml
title: "Article title"
description: "Short SEO description."
publishedDate: 2026-08-16
updatedDate: 2026-08-16
category: "Organize"
tags: ["storage", "small spaces"]
draft: false
affiliateDisclosure: "This article does not contain affiliate links."
heroImage: "/optional-local-image.webp"
canonicalURL: "https://japanlivingedit.com/articles/example/"
```

Allowed categories are `Organize`, `Small Spaces`, `Kitchen` and `Coffee`.

Set `draft: true` for unpublished articles. Draft articles are excluded from production article pages.

## Affiliate status

Affiliate links are not active yet. Do not add affiliate IDs, fake affiliate URLs, commission claims, product review claims, testimonials or partnership language unless those statements are accurate and approved.

If affiliate links are added in the future:

- Update article-level `affiliateDisclosure` text.
- Update `/disclosure/` if needed.
- Keep external links easy to audit.
- Avoid implying official brand relationships without approval.

## Image and copyright policy

Do not copy, download or reuse official product images from Yamazaki Home, KINTO or other brands. Do not pull images from third-party websites.

At launch, the site uses CSS-based abstract placeholders only. Future images should be original, properly licensed or brand-approved.

## Future analytics and privacy updates

The current site has no Google Analytics, advertising scripts, affiliate tracking, newsletter signup or contact form.

Before adding analytics, ads, affiliate tracking, newsletter tooling, forms or other data collection, update:

- `src/pages/privacy.astro`
- `src/pages/disclosure.astro` when relevant
- This README

This README is operational guidance, not legal advice.
