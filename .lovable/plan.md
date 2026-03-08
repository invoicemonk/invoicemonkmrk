

# Translation Audit Results

## Issues Found

### 1. Homepage FAQ Section -- English-only generic FAQs
`src/data/homepageFAQs.ts` contains 6 hardcoded English FAQs ("What is Invoicemonk?", "Is Invoicemonk really free?", etc.) that display on every language route. The `FAQSection` component merges these with `locale.content.faqs` (which are also in English in the locale files like `fr-FR.ts`).

**Fix**: Move the 6 generic FAQs into the `home.json` namespace under a `faq.items` key. Translate them in all 5 language files. Update `FAQSection.tsx` to read from `t('faq.items', { returnObjects: true })` instead of importing `homepageFAQs`. Keep the locale-specific FAQs merged in (those are country-specific, not language-specific, so they're acceptable as-is).

### 2. Homepage Blog Section -- always shows English posts
`HomeBlogSection.tsx` imports `blogPosts` directly from `@/data/blogPosts` (English) instead of using `getTranslatedBlogPosts(lang)`. On `/fr/`, `/de/`, etc., the blog cards show English titles and excerpts.

**Fix**: Update `HomeBlogSection.tsx` to use `useTranslation` + `getTranslatedBlogPosts(lang)` to fetch language-appropriate posts.

### 3. Locale content strings in English
The locale files (`fr-FR.ts`, `de-DE.ts`, `es-ES.ts`, `pt-BR.ts`) contain English strings for:
- `faqs[].question` and `faqs[].answer` -- country-specific FAQs written in English
- `blog.ctaHeadline`, `blog.ctaSubtext`, `blog.ctaButtonText`
- `socialProofHeadline`
- `testimonials[].title` values like "CFO", "Founder" (some translated, some not)

**Fix**: Translate these locale-level strings into their respective languages. These are country-specific content that appears on every page.

### 4. Explore page -- fully hardcoded English
`src/pages/Explore.tsx` has hardcoded English strings: "Explore & Learn", "Topics", "Reviews", "My Progress", "Customer Reviews", FAQ items, and SEO metadata.

**Fix**: This is a utility/internal page with lower SEO priority. Create a minimal translation or note it as English-only. Given the scope, I recommend flagging it but deferring.

### 5. GuidesIndex page -- hardcoded English
`src/pages/guides/GuidesIndex.tsx` has hardcoded SEO title, hero heading ("Business Guides & Resources"), and subtitle.

**Fix**: Move these strings into the existing `help` or `blog` namespace, or create a small `guides` section in `common.json`.

### 6. Tool pages -- fully hardcoded English
Three tool pages (`InternationalPaymentFeeCalculator`, `PaypalVsWiseFees`, `CheapestInternationalPayments`) contain fully hardcoded English content including FAQs, headings, and descriptions.

**Fix**: These are specialized SEO landing pages. Translating them requires new namespaces. Lower priority -- flag for later.

### 7. API Docs page -- fully hardcoded English
`src/pages/ApiDocs.tsx` is a developer-facing page with 480 lines of hardcoded English technical documentation.

**Fix**: Developer docs are typically left in English. No action needed.

### 8. NotFound page -- hardcoded English
`src/pages/NotFound.tsx` has "Page not found" and "Return to Home" hardcoded.

**Fix**: Quick fix -- use `t()` from common namespace. Low priority.

### 9. Individual guide pages -- breadcrumb strings
Guide pages like `InvoicingGuide.tsx` have hardcoded breadcrumb labels ("Home", "Guides"). The pillar content itself is translated via `getTranslatedPillars(lang)`.

**Fix**: Minor -- move breadcrumb labels to `common.json`.

---

## Recommended Implementation Plan (Priority Order)

### Batch 1 (High impact -- visible on homepage)
1. **Translate `homepageFAQs`** into DE/FR/ES/PT inside `home.json` under `faq.items` key, and update `FAQSection.tsx`
2. **Fix `HomeBlogSection.tsx`** to use `getTranslatedBlogPosts(lang)` instead of hardcoded English `blogPosts`
3. **Translate locale-level FAQ strings** in `fr-FR.ts`, `de-DE.ts`, `es-ES.ts`, `pt-BR.ts` into their native languages

### Batch 2 (Medium impact)
4. **Translate GuidesIndex** hero heading and subtitle
5. **Translate NotFound page** strings
6. **Translate locale `blog` CTA strings and `socialProofHeadline`** into native languages

### Batch 3 (Lower priority -- defer)
7. Explore page translation
8. Tool pages translation
9. Breadcrumb label translations

