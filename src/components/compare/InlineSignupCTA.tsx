import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface InlineSignupCTAProps {
  heading?: string;
  body?: string;
  buttonLabel?: string;
  href?: string;
  variant?: 'card' | 'banner' | 'compact';
}

/**
 * Mid-page CTA used inside comparison pages so readers can convert
 * without scrolling to the bottom. Mirrors the pattern from
 * /compare/invoicemonk-vs-dext.
 */
export function InlineSignupCTA({
  heading = 'Ready to switch?',
  body = 'Start free in under a minute. No credit card required.',
  buttonLabel = 'Start free with Invoicemonk',
  href = 'https://app.invoicemonk.com/signup?utm_source=compare&utm_medium=inline_cta&utm_campaign=mid_page',
  variant = 'card',
}: InlineSignupCTAProps) {
  if (variant === 'compact') {
    return (
      <div className="my-8 rounded-xl border border-primary/30 bg-primary/5 p-5 lg:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <h3 className="text-base font-bold text-foreground mb-1">{heading}</h3>
          <p className="text-sm text-muted-foreground">{body}</p>
        </div>
        <Button size="default" asChild className="flex-shrink-0">
          <a href={href} target="_blank" rel="noopener noreferrer">
            {buttonLabel}<ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </Button>
      </div>
    );
  }

  if (variant === 'banner') {
    return (
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 lg:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-bold text-foreground mb-1">{heading}</h3>
              <p className="text-sm text-muted-foreground">{body}</p>
            </div>
            <Button size="lg" asChild className="flex-shrink-0">
              <a href={href} target="_blank" rel="noopener noreferrer">
                {buttonLabel}<ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
        <h3 className="text-xl font-bold text-foreground mb-2">{heading}</h3>
        <p className="text-muted-foreground mb-6">{body}</p>
        <Button size="lg" asChild>
          <a href={href} target="_blank" rel="noopener noreferrer">
            {buttonLabel}<ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}

export default InlineSignupCTA;
