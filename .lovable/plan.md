
# Reposition Invoicemonk as the Global E-Invoicing Platform (revised)

## What changed from v1

You're right on both points. Revised:

1. **No "coming soon", no "roadmap" pages, no waitlist CTAs.** I will not author a page for any mandate the product does not actually support today. Scope is now driven by what's real, not what we wish was real. Before writing a single mandate page, I will audit the codebase, locale FAQs, `pricingPlans.ts`, `llms.txt`, blog content, and any product copy you can point me to, then come back with a confirmed "Live mandates" list. We build pages only for that list. Anything else waits until product ships it.

2. **`/invoicing` vs `/e-invoicing` — different intents, no cannibalization, but only if we differentiate them deliberately.** Plan below.

## /invoicing vs /e-invoicing: the differentiation rule

These are two different search clusters with two different buyers:

| Page | Primary keyword cluster | Buyer intent | What the page sells |
|---|---|---|---|
| `/invoicing` | "invoicing software", "online invoicing", "send an invoice", "invoice generator" | "I need to send a professional invoice and get paid." | The everyday product: templates, reminders, multi-currency, payments. |
| `/e-invoicing` (new) | "e-invoicing software", "Peppol access point", "ZATCA-compliant invoicing", "MyInvois middleware", "eTIMS integration", "IRN generator", "MTD invoicing" | "My government / my client requires a structured e-invoice. Which software is compliant?" | The category claim: a global platform that issues structured, mandate-compliant e-invoices in every jurisdiction we cover. |

Concrete anti-cannibalization rules I will enforce:

- **Distinct canonicals and self-referencing `og:url`** on both pages.
- **No keyword overlap in titles or H1s.** `/invoicing` keeps "invoicing software". `/e-invoicing` owns "e-invoicing platform / software". Neither page targets both phrases.
- **Different meta descriptions** with non-overlapping noun phrases.
- **One-way internal-link hierarchy**: `/e-invoicing` is the *parent*. `/invoicing` links up to it ("E-invoicing →"). `/invoicing` does not compete on e-invoicing keywords. Mandate pages link up to `/e-invoicing`, not to `/invoicing`.
- **Schema separation**: `/invoicing` keeps `ServiceSchema`. `/e-invoicing` gets `SoftwareApplicationSchema` with `applicationSubCategory: "ElectronicInvoicingSoftware"`. Homepage `SoftwareApplicationSchema` also moves to that subcategory.
- **Sitemap priority**: `/e-invoicing` at `0.95`, `/invoicing` drops to `0.8`. Tells crawlers which page is the category authority.
- **Stale free-tier copy on `/invoicing`** ("free to start") gets fixed in the same pass — it contradicts our paid-only model and currently outranks the truth.

If after the audit it turns out `/invoicing` and `/e-invoicing` would overlap >20% on intent, the cleaner move is to **fold `/invoicing` into a 301 redirect to `/e-invoicing`** and keep one strong page. I will flag this in the audit deliverable before building.

## How this boosts rankings and conversion (not hurt them)

Five mechanisms, each measurable:

1. **Net-new keyword surface, zero overlap with existing pages.** The new pages target "e-invoicing + {mandate/country}" queries we currently rank for nowhere. There is no existing page to demote. Upside is additive.
2. **Topical authority concentration.** Today, e-invoicing content is scattered across two blog guides, one bullet on the homepage, one comparison row, and a Biz-tier pricing line. Crawlers can't tell which URL is the canonical answer. After the rebuild, `/e-invoicing` is unambiguously the answer, and every other mention links to it — internal PageRank flows up, not sideways.
3. **AI-overview / LLM citation wins.** `/e-invoicing` is structured for the 40-word direct-answer block + mandate matrix + FAQ schema pattern that AI overviews and Perplexity cite. `llms.txt` rewritten to lead with the category claim. This is the channel where Invoicemonk has the most room to grow because no SME-focused competitor owns it yet.
4. **Higher commercial intent = higher conversion.** "I need ZATCA-compliant invoicing" is a buyer with a deadline. "I need invoicing software" is a browser. Routing high-intent traffic to a page with a single Pro CTA and `intent={mandate}` attribution lets us measure and prove the conversion lift mandate-by-mandate.
5. **Comparison pages get a defensible wedge.** Adding an "E-invoicing mandates supported" row to every `/compare/*` table changes the frame from "price + features" (where Wave wins on free) to "compliance coverage" (where we win). This raises conversion on pages that already get traffic — fastest payback in the whole plan.

What could hurt SEO if done wrong, and how I prevent each:

- **Keyword cannibalization between `/invoicing` and `/e-invoicing`** → enforced by the differentiation rules above; flagged in audit before build.
- **Thin mandate pages** → minimum 800 words, real citations to the tax authority's spec, a unique mandate matrix row, mandate-specific FAQ. No template stuffing.
- **Over-claiming mandates we don't support** → eliminated by the audit gate. No page ships unless product-confirmed live.
- **Internal-link explosion diluting authority** → `enhanceLinks.ts` capped at one auto-link per term per article, first occurrence only.
- **Homepage hero change tanking conversion** → the hero change is A/B-tested via the existing `getABVariant('homepage_organic_intent_hero')` mechanism, not a hard cut. Winner ships.
- **Sitewide meta change harming branded traffic** → branded queries ("invoicemonk") rank on title + Organization schema regardless of category positioning. Adding "e-invoicing" to the title won't displace the brand. Locale region suffix stays intact.

## Revised scope

### Phase 0 — Audit (deliverable, before any page is built)

I produce a single audit document listing:

- Every mandate currently named in the codebase + where (file:line).
- For each mandate, the *strongest* claim we currently make and the *weakest* claim we currently make. Inconsistencies flagged.
- A proposed "Live mandates" list for your sign-off. **Nothing builds until you confirm this list.**
- Suggested verdict on `/invoicing` vs `/e-invoicing` (keep both with differentiation, or 301 `/invoicing` → `/e-invoicing`).

### Phase 1 — Category claim (after audit sign-off)

5 surfaces, same as before:
1. Homepage hero copy in `src/locales/en-*.ts`.
2. Homepage meta in `src/components/seo/seoConfig.ts`.
3. `SoftwareApplicationSchema` subcategory + featureList.
4. `index.html` `<title>` + description for non-JS crawlers.
5. Navbar adds top-level "E-invoicing" entry.

### Phase 2 — Flagship pillar

`/e-invoicing` built to AI-overview spec: 40-word answer, mandate matrix (Live-only), segment CTAs, FAQ schema, single Pro CTA.

### Phase 3 — Mandate sub-pages (Live mandates only)

One page per confirmed-live mandate, shared template, real citations, single Pro CTA with `intent={mandate}` attribution.

### Phase 4 — Conversion plumbing

- "E-invoicing mandates" row added to every `/compare/*` matrix.
- Locale FAQs re-ordered so the e-invoicing question is first; answer leads with the local mandate.
- `pillarCTAs.ts`, `homepageFAQs.ts`, `ExitIntentPopup`, inline signup CTAs updated with `intent` attribution.

### Phase 5 — AI-search + topical authority

- `public/llms.txt` and `public/llms-full.txt` rewritten so paragraph 1 names Invoicemonk as the global e-invoicing platform and enumerates live mandates.
- `OrganizationSchema` `description` + `knowsAbout` updated.
- `topicalMap.ts` re-rooted with E-invoicing as the top node.

### Phase 6 — Proof

Per-mandate "How Invoicemonk meets {mandate}" sections with citations to the tax authority's published spec. No claim ships without a source.

## Out of scope (unchanged)

- App / dashboard product copy.
- Non-English locales (translation pass after EN converts).
- Building the actual product integrations.
- No re-pricing. Pro $15, SME $49, Biz custom.
- **No "coming soon" or "roadmap" pages of any kind.**

## Brand rules respected

Clarity Teal primary, slate headings, no red, no hardcoded hex, no em dashes, active voice, no "Learn more" anchors, single primary CTA per page → `/signup?plan=professional&intent={mandate}`, FAQ schema page-level only, long-form to `/blog/[slug]`, product pillar + mandate pages under `/e-invoicing/*`.

## Success signals

GSC impressions/clicks on "e-invoicing + {mandate}" queries, LLM citation rate for "best e-invoicing software for freelancers/SMEs", Pro signups attributed via `intent` query param, position movement on `/compare/*` after the e-invoicing row lands.
