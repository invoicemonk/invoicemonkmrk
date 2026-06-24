import { MandateMatrix } from './MandateMatrix';
import { mandates, getMandate } from '@/data/mandates';

interface MandateMatrixSectionProps {
  /** Slug of a mandate to call out in the lead-in copy (country pages). */
  highlightSlug?: string;
  /** Optional override for the section heading. */
  heading?: string;
}

/**
 * Shared "E-invoicing mandates supported" section for /compare pages.
 * Renders the compact MandateMatrix plus a one-liner that ties the global
 * mandate count to the page's competitor/country framing.
 */
export function MandateMatrixSection({
  highlightSlug,
  heading = 'E-invoicing mandates supported',
}: MandateMatrixSectionProps) {
  const highlight = highlightSlug ? getMandate(highlightSlug) : undefined;

  return (
    <section className="py-12 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-heading-md font-bold text-foreground mb-3">
          {heading}
        </h2>
        <p className="text-muted-foreground mb-6">
          Invoicemonk is built for the {mandates.length} live e-invoicing
          mandates worldwide — coverage general invoicing tools don&apos;t
          offer
          {highlight
            ? `, including ${highlight.jurisdiction}'s ${highlight.authority} ${highlight.mandate.split(' — ')[0]}`
            : ''}
          .
        </p>
        <MandateMatrix compact />
      </div>
    </section>
  );
}
