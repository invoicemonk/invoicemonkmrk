/**
 * Shared CTA copy per pillar.
 *
 * Conversion policy: Blog CTAs send ready-to-convert readers directly to
 * signup. We do not route them through the free invoice generator or
 * product pages (/compliance, /invoicing, /payments, /accounting).
 * Contextual links inside article body text can still cite product pages
 * for SEO and education — but CTA components do not.
 */

export const SIGNUP_URL = 'https://app.invoicemonk.com/signup';

export function buildSignupHref(campaign: string, medium = 'article_end'): string {
  return `${SIGNUP_URL}?utm_source=organic_blog&utm_medium=${medium}&utm_campaign=${campaign}`;
}

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
