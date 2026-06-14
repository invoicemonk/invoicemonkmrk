## Goal

Remove every reference to a free plan, Starter tier, free trial, and "no credit card / no card needed" language across the marketing site. Pro ($15/mo) becomes the entry tier; SME ($49/mo) and Biz (custom) remain. Standardize CTA to "Get started" → Pro signup (`https://app.invoicemonk.com/signup?plan=professional`).

## Scope

~100 files across pricing config, locales, i18n JSON, comparison pages, blog data, tools, and shared CTA components.

### 1. Pricing config & components

- `src/config/pricingPlans.ts`
  - Remove `'free'` from the `PricingPlan.id` union and from `calculatePrice`.
  - Drop the `starterFeatures` export and the Starter plan object from `getPricingPlans()`.
  - Result: 3 plans returned (Pro, SME, Biz). Pro keeps `popular: true`.
- `src/locales/types.ts`
  - Remove `free` from the `pricing` shape and `starterAvailable` from `pricingContent` (or keep field but set false everywhere — simpler to delete).
- All `src/locales/en-*.ts` (AU, CA, GB, GH, IN, KE, MY, NG, NZ, PH, SA, SC, US, ZA, ZW)
  - Drop `free: 0` and `starterAvailable: false`.
  - Hero CTA: replace `"Start free — no card needed"` / similar with `"Get started"`.
  - Trust badges / social proof: remove "free plan", "no card needed" wording.
  - FAQs: rewrite the `"How much does Invoicemonk cost…"` answer to start at Pro ($15) and drop "free plan with 5 invoices".
  - Blog CTAs: replace `"Start Invoicing Free"` / `"Start Invoicing Today"` with `"Get Started"`.

### 2. Pricing page

- `src/i18n/en/pricing.json` — rewrite `faq.items.freeTier` into a "Do you offer a free trial?" Q with answer: no free plan or trial; Pro starts at $15/mo, cancel anytime. Update hero description if needed.
- `src/pages/Pricing.tsx` — verify Starter card removal renders cleanly with 3 columns; adjust grid (`md:grid-cols-3`) if currently `grid-cols-4`.
- `src/components/pricing/FeatureComparisonTable.tsx` — remove Starter column.

### 3. Homepage & shared CTAs

- `src/components/home/CTASection.tsx`, `WaveCTASection`, `HeroSection`, hero badges — swap "Start free", "no card" copy for "Get started".
- `src/components/compare/InlineSignupCTA.tsx`, `src/components/blog/SignupCTA.tsx`, `ClusterNavigation`, `ArticleSidebar`, `PillarPageLayout`, `TopicExplorer` — same swap; all CTA links → Pro signup URL.

### 4. i18n JSON (English)

Sweep and rewrite for: `home.json`, `whyInvoicemonk.json`, `compliance.json`, `accounting.json`, `accountants.json`, `agencies.json`, `bestInvoicingSoftware.json`, `consultants.json`, `contractors.json`, `corridors.json`, `creatives.json`, `developer.json`, `ecommerce.json`, `expenses.json`, `freelancers.json`, `invoicing.json`, `lawyers.json`, `milestoneBilling.json`, `multiCurrencyInvoicing.json`, `payments.json`, `photographers.json`, `receipts.json`, `recurringBilling.json`, `retainerBilling.json`, `smallBusinesses.json`, `tools.json`, `common.json`, plus comparison JSONs (`compareAtoinvoice`, `compareDext`, `compareEstimatesQuickbooks`, `compareFreshbooks`, `compareQuickbooks`, `compareStripe`, `compareStripeInvoicing`, `compareWave`, `compareZoho`).

Rules:
- "Free forever / Free plan / Free tier" → remove or rephrase to "Pro plan from $15/mo".
- "Start free", "Start free — no card needed", "Try free" CTAs → "Get started".
- "No credit card required" → delete.
- Pricing tables/feature lists that include a Starter row: drop the row; ensure remaining 3 tiers render.
- FAQ items asking about free plan/trial: rewrite to "Invoicemonk no longer offers a free plan or trial. Pro starts at $15/mo and you can cancel anytime."

### 5. Comparison pages (TSX + JSON)

- `BestFreeInvoicingSoftware.tsx`: this page's premise conflicts with the new model. Repurpose to "Best low-cost invoicing software" — keep URL for SEO, rewrite hero/intro to clarify Invoicemonk is paid-only starting at $15 and only competitors with free tiers are listed as free. Update internal positioning so Invoicemonk is recommended as the paid option.
- All `BestInvoicingSoftware*.tsx` country pages and `WaveAlternative*.tsx`: remove Starter row from comparison tables; rewrite "Invoicemonk has a free plan" claims to "Invoicemonk starts at $15/mo (Pro)"; CTAs → Pro signup.
- `InvoicemonkVsAtoinvoice`, `InvoicemonkEstimatesVsQuickbooks`, etc.: same sweep. Where the contrast was "free vs paid", reframe to "$15 vs $X with these features".

### 6. Blog & long-form data

- Blog data files (`blogPosts.ts`, `blogPostsCluster9/10/13/16/17/18/19.ts`, `countryCompliancePosts.ts`, `helpGuides.ts`, `contentTemplates.ts`): find body copy mentioning "free plan", "free tier", "free trial", "no credit card" and rewrite to reference paid Pro tier.
- `src/utils/blockAnswers.ts`: update any quick-answer snippets referencing the free plan.

### 7. Tools pages

- `src/pages/tools/ToolsIndex.tsx`, `InvoiceTemplates.tsx`: replace "Start free" CTAs with "Get started" → Pro signup; remove "free plan" mentions in copy (keep "free tools" since the tools themselves remain free, just reword to avoid confusing with the product plan).

### 8. Legal & public assets

- `src/data/legal/terms.en.ts`: remove or rewrite any clause referring to a free plan/trial.
- `public/llms.txt`, `public/llms-full.txt`: regenerate the pricing/plans sections — Pro $15, SME $49, Biz custom; no free plan, no trial.
- `src/App.tsx`: only touched if it surfaces a banner mentioning "start free"; otherwise no change.

### 9. SEO

- `src/components/seo/SoftwareApplicationSchema.tsx`: if it currently emits a `price: "0"` `Offer`, change the lowest offer to `"15"` `USD` so Google's structured-data preview matches the new entry price.

### 10. Out of scope

- App / dashboard product (`app.invoicemonk.com`) — not in this repo.
- Backend, Supabase schema, edge functions.
- Non-English locale JSON beyond what already exists; the project's `i18n/index.ts` falls back to English.
- Pricing analytics, billing, or actual plan removal in the product DB.

## Acceptance

- `rg -i "free plan|free tier|start free|no card needed|no credit card|free trial|starter tier|continue with free"` returns 0 hits in `src/` and `public/` (excluding `BestFreeInvoicingSoftware.tsx` route slug and any unavoidable legal historical reference).
- `/en/pricing` shows 3 plans (Pro, SME, Biz); no Starter card; FAQ confirms no free plan/trial.
- Homepage, all locale pages, and every comparison page CTA reads "Get started" and points to `https://app.invoicemonk.com/signup?plan=professional`.
- `npm run build` (auto) passes; no TS errors from the removed `'free'` union member.

## Technical notes

- Wide find-and-replace is risky; do it file-by-file with `code--line_replace` after `code--view`, batched in parallel per directory.
- The `PricingPlan.id` union change will surface TS errors anywhere `'free'` is referenced — fix those as compile errors guide.
- Keep `BestFreeInvoicingSoftware` route alive (301 churn hurts SEO) but rewrite content honestly.
