import { AlertTriangle } from 'lucide-react';
import { InvoiceData } from './types';
import { useTranslation } from 'react-i18next';

interface Props {
  data: InvoiceData;
}

export function InvoiceValidation({ data }: Props) {
  const { t } = useTranslation('freeInvoiceGenerator');

  const warnings: string[] = [];

  if (!data.businessName.trim()) {
    warnings.push(t('form.validation.businessName'));
  }
  if (!data.clientName.trim()) {
    warnings.push(t('form.validation.clientName'));
  }
  if (!data.invoiceNumber.trim()) {
    warnings.push(t('form.validation.invoiceNumber'));
  }
  if (!data.lineItems.some(li => li.description.trim())) {
    warnings.push(t('form.validation.noDescriptions'));
  }
  if (data.lineItems.every(li => li.quantity * li.rate === 0)) {
    warnings.push(t('form.validation.zeroAmount'));
  }
  if (!data.businessTaxId.trim()) {
    warnings.push(t('form.validation.taxIdRecommended'));
  }

  if (warnings.length === 0) return null;

  return (
    <div className="rounded-lg border border-amber-300 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-700 p-3 space-y-1.5">
      <div className="flex items-center gap-1.5 text-amber-700 dark:text-amber-400 text-xs font-semibold uppercase tracking-wide">
        <AlertTriangle className="w-3.5 h-3.5" />
        {t('form.validation.title')}
      </div>
      <ul className="space-y-0.5">
        {warnings.map((w, i) => (
          <li key={i} className="text-xs text-amber-600 dark:text-amber-400 flex items-start gap-1.5">
            <span className="mt-0.5">•</span>
            <span>{w}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
