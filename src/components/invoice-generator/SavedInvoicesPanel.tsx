import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { ChevronDown, Save, Upload, Trash2 } from 'lucide-react';
import { SavedInvoice, InvoiceData } from './types';
import { useState } from 'react';

interface Props {
  invoices: SavedInvoice[];
  onSave: (data: InvoiceData) => void;
  onLoad: (data: InvoiceData) => void;
  onDelete: (id: string) => void;
  currentData: InvoiceData;
}

export function SavedInvoicesPanel({ invoices, onSave, onLoad, onDelete, currentData }: Props) {
  const { t } = useTranslation('freeInvoiceGenerator');
  const [open, setOpen] = useState(false);
  const [deletingInvoice, setDeletingInvoice] = useState<SavedInvoice | null>(null);

  const handleConfirmDelete = () => {
    if (deletingInvoice) {
      onDelete(deletingInvoice.id);
      setDeletingInvoice(null);
    }
  };

  return (
    <>
      <Collapsible open={open} onOpenChange={setOpen} className="border border-border rounded-lg bg-card">
        <div className="flex items-center justify-between px-4 py-3">
          <CollapsibleTrigger className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors">
            <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
            {t('form.savedInvoices')} ({invoices.length})
          </CollapsibleTrigger>
          <Button type="button" variant="outline" size="sm" onClick={() => onSave(currentData)} className="gap-1.5 text-xs">
            <Save className="w-3.5 h-3.5" />
            {t('form.saveCurrentInvoice')}
          </Button>
        </div>
        <CollapsibleContent>
          <div className="border-t border-border px-4 py-3">
            {invoices.length === 0 ? (
              <p className="text-sm text-muted-foreground">{t('form.noSavedInvoices')}</p>
            ) : (
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {invoices.map(inv => (
                  <div key={inv.id} className="flex items-center justify-between gap-3 py-2 px-3 rounded-md hover:bg-muted/50 transition-colors">
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-foreground truncate">{inv.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(inv.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex gap-1">
                      <Button type="button" variant="ghost" size="sm" onClick={() => onLoad(inv.data)} className="gap-1 text-xs h-7 px-2">
                        <Upload className="w-3 h-3" />
                        {t('form.load')}
                      </Button>
                      <Button type="button" variant="ghost" size="sm" onClick={() => setDeletingInvoice(inv)} className="gap-1 text-xs h-7 px-2 text-destructive hover:text-destructive">
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </CollapsibleContent>
      </Collapsible>

      <AlertDialog open={!!deletingInvoice} onOpenChange={(o) => !o && setDeletingInvoice(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t('form.deleteInvoiceTitle', 'Delete Invoice')}</AlertDialogTitle>
            <AlertDialogDescription>
              {t('form.deleteInvoiceDescription', {
                defaultValue: 'Are you sure you want to delete "{{name}}"? This action cannot be undone.',
                name: deletingInvoice?.name ?? '',
              })}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t('form.cancel', 'Cancel')}</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              {t('form.delete', 'Delete')}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
