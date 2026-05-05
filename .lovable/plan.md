## Plan: Publish "EU VAT Invoice Requirements for Freelancers" pillar article

### What gets created
A single new blog post added to the existing cluster 19 file (E-Invoicing Compliance, where Bulgaria/Serbia EU posts already live).

- **Slug:** `eu-vat-invoice-requirements-freelancers`
- **URL:** `/en/blog/eu-vat-invoice-requirements-freelancers`
- **Title:** EU VAT invoice requirements for freelancers (2026 guide)
- **Meta description:** As provided in brief
- **Author:** Olayinka Olayokun (use existing entry from `src/data/authors.ts`; verify slug)
- **Date:** 2026-05-05
- **Category:** Tax and Compliance
- **Pillar content:** `pillarContent: true`, `clusterType: 'pillar'`
- **Target product:** `/compliance`
- **Word count:** 3,000–3,500, full HTML body following the brief's 7 sections + 5 AIO answer blocks + conclusion

### Files changed
1. **`src/data/blogPostsCluster19.ts`** — append the new `BlogPost` object to `cluster19Posts`. Existing footer auto-registers it into the global `blogPosts` array, so it shows on `/blog`, `/blog/[slug]`, sitemap, and search.
2. **`src/data/topicalMap.ts`** — add `'eu-vat-invoice-requirements-freelancers'` to the top of the `tax-compliance` pillar's `postSlugs` array (line ~672) so it appears in the Tax & Compliance guide hub and gets pillar/cluster schema.
3. **`src/data/authors.ts`** — verify Olayinka Olayokun exists; if missing, add a minimal author entry (name, slug, role, bio, expertise, socialLinks).

### Content structure (HTML)
Sections per the brief, written in the brief's tone (no em dashes, no AI clichés, active voice, conversational, "you/your"):
- Intro (<100 words, problem-led)
- §1 Legal foundation (VAT Directive 2006/112/EC)
- §2 Mandatory fields (the 13 items, each as `<li>`)
- §3 Reverse charge mechanism
- §4 Sequential invoice numbering
- §5 What happens if non-compliant
- §6 VAT registration thresholds
- §7 ViDA / e-invoicing mandate
- Conclusion + primary CTA to `https://app.invoicemonk.com/signup` and secondary CTA to country guides
- P.S. tip
- Each AIO Q&A as an `<h2>`/`<h3>` with the verbatim answer paragraph (mirrors the question)

### Internal links embedded in body
- `/en/blog/germany-vat-reverse-charge-invoicing` (German invoice requirements)
- `/en/blog/freelancer-vat-registration-bg`, `freelancer-vat-registration-ro`, `freelancer-vat-registration-pl`, `freelancer-vat-registration-it`, `freelancer-vat-registration-hu` (country thresholds)
- `/en/blog/credit-note-guide-when-how-to-issue` (how to issue a credit note)
- `/en/blog/italy-fattura-elettronica-freelancers`, `france-e-invoicing-ppf-pdp-guide` (ViDA section)
- `/en/invoicing` (free EU invoice generator)
- `/en/compliance` (compliance hub)
- Future Week 2/3/5/7 anchors: noted as TODO comments next to relevant slugs so they're easy to swap in once published

### SEO / schema fields populated
- `semanticKeywords`: the 8 supporting keywords from the brief
- `entityMentions`: European Commission, EU VAT Directive 2006/112/EC, EU ViDA, §14 UStG, §19 UStG
- `relatedTools`: Invoicing, Compliance Hub, Free Invoice Generator
- `faq`: the 5 AIO Q&As (also rendered in body so they appear as both readable text and FAQPage schema via the page-level FAQSchema)
- `priority: 'P1'`, `pillarContent: true`, `targetCountry: 'eu'` (or omit if not used)

### Cannibalization safeguards (already verified)
No existing post targets the EU-wide pillar query. The new article will be the parent hub for the country-specific child posts (Germany reverse charge, BG/RO/PL/IT/HU freelancer VAT, etc.).

### Out of scope (not doing now)
- Translations (DE/FR/ES/PT) — can follow later as parallel files per project convention
- New featured image asset — will reference an existing fallback image path (`/images/blog/invoice-essential-elements.jpg`) so the post renders without a missing-asset issue; you can swap in a custom hero later
- Medium republish — handled by you outside the codebase (set canonical to the Invoicemonk URL)

### After implementation
- Article live at `/en/blog/eu-vat-invoice-requirements-freelancers`
- Auto-included in sitemap (next build)
- Listed under Tax & Compliance guide hub
- Internal links from existing Germany/BG/IT posts can be added in a follow-up pass
