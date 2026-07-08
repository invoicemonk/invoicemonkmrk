import { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Download, Loader2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { logConversion, logConversionOnce } from '@/lib/conversionTracking';
import { getMagnetForPost, type LeadMagnet } from '@/data/leadMagnets';
import { buildSignupHref } from '@/data/pillarCTAs';

interface ContentUpgradeCardProps {
  pillarId?: string;
  targetCountry?: string;
  slug?: string;
  placement?: string; // e.g. 'article_top', 'blog_hero'
  /** Force a specific magnet regardless of pillar. */
  magnet?: LeadMagnet;
  variant?: 'inline' | 'compact';
  anchorId?: string;
}

export function ContentUpgradeCard({
  pillarId,
  targetCountry,
  slug,
  placement = 'article_top',
  magnet,
  variant = 'inline',
  anchorId = 'content-upgrade',
}: ContentUpgradeCardProps) {
  const chosen = magnet || getMagnetForPost(pillarId, targetCountry);
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const rootRef = useRef<HTMLElement | null>(null);

  // Log impression + form_view once per session per placement
  useEffect(() => {
    const key = `${placement}:${chosen.id}:${slug || ''}`;
    logConversionOnce(`impression:${key}`, {
      eventType: 'impression',
      placement,
      pillarId,
      slug,
      magnet: chosen.id,
      ctaVariant: 'content_upgrade',
    });

    if (!rootRef.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            logConversionOnce(`form_view:${key}`, {
              eventType: 'form_view',
              placement,
              pillarId,
              slug,
              magnet: chosen.id,
            });
          }
        }
      },
      { threshold: 0.4 }
    );
    io.observe(rootRef.current);
    return () => io.disconnect();
  }, [placement, chosen.id, slug, pillarId]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const fn = firstName.trim();
    const em = email.trim().toLowerCase();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em);
    if (!fn || fn.length > 50) return setError('Please enter your first name.');
    if (!emailOk || em.length > 255) return setError('Please enter a valid email address.');

    setSubmitting(true);
    try {
      const source = `content_upgrade_${chosen.id}${slug ? `_${slug}` : ''}`.slice(0, 100);
      const { data, error: fnError } = await supabase.functions.invoke('subscribe-marketing-lead', {
        body: { firstName: fn, email: em, source, magnet: chosen.id },
      });
      if (fnError || (data && (data as { error?: string }).error)) {
        throw new Error((data as { error?: string })?.error || fnError?.message || 'Failed');
      }
      const url = (data as { downloadUrl?: string })?.downloadUrl || chosen.file;
      setDownloadUrl(url);
      setSuccess(true);
      logConversion({
        eventType: 'form_submit',
        placement,
        pillarId,
        slug,
        magnet: chosen.id,
        ctaVariant: 'content_upgrade',
        extra: { source },
      });
      // Auto-trigger download for a snappy experience
      try {
        window.open(url, '_blank', 'noopener,noreferrer');
      } catch {
        // ignore
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const isCompact = variant === 'compact';

  return (
    <aside
      ref={rootRef}
      id={anchorId}
      className={`not-prose scroll-mt-24 my-10 rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-primary/[0.03] to-transparent ${
        isCompact ? 'p-5' : 'p-6 md:p-8'
      }`}
      data-cta-placement={placement}
      data-cta-variant="content_upgrade"
      data-cta-magnet={chosen.id}
    >
      {success ? (
        <div className="text-center py-2">
          <CheckCircle2 className="mx-auto h-10 w-10 text-primary mb-2" />
          <p className="text-lg font-semibold text-foreground mb-1">
            You're in, {firstName.trim()} — check your inbox.
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            Your download should have started automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            {downloadUrl && (
              <Button asChild variant="outline">
                <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  Download again
                </a>
              </Button>
            )}
            <Button asChild>
              <a
                href={buildSignupHref('content_upgrade_signup', 'article_upgrade', chosen.id)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  logConversion({
                    eventType: 'click',
                    placement: `${placement}_success`,
                    pillarId,
                    slug,
                    magnet: chosen.id,
                    ctaVariant: 'signup',
                  })
                }
              >
                Create your Invoicemonk account
              </a>
            </Button>
          </div>
        </div>
      ) : (
        <div className={isCompact ? '' : 'grid md:grid-cols-[1.1fr_1fr] gap-6 items-start'}>
          <div>
            <div className="flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-wide mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Content upgrade · Free PDF</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight mb-2">
              {chosen.headline}
            </h3>
            <p className="text-sm text-muted-foreground mb-3">{chosen.description}</p>
            {!isCompact && (
              <ul className="space-y-1.5 text-sm text-foreground/80">
                {chosen.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <form onSubmit={onSubmit} className="space-y-3">
            <div className="space-y-1.5">
              <Label htmlFor={`cu-first-${chosen.id}`} className="text-xs">
                First name
              </Label>
              <Input
                id={`cu-first-${chosen.id}`}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                maxLength={50}
                required
                autoComplete="given-name"
                placeholder="Alex"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor={`cu-email-${chosen.id}`} className="text-xs">
                Work email
              </Label>
              <Input
                id={`cu-email-${chosen.id}`}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={255}
                required
                autoComplete="email"
                placeholder="you@company.com"
              />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button type="submit" className="w-full" disabled={submitting}>
              {submitting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <Download className="w-4 h-4 mr-2" />
                  Send me the checklist
                </>
              )}
            </Button>
            <p className="text-[11px] text-muted-foreground text-center">
              No spam. Unsubscribe anytime. Trusted by 80+ businesses.
            </p>
          </form>
        </div>
      )}
    </aside>
  );
}

export default ContentUpgradeCard;
