import { describe, it, expect } from 'vitest';
import { injectInlineCTAs } from '../inlineCTAs';

const buildHtml = (h2Count: number) => {
  let html = '';
  for (let i = 1; i <= h2Count; i++) {
    html += `<h2>Section ${i}</h2><p>Body paragraph ${i} with enough content to be a real section.</p>`;
  }
  return html;
};

describe('injectInlineCTAs', () => {
  it('does not inject when fewer than 4 h2s', () => {
    const html = buildHtml(3);
    const out = injectInlineCTAs(html, { pillarId: 'invoicing' });
    expect(out).toBe(html);
  });

  it('injects 1 CTA on a 4-h2 article', () => {
    const html = buildHtml(4);
    const out = injectInlineCTAs(html, { pillarId: 'invoicing', lang: 'en', slug: 'x' });
    const ctas = (out.match(/class="inline-cta"/g) || []).length;
    expect(ctas).toBe(1);
  });

  it('injects 2 CTAs on a 6-h2 article', () => {
    const html = buildHtml(6);
    const out = injectInlineCTAs(html, { pillarId: 'getting-paid', lang: 'en' });
    const ctas = (out.match(/class="inline-cta"/g) || []).length;
    expect(ctas).toBe(2);
  });

  it('injects 3 CTAs on an 8-h2 pillar article', () => {
    const html = buildHtml(9);
    const out = injectInlineCTAs(html, { pillarId: 'tax-compliance', lang: 'en' });
    const ctas = (out.match(/class="inline-cta"/g) || []).length;
    expect(ctas).toBe(3);
  });

  it('is idempotent', () => {
    const html = buildHtml(6);
    const once = injectInlineCTAs(html, { pillarId: 'invoicing' });
    const twice = injectInlineCTAs(once, { pillarId: 'invoicing' });
    expect(twice).toBe(once);
  });

  it('all injected CTAs point to the signup app', () => {
    const html = buildHtml(9);
    const out = injectInlineCTAs(html, { pillarId: 'tax-compliance', lang: 'en' });
    const hrefs = Array.from(out.matchAll(/class="inline-cta__primary" href="([^"]+)"/g)).map((mm) => mm[1]);
    expect(hrefs.length).toBe(3);
    for (const href of hrefs) {
      expect(href.startsWith('https://app.invoicemonk.com/signup')).toBe(true);
    }
  });

  it('never links to the free invoice generator or product pages', () => {
    const html = buildHtml(9);
    const out = injectInlineCTAs(html, { pillarId: 'invoicing', lang: 'fr' });
    const banned = ['/free-invoice-generator', '/compliance', '/invoicing', '/payments', '/accounting'];
    const ctas = out.match(/<aside class="inline-cta"[\s\S]*?<\/aside>/g) || [];
    expect(ctas.length).toBeGreaterThan(0);
    for (const block of ctas) {
      for (const path of banned) {
        expect(block).not.toContain(path);
      }
    }
  });

  it('preserves UTM params for analytics', () => {
    const html = buildHtml(5);
    const out = injectInlineCTAs(html, { pillarId: 'invoicing', lang: 'en' });
    expect(out).toContain('utm_source=organic_blog');
    expect(out).toContain('utm_medium=in_content');
    expect(out).toContain('utm_campaign=mid_article_cta_1');
  });
});
