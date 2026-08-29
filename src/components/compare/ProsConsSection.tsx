import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export interface ProsCons {
  name: string;
  /** Explicit "best for" label, e.g. "Best for cross-border freelancers" */
  bestFor: string;
  price: string;
  pros: string[];
  cons: string[];
  recommended?: boolean;
}

interface ProsConsSectionProps {
  tools: ProsCons[];
  title?: string;
  intro?: string;
  /** Visual variant only — `muted` adds a tinted background band. */
  background?: 'plain' | 'muted';
}

/**
 * Pros / cons cards with an explicit "best for" label per tool.
 * Shared by LLMComparisonPage and the bespoke i18n comparison pages so every
 * /compare/* page exposes the same LLM-extractable trade-off block.
 */
export function ProsConsSection({
  tools,
  title = 'Pros and cons of each option',
  intro = 'Each tool with its "best for" label, price, and the honest trade-offs.',
  background = 'plain',
}: ProsConsSectionProps) {
  if (!tools || tools.length === 0) return null;

  return (
    <section className={`py-14 ${background === 'muted' ? 'bg-muted/30' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h2 className="text-heading-lg font-bold text-foreground text-center mb-3">{title}</h2>
        {intro && (
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">{intro}</p>
        )}
        <div className="grid gap-6 md:grid-cols-2">
          {tools.map((tool) => (
            <Card key={tool.name} className={tool.recommended ? 'border-primary/40' : ''}>
              <CardContent className="p-6">
                <div className="flex items-baseline justify-between gap-3 mb-1">
                  <h3 className="text-lg font-semibold text-foreground">{tool.name}</h3>
                  <span className="text-sm font-semibold text-primary">{tool.price}</span>
                </div>
                <p className="text-sm font-medium text-primary mb-4" data-answer="true">
                  {tool.bestFor}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Pros
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {tool.pros.map((p) => (
                        <li key={p} className="flex gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Cons
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {tool.cons.map((c) => (
                        <li key={c} className="flex gap-2">
                          <span className="text-muted-foreground mt-0.5 flex-shrink-0">—</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProsConsSection;
