

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

## Current Status

### ✅ Batch 1: Infrastructure (COMPLETE)
- `src/utils/i18nData.ts` — registry-based helper with English fallback
- `src/i18n/{lang}/blog.json` — UI strings for blog pages (5 languages)
- `src/i18n/{lang}/help.json` — UI strings for help center (5 languages)
- `src/i18n/{lang}/glossary.json` — UI strings for glossary (5 languages)
- `src/i18n/index.ts` — registered blog, help, glossary namespaces
- Updated page components: Blog.tsx, BlogPost.tsx, BlogTopic.tsx, AuthorPage.tsx, HelpCenter.tsx, HelpArticle.tsx, Glossary.tsx, GuidesIndex.tsx

### 🔲 Batch 1b: Legal Page Translations (NEXT)
- Create `src/i18n/{lang}/legal.json` for Privacy, Terms, Cookie, SLA
- Update legal page components to use `useTranslation('legal')`

### 🔲 Batch 2–10: Content Translations
See batches 2–10 below for remaining work.

---

## Batches 2–10 (Unchanged from original plan)

### Batch 2: Help Center (16 guides)
Create `src/data/helpGuides.{de|fr|pt|es}.ts` with translated guide content.

### Batch 3: Glossary Terms (~35 terms)
Create `src/data/glossaryTerms.{de|fr|pt|es}.ts` with translated terms.

### Batch 4: Guide Detail Pages + Topic Pages (8 pillars) + Authors
Create `src/data/topicalMap.{de|fr|pt|es}.ts` and `src/data/authors.{de|fr|pt|es}.ts`.

### Batch 5: Corridor Pages (9 corridors)
Extract static prose to `src/i18n/{lang}/corridor.json` with interpolation.

### Batch 6: Blog Posts — Pillar Hub Pages (8 posts)
Create `src/data/blog/pillars.{de|fr|pt|es}.ts`.

### Batch 7: Blog Posts — Cluster Posts (~20 posts)
Create `src/data/blog/clusters.{de|fr|pt|es}.ts`.

### Batch 8: Blog Posts — Original/Legacy Posts (~20 posts)
Create `src/data/blog/original.{de|fr|pt|es}.ts`.

### Batch 9: Blog Posts — Country Compliance Posts (43 posts)
Extend template generators to accept language parameter.

### Batch 10: SEOHead + Sitemap Finalization
Enable full hreflang on all pages, regenerate sitemap for all 5 languages.
