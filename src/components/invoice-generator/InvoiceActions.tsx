import { Button } from '@/components/ui/button';
import { Download, Mail, RotateCcw } from 'lucide-react';
import { InvoiceData, InvoiceTotals } from './types';
import { toast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';
import { buildInvoiceHTML, Labels } from './invoiceTemplateBuilders';

interface Props {
  data: InvoiceData;
  totals: InvoiceTotals;
  formatCurrency: (n: number) => string;
  onReset: () => void;
}

export function InvoiceActions({ data, totals, formatCurrency, onReset }: Props) {
  const { t } = useTranslation('freeInvoiceGenerator');

  const handleDownloadPDF = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      toast({ title: 'Pop-up blocked', description: 'Please allow pop-ups to download your invoice.', variant: 'destructive' });
      return;
    }

    const labels: Labels = {
      invoice: t('form.invoice'),
      date: t('form.date'),
      due: t('form.due'),
      billTo: t('form.billTo'),
      description: t('form.description'),
      qty: t('form.qty'),
      rate: t('form.rate'),
      amount: t('form.amount'),
      subtotal: t('form.subtotal'),
      discount: t('form.discount'),
      tax: t('form.tax'),
      total: t('form.total'),
      notes: t('form.notes'),
      terms: t('form.terms'),
      createdWith: t('form.createdWith'),
      taxId: t('form.taxId'),
    };

    const html = buildInvoiceHTML(data, totals, formatCurrency, labels);
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.onload = () => {
      printWindow.print();
      printWindow.onafterprint = () => printWindow.close();
    };

    toast({
      title: 'Invoice ready!',
      description: 'Sign up for automatic payment tracking & reminders.',
    });
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(`${t('form.invoice')} ${data.invoiceNumber} from ${data.businessName || 'Your Business'}`);
    const body = encodeURIComponent(
      `Hi ${data.clientName || ''},\n\nPlease find attached invoice ${data.invoiceNumber}.\n\nThank you for your business!\n\n${data.businessName || ''}`
    );
    const to = encodeURIComponent(data.clientEmail || '');
    window.open(`mailto:${to}?subject=${subject}&body=${body}`, '_self');
  };

  return (
    <div className="flex flex-wrap gap-3">
      <Button onClick={handleDownloadPDF} className="gap-2">
        <Download className="w-4 h-4" /> {t('form.downloadPdf')}
      </Button>
      <Button variant="outline" onClick={handleEmail} className="gap-2" disabled={!data.clientEmail}>
        <Mail className="w-4 h-4" /> {t('form.emailInvoice')}
      </Button>
      <Button variant="ghost" onClick={onReset} className="gap-2 text-muted-foreground">
        <RotateCcw className="w-4 h-4" /> {t('form.newInvoice')}
      </Button>
    </div>
  );
}
