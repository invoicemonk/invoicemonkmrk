/**
 * Inline mid-article CTA injector — funnel edition.
 *
 * Injects up to 3 differentiated CTAs at h2 boundaries instead of the
 * same signup ask repeated. The funnel:
 *
 *   after h2 #2 → SOFT — download the free checklist (scrolls to
 *                 <ContentUpgradeCard id="content-upgrade">).
 *   after h2 #5 → PROOF — trust line + free-trial-style signup.
 *   after h2 #7 → URGENCY — mandate-aware for country posts
 *                 (pulls liveSince from mandates.ts when available).
 *
 * Idempotent: skips if any `.inline-cta` markers are already present.
 * Never injects before the first h2 or adjacent to another <aside>.
 */

import { mandates } from '@/data/mandates';

interface InjectOptions {
  pillarId?: string;
  lang?: string;
  slug?: string;
  targetCountry?: string;
}

interface CtaVariant {
  position: 'mid-1' | 'mid-2' | 'mid-3';
  html: string;
  utmCampaign: string;
}

const SIGNUP_BASE = 'https://app.invoicemonk.com/signup?plan=professional';

function signupHref(campaign: string, medium = 'in_content', intent?: string): string {
  const intentParam = intent ? `&intent=${encodeURIComponent(intent)}` : '';
  return `${SIGNUP_BASE}&utm_source=organic_blog&utm_medium=${medium}&utm_campaign=${campaign}${intentParam}`;
}

function escapeAttr(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string));
}

/** SOFT — bounce user down to the ContentUpgradeCard for email capture. */
function renderMidSoft(opts: InjectOptions): CtaVariant {
  const pillar = opts.pillarId || 'default';
  return {
    position: 'mid-1',
    utmCampaign: 'mid_article_soft',
    html: [
      `<aside class="inline-cta inline-cta--soft" data-cta-position="mid-1" data-cta-pillar="${escapeAttr(pillar)}" data-cta-slug="${escapeAttr(opts.slug || '')}">`,
      `<p class="inline-cta__copy">Want this as a 1-page checklist you can keep? <strong>Grab the free PDF above ↑</strong> — no signup required.</p>`,
      `<a class="inline-cta__soft" href="#content-upgrade" data-cta-position="mid-1" data-cta-pillar="${escapeAttr(pillar)}" data-cta-action="scroll_to_upgrade">Send me the free checklist <span aria-hidden="true">↓</span></a>`,
      `</aside>`,
    ].join(''),
  };
}

/** PROOF — trust-first signup nudge with the 80+ businesses line. */
function renderMidProof(opts: InjectOptions): CtaVariant {
  const pillar = opts.pillarId || 'default';
  const copy: Record<string, string> = {
    'tax-compliance': 'Businesses in 20+ countries use Invoicemonk to stop worrying about tax fields, XML formats, and mandate deadlines.',
    'e-invoicing': 'Businesses in 20+ countries use Invoicemonk to clear e-invoices with local authorities automatically — no in-house dev team needed.',
    'getting-paid': 'Freelancers and agencies using Invoicemonk recover 90%+ of overdue invoices with automated reminder sequences.',
    freelancing: 'Freelancers using Invoicemonk get paid faster with tax-aware invoices and built-in reminders — trusted by 80+ businesses.',
    'invoicing-mastery': 'Small businesses using Invoicemonk cut invoicing time by 70% — one platform for invoices, payments, and records.',
  };
  const line = copy[opts.pillarId || ''] || 'Trusted by 80+ businesses across 20+ countries. One platform for compliant invoicing, payments, and records.';
  return {
    position: 'mid-2',
    utmCampaign: 'mid_article_proof',
    html: [
      `<aside class="inline-cta inline-cta--proof" data-cta-position="mid-2" data-cta-pillar="${escapeAttr(pillar)}" data-cta-slug="${escapeAttr(opts.slug || '')}">`,
      `<p class="inline-cta__copy"><strong>${line}</strong></p>`,
      `<a class="inline-cta__primary" href="${signupHref('mid_article_proof', 'in_content', pillar)}" target="_blank" rel="noopener noreferrer" data-cta-position="mid-2" data-cta-pillar="${escapeAttr(pillar)}">Create your Invoicemonk account <span aria-hidden="true">→</span></a>`,
      `</aside>`,
    ].join(''),
  };
}

/** URGENCY — mandate-aware for country posts, generic otherwise. */
function renderMidUrgency(opts: InjectOptions): CtaVariant {
  const pillar = opts.pillarId || 'default';
  let copy = 'You now know what to do. The gap between reading and shipping is where invoices leak and deadlines slip. Close it in 10 minutes.';
  let intent = pillar;

  if (opts.targetCountry) {
    const mandate = mandates.find(
      (m) => m.jurisdiction.toLowerCase() === opts.targetCountry!.toLowerCase()
    );
    if (mandate) {
      const label = mandate.mandate.split('—')[0].trim();
      copy = `${label} is live in ${mandate.jurisdiction} since ${new Date(mandate.liveSince).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}. Get compliant in under 10 minutes — Invoicemonk handles ${mandate.artefact.split('(')[0].trim()} for you.`;
      intent = mandate.slug;
    } else {
      copy = `${opts.targetCountry} invoicing compliance moves fast. Get set up in under 10 minutes with Invoicemonk — one platform, every mandatory field, full audit trail.`;
      intent = `country_${opts.targetCountry.toLowerCase().replace(/\s+/g, '_')}`;
    }
  }

  return {
    position: 'mid-3',
    utmCampaign: 'mid_article_urgency',
    html: [
      `<aside class="inline-cta inline-cta--urgency" data-cta-position="mid-3" data-cta-pillar="${escapeAttr(pillar)}" data-cta-slug="${escapeAttr(opts.slug || '')}">`,
      `<p class="inline-cta__copy">${escapeAttr(copy)}</p>`,
      `<a class="inline-cta__primary" href="${signupHref('mid_article_urgency', 'in_content', intent)}" target="_blank" rel="noopener noreferrer" data-cta-position="mid-3" data-cta-pillar="${escapeAttr(pillar)}">Get compliant today <span aria-hidden="true">→</span></a>`,
      `</aside>`,
    ].join(''),
  };
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

  // ordinals: 0-based index of the h2 to insert BEFORE
  const targets: Array<{ ordinal: number; variant: CtaVariant }> = [];
  if (positions[2] !== undefined) targets.push({ ordinal: 2, variant: renderMidSoft(opts) });
  if (positions.length >= 6 && positions[5] !== undefined) targets.push({ ordinal: 5, variant: renderMidProof(opts) });
  if (positions.length >= 8 && positions[7] !== undefined) targets.push({ ordinal: 7, variant: renderMidUrgency(opts) });

  // Apply back-to-front so earlier indices stay valid
  let out = html;
  for (let i = targets.length - 1; i >= 0; i--) {
    const { ordinal, variant } = targets[i];
    const insertAt = positions[ordinal];
    const window = out.slice(Math.max(0, insertAt - 250), insertAt);
    if (/<aside\b/i.test(window)) continue;
    out = out.slice(0, insertAt) + variant.html + out.slice(insertAt);
  }

  return out;
}

export default injectInlineCTAs;
