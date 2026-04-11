

# Implement Topical Authority Content Strategy from Topic Map

## Summary

The two uploaded documents define a **127-article content strategy** across 3 pillars (Compliance, Comparison, How-To) and 11 country clusters. After cross-referencing with the existing codebase, here is a gap analysis and phased implementation plan.

---

## Gap Analysis: What Exists vs What's Proposed

### Already Built (can be reused or enhanced)

| Proposed Content | Existing Equivalent | Status |
|---|---|---|
| P2-G-05 InvoiceMonk vs Wave | `/compare/invoicemonk-vs-wave` | EXISTS |
| P2-G-06 InvoiceMonk vs Zoho | `/compare/invoicemonk-vs-zoho-invoice` | EXISTS |
| InvoiceMonk vs FreshBooks | `/compare/invoicemonk-vs-freshbooks` | EXISTS |
| InvoiceMonk vs QuickBooks | `/compare/invoicemonk-vs-quickbooks` | EXISTS |
| InvoiceMonk vs Stripe | `/compare/invoicemonk-vs-stripe` | EXISTS |
| Best Invoicing Software | `/best-invoicing-software` | EXISTS |
| Free Invoice Generator (global) | `/free-invoice-generator` | EXISTS |
| Free Invoice Generator Australia | `/free-invoice-generator-australia` | EXISTS |
| Free Invoice Generator India | `/free-invoice-generator-india` | EXISTS |
| Country compliance posts (NG, US, UK, CA, AU, GH, KE, ZA) | `countryCompliancePosts.ts` — 40 posts + 3 shared | EXISTS (but covers different topics than the plan) |
| European compliance (RO, HU, RS, PL, IT, BG) | `blogPostsCluster9.ts` + recent expansion | EXISTS |
| 8 guide hub pages (invoicing, getting-paid, etc.) | `/guides/*` routes | EXISTS |

### URL Structure Differences

The plan proposes new URL patterns that differ from existing conventions:

| Plan URL Pattern | Current Convention | Decision Needed |
|---|---|---|
| `/en/guides/e-invoicing-nigeria` | Blog posts at `/en/blog/[slug]` | **New guide pages** vs blog posts |
| `/en/compare/best-invoicing-software-nigeria` | All comparisons at `/en/compare/invoicemonk-vs-*` | **New country comparison pages** |
| `/en/templates/nigeria-invoice-template` | Templates at `/en/invoice-templates` | **New template landing pages** |
| `/en/compare/wave-alternative-nigeria` | Wave comparison exists globally only | **New country-specific alt pages** |
| `/en/compare/free-vs-paid-invoicing-software` | Already exists as blog post in cluster9 | OVERLAP (slug: `invoicing-software-free-vs-paid`) |

### Countries: Existing vs Proposed

| Country | Existing Coverage | Plan Adds |
|---|---|---|
| Nigeria (NG) | 5 compliance blog posts | 9 P1 guides, 2 P2 comparisons, 3 P3 how-tos/templates |
| India (IN) | 5 compliance blog posts + free-invoice-generator-india | 6 P1 guides, 1 P2 comparison, 3 P3 how-tos/templates |
| UK (GB) | 5 compliance blog posts | 6 P1 guides, 2 P2 comparisons, 3 P3 how-tos/templates |
| Germany (DE) | 5 compliance blog posts + European expansion | 5 P1 guides, 1 P2 comparison, 2 P3 how-tos/templates |
| Saudi Arabia (SA) | None | 5 P1 guides, 1 P2 comparison, 1 P3 template (**NEW MARKET**) |
| Malaysia (MY) | None | 5 P1 guides, 1 P2 comparison, 2 P3 how-tos/templates (**NEW MARKET**) |
| Italy (IT) | European expansion (SDI content exists) | 1 P1 hub, 1 P2 comparison, 1 P3 how-to |
| Kenya (KE) | 5 compliance blog posts | 5 P1 guides, 1 P2 comparison, 1 P3 template |
| Australia (AU) | 5 compliance blog posts + free-invoice-generator-australia | 2 P2 comparisons, 2 P3 how-tos/templates |
| Canada (CA) | 5 compliance blog posts | 2 P2 comparisons, 1 P3 template |
| Ghana (GH) | 5 compliance blog posts | 1 P2 comparison, 1 P3 template |
| South Africa (ZA) | 5 compliance blog posts | 2 P2 comparisons, 1 P3 template |

### Truly New Content Pieces Needed: ~90

After removing the ~37 that already exist (existing comparisons, existing compliance posts, existing guide hubs), approximately **90 new content pieces** need to be created.

---

## Architectural Decisions

### 1. Guide Pages vs Blog Posts

The plan places most content under `/guides/*` and `/templates/*` — new route patterns. Current architecture uses:
- **Guide hub pages**: Thin wrappers around `GuidePageWrapper` linked to pillars in `topicalMap.ts`
- **Blog posts**: Long-form content in `blogPosts.ts` / cluster files, rendered by `BlogPost.tsx`

**Recommendation**: Implement the new country compliance guides and how-tos as **blog posts** (matching existing infrastructure) but register them under new guide hub pages. Template landing pages should be new page components similar to `FreeInvoiceGeneratorAustralia.tsx`. Country comparison pages should follow the existing `compare/*.tsx` pattern.

### 2. New Markets: Saudi Arabia and Malaysia

These require:
- New country configs in `countryCompliancePosts.ts` (or a new file)
- New locale data if we want locale-aware features (currency, tax labels)
- New locales in `src/locales/` (optional — can start English-only)

---

## Phased Implementation Plan

### Phase 1: Foundation (Wave 1 Priority Content — ~38 pages)

**Step 1.1 — Add Saudi Arabia and Malaysia country configs**
- Add SA and MY to `countryCompliancePosts.ts` country config array
- Add locale files `en-SA.ts` and `en-MY.ts` in `src/locales/`

**Step 1.2 — Create 3 Global Pillar Hub Guide Pages**
- `P1-G-01`: `/guides/what-is-e-invoicing` — New guide page
- `P1-G-02`: `/guides/e-invoicing-mandates-by-country` — New guide page  
- `P3-G-01–04`: Invoice fundamentals (how to write, invoice numbers, invoice vs receipt, payment terms)

**Step 1.3 — Create Wave 1 Country Content (NG, IN, KE)**
- 9 Nigeria FIRS guide blog posts
- 6 India GST guide blog posts (W1 subset)
- 5 Kenya eTIMS guide blog posts
- 3 Nigeria P3 how-tos/templates
- India GST invoice creation how-to

**Step 1.4 — Create Wave 1 Comparison Pages**
- `P2-G-01`: Best free invoicing software (global)
- `P2-G-02`: Best for freelancers
- `P2-G-03–04`: Wave alternative pages (global + free)
- `P2-NG-01–02`: Nigeria best software + Wave alt Nigeria
- `P2-IN-01`: India best software
- `P2-KE-01`: Kenya best software

**Step 1.5 — Template Landing Pages**
- Nigeria, India, Kenya country-specific template landers

**Step 1.6 — Register routes, topicalMap, contentIntents**
- Add all new routes to `App.tsx`
- Register slugs in `topicalMap.ts` pillar clusters
- Add intent mappings in `contentIntents.ts`
- Update sitemap generation script

### Phase 2: Month 2-3 (Wave 2 — ~32 pages)

- UK/HMRC/MTD cluster (6 guides + 2 comparisons + 3 templates)
- Saudi Arabia ZATCA cluster (5 guides + 1 comparison + 1 template)
- Malaysia MyInvois cluster (5 guides + 1 comparison + 2 how-tos/templates)
- India remaining W2 content
- Global how-to fundamentals (proforma vs commercial, credit notes, chase unpaid invoices)

### Phase 3: Month 4-6 (Wave 3 — ~33 pages)

- Germany deep dives (ZUGFeRD, XRechnung, Kleinunternehmer)
- Australia/Canada/Ghana/South Africa country comparison + template pages
- Industry-specific invoice guides (photographers, designers)
- Italy SDI remaining content

### Phase 4: Month 6+ (Wave 4 — ~24 pages)

- Payment dispute guides
- Remaining template variants
- Long-tail evergreen content

---

## Files to Create/Modify per Phase 1

| File | Action |
|---|---|
| `src/data/countryCompliancePosts.ts` | Add SA and MY configs |
| `src/data/blogPostsCluster10.ts` (new) | FIRS/GST/eTIMS guide blog posts (~20 posts) |
| `src/data/blogPostsCluster11.ts` (new) | Global fundamentals + how-tos (~15 posts) |
| `src/pages/guides/EInvoicingGuide.tsx` (new) | What is e-invoicing hub page |
| `src/pages/guides/EInvoicingMandatesGuide.tsx` (new) | Global mandates tracker page |
| `src/pages/compare/BestFreeInvoicingSoftware.tsx` (new) | Global free software comparison |
| `src/pages/compare/BestInvoicingSoftwareNigeria.tsx` (new) | Nigeria comparison |
| `src/pages/compare/WaveAlternativeNigeria.tsx` (new) | Wave alt Nigeria |
| ~8 more comparison page files | Country-specific comparisons |
| `src/pages/tools/FreeInvoiceGeneratorNigeria.tsx` (new) | Template lander |
| `src/pages/tools/FreeInvoiceGeneratorKenya.tsx` (new) | Template lander |
| `src/App.tsx` | Add ~25 new routes |
| `src/data/topicalMap.ts` | Register ~38 new slugs |
| `src/data/contentIntents.ts` | Add intent mappings |
| `scripts/generate-sitemap.ts` | Add new pages to sitemap |

---

## Key Differences from Plan to Adjust

1. **URL paths**: The plan uses `/guides/e-invoicing-nigeria` but our architecture serves long-form content as blog posts at `/blog/[slug]`. Guide hub pages link to blog posts. Recommend keeping this pattern rather than creating 90 new page components.

2. **Duplicate content risk**: The plan's P2-G-07 "Free vs Paid Invoicing Software" already exists as `invoicing-software-free-vs-paid` in cluster9. Similarly, several comparison pages already exist. These should be enhanced rather than duplicated.

3. **New markets (SA, MY)**: Require locale infrastructure before content. This is net-new work not covered by existing country compliance templates.

4. **Translation scope**: The plan is English-only. Full 5-language localization (as per existing pattern) would multiply the content by 5x. Recommend starting English-only and translating in batches.

5. **Internal linking triangles**: The plan mandates P1↔P2↔P3 cross-links per country. This should be implemented via the existing `ContextualLink` component and `enhanceLinks.ts` utility.

---

## Recommended Starting Point

Given the volume (~90 new pages), I recommend starting with **Phase 1, Step 1.2** (the 3 global pillar hub pages) and **Step 1.3** (Nigeria FIRS cluster) as they are Wave 1 priority with the lowest KD scores and highest urgency. This produces ~15 pages in the first batch.

Shall I proceed with this plan?

