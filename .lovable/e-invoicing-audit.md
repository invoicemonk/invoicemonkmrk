# Phase 0 Audit — E-Invoicing Claims Currently on the Site

Generated: 2026-06-23. Purpose: surface every mandate Invoicemonk already
claims to support somewhere on the marketing site, with the strongest and
weakest version of each claim, so you can confirm the "Live mandates" list
before any new pages are built.

> **Decision required from you, not me:** for each row below, tell me
> whether the mandate is **Live** (build the page, single Pro CTA) or
> **Remove** (delete every existing claim — we will not author a page for
> it). Per your instruction, there is no "coming soon" or "roadmap" third
> option. Either we claim it because the product does it, or we strip the
> claim.

---

## Mandates currently named in marketing copy

| # | Mandate | Country | Strongest claim on site today | Weakest / vaguest claim | Files |
|---|---------|---------|-------------------------------|-------------------------|-------|
| 1 | **ZATCA Phase 1 + Phase 2 (Fatoorah)** | Saudi Arabia | "Fatoorah-compliant e-invoices with QR codes, cryptographic stamps (CSID), and all mandatory fields required by ZATCA Phase 1 and Phase 2" + "direct government submission on the Biz plan" | (consistent — strong everywhere) | `en-SA.ts`, `bestInvoicingSoftware.json`, `home.json`, `whyInvoicemonk.json`, `llms-full.txt` |
| 2 | **MyInvois (LHDN)** | Malaysia | "Generates e-invoices in the format required by LHDN's MyInvois platform, including all mandatory fields" | "MyInvois-ready format" / "MyInvois-compatible" — *format-compatible, not submission-integrated* | `en-MY.ts` |
| 3 | **Peppol** | EU + AU + NZ + SG + JP + UK + CA | "EU PEPPOL submission on the Biz plan" / "direct government submission to PEPPOL" | "Supports e-invoicing standards including Peppol" — locale FAQs only name-check it | `bestInvoicingSoftware.json`, `home.json`, `whyInvoicemonk.json`, `en-GB.ts`, `en-CA.ts` |
| 4 | **FIRS MBS (e-invoicing)** | Nigeria | "Direct government submission on the Biz plan (FIRS MBS)" | Locale FAQ says "VAT-compliant invoicing" with no MBS mention | `bestInvoicingSoftware.json`, `en-NG.ts`, `llms-full.txt` |
| 5 | **GST IRN via NIC portal** | India | "Supports GST e-invoicing with Invoice Reference Numbers (IRN) via the NIC portal … under CBIC mandates" | "GSTIN-compliant tax invoicing" / "E-invoicing compliance readiness" | `en-IN.ts`, `llms-full.txt` |
| 6 | **KSeF** | Poland | "KSeF structured e-invoicing compliance" (content intents) | "KSeF-ready fields" — *field-level, no submission claimed* | `freelancers.json`, `multiCurrencyInvoicing.json`, `contentIntents.ts` |
| 7 | **Making Tax Digital (MTD)** | United Kingdom | "MTD ready" / locale FAQ: "supports e-invoicing standards including Peppol and Making Tax Digital (MTD) requirements" | "HMRC MTD" — listed as a tax preset, no submission claim | `en-GB.ts`, `bestInvoicingSoftware.json`, `llms-full.txt` |
| 8 | **KRA TIMS** (note: not eTIMS) | Kenya | Locale FAQ: "supports e-invoicing aligned with KRA TIMS (Tax Invoice Management System) requirements" | (only the FAQ) — *no mention of eTIMS, the current 2024+ system* | `en-KE.ts` |
| 9 | **GRA e-VAT** | Ghana | Locale FAQ: "supports e-invoicing aligned with GRA e-VAT invoicing requirements" | (only the FAQ — boilerplate wording) | `en-GH.ts` |
| 10 | **BIR CAS** | Philippines | Locale FAQ: "aligned with BIR CAS (Computerized Accounting System) requirements" | (only the FAQ — boilerplate wording) | `en-PH.ts` |
| 11 | **SARS** | South Africa | Locale FAQ: "aligned with SARS compliance requirements and South Africa's e-invoicing readiness initiatives" | (only the FAQ — boilerplate wording; SA has no live mandate) | `en-ZA.ts` |
| 12 | **ZIMRA fiscal device integration** | Zimbabwe | Locale FAQ: "aligned with ZIMRA fiscal device integration requirements" | (only the FAQ — boilerplate wording) | `en-ZW.ts` |
| 13 | **SRC VAT** | Seychelles | Locale FAQ: "aligned with SRC VAT compliance requirements" | (only the FAQ — boilerplate wording) | `en-SC.ts` |
| 14 | **CRA + Peppol Canada** | Canada | Locale FAQ: "aligned with CRA requirements and Peppol adoption in Canada" | (only the FAQ) | `en-CA.ts` |
| 15 | **SEF** | Serbia | Content intents: "SEF-compliant invoices", "Serbian e-invoicing mandate" | Not in any product page or locale FAQ — *content/blog only* | `contentIntents.ts` |
| 16 | **B2G structured formats** | United States | Locale FAQ: "supports e-invoicing with structured formats for B2G compliance" | "US has no federal e-invoicing mandate yet" — explicit hedge | `en-US.ts` |

## Cross-cutting features claimed alongside mandates

| Feature | Where claimed | Notes |
|---|---|---|
| **Cryptographic stamps (CSID)** | 15 locale FAQs, `home.json`, `whyInvoicemonk.json` | Identical boilerplate across all 15 locales — needs product confirmation it actually ships everywhere, not just for ZATCA |
| **Invoice Reference Numbers (IRN)** | 15 locale FAQs | Same — IRN is an India-specific concept; claiming it for Ghana/Zimbabwe/Seychelles reads as boilerplate copy-paste |
| **Digital signatures (QES)** | `invoicing.json`, locale FAQs | Needs product confirmation |
| **Direct government submission** | `bestInvoicingSoftware.json` — Biz tier only | Claimed for ZATCA, PEPPOL, FIRS MBS specifically |
| **QR-code verification portal** | `bestInvoicingSoftware.json` | Public verification link — claimed on every plan |
| **Immutable audit trail** | `home.json`, `bestInvoicingSoftware.json` | Claimed on every plan |

## Where the category claim currently lives (or doesn't)

| Surface | Current state | Gap |
|---|---|---|
| `index.html` `<title>` | (need to check — likely brand only) | No "e-invoicing" |
| `seoConfig.ts` `/` title | "Invoicing & Accounting Software for [X] Businesses" | No "e-invoicing" |
| `seoConfig.ts` `/` description | "Professional invoicing, expense tracking, and accounting" | No "e-invoicing" |
| Homepage hero (`en-US`) | "Invoicing built around compliance. / Not bolted on after." | Compliance framing, not category claim |
| Homepage badge | "TAX-COMPLIANT INVOICING" | Same |
| `SoftwareApplicationSchema` | (need to check `applicationSubCategory`) | Likely not `ElectronicInvoicingSoftware` |
| Navbar | No "E-invoicing" link | — |
| `llms.txt` ¶1 | "Compliance-first invoicing, accounting, and financial management platform" | "E-invoicing" is a Biz-tier bullet, not the headline category |
| Dedicated `/e-invoicing` route | Does not exist | — |
| Blog `/blog/e-invoicing-guide` etc. | Two guides exist (`EInvoicingGuide.tsx`, `EInvoicingMandatesGuide.tsx`) | Routed via `/blog/*` — correct per project memory; they will feed the new pillar |

## Inconsistencies that need a decision regardless of mandate scope

1. **Boilerplate locale FAQs**: 15 of the 15 English locale FAQs use the same template — "Yes. Invoicemonk supports e-invoicing aligned with [authority X] requirements. Every invoice can include digital signatures, cryptographic stamps (CSID), and unique Invoice Reference Numbers (IRN)." IRN is an India-specific term. CSID is a ZATCA-specific term. Either the product genuinely emits both for every jurisdiction, or these FAQs are over-claiming and need to be rewritten per-mandate.
2. **MyInvois "ready" vs "submitting"**: copy says "format required by LHDN" but never claims direct submission to MyInvois. If product *does* submit, copy should say so; if it doesn't, the page should claim format compliance only.
3. **KRA TIMS vs eTIMS**: Kenya migrated from TIMS to **eTIMS** in late 2023. Site still says "TIMS". This is a factual error that needs fixing regardless of scope decision.
4. **`/invoicing` page still advertises "free to start"** in `seoConfig.ts` even though the entire site moved to paid-only Pro from $15/mo. This is stale and contradicts the recent pricing change — fixing it is required before the new `/e-invoicing` page ships, otherwise the two pages will contradict each other.

## Recommendation on `/invoicing` vs `/e-invoicing`

Based on what's in the codebase, **keep both pages, differentiate hard**:

- `/invoicing` retargets to the everyday "invoicing software / invoice generator" buyer. Templates, reminders, multi-currency, payments. No e-invoicing keywords in title or H1.
- `/e-invoicing` is the new category pillar. Owns "e-invoicing platform / software" and the mandate keyword cluster. No "invoicing software" in title or H1.
- The two pages target different SERPs and different buyers. A 301 would forfeit the existing rankings `/invoicing` has built.

I will enforce the anti-cannibalization rules listed in the approved plan.

---

## What I need from you to move to Phase 1

For each numbered mandate in the first table, reply with **Live** or **Remove**. Anything marked **Live** gets a `/e-invoicing/{slug}` page in Phase 3 and stays in the locale FAQ. Anything marked **Remove** gets stripped from every file listed in its row in Phase 1 — no page, no FAQ mention, no llms.txt line.

Also confirm one of:
- (a) CSID + IRN + digital signatures genuinely ship for every jurisdiction (keep locale FAQ wording), or
- (b) They are mandate-specific (I rewrite each locale FAQ to claim only what's true for that jurisdiction).

Once you reply, I move to Phase 1 (the 5-surface category claim) and then build only the confirmed Live mandate pages.
