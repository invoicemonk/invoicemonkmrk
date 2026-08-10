# Topical authority programme: own e-invoicing, monetise invoicing

Goal: make Invoicemonk the source-of-truth entity for e-invoicing worldwide, and convert that authority into self-serve Pro ($15/mo) signups.

## Where the site stands today (verified)

- 143 routes: `/e-invoicing` hub + 20 mandate pages, `/invoicing` and 6 other feature pages, 11 audience pages, ~34 compare pages, 11 guides, ~25 tools/corridor pages, blog.
- 9 pillars in the topical map (`e-invoicing-platform` already exists as one), ~333 blog posts, 482 sitemap URLs.
- Blog conversion layer exists (inline CTAs, content upgrades, sticky CTA, exit intent).

The volume is there. What is missing is Koray's discipline: one clearly-owned central entity, clean contextual borders between the two money layers, momentum ordering, and a processed-link network that funnels every article into a money page.

## Tier structure (contextual hierarchy)

```text
CENTRAL ENTITY        e-invoicing (regulated, structured, cleared)
  source page         /e-invoicing            <- category claim, mandate matrix
  sub-central         /e-invoicing/{mandate}  <- 20 live jurisdictions
  supplementary       blog: mandate mechanics, deadlines, formats, penalties

MONEY LAYER           invoicing software (commercial intent)
  source page         /invoicing
  sub-money           audience pages, use-cases, compare pages, /pricing
  supplementary       blog: workflow, templates, getting paid, expenses
```

Rule enforced everywhere: e-invoicing pages never target "invoicing software" phrasing, and `/invoicing` never targets mandate phrasing. Each side links down into its own children and across only at the conversion point.

## Phase 1 — Structure and borders

1. Audit every title, H1, meta and canonical against its tier; rewrite any page whose target phrase belongs to a different tier. Remove overlapping claims between `/invoicing`, `/e-invoicing`, `/compliance`, and `/best-invoicing-software`.
2. Rebuild `/e-invoicing` as a true source page: definitive definition block, the 20-jurisdiction matrix, format/transport/authority columns, "what changes for you" answer blocks, and a single next step into signup.
3. Standardise every mandate page to one macro-template (same section order, same six-field claim bar, same answer-first opening, same FAQ shape) so Google reads them as one consistent set.
4. Consolidate the 9 pillars into the two-tier map above; retire pillar overlaps that split authority (e.g. estimates vs invoicing overlap).

## Phase 2 — Content network and momentum

5. Fill the topical gaps that block completeness on the central entity: format explainers (UBL, Peppol BIS, Factur-X, XRechnung, FatturaPA), clearance-model explainers (pre-clearance, CTC, real-time reporting), and one "requirements for non-resident suppliers" page per priority jurisdiction.
6. Programmatic sets, generated from typed data files with real product facts (no thin pages, no coming-soon):
   - `/e-invoicing/{mandate}/for-freelancers` and `/for-agencies` (buyer-segment cut of each mandate)
   - `{country} invoice requirements` money pages for the high-CPC set (US, UK, CA, AU) framed as invoicing-software intent
   - corridor pages extended to the mandate markets (SA, MY, IN, IT, KE, NG, BR)
7. Publish in momentum order: complete the mandate set first (authority), then the buyer-segment cuts, then the high-CPC commercial set. No partial branches left open.
8. Prune and consolidate: merge near-duplicate blog posts into the strongest URL with 301s, keeping one URL per query network.

## Phase 3 — Entity and answer optimisation

9. One consolidated JSON-LD graph per page with stable `@id`s: Organization + WebSite sitewide, `GovernmentService` per mandate, `SoftwareApplication` for the product, `FAQPage` only at page level, `BreadcrumbList` on every deep page.
10. Answer-first formatting sitewide: a single-sentence direct answer under every H1 and every question H2, definition/table blocks, and factual claim bars — the format that wins AI answers and featured snippets.
11. Freshness system: `lastReviewed` per mandate surfaced on-page and in schema, with a review cadence, so the mandate set stays the most current source available.
12. Internal link network: every supplementary article links up to its sub-central page and down to exactly one money page; hub pages link to all children; contextual anchor text uses the entity name, not "click here".

## Phase 4 — Converting authority into paid Pro users

13. Per-tier CTA logic instead of one generic CTA: mandate pages get a compliance-deadline CTA ("issue a cleared {artefact} today — Pro, $15/mo"), commercial pages get a feature/price CTA, freelancer content keeps the lead-magnet path.
14. Mandate-aware signup handoff: pass jurisdiction and detected mandate into the signup URL so the app onboards into the right compliance profile — the single biggest lift on activation from mandate traffic.
15. Money-page depth pass: pricing clarity, objection handling, proof, and comparison tables on `/pricing`, audience and compare pages, since they receive all funnelled traffic.
16. Attribution: extend the existing `conversion_events` capture to record tier, pillar, and entry URL, so we can see which mandate pages produce paid signups and double down.

## Technical notes

- New programmatic sets follow the existing pattern: typed data file in `src/data/`, one template component, routes registered in `src/App.tsx`, entries added to `scripts/generate-sitemap.ts`.
- Redirects for pruned/merged URLs go in `vercel.json` alongside the existing rules.
- Schema consolidation touches `src/components/seo/*`; FAQ schema stays page-level only, per the existing singleton rule.
- Client-side Helmet means social crawlers see only static `index.html` head. Per-page previews and crawler-visible server-rendered content would need SSR — the app can get that by migrating to Lovable's latest template ([what the upgrade gives you](https://lovable.dev/blog/building-apps-using-tanstack-start)). Not required for this plan; Googlebot renders JS.
- No claims will be added that aren't backed by product reality or a cited authority source.

## Sequencing

Phases run in order — 1 before 2, because publishing more pages on top of blurred borders amplifies cannibalisation rather than authority. Phase 4 can start in parallel with Phase 2.

Approve and I'll start with Phase 1 (borders, `/e-invoicing` source page rebuild, mandate template standardisation).
