import { useEffect, useState } from 'react';
import { X, ArrowRight, Download } from 'lucide-react';
import { logConversion, logConversionOnce } from '@/lib/conversionTracking';
import { buildSignupHref } from '@/data/pillarCTAs';
import { getMagnetForPost } from '@/data/leadMagnets';

interface StickyBlogCTAProps {
  pillarId?: string;
  slug?: string;
  targetCountry?: string;
  /** CSS selector of the ContentUpgradeCard anchor to scroll into view. */
  upgradeAnchor?: string;
}

const DISMISS_KEY = 'im_sticky_blog_cta_dismissed_at';
const DISMISS_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

function isDismissed(): boolean {
  try {
    const raw = localStorage.getItem(DISMISS_KEY);
    if (!raw) return false;
    const ts = parseInt(raw, 10);
    if (Number.isNaN(ts)) return false;
    return Date.now() - ts < DISMISS_TTL_MS;
  } catch {
    return false;
  }
}

function pillarHook(pillarId?: string): string {
  switch (pillarId) {
    case 'tax-compliance':
    case 'e-invoicing':
      return 'Stop guessing at country-specific invoice rules.';
    case 'getting-paid':
      return 'Get paid faster — with reminders and tracking built in.';
    case 'freelancing':
      return 'Professional, tax-aware invoices in minutes.';
    case 'invoicing-mastery':
    case 'invoicing':
      return 'Compliant invoicing on a real platform, not a template.';
    default:
      return 'Compliant invoicing, payments, and records on one platform.';
  }
}

export function StickyBlogCTA({ pillarId, slug, targetCountry, upgradeAnchor = '#content-upgrade' }: StickyBlogCTAProps) {
  const [visible, setVisible] = useState(false);
  const [shownOnce, setShownOnce] = useState(false);
  const magnet = getMagnetForPost(pillarId, targetCountry);

  useEffect(() => {
    if (isDismissed()) return;
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? scrollTop / docHeight : 0;
      if (pct > 0.25) {
        setVisible(true);
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (visible && !shownOnce) {
      setShownOnce(true);
      logConversionOnce(`sticky_impression:${slug || 'x'}`, {
        eventType: 'impression',
        placement: 'sticky',
        pillarId,
        slug,
        ctaVariant: 'sticky_bar',
      });
    }
  }, [visible, shownOnce, pillarId, slug]);

  const dismiss = () => {
    try {
      localStorage.setItem(DISMISS_KEY, Date.now().toString());
    } catch {
      // ignore
    }
    logConversion({
      eventType: 'sticky_dismiss',
      placement: 'sticky',
      pillarId,
      slug,
    });
    setVisible(false);
  };

  const onGrab = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector(upgradeAnchor) as HTMLElement | null;
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const input = el.querySelector('input[type="email"]') as HTMLInputElement | null;
      setTimeout(() => input?.focus(), 500);
    }
    logConversion({
      eventType: 'sticky_click',
      placement: 'sticky',
      pillarId,
      slug,
      magnet: magnet.id,
      ctaVariant: 'download',
    });
  };

  const onSignup = () => {
    logConversion({
      eventType: 'sticky_click',
      placement: 'sticky',
      pillarId,
      slug,
      ctaVariant: 'signup',
    });
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Get compliant invoicing"
      className="fixed bottom-0 inset-x-0 z-40 border-t border-border bg-background/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.08)] animate-in slide-in-from-bottom-2 duration-300"
    >
      <div className="container mx-auto px-4 py-3 flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground truncate">{pillarHook(pillarId)}</p>
          <p className="text-xs text-muted-foreground hidden sm:block">
            Grab the free {magnet.title} or spin up your Invoicemonk account.
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href={upgradeAnchor}
            onClick={onGrab}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium border border-border hover:bg-muted transition-colors"
          >
            <Download className="w-4 h-4" />
            Free checklist
          </a>
          <a
            href={buildSignupHref('blog_sticky_bar', 'sticky', pillarId)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onSignup}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Start now
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={dismiss}
            aria-label="Dismiss"
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default StickyBlogCTA;
