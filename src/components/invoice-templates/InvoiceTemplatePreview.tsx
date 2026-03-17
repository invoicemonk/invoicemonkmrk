import { cn } from '@/lib/utils';

interface PreviewConfig {
  accentColor: string;
  headerStyle: 'modern' | 'classic' | 'minimal' | 'bold' | 'structured' | 'grid';
  lines: { w: string; accent?: boolean }[];
  tableRows: number;
  label?: string;
}

const configs: Record<string, PreviewConfig> = {
  modern: {
    accentColor: 'bg-primary',
    headerStyle: 'modern',
    lines: [
      { w: 'w-16', accent: true },
      { w: 'w-24' },
      { w: 'w-20' },
    ],
    tableRows: 3,
  },
  classic: {
    accentColor: 'bg-[hsl(220,60%,30%)]',
    headerStyle: 'classic',
    lines: [
      { w: 'w-20' },
      { w: 'w-28' },
      { w: 'w-16' },
    ],
    tableRows: 4,
  },
  minimal: {
    accentColor: 'bg-foreground',
    headerStyle: 'minimal',
    lines: [
      { w: 'w-12' },
      { w: 'w-20' },
    ],
    tableRows: 2,
  },
  contractor: {
    accentColor: 'bg-amber-600',
    headerStyle: 'bold',
    lines: [
      { w: 'w-20', accent: true },
      { w: 'w-24' },
      { w: 'w-16' },
    ],
    tableRows: 4,
    label: 'Labor & Materials',
  },
  consulting: {
    accentColor: 'bg-emerald-600',
    headerStyle: 'structured',
    lines: [
      { w: 'w-16', accent: true },
      { w: 'w-28' },
      { w: 'w-20' },
    ],
    tableRows: 3,
    label: 'Hourly / Retainer',
  },
  ecommerce: {
    accentColor: 'bg-violet-600',
    headerStyle: 'grid',
    lines: [
      { w: 'w-12', accent: true },
      { w: 'w-20' },
      { w: 'w-24' },
    ],
    tableRows: 5,
    label: 'Product Lines',
  },
};

export function InvoiceTemplatePreview({ templateId }: { templateId: string }) {
  const config = configs[templateId] ?? configs.modern;

  return (
    <div className="w-full h-full flex items-center justify-center bg-muted/60 p-4">
      <div className="w-full max-w-[180px] bg-background rounded shadow-sm border border-border p-3 flex flex-col gap-1.5 text-[0px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-1">
          <div className={cn('h-2 w-8 rounded-sm', config.accentColor)} />
          {config.headerStyle === 'classic' ? (
            <div className="flex flex-col items-end gap-0.5">
              <div className="h-1 w-10 bg-muted rounded-sm" />
              <div className="h-1 w-6 bg-muted rounded-sm" />
            </div>
          ) : config.headerStyle === 'bold' ? (
            <div className={cn('h-2.5 w-12 rounded-sm opacity-80', config.accentColor)} />
          ) : (
            <div className="h-1.5 w-10 bg-muted rounded-sm" />
          )}
        </div>

        {/* Divider for classic */}
        {config.headerStyle === 'classic' && (
          <div className={cn('h-[1px] w-full', config.accentColor, 'opacity-40')} />
        )}

        {/* Address lines */}
        <div className="flex gap-4 mb-1">
          <div className="flex flex-col gap-0.5 flex-1">
            {config.lines.map((line, i) => (
              <div
                key={i}
                className={cn(
                  'h-1 rounded-sm',
                  line.w,
                  line.accent ? config.accentColor : 'bg-muted'
                )}
              />
            ))}
          </div>
          <div className="flex flex-col gap-0.5 items-end">
            <div className="h-1 w-10 bg-muted rounded-sm" />
            <div className="h-1 w-8 bg-muted rounded-sm" />
          </div>
        </div>

        {/* Label badge for specialty templates */}
        {config.label && (
          <div className={cn('self-start px-1 py-0.5 rounded text-[5px] font-medium text-background leading-none', config.accentColor)}>
            {config.label}
          </div>
        )}

        {/* Table header */}
        <div className={cn('h-1 w-full rounded-sm mt-1', config.accentColor, 'opacity-30')} />

        {/* Table rows */}
        <div className="flex flex-col gap-1">
          {Array.from({ length: config.tableRows }).map((_, i) => (
            <div key={i} className="flex items-center gap-1">
              <div className="h-0.5 flex-1 bg-muted rounded-sm" />
              <div className="h-0.5 w-4 bg-muted rounded-sm" />
              <div className="h-0.5 w-6 bg-muted rounded-sm" />
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className="flex justify-end gap-2 mt-1 pt-1 border-t border-border">
          <div className="h-1 w-6 bg-muted rounded-sm" />
          <div className={cn('h-1.5 w-8 rounded-sm', config.accentColor)} />
        </div>
      </div>
    </div>
  );
}
