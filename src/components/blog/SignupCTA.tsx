import { ArrowRight, Sparkles } from 'lucide-react';
import { useContentAnalytics } from '@/hooks/useContentAnalytics';
import { buildSignupHref, getSoftSell } from '@/data/pillarCTAs';

interface SignupCTAProps {
  pillarId?: string;
  /** UTM medium, e.g. 'article_inline' or 'article_end'. */
  medium?: string;
  /** UTM campaign id, e.g. 'blog_signup_cta_inline'. */
  campaign?: string;
  /** Override headline. */
  headline?: string;
}

/**
 * Single, focused signup CTA used inside blog articles.
 *
 * Conversion policy: blog CTAs route ready-to-convert readers directly to
 * app.invoicemonk.com/signup. We do not stack multiple CTAs that send users
 * to the free invoice generator, /compliance, /invoicing, /payments, or
 * /accounting — those exits dilute conversion.
 */
export function SignupCTA({
  pillarId,
  medium = 'article_end',
  campaign = 'blog_signup_cta',
  headline = 'Solve invoicing compliance — start with Invoicemonk',
}: SignupCTAProps) {
  const subtext = getSoftSell(pillarId);
  const { trackEvent } = useContentAnalytics(undefined, pillarId);
  const href = buildSignupHref(campaign, medium);

  return (
    <aside className="my-10 p-6 rounded-2xl border border-primary/20 bg-primary/5">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
          <Sparkles className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-foreground text-lg leading-snug">{headline}</p>
          <p className="text-sm text-muted-foreground mt-2 mb-4 leading-relaxed">{subtext}</p>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('tool_cta_click', { cta: 'blog_signup', medium, campaign, pillarId })}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Create your Invoicemonk account
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </aside>
  );
}

export default SignupCTA;
