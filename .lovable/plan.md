

# Update Marketing Website with Accurate Plan Details

## Overview
Update the pricing page, locale configs, and plan feature data to match the actual product tiers from the database. This includes fixing pricing discrepancies, adding a detailed feature comparison table, and updating plan descriptions.

---

## Changes

### 1. Fix Pricing in Locale Files

Two locale files have incorrect Business tier prices:

- **`src/locales/en-GB.ts`**: Change `business: 15` to `business: 12`
- **`src/locales/en-CA.ts`**: Change `business: 25` to `business: 20`

### 2. Update Plan Descriptions and Features in `src/config/pricingPlans.ts`

Update taglines to match the app:
- Free: "For individuals getting started"
- Starter: "For solo businesses ready to grow"
- Professional: "For growing businesses"
- Business: "For enterprises with advanced needs"

Replace the generic feature bullet lists with accurate limits and features:

**Free tier:**
- 5 invoices and 5 receipts/month
- 1 currency account
- 1 payment method per currency
- Accounting, expenses, credit notes
- Invoice verification portal
- Invoicemonk watermark on PDFs

**Starter tier (Nigeria only):**
- Unlimited invoices and receipts
- 3 currency accounts
- 2 payment methods per currency
- Everything in Free, plus higher limits
- Invoicemonk watermark on PDFs

**Professional tier:**
- Unlimited invoices, receipts, and currencies
- Up to 5 team members
- Unlimited payment methods
- Full audit trail and data exports
- Custom branding, premium templates
- No watermark on PDFs

**Business tier:**
- Everything in Professional
- Unlimited team members
- API access
- Enterprise-grade support

### 3. Add Feature Comparison Table to Pricing Page (`src/pages/Pricing.tsx`)

Add a new section below the pricing cards showing a detailed side-by-side comparison table with two groups:

**Limits table**: Invoices/month, Receipts/month, Currency accounts, Team members, Payment methods per currency

**Features table**: Accounting module, Expense tracking, Credit notes, In-app support, Invoice verification, Full audit trail, Custom branding, Data exports, Advanced reports, Premium templates, Watermark-free PDFs, API access

The table will be responsive -- on mobile it will stack or scroll horizontally.

### 4. Update `SoftwareApplicationSchema.tsx`

Update the schema offers to reflect corrected pricing and ensure the Starter plan offer is only included conditionally (when locale has `starterAvailable: true`).

---

## Files Modified

| File | What Changes |
|------|-------------|
| `src/locales/en-GB.ts` | Business price: 15 to 12 |
| `src/locales/en-CA.ts` | Business price: 25 to 20 |
| `src/config/pricingPlans.ts` | Updated descriptions, accurate feature lists |
| `src/pages/Pricing.tsx` | Add feature comparison table section |
| `src/components/seo/SoftwareApplicationSchema.tsx` | Locale-aware offers |

No new dependencies needed. All changes use existing UI components and Tailwind classes.
