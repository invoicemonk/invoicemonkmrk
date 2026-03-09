

# Remaining SEO Gaps — Koray's Semantic SEO Audit

## Already Implemented (no action needed)

| Principle | Status |
|-----------|--------|
| Topical map (8 pillars + clusters) | Done |
| `isPartOf` on cluster articles | Done |
| `hasPart` on pillar hubs (guides + BlogTopic) | Done |
| Entity mentions with Wikipedia `sameAs` on articles | Done |
| E-E-A-T author schema with `knowsAbout` | Done |
| Content intent classification system | Done |
| Semantic keywords per article | Done |
| 14+ schema types (Article, FAQ, HowTo, Person, Org, Service, etc.) | Done |
| Internal linking via `enhanceInternalLinks()` + glossary injection | Done |
| DefinedTermSet with `sameAs` on ~17 glossary terms | Done |
| `dateModified` freshness signals | Done |
| SpeakableSpecification on cluster content | Done |
| `llms.txt` + `llms-full.txt` | Done |
| LearningResource on `/guides/*` | Done |
| ComparisonReview (pro/con) on `/compare/*` | Done |
| `fetchPriority="high"` on BlogPost hero image | Done |
| hreflang for 5 languages + x-default | Done |
| WebSiteSchema with SearchAction on homepage | Done |

---

## Remaining Gaps

### 1. QAPageSchema created but never used (HIGH)
`QAPageSchema.tsx` exists but is not imported by any page. Help articles with FAQ sections should use it alongside HowToSchema.

**Fix:** Import and render `QAPageSchema` in `HelpArticle.tsx` using the first FAQ item as `mainEntity` and the rest as `additionalQA`.

---

### 2. Missing `sameAs` on ~20 glossary terms (HIGH)
Only ~17 of ~40 glossary terms have Wikipedia `sameAs`. Missing terms include: Recurring Invoice, Invoice Number, Payment Terms, Due on Receipt, Early Payment Discount, GST, Income Tax, Withholding Tax (partially there), Estimate, Quote, Proposal, Retainer, Scope of Work, Billable Hours, Scope Creep, Milestone Payment, Expense Report, Receipt Scanning, Expense Category, Reimbursable Expense, Expense Tracking, Digital Receipt, Client Onboarding, Client Retention, CRM, Client Communication.

**Fix:** Add `sameAs` Wikipedia URLs to all terms that have a corresponding Wikipedia article.

---

### 3. BreadcrumbSchema missing on 20+ pages (MEDIUM)
Currently only used on: BlogPost, BlogTopic, HelpCenter, HelpArticle, GuidePages. Missing from all product pages (Invoicing, Estimates, Expenses, Payments, Receipts, Accounting), persona pages (Freelancers, Agencies, etc.), use-case pages, compare pages, Pricing, Compliance, About, Glossary, FreeInvoiceGenerator, Contact, and tools pages.

**Fix:** Add `BreadcrumbSchema` to all public-facing pages with appropriate hierarchy (Home → Section → Page).

---

### 4. No `ProfilePage` schema on Author pages (MEDIUM)
`AuthorPage.tsx` has `PersonSchema` and `ItemListSchema` but not a `ProfilePage` schema type, which Google recommends for author/profile pages to strengthen E-E-A-T.

**Fix:** Wrap existing PersonSchema output with `ProfilePage` type, setting the `Person` as `mainEntity`.

---

### 5. Missing `SearchAction` on `/blog` listing page (LOW)
The blog has client-side search (`?q=`) but no SearchAction schema. Only the homepage WebSiteSchema has SearchAction.

**Fix:** Add a `CollectionPage` WebPageSchema to `/blog` with a `potentialAction: SearchAction` targeting `/blog?q={search_term}`.

---

### 6. No `ImageObject` with rich properties on article featured images (LOW)
Blog post featured images are just URLs in schema. Koray recommends full `ImageObject` with `caption`, `width`, `height`, and `representativeOfPage`.

**Fix:** Enhance the `image` property in `ArticleSchema.tsx` to use a full `ImageObject` with caption (from alt text or title), dimensions, and `representativeOfPage: true`.

---

### 7. Persona/use-case pages lack topical linking schema (LOW)
Pages like `/freelancers`, `/agencies`, `/recurring-billing` have SEOHead + FAQSchema but no `WebPageSchema` with `isPartOf` or `about` linking them into the topical graph. They're semantically orphaned from the pillar structure.

**Fix:** Add `WebPageSchema` with `about` entities linking to relevant pillars (e.g., Freelancers → `freelancer-success` pillar).

---

### 8. Corridor pages missing BreadcrumbSchema (LOW)
`ReceiveCurrencyInCountry.tsx` has SEOHead + FAQSchema but no breadcrumbs.

**Fix:** Add BreadcrumbSchema: Home → Payment Fee Calculator → [Corridor Name].

---

## Implementation Priority

```text
Phase 1 (High impact, quick wins):
  1. Wire QAPageSchema into HelpArticle.tsx
  2. Add sameAs to remaining glossary terms

Phase 2 (Medium impact, moderate effort):
  3. Add BreadcrumbSchema to all product/persona/tool pages
  4. Add ProfilePage schema to AuthorPage

Phase 3 (Low impact, refinement):
  5. SearchAction on /blog
  6. Rich ImageObject in ArticleSchema
  7. WebPageSchema on persona/use-case pages
  8. BreadcrumbSchema on corridor pages
```

---

## Files to modify

| File | Change |
|------|--------|
| `src/pages/help/HelpArticle.tsx` | Add QAPageSchema for FAQ items |
| `src/data/glossaryTerms.ts` | Add ~20 missing `sameAs` Wikipedia URLs |
| `src/pages/Invoicing.tsx` | Add BreadcrumbSchema |
| `src/pages/Estimates.tsx` | Add BreadcrumbSchema |
| `src/pages/Expenses.tsx` | Add BreadcrumbSchema |
| `src/pages/Payments.tsx` | Add BreadcrumbSchema |
| `src/pages/Receipts.tsx` | Add BreadcrumbSchema |
| `src/pages/Accounting.tsx` | Add BreadcrumbSchema |
| `src/pages/Pricing.tsx` | Add BreadcrumbSchema |
| `src/pages/Compliance.tsx` | Add BreadcrumbSchema |
| `src/pages/Freelancers.tsx` | Add BreadcrumbSchema + WebPageSchema |
| `src/pages/Agencies.tsx` | Add BreadcrumbSchema + WebPageSchema |
| `src/pages/Consultants.tsx` | Add BreadcrumbSchema |
| `src/pages/Photographers.tsx` | Add BreadcrumbSchema |
| `src/pages/Glossary.tsx` | Add BreadcrumbSchema |
| `src/pages/About.tsx` | Add BreadcrumbSchema |
| `src/pages/FreeInvoiceGenerator.tsx` | Add BreadcrumbSchema |
| `src/pages/compare/*.tsx` | Add BreadcrumbSchema |
| `src/pages/use-cases/*.tsx` | Add BreadcrumbSchema |
| `src/pages/tools/ReceiveCurrencyInCountry.tsx` | Add BreadcrumbSchema |
| `src/pages/AuthorPage.tsx` | Add ProfilePage schema wrapper |
| `src/pages/Blog.tsx` | Add CollectionPage + SearchAction schema |
| `src/components/seo/ArticleSchema.tsx` | Enhance `image` to full `ImageObject` |

