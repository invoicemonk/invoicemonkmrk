

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

### ✅ Batch 1-10: All Translations & SEO (COMPLETE)

### ✅ SEO Gap Analysis — Koray's Semantic SEO (COMPLETE)

#### Phase 1 (Complete)
- `hasPart` on pillar WebPage schema (guides + BlogTopic)
- Wikipedia `sameAs` on ~37 glossary terms (all terms with Wikipedia articles)
- QAPageSchema wired into HelpArticle.tsx
- LearningResource on `/guides/*`
- ComparisonReview (pro/con) on `/compare/*`
- `fetchPriority="high"` on BlogPost hero image

#### Phase 2 (Complete)
- BreadcrumbSchema on 30+ pages (product, persona, compare, use-case, tools, about, glossary, contact, pricing, blog, author)
- ProfilePage schema on AuthorPage (via PersonSchema `mainEntityOfPage`)
- WebPageSchema with `isPartOf` on Freelancers → freelancer-success, Agencies → client-management

#### Phase 3 (Complete)
- CollectionPage + SearchAction schema on `/blog`
- Rich `ImageObject` with caption + `representativeOfPage` in ArticleSchema
- GST and Income Tax glossary terms added with sameAs
