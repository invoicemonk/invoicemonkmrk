

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

### ✅ Batch 1b: Legal Page Translations (COMPLETE)

### ✅ Batch 2: Help Center (COMPLETE)

### ✅ Batch 3: Glossary Terms (COMPLETE)

### ✅ Batch 4: Guide Detail Pages + Topic Pages + Authors (COMPLETE)

### ✅ Batch 5: Corridor Pages (COMPLETE)

### ✅ Batch 6: Blog Posts — Pillar Hub Pages (COMPLETE)

### ✅ Batch 7: Blog Posts — Cluster Posts (COMPLETE)

### ✅ Batch 8: Blog Posts — Country Compliance Posts (COMPLETE)

### ✅ Batch 10: SEOHead + Sitemap Finalization (COMPLETE)
- SEOHead already outputs hreflang for all 5 languages on every page
- Updated sitemap generator to include country compliance posts and glossary terms
- No 'enOnly' restrictions found — all content sections are fully multilingual
