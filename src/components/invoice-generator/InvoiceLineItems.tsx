import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus, Trash2 } from 'lucide-react';
import { LineItem } from './types';
import { useTranslation } from 'react-i18next';

interface Props {
  items: LineItem[];
  globalTaxRate: number;
  onAdd: () => void;
  onRemove: (id: string) => void;
  onUpdate: (id: string, field: keyof Omit<LineItem, 'id'>, value: string | number | undefined) => void;
}

export function InvoiceLineItems({ items, globalTaxRate, onAdd, onRemove, onUpdate }: Props) {
  const { t } = useTranslation('freeInvoiceGenerator');

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-[1fr_60px_90px_70px_40px] gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">
        <span>{t('form.description')}</span>
        <span>{t('form.qty')}</span>
        <span>{t('form.rate')}</span>
        <span>{t('form.itemTax')}</span>
        <span />
      </div>
      {items.map(item => (
        <div key={item.id} className="grid grid-cols-[1fr_60px_90px_70px_40px] gap-2 items-center">
          <Input
            placeholder={t('form.itemDescription')}
            value={item.description}
            onChange={e => onUpdate(item.id, 'description', e.target.value)}
            className="h-9 text-sm"
          />
          <Input
            type="number"
            min={0}
            value={item.quantity || ''}
            onChange={e => onUpdate(item.id, 'quantity', Math.max(0, Number(e.target.value)))}
            className="h-9 text-sm"
          />
          <Input
            type="number"
            min={0}
            step="0.01"
            value={item.rate || ''}
            onChange={e => onUpdate(item.id, 'rate', Math.max(0, Number(e.target.value)))}
            className="h-9 text-sm"
          />
          <Input
            type="number"
            min={0}
            max={100}
            step="0.5"
            placeholder={`${globalTaxRate}%`}
            value={item.taxRate !== undefined ? item.taxRate : ''}
            onChange={e => {
              const val = e.target.value;
              if (val === '') {
                onUpdate(item.id, 'taxRate', undefined);
              } else {
                onUpdate(item.id, 'taxRate', Math.min(100, Math.max(0, Number(val))));
              }
            }}
            className="h-9 text-sm"
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-9 w-9 text-muted-foreground hover:text-destructive"
            onClick={() => onRemove(item.id)}
            disabled={items.length <= 1}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      ))}
      <Button type="button" variant="outline" size="sm" onClick={onAdd} className="mt-1">
        <Plus className="w-4 h-4 mr-1" /> {t('form.addItem')}
      </Button>
    </div>
  );
}
