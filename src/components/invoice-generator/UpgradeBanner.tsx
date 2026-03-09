import { ArrowRight, Sparkles } from 'lucide-react';

export function UpgradeBanner() {
  return (
    <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 flex items-center justify-between gap-4 flex-wrap">
      <div className="flex items-center gap-3 min-w-0">
        <Sparkles className="w-5 h-5 text-primary shrink-0" />
        <p className="text-sm text-foreground">
          <span className="font-medium">Want auto-numbering, payment tracking & tax compliance?</span>{' '}
          <span className="text-muted-foreground">Try the full Invoicemonk platform free.</span>
        </p>
      </div>
      <a
        href="https://app.invoicemonk.com/signup"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline shrink-0"
      >
        Get Started <ArrowRight className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}
