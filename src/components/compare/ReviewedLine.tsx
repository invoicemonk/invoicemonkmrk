import { COMPARE_REVIEWED } from '@/data/compareFreshness';

interface ReviewedLineProps {
  /** Compare page slug, e.g. "wave-alternatives". */
  slug: string;
  className?: string;
}

/**
 * Visible editorial freshness line for /compare/* pages.
 * Date comes from the single registry in `src/data/compareFreshness.ts`
 * so the visible date and schema `dateModified` can never drift apart.
 */
export function ReviewedLine({ slug, className }: ReviewedLineProps) {
  const date = COMPARE_REVIEWED[slug];
  if (!date) return null;

  const formatted = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <p className={className ?? 'text-sm text-muted-foreground text-center mb-4'}>
      Reviewed <time dateTime={date}>{formatted}</time> by the Invoicemonk editorial team
    </p>
  );
}
