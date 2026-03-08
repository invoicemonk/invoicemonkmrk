

# Serving Invoicemonk in the Right Language Based on GSC Country Data

## Key Finding from Your GSC Data

Your GSC report shows impressions from **200+ countries**. Here are the top non-English language groups you're missing:

| Language | Countries (top by impressions) | Combined Impressions | Currently Served |
|----------|-------------------------------|---------------------|-----------------|
| **Spanish** | Spain (1,291), Argentina (1,114), Colombia (800), Mexico (696), Ecuador (576), Chile (404), Peru (397), Dominican Republic (219) | **~5,500+** | English only |
| **Portuguese** | Brazil (3,721), Portugal (431) | **~4,150** | `/pt/` exists but translations incomplete |
| **French** | France (1,374) | **~1,374** | `/fr/` exists but translations incomplete |
| **German** | Germany (999), Austria (119), Switzerland (159) | **~1,277** | `/de/` exists but translations incomplete |

**Spanish is the biggest gap.** It's the second-largest language group after English in your GSC data, with ~5,500 impressions across 20+ countries, and you have zero Spanish support.

## What Needs to Happen

### 1. Add Spanish (`/es/`) as a supported language

This is the single highest-impact addition. It serves Spain, Mexico, Colombia, Argentina, Chile, Peru, Ecuador, Dominican Republic, Venezuela, and many more.

**Changes:**
- Add `"es"` to `SupportedLanguage` type
- Add `ES` (Spain) to `SupportedCountry` as the representative Spanish-speaking locale
- Create `src/i18n/es/common.json` with Spanish translations
- Add `/es/` route alongside `/en/`, `/de/`, `/fr/`, `/pt/`
- Add hreflang `es` to SEO head
- Update sitemap generator to include `/es/` prefix

### 2. Expand `LanguageRedirect` timezone/country detection

The current `LanguageRedirect` only detects countries you have locale configs for. Users from Spain, Mexico, Colombia, etc. fall through to English. We need to map their timezones to the correct language:

**New timezone mappings needed:**
```text
Europe/Madrid → Spanish
America/Mexico_City, America/Bogota, America/Lima, 
America/Santiago, America/Buenos_Aires → Spanish
Europe/Lisbon → Portuguese
Europe/Vienna, Europe/Zurich → German (already partially handled)
```

### 3. Expand IP-based detection fallback

The IP detection currently checks if the country code is in `supportedCountries`. For language routing, we need a broader mapping: any country → its primary language. For example, if IP returns `MX` (Mexico), map to `/es/`.

**New country-to-language mapping for detection (not locale configs):**
```text
ES, MX, CO, AR, CL, PE, EC, VE, DO, CR, PA, UY, PY, 
HN, SV, GT, NI, BO, CU → "es"
PT → "pt"
AT, CH (German-speaking) → "de"
BE (French-speaking), LU, MC → "fr"
```

### 4. Complete the existing DE/FR/PT translations

The Phase 1 i18n work created the JSON files and migrated global chrome (Navbar, Footer, Hero). But product pages, pricing, and other content are still hardcoded English. The translations need to be completed for all four non-English languages to actually serve unique content.

## Implementation Plan

### Phase A: Add Spanish language support (~1 session)

| File | Change |
|------|--------|
| `src/locales/types.ts` | Add `"es"` to `SupportedLanguage`, add `"ES"` to `SupportedCountry` |
| `src/locales/index.ts` | Add `supportedLanguages` entry, `countryToLanguage` mapping, hreflang `es` |
| `src/i18n/es/common.json` | Create Spanish translations for all common strings |
| `src/i18n/index.ts` | Import and register `es` resources |
| `src/components/seo/SEOHead.tsx` | hreflang now emits 5 language variants + x-default |
| `scripts/generate-sitemap.ts` | Add `/es/` prefix to sitemap generation |
| `vercel.json` | No redirect needed — `/es/` is new |

### Phase B: Expand language auto-detection (~1 session)

| File | Change |
|------|--------|
| `src/components/LanguageRedirect.tsx` | Add ~30 new timezone-to-language mappings for Spanish, Portuguese, German, and French-speaking countries. Add broader country-code-to-language mapping for IP fallback |

The key change: instead of detecting country → checking if it's a supported country → mapping to language, we detect country → map **any** country to a language directly:

```text
Detected country: Mexico (MX)
Current behavior: MX not in supportedCountries → default to /en/
New behavior: MX → Spanish-speaking → redirect to /es/
```

### Phase C: Create a Spanish locale config (~1 session)

Create `src/locales/es-ES.ts` with Spain-specific data (EUR currency, Spanish tax authority, Spanish testimonials/FAQs, SEO metadata targeting Spanish-speaking markets).

### Phase D: Complete all non-English translations (ongoing)

Continue the i18n Phase 2-4 work (product pages, audience pages, guides) for all 5 non-English languages: DE, FR, PT, ES.

## Impact

| Metric | Before | After |
|--------|--------|-------|
| Supported languages | 4 (en, de, fr, pt) | 5 (en, de, fr, pt, es) |
| Spanish-speaking users served in Spanish | 0% | 100% |
| Countries auto-detected to correct language | ~20 | ~80+ |
| Unique content variants per page | 4 | 5 |
| Sitemap URLs | ~800 | ~1,000 |

## Priority Order

1. **Phase B first** (expand detection) — ensures existing DE/FR/PT users actually land on the right prefix instead of defaulting to `/en/`
2. **Phase A** (add Spanish) — serves the biggest untapped language group
3. **Phase C** (Spanish locale config)
4. **Phase D** (complete translations) — makes all language variants genuinely unique for SEO

