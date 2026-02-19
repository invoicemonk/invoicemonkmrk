

# SEO Optimization: Title Tags, Meta Descriptions, and Internal Linking

## Overview
Based on the GSC data, the biggest wins come from **CTR optimization** (better title tags and meta descriptions) on pages already ranking in positions 3-15, and **internal linking** to boost pages on the edge of page 1. No new pages needed -- just surgical copy refinements.

---

## Priority 1: Title Tag and Meta Description Rewrites

These pages have impressions but near-zero CTR. The fix is rewriting `<SEOHead>` title and description props to match actual user queries from GSC.

### 1a. Credit Notes Page (221 impressions, 1 click, pos 6.3)

**File**: `src/data/blogPosts.ts` (the blog post with slug `credit-notes-and-invoice-corrections`)

| Field | Current | New |
|-------|---------|-----|
| title | "Credit Notes and Invoice Corrections: The Right Way to Fix Billing Errors" | "Credit Notes: How and When to Use Them (With Examples)" |
| excerpt | "Learn how to properly issue credit notes..." | "What is a credit note? When should you issue one instead of a refund? Step-by-step guide with examples for small businesses." |

**Rationale**: GSC shows queries like "how to issue credit note", "when to use credit note", "credit note vs refund". The current title doesn't match these patterns.

### 1b. Recurring Invoices Page (232 impressions, 0 clicks, pos 14.4)

**File**: `src/data/blogPosts.ts` (slug `recurring-invoices-automating-billing`)

| Field | Current | New |
|-------|---------|-----|
| title | "Recurring Invoices: Automate Your Billing for Subscription and Retainer Clients" | "How to Set Up Recurring Invoices: Automate Billing for Retainers and Subscriptions" |
| excerpt | "Save time and ensure consistent cash flow..." | "Step-by-step guide to automating recurring invoices. Best practices for retainer billing, subscription clients, and monthly contracts." |

**Rationale**: GSC queries are "how to set up automatic recurring invoices", "best practices for automating recurring invoices", "recurring billing invoices". Adding "How to" and "Set Up" matches the query intent.

### 1c. International Payment Fees Blog (293 impressions, 1 click, pos 12.5)

**File**: `src/data/blogPosts.ts` (slug `international-payment-fees-explained`)

| Field | Current | New |
|-------|---------|-----|
| title | "International Payment Fees Explained: How to Save on Cross-Border Transactions" | "International Payment Fees Explained: How to Reduce Fees on Invoice Payments (2026)" |
| excerpt | (update to match) | "Compare international payment fees across Wise, PayPal, SWIFT, and card processors. Learn how to reduce fees on cross-border invoice payments." |

**Rationale**: Top GSC query is literally "how to reduce fees on international invoice payments" at pos 4.4. Putting this exact phrase in the title will boost CTR.

### 1d. PayPal vs Wise Page (72 impressions, 0 clicks, pos 6.0)

**File**: `src/pages/tools/PaypalVsWiseFees.tsx`

| Field | Current | New |
|-------|---------|-----|
| SEOHead title | "PayPal vs Wise Fees Compared \| Which Is Cheaper? \| Invoicemonk" | "PayPal vs Wise Fees: Which Is Cheaper for International Transfers? (2026)" |
| SEOHead description | "Compare PayPal and Wise fees for international payments..." | "Is Wise cheaper than PayPal? Side-by-side fee comparison for international transfers. See real cost breakdowns for $1K, $5K, and $10K transfers." |

**Rationale**: GSC shows "is wise cheaper than paypal for international transfers" and "wise vs paypal fees" at position 1. Adding the year and a clearer value prop improves CTR.

### 1e. Cheapest International Payments Page

**File**: `src/pages/tools/CheapestInternationalPayments.tsx`

| Field | Current | New |
|-------|---------|-----|
| SEOHead title | "Cheapest Way to Receive International Payments \| 2026 Guide \| Invoicemonk" | "Cheapest Way to Receive International Payments in 2026 \| Fee Comparison" |
| SEOHead description | "Find the cheapest way to receive international payments. Compare Wise, PayPal, bank transfers, and cards." | "Compare the cheapest international payment methods for invoices. Wise vs PayPal vs SWIFT vs cards -- ranked by total cost with a free fee calculator." |

**Rationale**: Matches "cheapest international payment methods for invoices 2026" (pos 6.7) and "settling international payments costs" (pos 4.3).

### 1f. Invoice Disputes Page (64 impressions, 0 clicks, pos 14.6)

**File**: `src/data/blogPosts.ts` (slug `invoice-disputes-how-to-handle-professionally`)

| Field | Current | New |
|-------|---------|-----|
| title | "Invoice Disputes: How to Handle Professionally and Preserve Relationships" | "How to Handle Invoice Disputes Professionally (Templates and Scripts)" |
| excerpt | "Learn professional approaches to resolve billing disagreements..." | "Invoice disputed by a client? Step-by-step process for resolving billing disagreements professionally, with email templates and response scripts." |

**Rationale**: GSC queries include "can you tell me about past invoice disputes and how you've resolved them" at pos 8-10. Adding "Templates and Scripts" increases perceived value.

---

## Priority 2: Internal Linking Boost

Add strategic internal links on high-authority pages to pass link equity to pages near the edge of page 1.

### 2a. Homepage Hero or GlobalComplianceSection

**File**: `src/components/home/GlobalComplianceSection.tsx`

Add a subtle link in the compliance section to the international payment fees tools:
- Within the bullet about "30+ supported jurisdictions" or the tagline area, add a small "See our international fee calculator" link pointing to `/international-payment-fee-calculator`

### 2b. Invoicing Page (best CTR page)

**File**: `src/pages/Invoicing.tsx`

In the existing content, add internal links to:
- `/blog/recurring-invoices-automating-billing` (from the "Recurring Billing" tab)
- `/blog/credit-notes-and-invoice-corrections` (from the compliance/audit trail section)
- `/free-invoice-generator` (as a "Try it free" link)

These are 2-3 small `<Link>` additions within existing copy, not layout changes.

### 2c. Free Invoice Generator Page

**File**: `src/pages/FreeInvoiceGenerator.tsx`

Add a "Related Resources" section at the bottom (similar to CheapestInternationalPayments pattern):
- Link to `/blog/5-essential-elements-of-an-invoice-a-guide-for-small-business-owners`
- Link to `/blog/invoice-numbering-best-practices`
- Link to `/invoicing` (upgrade CTA)

---

## Priority 3: Blog Post Meta for "Essential Elements" Page

**File**: `src/data/blogPosts.ts` (slug `5-essential-elements-of-an-invoice-a-guide-for-small-business-owners`)

| Field | Current | New |
|-------|---------|-----|
| title | (keep as-is, it's working) | No change |
| excerpt | (update) | "What must every invoice include? The 5 essential elements every small business invoice needs -- with a downloadable checklist and template." |

Adding "checklist" and "template" matches the query "essential elements invoice template" (pos 10).

---

## Files Modified Summary

| File | Change |
|------|--------|
| `src/data/blogPosts.ts` | Update title and excerpt for 4 blog posts (credit-notes, recurring-invoices, international-fees, invoice-disputes) |
| `src/pages/tools/PaypalVsWiseFees.tsx` | Update SEOHead title and description |
| `src/pages/tools/CheapestInternationalPayments.tsx` | Update SEOHead title and description |
| `src/pages/Invoicing.tsx` | Add 3 internal links within existing content |
| `src/pages/FreeInvoiceGenerator.tsx` | Add Related Resources section with 3 links |
| `src/components/home/GlobalComplianceSection.tsx` | Add subtle internal link to fee calculator |
| `src/data/blogPosts.ts` | Update excerpt for essential-elements post |

No new dependencies. No layout changes. Copy-only and link-only refinements targeting GSC-validated queries.

