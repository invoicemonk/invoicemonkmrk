import { Button } from '@/components/ui/button';
import { Download, Mail, RotateCcw } from 'lucide-react';
import { InvoiceData, InvoiceTotals } from './types';
import { toast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';

interface Props {
  data: InvoiceData;
  totals: InvoiceTotals;
  formatCurrency: (n: number) => string;
  onReset: () => void;
}

interface Labels {
  invoice: string;
  date: string;
  due: string;
  billTo: string;
  description: string;
  qty: string;
  rate: string;
  amount: string;
  subtotal: string;
  discount: string;
  tax: string;
  total: string;
  notes: string;
  terms: string;
  createdWith: string;
}

function buildModernHTML(data: InvoiceData, totals: InvoiceTotals, formatCurrency: (n: number) => string, labels: Labels): string {
  const accent = 'hsl(170,82%,26%)';
  const accentEnd = 'hsl(170,70%,40%)';
  const logoHTML = data.businessLogo
    ? `<img src="${data.businessLogo}" alt="Logo" style="max-height:56px;max-width:160px;object-fit:contain;margin-bottom:12px;" />`
    : '';

  const lineItemsHTML = data.lineItems.map((item, i) => {
    const amount = item.quantity * item.rate;
    const bg = i % 2 === 0 ? 'background:#f9fafb;-webkit-print-color-adjust:exact;print-color-adjust:exact;' : '';
    return `<tr style="${bg}">
      <td style="padding:10px 0;">${item.description || '—'}</td>
      <td style="padding:10px 0;text-align:right;color:#4b5563;">${item.quantity}</td>
      <td style="padding:10px 0;text-align:right;color:#4b5563;">${formatCurrency(item.rate)}</td>
      <td style="padding:10px 0;text-align:right;font-weight:500;">${formatCurrency(amount)}</td>
    </tr>`;
  }).join('');

  const discountHTML = data.discountPercent > 0
    ? `<div style="display:flex;justify-content:space-between;color:#15803d;">
        <span>${labels.discount} (${data.discountPercent}%)</span>
        <span>-${formatCurrency(totals.discountAmount)}</span>
      </div>` : '';

  const taxHTML = data.taxRate > 0
    ? `<div style="display:flex;justify-content:space-between;">
        <span style="color:#9ca3af;">${labels.tax} (${data.taxRate}%)</span>
        <span>${formatCurrency(totals.taxAmount)}</span>
      </div>` : '';

  const notesSection = (data.notes || data.terms)
    ? `<div style="margin-top:40px;padding-top:16px;border-top:1px solid #f3f4f6;font-size:12px;color:#6b7280;">
        ${data.notes ? `<div><span style="font-weight:500;color:#374151;">${labels.notes}:</span> ${data.notes}</div>` : ''}
        ${data.terms ? `<div><span style="font-weight:500;color:#374151;">${labels.terms}:</span> ${data.terms}</div>` : ''}
      </div>` : '';

  return `<!DOCTYPE html><html><head><title>${labels.invoice} ${data.invoiceNumber}</title>
<style>*{margin:0;padding:0;box-sizing:border-box;}body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;padding:0;color:#111;font-size:13px;line-height:1.6;-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important;color-adjust:exact!important;}@media print{body{padding:0;}@page{margin:12mm 10mm;size:A4;}table{page-break-inside:avoid;}tr{page-break-inside:avoid;}.no-break{page-break-inside:avoid;}}</style>
</head><body>
<div style="height:8px;background:linear-gradient(90deg,${accent},${accentEnd});-webkit-print-color-adjust:exact;print-color-adjust:exact;"></div>
<div style="padding:32px 40px;">
  <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:40px;">
    <div>${logoHTML}
      <div style="font-size:18px;font-weight:bold;">${data.businessName || 'Your Business'}</div>
      ${data.businessAddress ? `<div style="color:#6b7280;white-space:pre-line;font-size:12px;margin-top:4px;">${data.businessAddress}</div>` : ''}
      ${data.businessEmail ? `<div style="color:#6b7280;font-size:12px;">${data.businessEmail}</div>` : ''}
      ${data.businessPhone ? `<div style="color:#6b7280;font-size:12px;">${data.businessPhone}</div>` : ''}
    </div>
    <div style="text-align:right;">
      <div style="font-size:28px;font-weight:800;letter-spacing:-0.5px;color:${accent};margin-bottom:8px;">${labels.invoice}</div>
      <div style="font-weight:600;font-size:14px;">${data.invoiceNumber || '—'}</div>
      <div style="color:#9ca3af;font-size:12px;margin-top:4px;">${labels.date}: ${data.invoiceDate || '—'}</div>
      <div style="color:#9ca3af;font-size:12px;">${labels.due}: ${data.dueDate || '—'}</div>
    </div>
  </div>
  <div style="margin-bottom:32px;padding:16px;border-radius:8px;background:hsl(170,40%,96%);-webkit-print-color-adjust:exact;print-color-adjust:exact;">
    <div style="font-size:10px;text-transform:uppercase;letter-spacing:0.1em;font-weight:600;color:${accent};margin-bottom:6px;">${labels.billTo}</div>
    <div style="font-weight:600;">${data.clientName || 'Client Name'}</div>
    ${data.clientAddress ? `<div style="color:#4b5563;white-space:pre-line;font-size:12px;">${data.clientAddress}</div>` : ''}
    ${data.clientEmail ? `<div style="color:#4b5563;font-size:12px;">${data.clientEmail}</div>` : ''}
  </div>
  <table style="width:100%;border-collapse:collapse;margin-bottom:32px;">
    <thead><tr>
      <th style="text-align:left;padding:12px 0;font-size:10px;text-transform:uppercase;letter-spacing:0.1em;font-weight:600;color:${accent};border-bottom:2px solid ${accent};">${labels.description}</th>
      <th style="text-align:right;padding:12px 0;font-size:10px;text-transform:uppercase;letter-spacing:0.1em;font-weight:600;color:${accent};border-bottom:2px solid ${accent};width:60px;">${labels.qty}</th>
      <th style="text-align:right;padding:12px 0;font-size:10px;text-transform:uppercase;letter-spacing:0.1em;font-weight:600;color:${accent};border-bottom:2px solid ${accent};width:96px;">${labels.rate}</th>
      <th style="text-align:right;padding:12px 0;font-size:10px;text-transform:uppercase;letter-spacing:0.1em;font-weight:600;color:${accent};border-bottom:2px solid ${accent};width:96px;">${labels.amount}</th>
    </tr></thead>
    <tbody>${lineItemsHTML}</tbody>
  </table>
  <div style="display:flex;justify-content:flex-end;">
    <div style="width:256px;font-size:14px;">
      <div style="display:flex;justify-content:space-between;padding:2px 0;">
        <span style="color:#9ca3af;">${labels.subtotal}</span>
        <span>${formatCurrency(totals.subtotal)}</span>
      </div>
      ${discountHTML}${taxHTML}
      <div style="display:flex;justify-content:space-between;padding:10px 12px;margin-top:8px;border-radius:6px;font-weight:bold;font-size:16px;color:#fff;background:${accent};-webkit-print-color-adjust:exact;print-color-adjust:exact;">
        <span>${labels.total}</span>
        <span>${formatCurrency(totals.total)}</span>
      </div>
    </div>
  </div>
  ${notesSection}
  <div style="margin-top:32px;text-align:center;font-size:10px;color:#d1d5db;">${labels.createdWith} &bull; invoicemonk.com</div>
</div>
</body></html>`;
}

function buildClassicHTML(data: InvoiceData, totals: InvoiceTotals, formatCurrency: (n: number) => string, labels: Labels): string {
  const accent = 'hsl(220,60%,30%)';
  const logoHTML = data.businessLogo
    ? `<img src="${data.businessLogo}" alt="Logo" style="max-height:48px;max-width:160px;object-fit:contain;margin-bottom:8px;" />`
    : '';

  const lineItemsHTML = data.lineItems.map((item, i) => {
    const amount = item.quantity * item.rate;
    const bg = i % 2 === 0 ? 'background:hsl(220,60%,97%);-webkit-print-color-adjust:exact;print-color-adjust:exact;' : '';
    return `<tr style="${bg}">
      <td style="padding:8px 12px;border:1px solid #e5e7eb;">${item.description || '—'}</td>
      <td style="padding:8px 12px;text-align:right;border:1px solid #e5e7eb;">${item.quantity}</td>
      <td style="padding:8px 12px;text-align:right;border:1px solid #e5e7eb;">${formatCurrency(item.rate)}</td>
      <td style="padding:8px 12px;text-align:right;font-weight:500;border:1px solid #e5e7eb;">${formatCurrency(amount)}</td>
    </tr>`;
  }).join('');

  const discountHTML = data.discountPercent > 0
    ? `<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #e5e7eb;color:#15803d;">
        <span>${labels.discount} (${data.discountPercent}%)</span>
        <span>-${formatCurrency(totals.discountAmount)}</span>
      </div>` : '';

  const taxHTML = data.taxRate > 0
    ? `<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #e5e7eb;">
        <span style="color:#6b7280;">${labels.tax} (${data.taxRate}%)</span>
        <span>${formatCurrency(totals.taxAmount)}</span>
      </div>` : '';

  const notesSection = (data.notes || data.terms)
    ? `<div style="margin-top:40px;padding-top:16px;border-top:2px solid ${accent};font-size:12px;color:#6b7280;">
        ${data.notes ? `<div><span style="font-weight:bold;color:#374151;">${labels.notes}:</span> ${data.notes}</div>` : ''}
        ${data.terms ? `<div><span style="font-weight:bold;color:#374151;">${labels.terms}:</span> ${data.terms}</div>` : ''}
      </div>` : '';

  return `<!DOCTYPE html><html><head><title>${labels.invoice} ${data.invoiceNumber}</title>
<style>*{margin:0;padding:0;box-sizing:border-box;}body{font-family:Georgia,"Times New Roman",serif;padding:32px 40px;color:#111;font-size:13px;line-height:1.6;-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important;color-adjust:exact!important;}@media print{body{padding:20px;}@page{margin:12mm 10mm;size:A4;}table{page-break-inside:avoid;}tr{page-break-inside:avoid;}.no-break{page-break-inside:avoid;}}</style>
</head><body>
  <div style="border-bottom:4px double ${accent};padding-bottom:24px;margin-bottom:24px;">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;">
      <div>${logoHTML}
        <div style="font-size:20px;font-weight:bold;color:${accent};">${data.businessName || 'Your Business'}</div>
        ${data.businessAddress ? `<div style="color:#4b5563;white-space:pre-line;font-size:12px;margin-top:4px;">${data.businessAddress}</div>` : ''}
        ${data.businessEmail ? `<div style="color:#4b5563;font-size:12px;">${data.businessEmail}</div>` : ''}
        ${data.businessPhone ? `<div style="color:#4b5563;font-size:12px;">${data.businessPhone}</div>` : ''}
      </div>
      <div style="text-align:right;">
        <div style="font-size:24px;font-weight:bold;text-transform:uppercase;letter-spacing:0.15em;color:${accent};margin-bottom:8px;">${labels.invoice}</div>
        <div style="font-weight:600;font-size:14px;">${data.invoiceNumber || '—'}</div>
      </div>
    </div>
  </div>
  <div style="display:flex;justify-content:space-between;margin-bottom:32px;">
    <div style="border:1px solid #d1d5db;border-radius:4px;padding:12px;flex:1;max-width:48%;">
      <div style="font-size:10px;text-transform:uppercase;letter-spacing:0.1em;font-weight:bold;color:${accent};margin-bottom:4px;">${labels.billTo}</div>
      <div style="font-weight:600;">${data.clientName || 'Client Name'}</div>
      ${data.clientAddress ? `<div style="color:#4b5563;white-space:pre-line;font-size:12px;">${data.clientAddress}</div>` : ''}
      ${data.clientEmail ? `<div style="color:#4b5563;font-size:12px;">${data.clientEmail}</div>` : ''}
    </div>
    <div style="text-align:right;padding-top:8px;font-size:14px;">
      <div><span style="color:#6b7280;">${labels.date}:</span> <span style="font-weight:500;">${data.invoiceDate || '—'}</span></div>
      <div><span style="color:#6b7280;">${labels.due}:</span> <span style="font-weight:500;">${data.dueDate || '—'}</span></div>
    </div>
  </div>
  <table style="width:100%;border-collapse:collapse;margin-bottom:32px;">
    <thead><tr style="background:${accent};-webkit-print-color-adjust:exact;print-color-adjust:exact;">
      <th style="text-align:left;padding:10px 12px;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;font-weight:bold;color:#fff;border:1px solid #d1d5db;">${labels.description}</th>
      <th style="text-align:right;padding:10px 12px;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;font-weight:bold;color:#fff;border:1px solid #d1d5db;width:60px;">${labels.qty}</th>
      <th style="text-align:right;padding:10px 12px;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;font-weight:bold;color:#fff;border:1px solid #d1d5db;width:96px;">${labels.rate}</th>
      <th style="text-align:right;padding:10px 12px;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;font-weight:bold;color:#fff;border:1px solid #d1d5db;width:96px;">${labels.amount}</th>
    </tr></thead>
    <tbody>${lineItemsHTML}</tbody>
  </table>
  <div style="display:flex;justify-content:flex-end;">
    <div style="width:256px;font-size:14px;">
      <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #e5e7eb;">
        <span style="color:#6b7280;">${labels.subtotal}</span>
        <span>${formatCurrency(totals.subtotal)}</span>
      </div>
      ${discountHTML}${taxHTML}
      <div style="display:flex;justify-content:space-between;padding-top:8px;margin-top:4px;border-top:4px double ${accent};font-weight:bold;font-size:16px;color:${accent};">
        <span>${labels.total}</span>
        <span>${formatCurrency(totals.total)}</span>
      </div>
    </div>
  </div>
  ${notesSection}
  <div style="margin-top:32px;text-align:center;font-size:10px;color:#d1d5db;">${labels.createdWith} &bull; invoicemonk.com</div>
</body></html>`;
}

function buildMinimalHTML(data: InvoiceData, totals: InvoiceTotals, formatCurrency: (n: number) => string, labels: Labels): string {
  const logoHTML = data.businessLogo
    ? `<img src="${data.businessLogo}" alt="Logo" style="max-height:40px;max-width:140px;object-fit:contain;margin-bottom:8px;filter:grayscale(1);opacity:0.8;" />`
    : '';

  const lineItemsHTML = data.lineItems.map(item => {
    const amount = item.quantity * item.rate;
    return `<tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:12px 0;color:#374151;">${item.description || '—'}</td>
      <td style="padding:12px 0;text-align:right;color:#6b7280;">${item.quantity}</td>
      <td style="padding:12px 0;text-align:right;color:#6b7280;">${formatCurrency(item.rate)}</td>
      <td style="padding:12px 0;text-align:right;color:#1f2937;">${formatCurrency(amount)}</td>
    </tr>`;
  }).join('');

  const discountHTML = data.discountPercent > 0
    ? `<div style="display:flex;justify-content:space-between;color:#16a34a;">
        <span>${labels.discount} (${data.discountPercent}%)</span>
        <span>-${formatCurrency(totals.discountAmount)}</span>
      </div>` : '';

  const taxHTML = data.taxRate > 0
    ? `<div style="display:flex;justify-content:space-between;color:#9ca3af;">
        <span>${labels.tax} (${data.taxRate}%)</span>
        <span style="color:#4b5563;">${formatCurrency(totals.taxAmount)}</span>
      </div>` : '';

  const notesSection = (data.notes || data.terms)
    ? `<div style="margin-top:48px;padding-top:16px;border-top:1px solid #f3f4f6;font-size:12px;color:#9ca3af;">
        ${data.notes ? `<div><span style="color:#6b7280;">${labels.notes}:</span> ${data.notes}</div>` : ''}
        ${data.terms ? `<div><span style="color:#6b7280;">${labels.terms}:</span> ${data.terms}</div>` : ''}
      </div>` : '';

  return `<!DOCTYPE html><html><head><title>${labels.invoice} ${data.invoiceNumber}</title>
<style>*{margin:0;padding:0;box-sizing:border-box;}body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;padding:40px 48px;color:#111;font-size:13px;line-height:1.6;-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important;color-adjust:exact!important;}@media print{body{padding:20px;}@page{margin:12mm 10mm;size:A4;}table{page-break-inside:avoid;}tr{page-break-inside:avoid;}.no-break{page-break-inside:avoid;}}</style>
</head><body>
  <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:48px;">
    <div>${logoHTML}
      <div style="font-size:16px;font-weight:500;color:#1f2937;">${data.businessName || 'Your Business'}</div>
      ${data.businessAddress ? `<div style="color:#9ca3af;white-space:pre-line;font-size:12px;margin-top:4px;">${data.businessAddress}</div>` : ''}
      ${data.businessEmail ? `<div style="color:#9ca3af;font-size:12px;">${data.businessEmail}</div>` : ''}
      ${data.businessPhone ? `<div style="color:#9ca3af;font-size:12px;">${data.businessPhone}</div>` : ''}
    </div>
    <div style="text-align:right;">
      <div style="font-size:13px;font-weight:500;text-transform:uppercase;letter-spacing:0.3em;color:#9ca3af;margin-bottom:12px;">${labels.invoice}</div>
      <div style="font-size:14px;font-family:ui-monospace,SFMono-Regular,monospace;color:#111;">${data.invoiceNumber || '—'}</div>
      <div style="margin-top:12px;color:#9ca3af;font-size:12px;">${data.invoiceDate || '—'}</div>
      <div style="color:#9ca3af;font-size:12px;">${labels.due}: ${data.dueDate || '—'}</div>
    </div>
  </div>
  <div style="margin-bottom:40px;">
    <div style="font-size:10px;text-transform:uppercase;letter-spacing:0.25em;color:#d1d5db;margin-bottom:8px;">${labels.billTo}</div>
    <div style="font-weight:500;color:#1f2937;">${data.clientName || 'Client Name'}</div>
    ${data.clientAddress ? `<div style="color:#9ca3af;white-space:pre-line;font-size:12px;">${data.clientAddress}</div>` : ''}
    ${data.clientEmail ? `<div style="color:#9ca3af;font-size:12px;">${data.clientEmail}</div>` : ''}
  </div>
  <table style="width:100%;border-collapse:collapse;margin-bottom:40px;">
    <thead><tr style="border-bottom:1px solid #e5e7eb;">
      <th style="text-align:left;padding:8px 0;font-size:10px;text-transform:uppercase;letter-spacing:0.2em;color:#d1d5db;font-weight:normal;">${labels.description}</th>
      <th style="text-align:right;padding:8px 0;font-size:10px;text-transform:uppercase;letter-spacing:0.2em;color:#d1d5db;font-weight:normal;width:60px;">${labels.qty}</th>
      <th style="text-align:right;padding:8px 0;font-size:10px;text-transform:uppercase;letter-spacing:0.2em;color:#d1d5db;font-weight:normal;width:96px;">${labels.rate}</th>
      <th style="text-align:right;padding:8px 0;font-size:10px;text-transform:uppercase;letter-spacing:0.2em;color:#d1d5db;font-weight:normal;width:96px;">${labels.amount}</th>
    </tr></thead>
    <tbody>${lineItemsHTML}</tbody>
  </table>
  <div style="display:flex;justify-content:flex-end;">
    <div style="width:224px;font-size:14px;">
      <div style="display:flex;justify-content:space-between;color:#9ca3af;">
        <span>${labels.subtotal}</span>
        <span style="color:#4b5563;">${formatCurrency(totals.subtotal)}</span>
      </div>
      ${discountHTML}${taxHTML}
      <div style="display:flex;justify-content:space-between;padding-top:12px;margin-top:8px;border-top:1px solid #e5e7eb;">
        <span style="font-weight:500;color:#1f2937;">${labels.total}</span>
        <span style="font-weight:600;font-size:18px;color:#111;">${formatCurrency(totals.total)}</span>
      </div>
    </div>
  </div>
  ${notesSection}
  <div style="margin-top:40px;text-align:center;font-size:10px;color:#e5e7eb;">${labels.createdWith} &bull; invoicemonk.com</div>
</body></html>`;
}

function buildInvoiceHTML(data: InvoiceData, totals: InvoiceTotals, formatCurrency: (n: number) => string, labels: Labels): string {
  switch (data.template) {
    case 'classic':
      return buildClassicHTML(data, totals, formatCurrency, labels);
    case 'minimal':
      return buildMinimalHTML(data, totals, formatCurrency, labels);
    default:
      return buildModernHTML(data, totals, formatCurrency, labels);
  }
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
