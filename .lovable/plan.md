

# Migration: Country Prefixes → Language Prefixes

## The Problem

The current URL structure uses 16 country prefixes (`/us/`, `/ng/`, `/uk/`, `/de/`, etc.), but only 4 languages exist (English, German, French, Portuguese). This means 13 English-speaking country prefixes serve identical content, creating ~2,500+ duplicate URLs that Google discovers but refuses to index.

```text
CURRENT (16 prefixes, massive duplication):
/us/pricing  ─┐
/uk/pricing  ─┤
/ca/pricing  ─┤  All identical English content
/ng/pricing  ─┤
/au/pricing  ─┤
/gh/pricing  ─┤
... 8 more    ─┘
/de/pricing  ── German content
/fr/pricing  ── French content
/br/pricing  ── Portuguese content

TARGET (4 prefixes, zero duplication):
/en/pricing  ── English (all English-speaking countries)
/de/pricing  ── German
/fr/pricing  ── French
/pt/pricing  ── Portuguese
```

## New Architecture

### URL Structure
- `/en/` — English (default, covers US, UK, CA, AU, NG, GH, KE, ZA, PH, ZW, IN, SC, NZ)
- `/de/` — German (Germany)
- `/fr/` — French (France)
- `/pt/` — Portuguese (Brazil)

### Country Selection (separate from URL)
Country-specific data (currency, pricing, compliance authority, payment gateway) is selected via:
1. **UI country picker** in the navbar (same as current CountrySelector)
2. **Persisted in localStorage** (`invoicemonk-country`)
3. **Auto-detected** on first visit (timezone/IP, same as current CountryRedirect)

The URL determines **language**. The country picker determines **locale data** (currency, pricing, tax authority). These are independent concerns.

### Example
A user in Nigeria visits `/en/pricing`:
- Page content is in English
- Currency shows ₦ (NGN) because their country is set to NG
- Compliance references NRS
- Pricing shows Nigerian tiers (including Starter plan)

A user in Germany visits `/de/pricing`:
- Page content is in German
- Currency shows € (EUR)
- Compliance references Finanzamt

---

## Migration Plan

### Phase 1: Core Infrastructure

**Files to modify/create:**

| File | Change |
|------|--------|
| `src/locales/types.ts` | Add `SupportedLanguage` type: `'en' \| 'de' \| 'fr' \| 'pt'` |
| `src/locales/index.ts` | Replace `urlPrefixToCountry` / `countryToUrlPrefix` with `urlPrefixToLanguage` mapping. Keep all 16 `LocaleConfig` objects for country data |
| `src/App.tsx` | Change route from `/:country` to `/:lang`. Keep all child routes identical |
| `src/components/CountryLayout.tsx` → `src/components/LanguageLayout.tsx` | Validate `:lang` param against `['en','de','fr','pt']`. Sync i18n language. Country comes from localStorage, not URL |
| `src/components/CountryRedirect.tsx` → `src/components/LanguageRedirect.tsx` | Detect user's country (timezone/IP), map to language, redirect to `/:lang/` |
| `src/components/LocalizedLink.tsx` | Use language prefix instead of country prefix |
| `src/hooks/useLocalizedPath.ts` | Use language prefix |
| `src/hooks/useCountryPrefix.ts` | Replace with `useLanguagePrefix` |
| `src/contexts/LocaleContext.tsx` | Country selection now fully from localStorage/UI, not URL |
| `src/components/CountrySelector.tsx` | Becomes a pure country picker that updates localStorage + context. Does NOT change the URL (unless language changes) |

### Phase 2: SEO & Redirects

| File | Change |
|------|--------|
| `src/components/seo/SEOHead.tsx` | hreflang tags emit 4 language variants instead of 16 country variants. Use `en`, `de`, `fr`, `pt-BR` codes |
| `scripts/generate-sitemap.ts` | Generate URLs for 4 language prefixes only. Total URLs drop from ~3,200 to ~800 |
| `vercel.json` | Add 301 redirects for all old country prefixes to language prefixes |

**Redirect mapping in `vercel.json`:**
```json
{ "source": "/us/:path*", "destination": "/en/:path*", "permanent": true },
{ "source": "/uk/:path*", "destination": "/en/:path*", "permanent": true },
{ "source": "/ca/:path*", "destination": "/en/:path*", "permanent": true },
{ "source": "/au/:path*", "destination": "/en/:path*", "permanent": true },
{ "source": "/ng/:path*", "destination": "/en/:path*", "permanent": true },
{ "source": "/gh/:path*", "destination": "/en/:path*", "permanent": true },
{ "source": "/ke/:path*", "destination": "/en/:path*", "permanent": true },
{ "source": "/za/:path*", "destination": "/en/:path*", "permanent": true },
{ "source": "/ph/:path*", "destination": "/en/:path*", "permanent": true },
{ "source": "/zw/:path*", "destination": "/en/:path*", "permanent": true },
{ "source": "/in/:path*", "destination": "/en/:path*", "permanent": true },
{ "source": "/sc/:path*", "destination": "/en/:path*", "permanent": true },
{ "source": "/nz/:path*", "destination": "/en/:path*", "permanent": true },
{ "source": "/br/:path*", "destination": "/pt/:path*", "permanent": true }
```
(`/de/` and `/fr/` stay the same.)

### Phase 3: Update All Components

Every component using `useParams<{ country }>`, `useCountryPrefix()`, or `useLocalizedPath()` needs updating. Based on the codebase search, this touches ~17+ page files and several shared components. The changes are mechanical: replace country-prefix logic with language-prefix logic.

### Phase 4: hreflang Strategy

**New hreflang output (4 tags instead of 16):**
```html
<link rel="alternate" hreflang="en" href="https://invoicemonk.com/en/pricing" />
<link rel="alternate" hreflang="de" href="https://invoicemonk.com/de/pricing" />
<link rel="alternate" hreflang="fr" href="https://invoicemonk.com/fr/pricing" />
<link rel="alternate" hreflang="pt-BR" href="https://invoicemonk.com/pt/pricing" />
<link rel="alternate" hreflang="x-default" href="https://invoicemonk.com/en/pricing" />
```

---

## What Gets Preserved

- **All 16 country configs** remain for currency, pricing, compliance, and testimonial data
- **Country selector UI** stays, but only changes locale context (not the URL)
- **i18n translations** (Phase 1 work we just did) carries over unchanged
- **All page components** work the same, just referenced via `/en/` instead of `/us/`

## Impact

| Metric | Before | After |
|--------|--------|-------|
| URL prefixes | 16 | 4 |
| Sitemap URLs | ~3,200 | ~800 |
| hreflang tags per page | 17 (16 + x-default) | 5 (4 + x-default) |
| Duplicate content | ~2,500 URLs | 0 |
| "Discovered not indexed" | ~400+ pages | Should resolve |

## Risks & Mitigations

1. **Existing indexed URLs break** → 301 redirects in `vercel.json` preserve all link equity
2. **Country-specific SEO keywords** (e.g., "Nigerian invoicing software") → Still served via locale-aware meta tags and page content, just under `/en/` instead of `/ng/`
3. **Users bookmarked old URLs** → 301 redirects handle transparently
4. **Google re-crawl time** → Expect 2-4 weeks for full reindexing after deploy

## Execution Order

This is a large migration best done in one coordinated push (not incrementally), since the URL structure change affects every route. Estimated scope: ~25-30 files modified, ~4-5 files created, ~50+ redirect rules in vercel.json.

