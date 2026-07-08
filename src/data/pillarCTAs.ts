/**
 * Shared CTA copy per pillar.
 *
 * Two-tier conversion strategy:
 *   1. SOFT — download a free checklist (email capture, nurture)
 *   2. HARD — create a paid Invoicemonk account (signup)
 *
 * Both CTAs sit side-by-side on every article-level surface. The soft
 * path exists because cold blog traffic almost never converts straight
 * to a paid plan; we capture the lead first and warm them up.
 */

export const SIGNUP_URL = 'https://app.invoicemonk.com/signup?plan=professional';

export function buildSignupHref(campaign: string, medium = 'article_end', intent?: string): string {
  const intentParam = intent ? `&intent=${encodeURIComponent(intent)}` : '';
  return `${SIGNUP_URL}&utm_source=organic_blog&utm_medium=${medium}&utm_campaign=${campaign}${intentParam}`;
}

/** Trust / proof line used across sidebar, mid-article CTAs, exit popup. */
export const PROOF_LINE = 'Trusted by 80+ businesses across 20+ countries.';

/** 3-bullet value block used in sidebar and end-of-article cards. */
export const VALUE_BULLETS: string[] = [
  'Country-specific invoice compliance built in',
  'Automated reminders, payment tracking & audit trail',
  'One platform for invoicing, payments, and records',
];

// Long-form soft sell (used by article-end CTA)
export const softSellByPillar: Record<string, string> = {
  'invoicing-mastery': "Stop patching invoicing together with templates and spreadsheets. Invoicemonk gives you compliant invoices, payment tracking, and an audit trail in one platform.",
  'getting-paid': "Get paid faster with compliant invoices, automated reminders, and built-in payment tracking — all in one platform.",
  'business-finances': "Run invoicing, expenses, and records on one compliance-ready platform — without juggling spreadsheets or disconnected tools.",
  'tax-compliance': "Tax compliance is hard. Invoicemonk handles country-specific invoice rules, VAT/GST fields, and audit trail for you.",
  freelancing: "Issue tax-aware, professional invoices and track payments in one platform built for freelancers and small businesses.",
  estimates: "Win more work and convert accepted estimates into compliant invoices in one click — all on one platform.",
  expenses: "Track expenses next to your invoicing and see real margins on a single compliance-ready platform.",
  'client-management': "Manage every client, invoice, and payment in one platform built for compliant invoicing.",
  receipts: "Issue tax-compliant receipts automatically when payments are recorded — no manual work, full audit trail.",
  invoicing: "Stop patching invoicing together with templates and spreadsheets. Invoicemonk gives you compliant invoices, payment tracking, and an audit trail in one platform.",
};

export const defaultSoftSell =
  "Use Invoicemonk to issue compliant invoices, track payments, and manage your full invoicing workflow on one platform.";

export function getSoftSell(pillarId?: string): string {
  return (pillarId && softSellByPillar[pillarId]) || defaultSoftSell;
}
