

## Root cause (100% of the 1,350 Ahrefs warnings)

I parsed the export. Every flagged row has the same three values:

- **Title** = `Invoicemonk - Professional Invoicing & Accounting Software.`
- **Is rendered page** = `0` (Ahrefs crawled raw HTML, no JS)
- **Canonical URL** = `https://invoicemonk.com/`

That's not a sitemap-vs-canonical bug in `generate-sitemap.ts` or `SEOHead.tsx`. It's a single bad line in `index.html`:

```html
<!-- index.html, line 50 -->
<link rel="canonical" href="https://invoicemonk.com/" />
```

Because Invoicemonk is a Vite SPA, every URL serves the same `index.html`. Crawlers that don't execute JS (Ahrefs default, Bing, many LLM/AI crawlers, social previewers) see this hardcoded canonical and conclude *every* page on the site — 1,350 of them — is a duplicate of the homepage. `SEOHead` does write the correct per-page canonical via `react-helmet-async`, but only after JS runs. The static one wins for non-rendering crawlers and stays in the DOM as a duplicate canonical for rendering ones until Helmet mounts.

The same root cause also explains why every flagged URL has the generic homepage `<title>` — that's the static title in `index.html` line 8, also overridden by Helmet only after JS executes.

## Fix

### 1. `index.html` — remove the misleading static canonical
Delete lines 49–50:

```html
<!-- Canonical fallback for non-JS crawlers -->
<link rel="canonical" href="https://invoicemonk.com/" />
```

A wrong canonical is far worse than no canonical. With it removed:
- Non-JS crawlers see *no* canonical → they treat each URL as its own page (correct).
- JS-rendering crawlers (Googlebot, Ahrefs with JS enabled) get the correct per-page canonical from `SEOHead`/Helmet.

There is no good "static fallback" possible in a pure SPA because `index.html` is identical for every route — any hardcoded canonical will be wrong for 1,349 of the 1,350 pages.

### 2. (Recommended, same change set) Remove the misleading static `<title>` and `<meta description>` defaults, OR make them generic enough that they don't damage non-rendered snapshots
Lines 8–9 cause the same pattern — every page reports the homepage title to non-JS crawlers. Two options:
- **Option A (minimal):** keep them as-is (cosmetic only — Ahrefs flags titles only when missing, not when duplicated across non-rendered snapshots).
- **Option B (cleaner):** keep them — they're a reasonable site-wide fallback when JS fails entirely. Title duplication isn't what triggered the 1,350 warnings; the canonical is.

Recommendation: **Option A**. Touch only the canonical to keep the diff minimal.

### 3. Re-trigger crawls
After deploy:
- GSC → Sitemaps → resubmit `sitemap.xml`
- Ahrefs → Site Audit → "Restart crawl"
- Optional but ideal: in Ahrefs project settings, enable **JavaScript rendering**. This makes future audits reflect what Google actually sees and will surface real per-page canonical/title issues instead of the SPA shell.

## Files changed

| File | Change |
|------|--------|
| `index.html` | Delete lines 49–50 (the static `<link rel="canonical">` and its comment). |

That's the entire fix. No changes to `SEOHead.tsx`, `generate-sitemap.ts`, or any route — those are already correct; the static tag was overriding them for non-rendered crawls.

## Why I'm not also editing SEOHead/sitemap

In the previous session I outlined three potential mismatches (`/`, `/invoice-templates`, country-keyword regex drift). After parsing the actual Ahrefs file, **none** of those produced flagged URLs in this report — every single one of the 1,350 rows points to the same root cause above. Those three are minor hygiene issues worth fixing later, but they are not what Ahrefs is reporting today, so I'll leave them out of this change to keep the fix surgical and verifiable.

