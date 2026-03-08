

# Translation Plan for All Untranslated Content Sections

## Content Inventory

| Section | Items | Languages (de/fr/pt/es) | Total translations |
|---|---|---|---|
| Blog posts (main) | ~50 posts | × 4 | 200 |
| Blog posts (country compliance) | 43 posts | × 4 | 172 |
| Help center guides | 16 guides | × 4 | 64 |
| Glossary terms | ~35 terms | × 4 | 140 |
| Guide detail pages (pillar hubs) | 8 pages | × 4 | 32 |
| Topic pages (pillar listing) | 1 index + 8 pillars | × 4 | 36 |
| Author pages | 3 authors | × 4 | 12 |
| Corridor pages | 9 corridors | × 4 | 36 |
| Legal pages | 4 pages (Privacy, Terms, Cookie, SLA) | × 4 | 16 |
| Blog listing page (UI strings) | 1 page | × 4 | 4 |
| **Total** | | | **~712** |

## Architecture Decision

The existing translated pages use **i18next JSON namespaces** (e.g., `src/i18n/en/invoicing.json`). This works well for product pages with structured, short-form content.

Blog posts, help guides, and glossary terms are **long-form HTML content** stored in TypeScript data files. Two approaches:

**Recommended: Multilingual data files with language key**

Add a `lang` field to each data interface (`BlogPost`, `HelpGuide`, `GlossaryTerm`) and create parallel language-specific data files. The page components select content based on the current i18n language.

```text
src/data/
├── blogPosts.ts          (English — existing)
├── blogPosts.de.ts       (German translations)
├── blogPosts.fr.ts       (French translations)
├── blogPosts.pt.ts       (Portuguese translations)
├── blogPosts.es.ts       (Spanish translations)
├── helpGuides.ts         (English — existing)
├── helpGuides.de.ts      (German)
├── helpGuides.fr.ts      (French)
├── helpGuides.pt.ts      (Portuguese)
├── helpGuides.es.ts      (Spanish)
├── glossaryTerms.ts      (English — existing)
├── glossaryTerms.de.ts   (German)
...
```

Each language file exports the same array structure, with only translatable fields replaced (title, excerpt, content, description, steps, FAQ). Slugs, dates, images, and structural metadata stay identical.

A helper function selects the right data:

```text
getBlogPosts(lang) → returns translated array or English fallback
getHelpGuides(lang) → same pattern
```

**Why not i18next JSON for this?** Blog content includes HTML strings (up to 500+ lines per post). JSON namespaces become unmanageable at that scale and break the existing pattern of keeping long-form content in .ts files.

## Page Component Changes

Each page that renders untranslated content needs a one-line change to pull language-aware data:

- `BlogPost.tsx` → `getBlogPostBySlug(slug, lang)` instead of `getBlogPostBySlug(slug)`
- `Blog.tsx` → `getBlogPosts(lang)` instead of `blogPosts`
- `HelpArticle.tsx` / `HelpCenter.tsx` → `getHelpGuides(lang)`
- `GuidesIndex.tsx` / guide detail pages → `getPillarData(lang)`
- Glossary pages → `getGlossaryTerms(lang)`
- Corridor page → `getCorridorData(currency, country, lang)`
- Legal pages → `useTranslation('privacy')` (new i18next namespaces — legal content is shorter)
- Author pages → `getAuthors(lang)` (bio and role translations)

## UI Strings

Blog listing, help center, guide index, and glossary index pages also have UI strings (headings, filters, search placeholders, CTAs). These go into i18next JSON namespaces:

- `src/i18n/{lang}/blog.json` — "Read more", "Search articles", filter labels, CTA text
- `src/i18n/{lang}/help.json` — "Help Center", "Search help guides", category labels
- `src/i18n/{lang}/glossary.json` — "Business Glossary", category names
- `src/i18n/{lang}/legal.json` — Full legal page content (shorter, suits JSON)

---

## Batches

### Batch 1: Infrastructure + Legal Pages
**Effort**: Small — sets up the translation framework for all subsequent batches

1. Create the multilingual data helper pattern (`src/utils/i18nData.ts`) with `getTranslatedBlogPosts(lang)`, `getTranslatedHelpGuides(lang)`, etc. — all returning English as fallback when translation doesn't exist yet
2. Update page components (`BlogPost.tsx`, `Blog.tsx`, `HelpArticle.tsx`, `HelpCenter.tsx`, guide pages, glossary pages, corridor page, author pages) to use the new language-aware data functions
3. Create i18next namespaces for UI strings: `blog.json`, `help.json`, `glossary.json`, `legal.json` in all 5 language dirs
4. Translate the 4 legal pages (Privacy Policy, Terms of Service, Cookie Policy, SLA) using `legal.json` namespace — these are the simplest since content is static text with no dynamic data
5. Register new namespaces in `src/i18n/index.ts`

**Files created/modified**: ~25 files
**After this batch**: All pages work in all languages (English fallback). Legal pages fully translated.

---

### Batch 2: Help Center (16 guides)
**Effort**: Medium — 16 guides with steps, content HTML, and FAQ

1. Create `src/data/helpGuides.de.ts`, `.fr.ts`, `.pt.ts`, `.es.ts`
2. Each file exports the same 16-guide array with translated: `title`, `description`, `steps[].name`, `steps[].text`, `content` (HTML), `faq[].question`, `faq[].answer`
3. Keep unchanged: `slug`, `icon`, `category`, `relatedGuides`, `targetFeature`, `estimatedTime`
4. Translate `categoryLabels` in `help.json` namespace
5. Translate Help Center page UI strings (search placeholder, heading, subheading)

**Files created**: 4 data files + 4 JSON namespace updates
**Content volume**: 16 guides × 4 languages = 64 translations

---

### Batch 3: Glossary Terms (~35 terms)
**Effort**: Small-Medium — terms are short but numerous

1. Create `src/data/glossaryTerms.de.ts`, `.fr.ts`, `.pt.ts`, `.es.ts`
2. Translate per term: `term`, `definition`, `extendedDescription`
3. Keep unchanged: `slug`, `relatedTerms`, `category`, `relatedArticles`
4. Translate glossary page UI strings in `glossary.json`

**Files created**: 4 data files + 4 JSON namespace updates
**Content volume**: ~35 terms × 4 languages = 140 translations

---

### Batch 4: Guide Detail Pages + Topic Pages (8 pillars)
**Effort**: Medium — pillar data has titles, descriptions, FAQ, keyTopics

1. Create `src/data/topicalMap.de.ts`, `.fr.ts`, `.pt.ts`, `.es.ts` — translated `Pillar` data
2. Translate per pillar: `title`, `description`, `longDescription`, `keyTopics[].title/description`, `faq[].question/answer`
3. Keep unchanged: `id`, `slug`, `targetProduct`, `hubPage`, `blogHubPage`, `icon`, `color`
4. Translate GuidesIndex page UI strings
5. Author pages: Create `src/data/authors.de.ts`, etc. — translate `role`, `bio`, `credentials`, `expertise`

**Files created**: 8 data files (4 topicalMap + 4 authors) + JSON updates
**Content volume**: 8 pillars × 4 + 3 authors × 4 = 44 translations

---

### Batch 5: Corridor Pages (9 corridors)
**Effort**: Small — corridor content is template-based (dynamic text from data)

1. The corridor page (`ReceiveCurrencyInCountry.tsx`) generates most text dynamically from `sendCurrency`, `countryName`, etc.
2. Extract the static prose and FAQ answer templates into i18next namespace `corridor.json`
3. Use `useTranslation('corridor')` with interpolation: `t('hero.description', { currency: corridor.sendCurrency, country: corridor.countryName })`
4. Translate `corridor.json` into all 4 languages

**Files created**: 5 JSON files (1 per language)
**Content volume**: ~15 template strings × 4 languages = 60 translations

---

### Batch 6: Blog Posts — Pillar Hub Pages (8 posts)
**Effort**: Large per post — these are the longest posts (200-300 lines of HTML each)

1. Create `src/data/blog/pillars.de.ts`, `.fr.ts`, `.pt.ts`, `.es.ts`
2. Translate the 8 pillar hub posts: `title`, `excerpt`, `content`, `faq`, `semanticKeywords`
3. Keep unchanged: `slug`, `category`, `tags`, `author`, `date`, `featuredImage`, `relatedTools`

**Slugs**: `complete-guide-to-business-invoicing`, `ultimate-guide-getting-paid-faster`, `small-business-accounting-guide`, `small-business-tax-compliance-guide`, `freelancer-business-guide`, `winning-proposals-estimates-guide`, `client-management-guide`, `expense-management-guide`

**Files created**: 4 data files
**Content volume**: 8 posts × 4 languages = 32 translations (but each is very long)

---

### Batch 7: Blog Posts — Cluster Posts (~20 posts)
**Effort**: Large — cluster posts are medium-length

1. Create `src/data/blog/clusters.de.ts`, `.fr.ts`, `.pt.ts`, `.es.ts`
2. Posts include: late payments, payment methods comparison, tax deductions, tax audit, proposals, estimate vs quote, credit notes, recurring invoices, international fees, invoice disputes, invoice numbering, payment terms, etc.

**Files created**: 4 data files
**Content volume**: ~20 posts × 4 languages = 80 translations

---

### Batch 8: Blog Posts — Original/Legacy Posts (~20 posts)
**Effort**: Large

1. Create `src/data/blog/original.de.ts`, `.fr.ts`, `.pt.ts`, `.es.ts`
2. Posts include: Invoicemonk platform, marketing 101, invoice templates, business ideas, freelance websites, fintech, essential elements, timely invoicing, ALAT, accounting basics, budgeting, graphic design, personal finance blogs

**Files created**: 4 data files
**Content volume**: ~20 posts × 4 languages = 80 translations

---

### Batch 9: Blog Posts — Country Compliance Posts (43 posts)
**Effort**: Very large — but template-based, so generation can be automated

1. The country compliance posts are **generated from templates** in `countryCompliancePosts.ts`. The generator functions (`generateTaxCompliantInvoicePost`, `generateVatFormatPost`, etc.) can be extended to accept a language parameter.
2. Create `src/data/countryCompliancePosts.de.ts`, `.fr.ts`, `.pt.ts`, `.es.ts` — each contains translated template strings that feed into the same generator pattern
3. This is the most automatable batch since content is parametric

**Files created**: 4 data files
**Content volume**: 43 posts × 4 languages = 172 translations (template-assisted)

---

### Batch 10: SEOHead + Sitemap Finalization
**Effort**: Small — remove `enOnly` (if applied) and enable full hreflang

1. Remove any `enOnly` props from all page components
2. Update `scripts/generate-sitemap.ts` to emit all content pages in all 5 languages
3. Regenerate sitemap
4. Verify hreflang tags are correct on all pages
5. Submit updated sitemap to GSC

---

## Recommended Execution Order

```text
Batch 1 (Infrastructure + Legal)     ← Do first, unblocks everything
Batch 2 (Help Center)                ← Quick win, 16 structured guides
Batch 3 (Glossary)                   ← Quick win, short content
Batch 4 (Guides + Topics + Authors)  ← Medium, structured data
Batch 5 (Corridors)                  ← Small, template-based
Batch 6 (Blog — Pillars)             ← Start long-form content
Batch 7 (Blog — Clusters)            ← Continue blog translation
Batch 8 (Blog — Original)            ← Continue blog translation
Batch 9 (Blog — Country Compliance)  ← Template-assisted, automate
Batch 10 (SEO Finalization)          ← Final step, submit to Google
```

## Important Notes

- **Fallback**: The infrastructure in Batch 1 ensures that any untranslated content gracefully falls back to English. This means you can deploy after each batch without breaking anything.
- **Blog file splitting**: blogPosts.ts is 12,698 lines. For the translated versions, splitting into pillars/clusters/original/compliance keeps files manageable.
- **Country compliance automation**: Since these posts are template-generated, the translation effort is translating ~5 template functions rather than 43 individual posts.
- **After Batch 10**: The GSC "Alternate page with proper canonical tag" errors will resolve naturally as Google discovers unique content at each language path.

