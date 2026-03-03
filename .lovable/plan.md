

# Comprehensive i18n Plan for Invoicemonk

## Current State

The site has 16 locales but **all content is in English**, even for Germany (DE), France (FR), and Brazil (BR). The existing `LocaleConfig` only localizes a small set of structured data: hero text, compliance info, testimonials, FAQs, SEO metadata, pricing, and currency. Everything else -- navbar labels, footer links, page copy, button text, blog posts -- is hardcoded English.

### What needs translation (by category)

| Category | Estimated string count | Example strings |
|----------|----------------------|-----------------|
| **Global chrome** (Navbar, Footer) | ~80 strings | "Products", "Get Started", "Log in", "Available", "Soon", "Platform", "Resources" |
| **Common UI** (buttons, badges, labels) | ~50 strings | "Free tier available", "No credit card required", "Coming Soon", "Monthly", "Learn more" |
| **Product pages** (Invoicing, Expenses, etc.) | ~300 strings per page, 7 pages | Section headings, feature descriptions, CTA text |
| **Audience pages** (Freelancers, Consultants, etc.) | ~200 strings per page, 11 pages | Similar structure to product pages |
| **Comparison pages** | ~150 strings per page, 5 pages | Feature comparison labels, verdict text |
| **Guide pages** | ~200 strings per page, 8 pages | Guide content, concept grids |
| **Legal pages** | ~500 strings per page, 5 pages | Full legal text |
| **Blog posts** | ~12,700 lines, 150+ posts | Full article content |
| **Help articles** | Variable | Full help content |

**Total estimate**: ~5,000-8,000 translatable strings (excluding blog/help content).

### Target languages (3 non-English locales)

| Locale | Language | URL prefix |
|--------|----------|------------|
| `de-DE` | German | `/de/` |
| `fr-FR` | French | `/fr/` |
| `pt-BR` | Portuguese (Brazil) | `/br/` |

The 13 English-speaking locales (US, GB, CA, AU, NG, GH, KE, ZA, PH, ZW, IN, SC, NZ) do not need translation.

---

## Recommended Architecture

### Library: `react-i18next`

The industry standard for React i18n. Provides namespace support, lazy loading, interpolation, and pluralization out of the box. Rolling our own would replicate 80% of what `react-i18next` already does.

### Translation file structure

```text
src/
  i18n/
    index.ts                  # i18next init config
    en/
      common.json             # Navbar, footer, buttons, badges (~130 strings)
      pricing.json            # Pricing page copy
      invoicing.json          # Invoicing page copy
      expenses.json           # Expenses page copy
      ...one file per page
    de/
      common.json
      pricing.json
      invoicing.json
      ...
    fr/
      common.json
      pricing.json
      ...
    pt-BR/
      common.json
      pricing.json
      ...
```

### Language detection flow

```text
URL /:country → countryToLanguage mapping → i18next language switch

de → "de"
fr → "fr"  
br → "pt-BR"
All others → "en"
```

The existing `CountryLayout` component would call `i18n.changeLanguage()` alongside the current `setCountry()` call when the prefix changes.

### Integration with existing LocaleConfig

The current `LocaleConfig` stays for **locale-specific data** (currency, pricing, tax labels, compliance authority, testimonials, FAQs). `react-i18next` handles **UI string translation** only. They coexist:

```tsx
// Before (hardcoded)
<button>Get Started</button>

// After (translated)
const { t } = useTranslation('common');
<button>{t('cta.getStarted')}</button>
```

---

## Implementation Phases

### Phase 1: Foundation (~2-3 sessions)

**Goal**: Set up i18n infrastructure and translate the global chrome (visible on every page).

1. Install `react-i18next` and `i18next`
2. Create `src/i18n/index.ts` with language detection from URL prefix
3. Create `en/common.json` by extracting all strings from:
   - `Navbar.tsx` (~30 strings: "Products", "Log in", "Get Started", product names/descriptions, nav link labels)
   - `Footer.tsx` (~50 strings: section titles, link names, tagline, copyright)
   - `HeroSection.tsx` (~5 strings: "Free tier available", "Payment Received", etc.)
   - `CountrySelector.tsx` (labels)
4. Create `de/common.json`, `fr/common.json`, `pt-BR/common.json` with translations
5. Update `CountryLayout` to sync `i18n.changeLanguage()` on prefix change
6. Wrap app with `I18nextProvider` in `main.tsx`
7. Migrate `Navbar.tsx`, `Footer.tsx`, `HeroSection.tsx` to use `useTranslation()`

**Files changed**: ~8 files modified, ~5 new files created

### Phase 2: Product and Company Pages (~3-4 sessions)

**Goal**: Translate the 7 product pages and 5 company pages.

1. Extract strings from each page into namespace JSON files
2. Create translations for DE, FR, pt-BR
3. Pages to migrate:
   - Invoicing, Expenses, Payments, Accounting, Estimates, Receipts, ClientManagement
   - Pricing, WhyInvoicemonk, Compliance, About, Contact

**Strategy for large pages**: Each page becomes its own i18n namespace (e.g., `invoicing.json`), loaded lazily so untranslated pages don't block the bundle.

**Files changed**: ~12 page files, ~36 new JSON files (12 pages x 3 languages)

### Phase 3: Audience and Use-Case Pages (~2-3 sessions)

1. Migrate 11 audience pages (Freelancers, Consultants, etc.)
2. Migrate 4 use-case pages (Recurring Billing, etc.)
3. Migrate 5 comparison pages

**Files changed**: ~20 page files, ~60 new JSON files

### Phase 4: Guides and Help (~2 sessions)

1. Migrate 8 guide pages + GuidesIndex
2. Migrate HelpCenter + HelpArticle components

### Phase 5: Blog Content (Optional, High Effort)

Blog posts are 12,700 lines of content in `blogPosts.ts`. Translating these is a **content project**, not a code project. Options:

- **Option A**: Keep blog English-only, serve from `/us/blog/` canonical (aligns with sitemap pruning plan)
- **Option B**: Translate top 20 highest-traffic posts into DE/FR/pt-BR
- **Option C**: Use an AI translation API at build time to generate translated variants

**Recommendation**: Option A initially, Option B later for posts with proven search demand in those languages.

### Phase 6: Legal Pages (Optional)

Legal content (Privacy Policy, Terms of Service, etc.) typically requires professional legal translation, not developer translation. Flag for legal team review.

---

## Merge with Existing LocaleConfig

The `hero`, `testimonials`, `faqs`, `compliance`, `blog.cta*`, and `socialProof*` fields currently in `LocaleConfig` would migrate into i18n JSON files over time. The `LocaleConfig` type would slim down to only data that varies by **country** (not language):

- Currency (code, symbol, position)
- Pricing (amounts, tiers)
- Tax labels (VAT rate, authority name)
- Date format
- URL prefix
- SEO metadata (region-specific titles)

This separation is important: Germany and France both use EUR but need different languages. Currency is country-specific; UI strings are language-specific.

---

## Impact on SEO/Indexing

Adding true i18n **directly solves** the "Discovered - currently not indexed" problem for DE, FR, and BR pages because:

1. Content becomes genuinely unique per locale (German text != English text)
2. Google has reason to index `/de/pricing` separately from `/us/pricing`
3. The sitemap can include all 16 variants for translated pages without crawl budget waste

For untranslated pages, the sitemap pruning plan still applies.

---

## Estimated Effort Summary

| Phase | Scope | New JSON files | Modified TSX files |
|-------|-------|---------------|-------------------|
| 1. Foundation | Global chrome | ~4 | ~8 |
| 2. Product/Company pages | 12 pages | ~36 | ~12 |
| 3. Audience/Use-case/Compare | 20 pages | ~60 | ~20 |
| 4. Guides/Help | 10 pages | ~30 | ~10 |
| 5. Blog (optional) | 150+ posts | ~3 large files | ~2 |
| 6. Legal (optional) | 5 pages | ~15 | ~5 |

**Dependencies**: `react-i18next`, `i18next` (2 new packages)

---

## Technical Details

### Country-to-language mapping

```ts
const countryToLanguage: Record<string, string> = {
  de: 'de',
  fr: 'fr',
  br: 'pt-BR',
  // All others default to 'en'
};
```

### Fallback chain

```
pt-BR → en (if string missing in Portuguese, show English)
de → en
fr → en
```

### Bundle impact

JSON translation files would be lazy-loaded per namespace. The `common` namespace (~130 strings, ~3KB gzipped per language) loads eagerly. Page-specific namespaces load on route navigation. Total bundle increase: negligible.

### SEO `lang` attribute

The `<html lang>` attribute would be set dynamically:
- `/de/*` → `<html lang="de">`
- `/fr/*` → `<html lang="fr">`  
- `/br/*` → `<html lang="pt-BR">`
- All others → `<html lang="en">`

This is currently missing and is a quick SEO win regardless of full i18n adoption.

