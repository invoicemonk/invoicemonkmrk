/**
 * Inline mid-article CTA injector.
 *
 * Counts <h2> sections in a blog post's HTML and injects 1–3 contextual
 * CTAs after specific section breaks. CTAs are plain HTML so they render
 * inside the existing dangerouslySetInnerHTML block.
 *
 * IMPORTANT — Conversion policy:
 *   Every injected blog CTA points directly to the signup app. Blog
 *   articles must not route ready-to-convert readers through product
 *   pages (/compliance, /invoicing, /payments, /accounting) or the
 *   /free-invoice-generator. Contextual body links can still mention
 *   product pages for SEO/education, but CTAs go to signup.
 *
 * Placement:
 *   - ≥ 4 h2s: inject after the 2nd and after the 5th (or 70% mark).
 *   - ≥ 8 h2s: also inject after the 7th.
 *   - < 4 h2s: no inline CTAs (the bottom signup CTA is enough).
 *
 * Skip rules:
 *   - Never inject before the first h2 (above-the-fold stays clean).
 *   - Never inject right before/after another <aside>.
 */

interface InjectOptions {
  pillarId?: string;
  lang?: string;
  slug?: string;
}

interface CtaVariant {
  position: 'mid-1' | 'mid-2' | 'mid-3';
  copy: string;
  href: string;
  ctaLabel: string;
  utmCampaign: string;
}

const SIGNUP_BASE = 'https://app.invoicemonk.com/signup';

function signupHref(campaign: string): string {
  return `${SIGNUP_BASE}?utm_source=organic_blog&utm_medium=in_content&utm_campaign=${campaign}`;
}

// Compliance-platform positioning copy (no "free invoice generator", no "no signup required").
const copyByPillar: Record<string, { mid1: string; mid2: string; mid3: string }> = {
  'tax-compliance': {
    mid1: 'Stop wrestling with country-specific invoice rules. Invoicemonk issues compliant invoices with the right VAT/GST fields automatically.',
    mid2: 'Run your full invoicing workflow on a platform built for compliance — issue, track, and reconcile invoices in one place.',
    mid3: 'Ready to solve invoicing compliance for good? Create your Invoicemonk account.',
  },
  'getting-paid': {
    mid1: 'Get paid faster with compliant invoices, automated reminders, and built-in payment tracking — all in one platform.',
    mid2: 'Move from chasing payments to managing them. Invoicemonk gives you reminders, status, and reconciliation in one workflow.',
    mid3: 'Ready to put this into practice? Create your Invoicemonk account.',
  },
  'business-finances': {
    mid1: 'See revenue, expenses, and outstanding invoices in one compliance-ready platform built for small businesses.',
    mid2: 'Run invoicing, payments, and records on one platform — without juggling spreadsheets or disconnected tools.',
    mid3: 'Ready to organize your business finances? Create your Invoicemonk account.',
  },
  freelancing: {
    mid1: 'Issue tax-aware, professional invoices and track payments in one platform built for freelancers.',
    mid2: 'Replace spreadsheets and Word templates with a compliance-ready invoicing platform.',
    mid3: 'Ready to professionalize your invoicing? Create your Invoicemonk account.',
  },
  'invoicing-mastery': {
    mid1: 'Issue compliant, professional invoices in minutes — with automatic tax handling and payment tracking built in.',
    mid2: 'Run your invoicing on a platform that handles numbering, tax fields, and audit trail for you.',
    mid3: 'Ready to upgrade your invoicing? Create your Invoicemonk account.',
  },
  invoicing: {
    mid1: 'Issue compliant, professional invoices in minutes — with automatic tax handling and payment tracking built in.',
    mid2: 'Run your invoicing on a platform that handles numbering, tax fields, and audit trail for you.',
    mid3: 'Ready to upgrade your invoicing? Create your Invoicemonk account.',
  },
};

const defaultCopy = {
  mid1: 'Issue compliant invoices, track payments, and keep records organized — all on one platform built for small businesses.',
  mid2: 'Move your invoicing onto a platform built for compliance, not a generic free template.',
  mid3: 'Ready to put this into practice? Create your Invoicemonk account.',
};

function buildVariants(opts: InjectOptions): CtaVariant[] {
  const c = (opts.pillarId && copyByPillar[opts.pillarId]) || defaultCopy;

  return [
    {
      position: 'mid-1',
      copy: c.mid1,
      href: signupHref('mid_article_cta_1'),
      ctaLabel: 'Start compliance-ready invoicing',
      utmCampaign: 'mid_article_cta_1',
    },
    {
      position: 'mid-2',
      copy: c.mid2,
      href: signupHref('mid_article_cta_2'),
      ctaLabel: 'Create your Invoicemonk account',
      utmCampaign: 'mid_article_cta_2',
    },
    {
      position: 'mid-3',
      copy: c.mid3,
      href: signupHref('mid_article_cta_3'),
      ctaLabel: 'Solve invoicing compliance today',
      utmCampaign: 'mid_article_cta_3',
    },
  ];
}

function renderCta(v: CtaVariant, pillarId?: string, slug?: string): string {
  return [
    `<aside class="inline-cta" data-cta-position="${v.position}" data-cta-pillar="${pillarId || 'default'}" data-cta-slug="${slug || ''}">`,
    `<p class="inline-cta__copy">${v.copy}</p>`,
    `<a class="inline-cta__primary" href="${v.href}" target="_blank" rel="noopener noreferrer" data-cta-position="${v.position}" data-cta-pillar="${pillarId || 'default'}">${v.ctaLabel} <span aria-hidden="true">→</span></a>`,
    `</aside>`,
  ].join('');
}

/**
 * Inject inline CTAs after selected <h2> section breaks.
 * Idempotent: skips if any `.inline-cta` markers are already present.
 */
export function injectInlineCTAs(html: string, opts: InjectOptions = {}): string {
  if (!html) return html;
  if (/class\s*=\s*["'][^"']*\binline-cta\b/.test(html)) return html;

  const h2Regex = /<h2\b[^>]*>/gi;
  const positions: number[] = [];
  let m: RegExpExecArray | null;
  while ((m = h2Regex.exec(html)) !== null) {
    positions.push(m.index);
  }
  if (positions.length < 4) return html;

  const targets = new Set<number>();
  if (positions.length >= 4 && positions[2] !== undefined) targets.add(2);
  if (positions.length >= 6 && positions[5] !== undefined) targets.add(5);
  if (positions.length >= 8 && positions[7] !== undefined) targets.add(7);

  const variants = buildVariants(opts);
  const ordered = Array.from(targets).sort((a, b) => a - b);

  let out = html;
  for (let i = ordered.length - 1; i >= 0; i--) {
    const ordinal = ordered[i];
    const insertAt = positions[ordinal];
    const variant = variants[i] || variants[0];

    const window = out.slice(Math.max(0, insertAt - 250), insertAt);
    if (/<aside\b/i.test(window)) continue;

    const ctaHtml = renderCta(variant, opts.pillarId, opts.slug);
    out = out.slice(0, insertAt) + ctaHtml + out.slice(insertAt);
  }

  return out;
}

export default injectInlineCTAs;
