import { useState, useEffect, useMemo } from 'react';
import { Link } from '@/components/LocalizedLink';
import { BookOpen, ChevronDown, ChevronUp, ArrowRight, Sparkles, CheckCircle2, Download, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { Pillar } from '@/data/topicalMap';
import type { BlogPost } from '@/data/blogPosts';
import { VALUE_BULLETS, PROOF_LINE } from '@/data/pillarCTAs';
import { logConversion } from '@/lib/conversionTracking';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface ArticleSidebarProps {
  post: BlogPost;
  pillar?: Pillar;
  clusterPosts?: BlogPost[];
}

const APP_SIGNUP = 'https://app.invoicemonk.com/signup?plan=professional';
const APP_LOGIN = 'https://app.invoicemonk.com/login';

export function ArticleSidebar({ post, pillar, clusterPosts = [] }: ArticleSidebarProps) {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [showFullToc, setShowFullToc] = useState(false);

  // Extract TOC from post content
  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(post.content, 'text/html');
    const headings = doc.querySelectorAll('h2, h3');
    const items: TocItem[] = Array.from(headings).map((heading, index) => {
      const id =
        heading.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, '-') ||
        `heading-${index}`;
      return {
        id,
        text: heading.textContent || '',
        level: parseInt(heading.tagName.charAt(1)),
      };
    });
    setTocItems(items);
  }, [post.content]);

  // Active heading observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-80px 0px -80% 0px' }
    );
    tocItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [tocItems]);

  const displayedToc = showFullToc ? tocItems : tocItems.slice(0, 6);
  const hasMore = tocItems.length > 6;

  const seriesPosts = useMemo(
    () => clusterPosts.filter((p) => p.slug !== post.slug).slice(0, 5),
    [clusterPosts, post.slug]
  );

  const ctaCampaign = pillar?.id || 'general';
  const signupHref = `${APP_SIGNUP}&utm_source=blog&utm_medium=sidebar_cta&utm_campaign=${ctaCampaign}`;
  const accent = pillar?.color;

  return (
    <div className="sticky top-24 space-y-6">
      {/* Table of Contents */}
      {tocItems.length > 0 && (
        <Card className="border-border/50 overflow-hidden">
          <CardHeader
            className="pb-3"
            style={accent ? { borderBottom: `2px solid ${accent}` } : undefined}
          >
            <CardTitle className="flex items-center gap-2 text-base">
              <BookOpen
                className="h-4 w-4"
                style={accent ? { color: accent } : { color: 'hsl(var(--primary))' }}
              />
              <span>In This Article</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <nav aria-label="Table of contents">
              <ul className="space-y-2">
                {displayedToc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={cn(
                        'block text-sm transition-colors hover:text-primary',
                        item.level === 3 && 'pl-4',
                        activeId === item.id ? 'font-medium' : 'text-muted-foreground'
                      )}
                      style={
                        activeId === item.id && accent
                          ? { color: accent }
                          : undefined
                      }
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
              {hasMore && (
                <button
                  onClick={() => setShowFullToc(!showFullToc)}
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mt-3 transition-colors"
                >
                  {showFullToc ? (
                    <>
                      <ChevronUp className="h-3 w-3" />
                      Show less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-3 w-3" />
                      {tocItems.length - 6} more sections
                    </>
                  )}
                </button>
              )}
            </nav>
          </CardContent>
        </Card>
      )}

      {/* More in this Series */}
      {pillar && seriesPosts.length > 0 && (
        <Card className="border-border/50 overflow-hidden">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">More in this Series</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <ul className="space-y-3">
              {seriesPosts.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/blog/${p.slug}`}
                    className="group flex items-start gap-3 text-sm hover:text-primary transition-colors"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 transition-transform group-hover:scale-125"
                      style={{ backgroundColor: accent || 'hsl(var(--primary))' }}
                    />
                    <span className="line-clamp-2">{p.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Signup CTA — value bullets + proof line + dual CTAs */}
      <Card
        className="border-2 overflow-hidden"
        style={accent ? { borderColor: accent } : { borderColor: 'hsl(var(--primary))' }}
      >
        <CardContent className="p-6">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
            style={{
              backgroundColor: accent ? `${accent}20` : 'hsl(var(--primary) / 0.15)',
            }}
          >
            <Sparkles className="h-5 w-5" style={{ color: accent || 'hsl(var(--primary))' }} />
          </div>
          <h3 className="font-bold text-foreground text-base mb-1">
            Get compliant invoicing today
          </h3>
          <p className="text-xs text-muted-foreground mb-4">
            Pro from $15/mo. Cancel anytime.
          </p>

          <ul className="space-y-1.5 mb-4">
            {VALUE_BULLETS.map((b) => (
              <li key={b} className="flex items-start gap-2 text-xs text-foreground/80">
                <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: accent || 'hsl(var(--primary))' }} />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <Button
            asChild
            size="sm"
            className="w-full group mb-2"
            style={accent ? { backgroundColor: accent, color: 'white' } : undefined}
          >
            <a
              href={signupHref}
              onClick={() =>
                logConversion({
                  eventType: 'click',
                  placement: 'sidebar',
                  pillarId: pillar?.id,
                  slug: post.slug,
                  ctaVariant: 'signup',
                })
              }
            >
              <span>Create account</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <a
            href="#content-upgrade"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector('#content-upgrade') as HTMLElement | null;
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                const input = el.querySelector('input[type="email"]') as HTMLInputElement | null;
                setTimeout(() => input?.focus(), 500);
              }
              logConversion({
                eventType: 'click',
                placement: 'sidebar',
                pillarId: pillar?.id,
                slug: post.slug,
                ctaVariant: 'download_soft',
              });
            }}
            className="flex items-center justify-center gap-1.5 w-full py-2 rounded-md text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            Or grab the free checklist
          </a>

          <div className="mt-4 pt-4 border-t border-border/60 flex items-center gap-1.5 justify-center">
            <div className="flex" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-3 h-3 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-[11px] text-muted-foreground">{PROOF_LINE}</span>
          </div>

          <a
            href={APP_LOGIN}
            className="block mt-3 text-[11px] text-muted-foreground hover:text-primary transition-colors text-center"
          >
            Already have an account? Log in
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
