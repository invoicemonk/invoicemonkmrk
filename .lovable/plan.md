## Plan: "Invoicing Kenyan clients as a foreign freelancer" country guide

### New article

- **Slug:** `invoicing-kenyan-clients-foreign-freelancer`
- **URL:** `/en/blog/invoicing-kenyan-clients-foreign-freelancer`
- **Title:** Invoicing Kenyan clients as a foreign freelancer (2026)
- **Author:** Olayinka Olayokun — needs to be added (see below)
- **Date:** 2026-07-07
- **Category:** Tax and Compliance
- **clusterType:** `cluster` (supporting the tax-compliance pillar; not pillar content — the existing `e-invoicing-kenya-etims` and `kra-invoice-requirements-kenya` are the Kenya hubs this complements)
- **Word count:** 2,800–3,100, full HTML body following the brief's 7 sections + AIO Q&A blocks

### Files changed

1. `**src/data/blogPostsCluster10.ts**` — append the new `BlogPost` to the same Kenya cluster where `e-invoicing-kenya-etims`, `kenya-etims-small-business-guide`, `kenya-how-to-generate-etims-invoice`, and `kenya-vat-invoice-requirements` already live. Keeps Kenya content co-located.
2. `**src/data/topicalMap.ts**` — add the new slug into the Kenya country group around line 722–723 (alongside the four existing Kenya posts) so it appears in the Tax & Compliance pillar's relevant cluster.
3. `**src/data/authors.ts**` — add a new author entry for Ayobami (Bami). Slug: `ayobami-bami`. Role/bio focused on cross-border freelancing and African tax compliance, expertise list including Kenya WHT, eTIMS, reverse charge, cross-border invoicing. Social links left empty/placeholder.

### Content structure (HTML body)

Brief tone rules respected (no em dashes, no AI filler, active voice, "you/your", explain acronyms on first use). Sections:

- Intro (<100 words) — answer the eTIMS fear immediately
- §1 What eTIMS is and who it applies to (link to existing eTIMS guide, do not re-explain)
- §2 What "KRA-compliant" actually means for a foreign supplier
- §3 Do you need to register for VAT in Kenya? (KES 5M threshold, B2C digital services nuance)
- §4 Reverse charge mechanism + 20% non-resident WHT + DTA note (the unique-angle section)
- §5 Complete invoice checklist for foreign freelancers
- §6 Flip perspective: Kenyan freelancers billing international clients (zero-rated export through eTIMS)
- §7 Five common mistakes
- Conclusion + screenshot-ready checklist + primary/secondary CTAs
- Each AIO Q&A from the brief embedded under matching `<h3>` so it doubles as readable copy and feeds the page-level FAQ schema

### Internal links embedded

- `/en/blog/e-invoicing-kenya-etims` — "eTIMS Kenya guide" (used twice: §1 and §6)
- `/en/blog/kra-invoice-requirements-kenya` — "KRA invoice requirements"
- `/en/blog/kenya-etims-small-business-guide`, `/en/blog/kenya-how-to-generate-etims-invoice`, `/en/blog/kenya-vat-invoice-requirements` — secondary anchors
- `/en/blog/eu-vat-invoice-requirements-freelancers` — pillar cross-link
- `/en/invoicing` — free invoice generator
- `/en/compliance` — compliance hub
- `https://app.invoicemonk.com/signup` — primary CTA

### SEO / schema fields populated

- `semanticKeywords`: the 8 supporting keywords from the brief (does eTIMS apply to foreign freelancers Kenya, KRA PIN invoice non-resident, Kenya reverse charge foreign supplier, etc.)
- `entityMentions`: Kenya Revenue Authority (KRA), eTIMS, Kenya VAT Act Cap 476, Kenya Tax Procedures Act, Double Taxation Agreement
- `relatedTools`: Invoicing, Compliance Hub, Best Invoicing Software Kenya
- `faq`: the 5 AIO Q&As
- `priority: 'P1'`, `targetCountry: 'ke'`, `pillarContent: false`, `clusterType: 'cluster'`
- `featuredImage`: reuse `/images/blog/kenya-vat-requirements.jpg` (existing asset) so the post renders without a missing image

### Out of scope

- Translations (DE/FR/ES/PT)
- New hero image asset
- Adding inbound links from the existing two KRA articles to this new one (can be a follow-up pass)