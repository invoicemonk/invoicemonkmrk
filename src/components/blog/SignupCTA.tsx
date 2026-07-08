import { ArrowRight, Download, Sparkles, CheckCircle2 } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useContentAnalytics } from '@/hooks/useContentAnalytics';
import { buildSignupHref, getSoftSell, PROOF_LINE, VALUE_BULLETS } from '@/data/pillarCTAs';
import { logConversion, logConversionOnce } from '@/lib/conversionTracking';

interface SignupCTAProps {
  pillarId?: string;
  slug?: string;
  /** UTM medium, e.g. 'article_inline' or 'article_end'. */
  medium?: string;
  /** UTM campaign id, e.g. 'blog_signup_cta_inline'. */
  campaign?: string;
  /** Override headline. */
  headline?: string;
  /** Anchor to scroll to for the soft (checklist) CTA. */
  upgradeAnchor?: string;
}

/**
 * End-of-article signup CTA with a soft secondary path (download the
 * free checklist) so cold readers have a low-friction next step.
 * Sends primary click straight to app.invoicemonk.com/signup.
 */
export function SignupCTA({
  pillarId,
  slug,
  medium = 'article_end',
  campaign = 'blog_signup_cta',
  headline = 'Solve invoicing compliance — start with Invoicemonk',
  upgradeAnchor = '#content-upgrade',
}: SignupCTAProps) {
  const subtext = getSoftSell(pillarId);
  const { trackEvent } = useContentAnalytics(slug, pillarId);
  const href = buildSignupHref(campaign, medium);
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            logConversionOnce(`signup_cta_impression:${medium}:${slug || ''}`, {
              eventType: 'impression',
              placement: medium,
              pillarId,
              slug,
              ctaVariant: 'signup',
            });
          }
        }
      },
      { threshold: 0.5 }
    );
    io.observe(rootRef.current);
    return () => io.disconnect();
  }, [medium, pillarId, slug]);

  const onSignupClick = () => {
    trackEvent('tool_cta_click', { cta: 'blog_signup', medium, campaign, pillarId });
    logConversion({
      eventType: 'click',
      placement: medium,
      pillarId,
      slug,
      ctaVariant: 'signup',
      extra: { campaign },
    });
  };

  const onSoftClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector(upgradeAnchor) as HTMLElement | null;
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const input = el.querySelector('input[type="email"]') as HTMLInputElement | null;
      setTimeout(() => input?.focus(), 500);
    }
    logConversion({
      eventType: 'click',
      placement: medium,
      pillarId,
      slug,
      ctaVariant: 'download_soft',
    });
  };

  return (
    <aside
      ref={rootRef}
      className="not-prose my-10 p-6 md:p-8 rounded-2xl border-2 border-primary/25 bg-gradient-to-br from-primary/10 via-primary/[0.04] to-transparent"
      data-cta-placement={medium}
      data-cta-variant="signup_dual"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-11 h-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-foreground text-xl leading-snug">{headline}</p>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{subtext}</p>
        </div>
      </div>

      <ul className="grid sm:grid-cols-3 gap-2 mb-5">
        {VALUE_BULLETS.map((b) => (
          <li key={b} className="flex items-start gap-2 text-xs text-foreground/80">
            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onSignupClick}
          className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
        >
          Create your Invoicemonk account
          <ArrowRight className="w-4 h-4" />
        </a>
        <a
          href={upgradeAnchor}
          onClick={onSoftClick}
          className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border-2 border-primary/30 text-primary text-sm font-semibold hover:bg-primary/5 transition-colors"
        >
          <Download className="w-4 h-4" />
          Grab the free checklist
        </a>
      </div>
      <p className="text-[11px] text-muted-foreground text-center mt-3">{PROOF_LINE}</p>
    </aside>
  );
}

export default SignupCTA;
