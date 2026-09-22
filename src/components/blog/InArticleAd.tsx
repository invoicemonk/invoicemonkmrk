import { useEffect, useRef } from 'react';

/**
 * Google AdSense in-article unit.
 *
 * The loader script (`adsbygoogle.js`) is injected site-wide from index.html,
 * so this component only renders the slot and asks AdSense to fill it. The
 * push must happen on the client after hydration — during prerender there is
 * no `window`, and pushing twice for the same slot triggers
 * "adsbygoogle.push() error: All ins elements ... already have ads".
 */
const AD_CLIENT = 'ca-pub-9385120336874709';
const AD_SLOT = '3203402858';

/** Articles that carry the in-article ad unit. */
export const IN_ARTICLE_AD_SLUGS = new Set([
  'payment-reminder-email-templates',
  'how-to-write-invoice-payment-terms',
  'credit-notes-and-invoice-corrections',
  'invoice-terms-and-conditions-wording',
  'deposit-invoice-template-guide',
]);

export function InArticleAd() {
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current || typeof window === 'undefined') return;
    pushed.current = true;
    try {
      const w = window as typeof window & { adsbygoogle?: unknown[] };
      w.adsbygoogle = w.adsbygoogle || [];
      w.adsbygoogle.push({});
    } catch {
      // A blocked or not-yet-loaded ad script must never break the article.
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block', textAlign: 'center' }}
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client={AD_CLIENT}
      data-ad-slot={AD_SLOT}
    />
  );
}
