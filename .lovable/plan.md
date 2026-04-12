

# SEO Locale Duplication Audit: Findings and Consolidation Plan

## Architecture Reality Check

The site does NOT use country subdirectories (/us/, /ca/, /au/) in production. It migrated to **5 language prefixes only**: `/en/`, `/de/`, `/fr/`, `/pt/`, `/es/`. Old country URLs redirect via `LanguageLayout.tsx`. The sitemap generator confirms this — only these 5 prefixes exist.

**The real duplication problem is different from what was assumed**: every page in the sitemap is generated for all 5 languages, even country-specific English-only content. And `SEOHead.tsx` treats broad prefix matches like `/free-invoice-generator`, `/compare`, and `/blog` as "fully translated" — so pages like `/de/free-invoice-generator-nigeria` self-canonicalize instead of pointing to `/en/free-invoice-generator-nigeria`.

---

## Issue 1: Country-Specific Pages Duplicated Across 5 Languages

### Pages affected (CONSOLIDATE to /en/ only)

These pages exist in English only but are indexed under all 5 language prefixes:

| Slug | Current: 5 URLs | Should be: 1 URL |
|------|-----------------|-------------------|
| `/free-invoice-generator-australia` | en, de, fr, pt, es | `/en/` only |
| `/free-invoice-generator-india` | en, de, fr, pt, es | `/en/` only |
| `/free-invoice-generator-nigeria` | en, de, fr, pt, es | `/en/` only |
| `/free-invoice-generator-kenya` | en, de, fr, pt, es | `/en/` only |
| `/free-invoice-generator-uk` | en, de, fr, pt, es | `/en/` only |
| `/free-invoice-generator-saudi-arabia` | en, de, fr, pt, es | `/en/` only |
| `/free-invoice-generator-malaysia` | en, de, fr, pt, es | `/en/` only |
| `/free-invoice-generator-canada` | en, de, fr, pt, es | `/en/` only |
| `/free-invoice-generator-ghana` | en, de, fr, pt, es | `/en/` only |
| `/free-invoice-generator-south-africa` | en, de, fr, pt, es | `/en/` only |
| `/compare/best-invoicing-software-nigeria` | en, de, fr, pt, es | `/en/` only |
| `/compare/best-invoicing-software-india` | en, de, fr, pt, es | `/en/` only |
| `/compare/best-invoicing-software-kenya` | en, de, fr, pt, es | `/en/` only |
| `/compare/best-invoicing-software-uk` | en, de, fr, pt, es | `/en/` only |
| `/compare/best-invoicing-software-saudi-arabia` | en, de, fr, pt, es | `/en/` only |
| `/compare/best-invoicing-software-malaysia` | en, de, fr, pt, es | `/en/` only |
| `/compare/best-invoicing-software-australia` | en, de, fr, pt, es | `/en/` only |
| `/compare/best-invoicing-software-canada` | en, de, fr, pt, es | `/en/` only |
| `/compare/best-invoicing-software-ghana` | en, de, fr, pt, es | `/en/` only |
| `/compare/best-invoicing-software-south-africa` | en, de, fr, pt, es | `/en/` only |
| `/compare/wave-alternative-nigeria` | en, de, fr, pt, es | `/en/` only |
| `/compare/wave-alternative-uk` | en, de, fr, pt, es | `/en/` only |
| `/compare/wave-alternative-australia` | en, de, fr, pt, es | `/en/` only |
| `/compare/wave-alternative-south-africa` | en, de, fr, pt, es | `/en/` only |

**Total duplicate URLs to remove from sitemap: 24 pages x 4 extra languages = 96 junk URLs**

### Why SEOHead doesn't catch this

`fullyTranslatedPrefixes` includes `/free-invoice-generator` and `/compare` — so `/de/free-invoice-generator-nigeria` matches and self-canonicalizes. The prefix check is too broad: it matches country-specific sub-pages that have no translations.

---

## Issue 2: Payment Corridor Pages Duplicated Across 5 Languages

Every `receive-{CURRENCY}-in-{COUNTRY}-cost` corridor page is also generated in all 5 languages. These are English-only content.

**Additional duplicate URLs: ~N corridors x 4 extra languages**

---

## Issue 3: Glossary Fragment URLs (Previously Identified)

205 glossary URLs using `#fragment` anchors — all resolve to the same page per language. This wastes 200 crawl slots.

---

## Issue 4: Blog Posts With Country-Specific Slugs

Blog posts like `firs-e-invoicing-nigeria-guide`, `kra-etims-guide-kenya`, `gst-e-invoicing-india` are generated in all 5 languages. The underlying blog post content uses the i18n data registry, BUT many of these posts only have English content. Under `/de/blog/firs-e-invoicing-nigeria-guide`, the blog renders the English fallback.

---

## Consolidation Plan

### Step 1: Define English-Only Pages List

Create a constant `ENGLISH_ONLY_SLUGS` containing all country-specific paths that should only exist under `/en/`:

```text
/free-invoice-generator-australia
/free-invoice-generator-india
/free-invoice-generator-nigeria
/free-invoice-generator-kenya
/free-invoice-generator-uk
/free-invoice-generator-saudi-arabia
/free-invoice-generator-malaysia
/free-invoice-generator-canada
/free-invoice-generator-ghana
/free-invoice-generator-south-africa
/compare/best-invoicing-software-*  (all country variants)
/compare/wave-alternative-*  (all country variants)
/receive-*-cost  (all corridors)
```

### Step 2: Fix Sitemap Generator (`scripts/generate-sitemap.ts`)

- Add the English-only slugs list
- In `generateXML()`, when a page matches the English-only list, only emit the `/en/` variant (no hreflang alternates needed)
- Remove glossary fragment URL generation entirely
- Regenerate sitemap

**Expected reduction: ~300-400 URLs removed**

### Step 3: Fix SEOHead Canonical Logic (`src/components/seo/SEOHead.tsx`)

The `fullyTranslatedPrefixes` check needs refinement. Instead of broad prefix matching, add an exclusion list for country-specific sub-pages:

```text
Before: /free-invoice-generator matches ALL sub-paths
After:  /free-invoice-generator matches, BUT /free-invoice-generator-{country} 
        is excluded and canonicals to /en/
```

This ensures that if a user visits `/de/free-invoice-generator-nigeria`, the canonical tag points to `/en/free-invoice-generator-nigeria`.

### Step 4: Remove Crawl-delay from robots.txt

Remove the `Crawl-delay: 1` line — Google ignores it, and it slows other crawlers.

### Step 5: Verify hreflang for Legitimately Translated Pages

Pages that SHOULD keep all 5 language variants (KEEP SEPARATE):

| Page | Reason |
|------|--------|
| `/` (homepage) | Translated in all 5 languages |
| `/pricing` | Localized currency/pricing |
| `/invoicing`, `/expenses`, `/payments`, `/accounting`, `/estimates`, `/receipts` | Product pages translated |
| `/blog` (index) | Translated hub |
| `/freelancers`, `/consultants`, etc. | Audience pages translated |
| `/free-invoice-generator` (global, no country suffix) | Translated |
| `/compare/invoicemonk-vs-*` (global comparisons) | Translated |
| `/blog/{general-slug}` (non-country-specific posts) | Translated via i18n data files |

These already have correct hreflang in the sitemap and SEOHead.

---

## hreflang Blocks for Top 3 Traffic Pages

### 1. Homepage (`/`)
```html
<link rel="alternate" hreflang="en" href="https://invoicemonk.com/en/" />
<link rel="alternate" hreflang="de" href="https://invoicemonk.com/de/" />
<link rel="alternate" hreflang="fr" href="https://invoicemonk.com/fr/" />
<link rel="alternate" hreflang="pt-BR" href="https://invoicemonk.com/pt/" />
<link rel="alternate" hreflang="es" href="https://invoicemonk.com/es/" />
<link rel="alternate" hreflang="x-default" href="https://invoicemonk.com/en/" />
```

### 2. Free Invoice Generator (`/free-invoice-generator`)
```html
<link rel="alternate" hreflang="en" href="https://invoicemonk.com/en/free-invoice-generator" />
<link rel="alternate" hreflang="de" href="https://invoicemonk.com/de/free-invoice-generator" />
<link rel="alternate" hreflang="fr" href="https://invoicemonk.com/fr/free-invoice-generator" />
<link rel="alternate" hreflang="pt-BR" href="https://invoicemonk.com/pt/free-invoice-generator" />
<link rel="alternate" hreflang="es" href="https://invoicemonk.com/es/free-invoice-generator" />
<link rel="alternate" hreflang="x-default" href="https://invoicemonk.com/en/free-invoice-generator" />
```

### 3. Pricing (`/pricing`)
```html
<link rel="alternate" hreflang="en" href="https://invoicemonk.com/en/pricing" />
<link rel="alternate" hreflang="de" href="https://invoicemonk.com/de/pricing" />
<link rel="alternate" hreflang="fr" href="https://invoicemonk.com/fr/pricing" />
<link rel="alternate" hreflang="pt-BR" href="https://invoicemonk.com/pt/pricing" />
<link rel="alternate" hreflang="es" href="https://invoicemonk.com/es/pricing" />
<link rel="alternate" hreflang="x-default" href="https://invoicemonk.com/en/pricing" />
```

These are already correctly implemented in the current SEOHead component and sitemap.

---

## Priority Order

1. **HIGH** — Fix sitemap: remove glossary fragments + restrict country-specific pages to `/en/` only (~300+ junk URLs removed)
2. **HIGH** — Fix SEOHead canonical: country-specific sub-pages under non-English prefixes must canonical to `/en/`
3. **MEDIUM** — Remove Crawl-delay from robots.txt
4. **LOW** — Audit blog post cluster files for untranslated country-specific posts and restrict their sitemap entries to `/en/`

---

## Files to Modify

| File | Change |
|------|--------|
| `scripts/generate-sitemap.ts` | Add `ENGLISH_ONLY_PATHS` list; skip non-English variants for those; remove glossary fragments |
| `src/components/seo/SEOHead.tsx` | Refine `fullyTranslatedPrefixes` to exclude country-specific sub-pages |
| `public/robots.txt` | Remove `Crawl-delay: 1` |
| `public/sitemap.xml` | Regenerated output |

