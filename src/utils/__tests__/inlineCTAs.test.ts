import { describe, it, expect } from 'vitest';
import { injectInlineCTAs } from '../inlineCTAs';

const buildHtml = (h2Count: number) => {
  let html = '';
  for (let i = 1; i <= h2Count; i++) {
    html += `<h2>Section ${i}</h2><p>Body paragraph ${i} with enough content to be a real section.</p>`;
  }
  return html;
};

const countCtas = (html: string) => (html.match(/class="inline-cta /g) || []).length;

describe('injectInlineCTAs', () => {
  it('does not inject when fewer than 4 h2s', () => {
    const html = buildHtml(3);
    const out = injectInlineCTAs(html, { pillarId: 'invoicing' });
    expect(out).toBe(html);
  });

  it('injects the soft CTA only on a 4-h2 article', () => {
    const html = buildHtml(4);
    const out = injectInlineCTAs(html, { pillarId: 'invoicing', lang: 'en', slug: 'x' });
    expect(countCtas(out)).toBe(1);
    expect(out).toContain('inline-cta--soft');
  });

  it('injects soft + proof CTAs on a 6-h2 article', () => {
    const html = buildHtml(6);
    const out = injectInlineCTAs(html, { pillarId: 'getting-paid', lang: 'en' });
    expect(countCtas(out)).toBe(2);
    expect(out).toContain('inline-cta--proof');
  });

  it('injects soft + proof + urgency CTAs on a 9-h2 pillar article', () => {
    const html = buildHtml(9);
    const out = injectInlineCTAs(html, { pillarId: 'tax-compliance', lang: 'en' });
    expect(countCtas(out)).toBe(3);
    expect(out).toContain('inline-cta--urgency');
  });

  it('is idempotent', () => {
    const html = buildHtml(6);
    const once = injectInlineCTAs(html, { pillarId: 'invoicing' });
    const twice = injectInlineCTAs(once, { pillarId: 'invoicing' });
    expect(twice).toBe(once);
  });

  it('all hard CTAs point to the signup app', () => {
    const html = buildHtml(9);
    const out = injectInlineCTAs(html, { pillarId: 'tax-compliance', lang: 'en' });
    const hrefs = Array.from(out.matchAll(/class="inline-cta__primary" href="([^"]+)"/g)).map((mm) => mm[1]);
    expect(hrefs.length).toBe(2);
    for (const href of hrefs) {
      expect(href.startsWith('https://app.invoicemonk.com/signup')).toBe(true);
    }
  });

  it('the soft CTA scrolls to the content upgrade, not a product page', () => {
    const html = buildHtml(9);
    const out = injectInlineCTAs(html, { pillarId: 'invoicing', lang: 'fr' });
    const blocks = out.match(/<aside class="inline-cta [\s\S]*?<\/aside>/g) || [];
    expect(blocks.length).toBe(3);
    const soft = blocks.find((b) => b.includes('inline-cta--soft'))!;
    expect(soft).toContain('href="#content-upgrade"');
    for (const path of ['/free-invoice-generator', '/compliance', '/payments', '/accounting']) {
      expect(soft).not.toContain(path);
    }
  });

  it('preserves UTM params for analytics', () => {
    const html = buildHtml(6);
    const out = injectInlineCTAs(html, { pillarId: 'invoicing', lang: 'en' });
    expect(out).toContain('utm_source=organic_blog');
    expect(out).toContain('utm_medium=in_content');
    expect(out).toContain('utm_campaign=mid_article_proof');
  });

  it('uses mandate facts in the urgency CTA for country posts', () => {
    const html = buildHtml(9);
    const out = injectInlineCTAs(html, { pillarId: 'e-invoicing', lang: 'en', targetCountry: 'Kenya' });
    expect(out).toContain('inline-cta--urgency');
    expect(out).toMatch(/Kenya/);
  });
});
