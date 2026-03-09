import { useTranslation } from 'react-i18next';
import { InvoiceTemplate } from './types';
import { cn } from '@/lib/utils';

interface Props {
  value: InvoiceTemplate;
  onChange: (template: InvoiceTemplate) => void;
}

const templates: { key: InvoiceTemplate; accent: string; font: string }[] = [
  { key: 'modern', accent: 'bg-primary', font: 'font-sans' },
  { key: 'classic', accent: 'bg-[hsl(220,60%,30%)]', font: 'font-serif' },
  { key: 'minimal', accent: 'bg-foreground', font: 'font-sans' },
];

export function TemplateSwitcher({ value, onChange }: Props) {
  const { t } = useTranslation('freeInvoiceGenerator');

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
        {t('form.template')}
      </span>
      <div className="flex gap-2">
        {templates.map(({ key, accent, font }) => (
          <button
            key={key}
            type="button"
            onClick={() => onChange(key)}
            className={cn(
              'flex flex-col items-center gap-1 px-3 py-2 rounded-md border text-xs transition-all',
              value === key
                ? 'border-primary bg-primary/5 ring-1 ring-primary/30'
                : 'border-border hover:border-primary/40'
            )}
          >
            {/* Mini preview */}
            <div className="w-10 h-12 rounded border border-border bg-background flex flex-col p-1 gap-0.5">
              <div className={cn('h-1 w-4 rounded-sm', accent)} />
              <div className="h-0.5 w-6 bg-muted rounded-sm" />
              <div className="h-0.5 w-5 bg-muted rounded-sm" />
              <div className={cn('mt-auto h-0.5 w-3 self-end rounded-sm', accent)} />
            </div>
            <span className={cn('text-[10px]', font)}>{t(`form.${key}`)}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
