# Why the hero hasn't changed — and how to unblock it

## Root cause

1. **Phase 1 hasn't run.** The repositioning is still awaiting your audit sign-off. No file in `src/` has been edited with the new e-invoicing hero copy.
2. **A/B test hardcodes variant B.** `src/components/home/HeroSection.tsx:15` forces variant B visitors to `'Send invoices, get paid, anywhere'`, ignoring i18n. About half of all traffic sees this regardless of what we put in locale files.

## Two decisions needed from you

**A. Audit sign-off (still pending from previous turn).** Confirm Live vs Remove for the 16 mandates in `.lovable/e-invoicing-audit.md`, and whether CSID/IRN/digital-signature claims hold globally or per-mandate. Without this, Phase 1 cannot ship truthful copy. I confirm Live

**B. A/B variant B.** Pick one:

- **Kill variant B.** Remove the hardcoded string; both arms render the new e-invoicing headline from i18n. Cleanest, fastest, ends the running experiment.
- **Rewrite variant B.** Replace the hardcoded string with a second e-invoicing variation (e.g. `'E-invoicing for every mandate, in every market'`) so the A/B test continues but on category-claim copy.
- **Keep variant B as-is.** Not recommended — it actively undermines the repositioning for half your traffic.

## What ships in Phase 1 once both are answered

Single pass, no new pages yet:

1. `**src/locales/en-*.ts**` — `hero.headline` / `hero.headlineAccent` rewritten to `The global e-invoicing platform.` / `Mandate-compliant in {N} jurisdictions.` where `{N}` is the count you approve from the audit. Per-locale overrides where a local mandate is Live (e.g. en-SA leads with ZATCA Phase 2).
2. `**src/components/home/HeroSection.tsx**` — variant B handled per your choice in decision B. Sub-headline rewritten to the conversion line ending in Pro CTA.
3. `**src/components/seo/seoConfig.ts**` — homepage title + meta updated to `Invoicemonk — Global E-Invoicing Software for Freelancers, SMEs & Agencies` and matching description (≤160 chars).
4. `**src/components/seo/SoftwareApplicationSchema.tsx**` — add `applicationSubCategory: "ElectronicInvoicingSoftware"` and `featureList` enumerating approved-Live mandates only.
5. `**index.html**` — `<title>` and `<meta name="description">` mirrored to the new homepage values for first-paint and crawler parity.

## Out of scope for this unblock

- `/e-invoicing` pillar page (Phase 2)
- Per-mandate sub-pages (Phase 3)
- Comparison / locale FAQ / `pillarCTAs` / `ExitIntentPopup` rewrites (Phase 4)
- `llms.txt`, `topicalMap.ts`, `OrganizationSchema` (Phase 5)
- Per-mandate proof citations (Phase 6)

## What I need from you to proceed

1. Audit results (Live / Remove per mandate, claims scope). Live
2. Decision B above (kill / rewrite / keep variant B). Kill variant B