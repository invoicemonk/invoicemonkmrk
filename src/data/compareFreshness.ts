/**
 * Single source of truth for the editorial review date of every /compare/* page.
 *
 * Used by:
 *  - `ReviewedLine` (visible "Reviewed <date>" line on the page)
 *  - each page's Article schema `dateModified`
 *  - `scripts/check-compare-freshness.ts`, which flags anything older than 60 days
 *
 * Update the date here when a page's facts, pricing or verdict are re-checked.
 */
export const COMPARE_REVIEWED: Record<string, string> = {
  // Head-to-head
  'invoicemonk-vs-freshbooks': '2026-08-29',
  'invoicemonk-vs-wave': '2026-08-29',
  'invoicemonk-vs-zoho-invoice': '2026-08-29',
  'invoicemonk-vs-quickbooks': '2026-08-29',
  'invoicemonk-vs-dext': '2026-08-29',
  'invoicemonk-vs-atoinvoice': '2026-08-29',
  'invoicemonk-vs-stripe': '2026-08-29',
  'invoicemonk-vs-stripe-invoicing': '2026-08-29',
  'invoicemonk-estimates-vs-quickbooks': '2026-08-29',
  'invoicemonk-vs-expensify': '2026-08-29',
  'invoicemonk-vs-shoeboxed': '2026-08-29',
  'invoicemonk-vs-wave-receipts': '2026-08-29',

  // Roundups
  'best-invoicing-software': '2026-08-29',
  'best-free-invoicing-software': '2026-08-29',
  'best-invoicing-software-freelancers': '2026-08-29',
  'best-receipt-scanner-app': '2026-08-29',
  'best-invoicing-software-for-small-business': '2026-08-29',
  'best-invoicing-software-for-consultants': '2026-08-29',
  'best-invoicing-software-for-contractors': '2026-08-29',
  'free-invoice-generator-vs-paid': '2026-08-29',

  // Competitor alternatives
  'wave-alternatives': '2026-08-29',
  'quickbooks-alternatives': '2026-08-29',
  'freshbooks-alternatives': '2026-08-29',
  'zoho-invoice-alternatives': '2026-08-29',
  'wave-alternative-nigeria': '2026-08-29',
  'wave-alternative-uk': '2026-08-29',
  'wave-alternative-australia': '2026-08-29',
  'wave-alternative-south-africa': '2026-08-29',

  // Country roundups
  'best-invoicing-software-usa': '2026-08-29',
  'best-invoicing-software-uk': '2026-08-29',
  'best-invoicing-software-canada': '2026-08-29',
  'best-invoicing-software-australia': '2026-08-29',
  'best-invoicing-software-france': '2026-08-29',
  'best-invoicing-software-italy': '2026-08-29',
  'best-invoicing-software-india': '2026-08-29',
  'best-invoicing-software-nigeria': '2026-08-29',
  'best-invoicing-software-kenya': '2026-08-29',
  'best-invoicing-software-ghana': '2026-08-29',
  'best-invoicing-software-south-africa': '2026-08-29',
  'best-invoicing-software-saudi-arabia': '2026-08-29',
  'best-invoicing-software-malaysia': '2026-08-29',
};

/** Days since a compare page was last reviewed, or null when unknown. */
export function daysSinceReview(slug: string, now: Date = new Date()): number | null {
  const date = COMPARE_REVIEWED[slug];
  if (!date) return null;
  return Math.floor((now.getTime() - new Date(date).getTime()) / 86_400_000);
}
