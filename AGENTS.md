# Repository Instructions for Codex

## Japan Living Edit Editorial and Publishing Rules

These rules apply to coding agents working in this repository. If a task-specific prompt gives more specific instructions, follow that prompt, unless it asks for fabricated facts, unverified claims, hidden sponsorship, or unsafe affiliate behavior.

## Editorial Position

Japan Living Edit is a Japan-based independent editorial website for an international audience. It covers Japanese products, design, organization, small-space living, kitchen, coffee, and everyday home ideas.

Do not make unsupported generalizations about Japanese culture, Japanese people, or Japanese homes. Preserve article-specific scope statements when provided. Avoid claims such as "Japanese people always...", "Japanese homes always...", "the Japanese secret to...", or "Japanese minimalism teaches us..." unless supported by appropriate sources and explicitly required.

## Editorial Independence

Brand and product coverage must be based on editorial relevance, not affiliate availability. Do not invent sponsorships, partnerships, affiliate relationships, endorsements, testimonials, or brand approval. Future commercial relationships must remain separate from editorial judgment and must be clearly disclosed when relevant.

## Product Claims

For products Japan Living Edit has not actually evaluated, do not imply hands-on testing. Avoid "we tested", "we tried", "we used", hands-on review language, durability guarantees, comfort guarantees, quality guarantees, performance guarantees, or value-for-money conclusions.

When using manufacturer facts, attribute them as manufacturer or official product information when needed. Keep editorial interpretation distinct from manufacturer claims.

## Research and Sources

Prefer official primary sources for brand and product facts:

- official brand or manufacturer pages
- official product pages
- official institutional or statistical sources when relevant

Do not use third-party affiliate blogs as fact sources unless a task specifically requires it. Do not infer facts that official sources do not confirm. Recheck volatile facts close to publication when they matter to the article.

## Affiliate Default

Unless a task explicitly allows affiliate implementation, use this default:

- affiliate links: 0
- affiliate IDs: 0
- Amazon affiliate links: 0
- tracking parameters: 0
- shopping CTAs: 0

Avoid CTAs such as "Buy now", "Shop now", "Check price", or "Get yours". For non-affiliate articles, use the existing article disclosure pattern: "This article does not contain affiliate links."

## External Links

For normal editorial articles, prefer official links unless the task says otherwise. Remove unnecessary tracking parameters, including `utm_source`, `utm_medium`, `utm_campaign`, `ref`, `tag`, `affiliate`, and similar query parameters. Keep a query parameter only when it is necessary for the URL to function and has been checked.

Do not invent link destinations.

## Images and Logos

Unless a task explicitly instructs otherwise, do not add product images, brand logos, externally fetched images, or downloaded third-party images. Do not reuse official product images simply because they are visible on an official site.

## Article Focus

Articles should not become product catalogs. Treat products as examples that support an editorial framework. Respect any task-specific named-product limit. Do not add product names or brand names for SEO padding.

Avoid ranking language such as "best", "top pick", or "winner" unless a task explicitly asks for a ranking article and provides the required evidence and guardrails.

## SEO and Content Collections

Articles must follow the existing Astro Content Collection schema in `src/content/config.ts`. Check frontmatter fields including:

- `title`
- `seoTitle`
- `description`
- `publishedDate`
- `category`
- `tags`
- `draft`
- `affiliateDisclosure`
- `canonicalURL`

Use `https://japanlivingedit.com/` as the production origin for canonical and sitemap URLs. Do not put localhost or `github.io` URLs in production metadata. If the existing layout appends the site name, do not duplicate `| Japan Living Edit` in `seoTitle`.

Change the schema only when the task requires it.

## Internal Links

Implement task-specified internal links. Do not add forced reciprocal links unless requested. Do not heavily rewrite existing articles just to publish a new article. Always avoid broken internal links.

## Drafts and Welcome Article

Keep the existing draft behavior: `draft: true` articles must not appear in `/articles/`, Home Latest, or the sitemap. Do not change the Welcome article draft status unless a task specifically asks for it.

## Brands Page

Treat the Brands page as an editorial coverage page, not an affiliate partner list. Add new brands only when there is actual editorial coverage or an explicit editorial direction. Do not repeat "we are not affiliated with..." under every brand. Preserve the Editorial independence section. Do not emphasize a brand merely because of affiliate applications or partnership discussions.

## Minimal Change Principle

Make the smallest change needed for the task. Avoid unrelated refactors, dependency updates, layout changes, schema changes, SEO systems, or new features. When changing existing article text, modify only the requested scope.

## Validation

For public-content changes, use the repository's real scripts and workflows. Confirm command names in `package.json`; do not invent scripts. When applicable, run:

- dependency install with lockfile
- production build
- Astro check
- existing internal-link check

Also check relevant canonical URLs, draft visibility, sitemap output, and localhost or `github.io` contamination. Follow any extra validation in the task prompt.

For documentation-only changes, build may be skipped when public site output is not affected. State that clearly in the final report.

## Git and Deployment

When the user asks for commit and push:

- commit only relevant files
- use the task-specified commit message when provided
- push normally to `main` when requested
- never force push

For publish tasks that include push, confirm the `Deploy to GitHub Pages` workflow. When possible, verify `build = success` and `deploy = success`, then check the task-specified production URL for the relevant content, links, and disclosure.

## Compact Report Standard

Use this compact final report format unless the user asks for more detail:

```text
STATUS: PASS / FAIL

CHANGED:
- changed files only

VALIDATION:
- build:
- Astro:
- internal links:
- GitHub Actions:

PRODUCTION:
- URL:
- result:

GUARDRAILS:
- affiliate:
- Amazon:
- tracking:
- images:
- prohibited/unverified claims:

GIT:
- commit:
- Actions Run ID:

DEVIATIONS:
- None, or only what changed from instructions

ERRORS:
- None, or the blocking errors
```

Do not restate full article text, full frontmatter, or every successful checklist item. For failures, explain the cause and the remaining unfinished work.
