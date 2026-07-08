## Diagnosis

You already have decent bones — inline mid-article CTAs (`inlineCTAs.ts` injects after the 2nd, 5th, 7th `<h2>`), a sidebar signup card (`ArticleSidebar`), an article-end CTA (`SignupCTA`), and an exit-intent email popup. But three things are quietly killing conversion:

1. **Every CTA sends readers straight to `app.invoicemonk.com/signup?plan=professional**` — a paywalled Pro plan with no free trial. That's a huge ask from someone still learning what e-invoicing is. Cold blog traffic almost never converts directly to paid.
2. **All CTAs are the same signup ask, repeated 3–5x.** No offer variety, no lead magnets on-page, no urgency, no low-friction step. Banner-blindness kicks in by the 2nd h2.
3. **No above-the-fold hook, no sticky element, no floating CTA, no ROI/proof, no in-context lead capture** (the exit popup only fires on mouse-leave, and it doesn't route email subs into a nurture-to-signup sequence).

## What to build

### 1. Add a low-friction first step alongside signup

Right now every CTA is "pay $15/month." Introduce a **14-day free trial** or **free starter account** URL (product decision — see Open questions) and split CTAs into two tiers:

- **Primary (soft)**: "Start free" — for cold readers
- **Secondary (hard)**: "See Pro pricing" — for warm readers

Update `pillarCTAs.ts` and `inlineCTAs.ts` to use the soft URL by default; the article-end and sidebar keep the hard signup as secondary.

### 2. Sticky bottom conversion bar (`StickyBlogCTA`)

A slim, dismissible bar pinned to the viewport bottom on `/blog/*`, appearing after 25% scroll. Two-line copy tuned per pillar (e.g. tax-compliance: *"Stop worrying about VAT fields. Start free →"*). Dismissal remembered for 7 days in localStorage. Mobile-first.

### 3. In-article lead magnets (contextual, not generic)

You already have PDFs in `/public/downloads/` (payment checklist, get-paid playbook, international invoicing checklist, invoice template pack). Wire them up as **content upgrades** matched to pillar:

- `getting-paid` → "Get Paid Playbook"
- `tax-compliance` / country posts → "International Invoicing Compliance Checklist"
- `invoicing-mastery` → "Invoice Template Pack"
- `freelancing` → "Freelancer Payment Checklist"

Build a `ContentUpgradeCard` component injected after the 1st h2 (before the first hard signup CTA). Email + first name → `subscribe-marketing-lead` edge function (already exists) with `source: "content_upgrade_<slug>"` → delivers PDF + drops into nurture sequence → shows a warm signup CTA on success.

### 4. Rewrite inline mid-article CTAs as a rotation, not a repeat

Today all 3 mid-article CTAs say roughly the same thing ("compliant invoices, tracking, audit trail"). Rewrite as a **funnel**:

- **After h2 #2** — Content upgrade (PDF, email capture) — soft
- **After h2 #5** — Proof/ROI ("Freelancers using Invoicemonk get paid X days faster / recover Y% more invoices") + free trial button
- **After h2 #7** — Direct signup with urgency ("Compliance mandate hits [country] in [date] — get ready in 10 min")

Country/mandate posts should pull the deadline from `mandates.ts` for dynamic urgency copy.

### 5. Sidebar CTA upgrade

The `ArticleSidebar` signup card is generic. Add:

- A **mini pricing/value block** (3 bullets: what you get on Pro), not just "Try Invoicemonk"
- **Star-rating / customer count** ("Trusted by X,000 businesses in Y countries") — use real numbers once you give me them
- Sticky scrolls with content (already sticky)

### 6. Exit-intent popup rework

Currently offers "playbooks" (vague) and links to Pro signup as fine-print. Change to:

- **Headline pillar-aware** (tax-compliance readers see a compliance-specific offer)
- **Two clear CTAs**: "Get the free [country] compliance checklist" OR "Start free trial" — side by side
- **Fire on scroll depth 60% + 30s dwell** on mobile (mouseleave doesn't work on touch — you're missing all mobile exits today)

### 7. Blog index page conversion (`/blog`)

Add a hero-band CTA above the article grid: "New: [Country] e-invoicing mandate cheatsheet — download free." One offer, one field, one button.

### 8. Analytics + iteration

- Add `data-cta-variant` attributes to every CTA so we can attribute conversions to specific placements in `useContentAnalytics`.
- Track: impression, click, form submit, signup attribution — pipe into a lightweight dashboard slice.
- Set up an A/B test between the current "hard signup only" bank and the new "soft-first" bank on 3 of the highest-traffic posts (use existing `ABTest` component).

## Technical file changes

- `src/data/pillarCTAs.ts` — add `TRIAL_URL`, `SOFT_CTA_URL`, split soft/hard copy
- `src/utils/inlineCTAs.ts` — 3-stage funnel rotation, mandate-aware copy for country posts
- `src/components/blog/StickyBlogCTA.tsx` — new
- `src/components/blog/ContentUpgradeCard.tsx` — new (email capture → PDF + nurture)
- `src/components/blog/SignupCTA.tsx` — dual-CTA layout (soft primary, hard secondary), proof stat slot
- `src/components/blog/ArticleSidebar.tsx` — value bullets + proof stat
- `src/components/marketing/ExitIntentPopup.tsx` — pillar-aware headline, dual CTA, mobile trigger
- `src/pages/BlogPost.tsx` — mount `StickyBlogCTA`, inject `ContentUpgradeCard` after 1st h2
- `src/pages/Blog.tsx` — hero-band content upgrade
- `src/hooks/useExitIntent.ts` — add mobile scroll/dwell trigger
- `supabase/functions/subscribe-marketing-lead/index.ts` — accept `magnet` param, return download URL
- `src/data/leadMagnets.ts` — new: pillar → PDF mapping + copy

No schema changes needed; `marketing_leads` table (assumed) already accepts `source`.

## Open questions before I build

1. **Is there a free trial URL** (e.g. `app.invoicemonk.com/signup?plan=trial`) or a **free plan** you want the soft CTA to point to? Right now every CTA sends users to paid Pro — that's the single biggest conversion blocker. If none exists, the soft CTA becomes "Download free checklist" instead. Let's try the "Download free checklist" to gather emails and names.
2. **Real proof numbers** to use in CTAs and sidebar: customer count, countries served, avg time-to-payment improvement, avg $ recovered. Anything you can share, even ballpark, beats generic copy. Let's use 80+ customer
3. **Which pillar(s) get this treatment first?** Highest-traffic pillars (probably e-invoicing country posts) should ship first as a test bed before rolling sitewide. All
4. **Attribution destination** — should conversions land in Supabase (`marketing_leads` / new `conversions` table) so we can build a dashboard, or is a GA4/dataLayer push enough for now? Yes

Answer those and I'll cut a build plan sequenced across 2–3 milestones (quick wins → lead magnets → A/B tests).