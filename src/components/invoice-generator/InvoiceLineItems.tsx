import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus, Trash2 } from 'lucide-react';
import { LineItem } from './types';
import { useTranslation } from 'react-i18next';

interface Props {
  items: LineItem[];
  onAdd: () => void;
  onRemove: (id: string) => void;
  onUpdate: (id: string, field: keyof Omit<LineItem, 'id'>, value: string | number) => void;
}

export function InvoiceLineItems({ items, onAdd, onRemove, onUpdate }: Props) {
  const { t } = useTranslation('freeInvoiceGenerator');

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-[1fr_80px_100px_40px] gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">
        <span>{t('form.description')}</span>
        <span>{t('form.qty')}</span>
        <span>{t('form.rate')}</span>
        <span />
      </div>
      {items.map(item => (
        <div key={item.id} className="grid grid-cols-[1fr_80px_100px_40px] gap-2 items-center">
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
