# Why those two URLs 404 — and how to fix it

## Diagnosis (confirmed)

Neither URL is a real page. They only exist as **typo'd internal links inside article body copy**, so anyone clicking them lands on the SPA's noindex 404 shell.

1. `/en/blog/use-cases-multi-currency-invoicing`
   - Link source: `src/data/blogPostsCluster16.ts` (line ~995).
   - The real page is the use-case landing page at `/en/use-cases/multi-currency-invoicing` (route confirmed in `src/App.tsx` line 314). Someone flattened `use-cases/` into the `blog/` path.

2. `/en/blog/multi-currency-accounting-guide`
   - Link source: `src/data/blogPostsCluster16.ts` (line ~1404), plus a `nextSteps` entry in `src/data/contentIntents.ts` (line ~1551).
   - The real article slug is `multi-currency-accounting-small-business` (`src/data/blogPostsCluster16.ts` line 1341). The link uses an invented "-guide" slug.

Neither slug appears in the sitemap, `vercel.json` redirects, or `src/seo/legacy-url-rules.ts` — so there is no redirect to catch them, and the prerenderer never generated a page for them.

## Fix

1. Correct the two in-article hrefs in `src/data/blogPostsCluster16.ts`:
   - `/en/blog/use-cases-multi-currency-invoicing` -> `/en/use-cases/multi-currency-invoicing`
   - `/en/blog/multi-currency-accounting-guide` -> `/en/blog/multi-currency-accounting-small-business`
2. Fix the `nextSteps` slug in `src/data/contentIntents.ts` to `multi-currency-accounting-small-business`.
3. Add 301 redirects for the two bad URLs in `src/seo/legacy-url-rules.ts` (synced into `vercel.json` by `scripts/sync-legacy-redirects.mjs`), since Google has already crawled them and external copies may exist.

## Prevent recurrence

Add an internal-link validation step to `scripts/audit-routes.mjs`: extract every `href="/en/..."` from `src/data/**` content bodies and fail the audit when the target is not a known blog slug, help slug, mandate slug, pillar slug, or declared app route. This catches the whole class of broken content links, not just these two.

## Technical notes

- The audit will need the route inventory already exposed by `src/prerender-routes.ts` (`getContentRoutes()`) plus the static route list, so both the prerenderer and the link check share one source of truth.
- Expect the first run to surface additional pre-existing broken links; those will be reported and fixed in the same pass.
