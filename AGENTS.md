# Repository Instructions for Codex

## Japan Living Edit Editorial and Publishing Rules

These rules apply to coding agents working in this repository. If a task-specific prompt gives more specific instructions, follow that prompt, unless it asks for fabricated facts, unverified claims, hidden sponsorship, or unsafe affiliate behavior.
## Editorial Position

Japan Living Edit is a Japan-based independent editorial website for an international audience. It explores thoughtfully designed products from Japan and the practical details that make everyday objects useful, including design, organization, small-space living, kitchen, coffee, and other daily-life topics.
Do not make unsupported generalizations about Japanese culture, Japanese people, or Japanese homes. Preserve article-specific scope statements when provided. Avoid claims such as "Japanese people always...", "Japanese homes always...", "the Japanese secret to...", or "Japanese minimalism teaches us..." unless supported by appropriate sources and explicitly required.

Use the most relevant editorial lens for each article; not every article needs every lens, and lenses are not ranking scores:
- Thoughtful Function: what problem does this detail solve?
- Reliable Craft: what evidence supports its reliability? Use materials, construction, manufacturing information, production area, or manufacturer specifications where verified; do not turn this into an untested durability guarantee.
- Material Experience: what does the material mean for everyday use and care? Do not present feel, comfort, grip, or similar qualities as Japan Living Edit's own experience unless actually evaluated.
- Functional Beauty: how does the design relate to the function? Avoid empty aesthetic praise.
Be precise about product origin. Use "Made in Japan" only when official primary information confirms the individual product is made in Japan. Use "Japanese brand" when the brand origin is confirmed, without assuming each product's manufacturing country. Editorially relevant non-Japanese brands may be covered when appropriate, but must not be described as Japanese brands or Japanese-made products.
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

Unless the task explicitly authorizes new affiliate implementation, do not add new affiliate links, affiliate IDs, Amazon affiliate links, affiliate tracking parameters, or shopping CTAs. Existing, previously approved affiliate implementations must not be removed or changed without authorization.

For authorized affiliate changes:
- Use the existing affiliate data in `src/data/affiliateProducts.ts` and established components as the source of truth.
- Verify the exact product, model, and ASIN before adding or changing a link.
- Preserve approved affiliate URLs, their identifying parameters, and the associated disclosures.
- Do not introduce affiliate changes outside the task scope.

Avoid shopping CTAs such as "Buy now", "Shop now", "Check price", or "Get yours" unless explicitly authorized. For articles without affiliate links, retain the established disclosure: "This article does not contain affiliate links."
## External Links

For ordinary non-affiliate editorial links, prefer official sources unless the task specifies otherwise. Remove unnecessary tracking parameters from those links, preserving parameters required for the URL to function.

Do not strip or rewrite identifying parameters (including `tag`) on existing approved affiliate URLs. Keep any URL normalization or affiliate-link changes within the explicitly authorized task scope.

Do not invent link destinations or affiliate identifiers.
## Images and Logos

Unless a task explicitly instructs otherwise, do not add product images, brand logos, externally fetched images, or downloaded third-party images. Do not reuse official product images simply because they are visible on an official site.
## Article Focus

Articles should not become product catalogs. Treat products as examples that support an editorial framework. Respect any task-specific named-product limit. Do not add product names or brand names for SEO padding.

Avoid ranking language such as "best", "top pick", or "winner" unless a task explicitly asks for a ranking article and provides the required evidence and guardrails.
## SEO and Content Collections

Articles must conform to the current Astro Content Collection schema in `src/content/config.ts`. Treat that schema as the source of truth for required and optional fields, field types, and conditional requirements; do not duplicate its field list here.

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
## Secrets and Sensitive Information

Never commit credentials, API keys, access tokens, passwords, private keys, or sensitive configuration values. Keep secrets in appropriate environment variables or local configuration excluded from version control.

Do not print or copy secrets into logs, task descriptions, commit messages, or final reports. Before committing, check staged changes for credentials and sensitive files.

If potential secret exposure is discovered, stop the affected operation and report the issue without reproducing secret values. Do not broaden repository, network, or credential permissions without explicit authorization.
## Validation

Use actual repository scripts and workflows. Confirm command names in `package.json`; do not invent scripts.

For site-code or public-content changes, use `pnpm run build` as the default local validation. The current script runs `astro check`, `astro build`, and `scripts/check-site-output.mjs`. Install dependencies with the lockfile when required. Avoid rerunning the same checks separately unless troubleshooting or task-specific validation calls for it.

Perform relevant checks not covered by the build, including task-specific canonical URLs, draft visibility, sitemap output, localhost or `github.io` contamination, external-link behavior, and production visual checks when applicable. Follow additional validation requirements in the task prompt.

For documentation-only changes that do not affect public site output, the build may be skipped; report it as NOT RUN with the reason. Never claim PASS for a check that was not actually run and successful.
## Completion Gates

When applicable, treat these stages as independent gates:
- FACT: Required factual claims are verified and approved.
- FILES: Required implementation files exist and match the approved task scope.
- VALIDATION: Required tests and checks have completed successfully.
- GIT: Authorized changes have been committed and pushed successfully.
- DEPLOYMENT: Deployment succeeded and required production checks passed.

A PASS at one gate does not imply PASS at a later gate. Report each applicable gate as PASS, FAIL, NOT RUN, or UNVERIFIED based on actual evidence. Do not treat a Fact Sheet approval, successful build, or Codex completion message alone as proof that later stages are complete.
## Git and Deployment

Commit or push only when explicitly authorized. Before staging, inspect `git status` and identify the files required by the task. Stage only selected task-related files; avoid blanket staging such as `git add .` when unrelated or untracked files may exist.

Do not stage or commit `drafts/`, unrelated files, or sensitive files unless the user explicitly authorizes the relevant task and files. Before committing, inspect the staged file names and staged diff. Use the task-specified commit message when provided.

When push is authorized, push normally to `main` as requested; never force push.

For publish tasks that include push, confirm the `Deploy to GitHub Pages` workflow. When possible, verify `build = success` and `deploy = success`, then check the task-specified production URL for the relevant content, links, and disclosure. A local build or push alone is not evidence of successful publication.
## Compact Report Standard

Use the following concise final report unless the user requests more detail:

```text
STATUS: PASS / FAIL / PARTIAL
CHANGED: Task-related changed files, or None
VALIDATION: Checks performed and their results; identify NOT RUN or UNVERIFIED
GIT / DEPLOY: Commit, push, deployment, and verification status
ERRORS: Blocking issues, deviations, incomplete work, or None
```

Include applicable Completion Gate results within those fields. For affiliate, copyright, factual-claim, security-sensitive, or otherwise high-risk tasks, include additional guardrail results as necessary. Distinguish PASS, FAIL, NOT RUN, and UNVERIFIED. Do not repeat full article text, full frontmatter, or long success checklists. Explain failures and remaining unfinished work.
