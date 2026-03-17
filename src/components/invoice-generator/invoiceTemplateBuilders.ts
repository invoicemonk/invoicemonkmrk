import { InvoiceData, InvoiceTotals } from './types';
import { getCountryProfile } from './countryProfiles';

export interface Labels {
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
  taxId?: string;
}

function taxIdHTML(label: string, value: string, color = '#6b7280'): string {
  if (!value) return '';
  return `<div style="font-size:12px;color:${color};">${label}: ${value}</div>`;
}

function getInvoiceLabel(data: InvoiceData): string {
  return getCountryProfile(data.currency).invoiceLabel;
}

function getTaxName(data: InvoiceData): string {
  return getCountryProfile(data.currency).taxName;
}

function getTaxIdLabel(data: InvoiceData): string {
  return getCountryProfile(data.currency).taxIdLabel;
}

function hasPerItemTax(data: InvoiceData): boolean {
  return data.lineItems.some(li => li.taxRate !== undefined);
}

function perItemTaxHeaderHTML(data: InvoiceData, style: string): string {
  if (!hasPerItemTax(data)) return '';
  return `<th style="${style}">${getTaxName(data)}</th>`;
}

function perItemTaxCellHTML(data: InvoiceData, item: { taxRate?: number }, style: string): string {
  if (!hasPerItemTax(data)) return '';
  const rate = item.taxRate !== undefined ? item.taxRate : data.taxRate;
  return `<td style="${style}">${rate}%</td>`;
}

export function buildModernHTML(data: InvoiceData, totals: InvoiceTotals, formatCurrency: (n: number) => string, labels: Labels): string {
  const accent = 'hsl(170,82%,26%)';
  const accentEnd = 'hsl(170,70%,40%)';
  const invoiceLabel = getInvoiceLabel(data);
  const taxName = getTaxName(data);
  const taxIdLabel = getTaxIdLabel(data);
  const showPerItemTax = hasPerItemTax(data);
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
      ${showPerItemTax ? `<td style="padding:10px 0;text-align:right;color:#6b7280;font-size:12px;">${(item.taxRate ?? data.taxRate)}%</td>` : ''}
      <td style="padding:10px 0;text-align:right;font-weight:500;">${formatCurrency(amount)}</td>
    </tr>`;
  }).join('');

  const discountHTML = data.discountPercent > 0
    ? `<div style="display:flex;justify-content:space-between;color:#15803d;">
        <span>${labels.discount} (${data.discountPercent}%)</span>
        <span>-${formatCurrency(totals.discountAmount)}</span>
      </div>` : '';

  const taxHTML = totals.taxAmount > 0
    ? `<div style="display:flex;justify-content:space-between;">
        <span style="color:#9ca3af;">${taxName} (${data.taxRate}%)</span>
        <span>${formatCurrency(totals.taxAmount)}</span>
      </div>` : '';

  const notesSection = (data.notes || data.terms)
    ? `<div style="margin-top:40px;padding-top:16px;border-top:1px solid #f3f4f6;font-size:12px;color:#6b7280;">
        ${data.notes ? `<div><span style="font-weight:500;color:#374151;">${labels.notes}:</span> ${data.notes}</div>` : ''}
        ${data.terms ? `<div><span style="font-weight:500;color:#374151;">${labels.terms}:</span> ${data.terms}</div>` : ''}
      </div>` : '';

  const thStyle = `text-align:right;padding:12px 0;font-size:10px;text-transform:uppercase;letter-spacing:0.1em;font-weight:600;color:${accent};border-bottom:2px solid ${accent};`;

  return `<!DOCTYPE html><html><head><title>${invoiceLabel} ${data.invoiceNumber}</title>
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
      ${taxIdHTML(taxIdLabel, data.businessTaxId)}
    </div>
    <div style="text-align:right;">
      <div style="font-size:28px;font-weight:800;letter-spacing:-0.5px;color:${accent};margin-bottom:8px;">${invoiceLabel}</div>
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
    ${taxIdHTML(labels.taxId || 'Tax ID', data.clientTaxId, '#4b5563')}
  </div>
  <table style="width:100%;border-collapse:collapse;margin-bottom:32px;">
    <thead><tr>
      <th style="text-align:left;${thStyle}">${labels.description}</th>
      <th style="${thStyle}width:60px;">${labels.qty}</th>
      <th style="${thStyle}width:96px;">${labels.rate}</th>
      ${showPerItemTax ? `<th style="${thStyle}width:60px;">${taxName}</th>` : ''}
      <th style="${thStyle}width:96px;">${labels.amount}</th>
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

export function buildClassicHTML(data: InvoiceData, totals: InvoiceTotals, formatCurrency: (n: number) => string, labels: Labels): string {
  const accent = 'hsl(220,60%,30%)';
  const invoiceLabel = getInvoiceLabel(data);
  const taxName = getTaxName(data);
  const taxIdLabel = getTaxIdLabel(data);
  const showPerItemTax = hasPerItemTax(data);
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
      ${showPerItemTax ? `<td style="padding:8px 12px;text-align:right;border:1px solid #e5e7eb;font-size:12px;color:#6b7280;">${(item.taxRate ?? data.taxRate)}%</td>` : ''}
      <td style="padding:8px 12px;text-align:right;font-weight:500;border:1px solid #e5e7eb;">${formatCurrency(amount)}</td>
    </tr>`;
  }).join('');

  const discountHTML = data.discountPercent > 0
    ? `<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #e5e7eb;color:#15803d;">
        <span>${labels.discount} (${data.discountPercent}%)</span>
        <span>-${formatCurrency(totals.discountAmount)}</span>
      </div>` : '';

  const taxHTML = totals.taxAmount > 0
    ? `<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #e5e7eb;">
        <span style="color:#6b7280;">${taxName} (${data.taxRate}%)</span>
        <span>${formatCurrency(totals.taxAmount)}</span>
      </div>` : '';

  const notesSection = (data.notes || data.terms)
    ? `<div style="margin-top:40px;padding-top:16px;border-top:2px solid ${accent};font-size:12px;color:#6b7280;">
        ${data.notes ? `<div><span style="font-weight:bold;color:#374151;">${labels.notes}:</span> ${data.notes}</div>` : ''}
        ${data.terms ? `<div><span style="font-weight:bold;color:#374151;">${labels.terms}:</span> ${data.terms}</div>` : ''}
      </div>` : '';

  const thStyle = `text-align:right;padding:10px 12px;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;font-weight:bold;color:#fff;border:1px solid #d1d5db;`;

  return `<!DOCTYPE html><html><head><title>${invoiceLabel} ${data.invoiceNumber}</title>
<style>*{margin:0;padding:0;box-sizing:border-box;}body{font-family:Georgia,"Times New Roman",serif;padding:32px 40px;color:#111;font-size:13px;line-height:1.6;-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important;color-adjust:exact!important;}@media print{body{padding:20px;}@page{margin:12mm 10mm;size:A4;}table{page-break-inside:avoid;}tr{page-break-inside:avoid;}.no-break{page-break-inside:avoid;}}</style>
</head><body>
  <div style="border-bottom:4px double ${accent};padding-bottom:24px;margin-bottom:24px;">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;">
      <div>${logoHTML}
        <div style="font-size:20px;font-weight:bold;color:${accent};">${data.businessName || 'Your Business'}</div>
        ${data.businessAddress ? `<div style="color:#4b5563;white-space:pre-line;font-size:12px;margin-top:4px;">${data.businessAddress}</div>` : ''}
        ${data.businessEmail ? `<div style="color:#4b5563;font-size:12px;">${data.businessEmail}</div>` : ''}
        ${data.businessPhone ? `<div style="color:#4b5563;font-size:12px;">${data.businessPhone}</div>` : ''}
        ${taxIdHTML(taxIdLabel, data.businessTaxId, '#4b5563')}
      </div>
      <div style="text-align:right;">
        <div style="font-size:24px;font-weight:bold;text-transform:uppercase;letter-spacing:0.15em;color:${accent};margin-bottom:8px;">${invoiceLabel}</div>
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
      ${taxIdHTML(labels.taxId || 'Tax ID', data.clientTaxId, '#4b5563')}
    </div>
    <div style="text-align:right;padding-top:8px;font-size:14px;">
      <div><span style="color:#6b7280;">${labels.date}:</span> <span style="font-weight:500;">${data.invoiceDate || '—'}</span></div>
      <div><span style="color:#6b7280;">${labels.due}:</span> <span style="font-weight:500;">${data.dueDate || '—'}</span></div>
    </div>
  </div>
  <table style="width:100%;border-collapse:collapse;margin-bottom:32px;">
    <thead><tr style="background:${accent};-webkit-print-color-adjust:exact;print-color-adjust:exact;">
      <th style="text-align:left;${thStyle}">${labels.description}</th>
      <th style="${thStyle}width:60px;">${labels.qty}</th>
      <th style="${thStyle}width:96px;">${labels.rate}</th>
      ${showPerItemTax ? `<th style="${thStyle}width:60px;">${taxName}</th>` : ''}
      <th style="${thStyle}width:96px;">${labels.amount}</th>
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

export function buildMinimalHTML(data: InvoiceData, totals: InvoiceTotals, formatCurrency: (n: number) => string, labels: Labels): string {
  const invoiceLabel = getInvoiceLabel(data);
  const taxName = getTaxName(data);
  const taxIdLabel = getTaxIdLabel(data);
  const showPerItemTax = hasPerItemTax(data);
  const logoHTML = data.businessLogo
    ? `<img src="${data.businessLogo}" alt="Logo" style="max-height:40px;max-width:140px;object-fit:contain;margin-bottom:8px;filter:grayscale(1);opacity:0.8;" />`
    : '';

  const lineItemsHTML = data.lineItems.map(item => {
    const amount = item.quantity * item.rate;
    return `<tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:12px 0;color:#374151;">${item.description || '—'}</td>
      <td style="padding:12px 0;text-align:right;color:#6b7280;">${item.quantity}</td>
      <td style="padding:12px 0;text-align:right;color:#6b7280;">${formatCurrency(item.rate)}</td>
      ${showPerItemTax ? `<td style="padding:12px 0;text-align:right;color:#9ca3af;font-size:12px;">${(item.taxRate ?? data.taxRate)}%</td>` : ''}
      <td style="padding:12px 0;text-align:right;color:#1f2937;">${formatCurrency(amount)}</td>
    </tr>`;
  }).join('');

  const discountHTML = data.discountPercent > 0
    ? `<div style="display:flex;justify-content:space-between;color:#16a34a;">
        <span>${labels.discount} (${data.discountPercent}%)</span>
        <span>-${formatCurrency(totals.discountAmount)}</span>
      </div>` : '';

  const taxHTML = totals.taxAmount > 0
    ? `<div style="display:flex;justify-content:space-between;color:#9ca3af;">
        <span>${taxName} (${data.taxRate}%)</span>
        <span style="color:#4b5563;">${formatCurrency(totals.taxAmount)}</span>
      </div>` : '';

  const notesSection = (data.notes || data.terms)
    ? `<div style="margin-top:48px;padding-top:16px;border-top:1px solid #f3f4f6;font-size:12px;color:#9ca3af;">
        ${data.notes ? `<div><span style="color:#6b7280;">${labels.notes}:</span> ${data.notes}</div>` : ''}
        ${data.terms ? `<div><span style="color:#6b7280;">${labels.terms}:</span> ${data.terms}</div>` : ''}
      </div>` : '';

  const thStyle = `text-align:right;padding:8px 0;font-size:10px;text-transform:uppercase;letter-spacing:0.2em;color:#d1d5db;font-weight:normal;`;

  return `<!DOCTYPE html><html><head><title>${invoiceLabel} ${data.invoiceNumber}</title>
<style>*{margin:0;padding:0;box-sizing:border-box;}body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;padding:40px 48px;color:#111;font-size:13px;line-height:1.6;-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important;color-adjust:exact!important;}@media print{body{padding:20px;}@page{margin:12mm 10mm;size:A4;}table{page-break-inside:avoid;}tr{page-break-inside:avoid;}.no-break{page-break-inside:avoid;}}</style>
</head><body>
  <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:48px;">
    <div>${logoHTML}
      <div style="font-size:16px;font-weight:500;color:#1f2937;">${data.businessName || 'Your Business'}</div>
      ${data.businessAddress ? `<div style="color:#9ca3af;white-space:pre-line;font-size:12px;margin-top:4px;">${data.businessAddress}</div>` : ''}
      ${data.businessEmail ? `<div style="color:#9ca3af;font-size:12px;">${data.businessEmail}</div>` : ''}
      ${data.businessPhone ? `<div style="color:#9ca3af;font-size:12px;">${data.businessPhone}</div>` : ''}
      ${taxIdHTML(taxIdLabel, data.businessTaxId, '#9ca3af')}
    </div>
    <div style="text-align:right;">
      <div style="font-size:13px;font-weight:500;text-transform:uppercase;letter-spacing:0.3em;color:#9ca3af;margin-bottom:12px;">${invoiceLabel}</div>
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
    ${taxIdHTML(labels.taxId || 'Tax ID', data.clientTaxId, '#9ca3af')}
  </div>
  <table style="width:100%;border-collapse:collapse;margin-bottom:40px;">
    <thead><tr style="border-bottom:1px solid #e5e7eb;">
      <th style="text-align:left;${thStyle}">${labels.description}</th>
      <th style="${thStyle}width:60px;">${labels.qty}</th>
      <th style="${thStyle}width:96px;">${labels.rate}</th>
      ${showPerItemTax ? `<th style="${thStyle}width:60px;">${taxName}</th>` : ''}
      <th style="${thStyle}width:96px;">${labels.amount}</th>
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

export function buildContractorHTML(data: InvoiceData, totals: InvoiceTotals, formatCurrency: (n: number) => string, labels: Labels): string {
  const accent = 'hsl(30,80%,42%)';
  const accentLight = 'hsl(30,60%,95%)';
  const taxName = getTaxName(data);
  const taxIdLabel = getTaxIdLabel(data);
  const showPerItemTax = hasPerItemTax(data);
  const logoHTML = data.businessLogo
    ? `<img src="${data.businessLogo}" alt="Logo" style="max-height:52px;max-width:160px;object-fit:contain;margin-bottom:8px;" />`
    : '';

  const lineItemsHTML = data.lineItems.map((item, i) => {
    const amount = item.quantity * item.rate;
    const bg = i % 2 === 0 ? `background:${accentLight};-webkit-print-color-adjust:exact;print-color-adjust:exact;` : '';
    return `<tr style="${bg}">
      <td style="padding:9px 12px;border-bottom:1px solid #e5e7eb;">${item.description || '—'}</td>
      <td style="padding:9px 12px;text-align:right;border-bottom:1px solid #e5e7eb;color:#4b5563;">${item.quantity}</td>
      <td style="padding:9px 12px;text-align:right;border-bottom:1px solid #e5e7eb;color:#4b5563;">${formatCurrency(item.rate)}</td>
      ${showPerItemTax ? `<td style="padding:9px 12px;text-align:right;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:12px;">${(item.taxRate ?? data.taxRate)}%</td>` : ''}
      <td style="padding:9px 12px;text-align:right;border-bottom:1px solid #e5e7eb;font-weight:600;">${formatCurrency(amount)}</td>
    </tr>`;
  }).join('');

  const discountHTML = data.discountPercent > 0
    ? `<div style="display:flex;justify-content:space-between;padding:4px 0;color:#15803d;">
        <span>${labels.discount} (${data.discountPercent}%)</span>
        <span>-${formatCurrency(totals.discountAmount)}</span>
      </div>` : '';

  const taxHTML = totals.taxAmount > 0
    ? `<div style="display:flex;justify-content:space-between;padding:4px 0;">
        <span style="color:#6b7280;">${taxName} (${data.taxRate}%)</span>
        <span>${formatCurrency(totals.taxAmount)}</span>
      </div>` : '';

  const notesSection = (data.notes || data.terms)
    ? `<div style="margin-top:36px;padding:14px 16px;border-radius:6px;background:${accentLight};-webkit-print-color-adjust:exact;print-color-adjust:exact;font-size:12px;color:#6b7280;">
        ${data.notes ? `<div style="margin-bottom:4px;"><span style="font-weight:600;color:#92400e;">Project Notes:</span> ${data.notes}</div>` : ''}
        ${data.terms ? `<div><span style="font-weight:600;color:#92400e;">${labels.terms}:</span> ${data.terms}</div>` : ''}
      </div>` : '';

  const thStyle = `text-align:right;padding:10px 12px;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;font-weight:700;color:#fff;`;

  return `<!DOCTYPE html><html><head><title>Project Invoice ${data.invoiceNumber}</title>
<style>*{margin:0;padding:0;box-sizing:border-box;}body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;padding:0;color:#111;font-size:13px;line-height:1.6;-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important;color-adjust:exact!important;}@media print{body{padding:0;}@page{margin:12mm 10mm;size:A4;}table{page-break-inside:avoid;}tr{page-break-inside:avoid;}}</style>
</head><body>
<div style="height:10px;background:${accent};-webkit-print-color-adjust:exact;print-color-adjust:exact;"></div>
<div style="padding:28px 40px;">
  <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:32px;">
    <div>${logoHTML}
      <div style="font-size:20px;font-weight:800;color:${accent};">${data.businessName || 'Your Business'}</div>
      ${data.businessAddress ? `<div style="color:#6b7280;white-space:pre-line;font-size:12px;margin-top:4px;">${data.businessAddress}</div>` : ''}
      ${data.businessEmail ? `<div style="color:#6b7280;font-size:12px;">${data.businessEmail}</div>` : ''}
      ${data.businessPhone ? `<div style="color:#6b7280;font-size:12px;">${data.businessPhone}</div>` : ''}
      ${taxIdHTML(taxIdLabel, data.businessTaxId)}
    </div>
    <div style="text-align:right;">
      <div style="font-size:24px;font-weight:900;text-transform:uppercase;letter-spacing:0.05em;color:${accent};margin-bottom:6px;">PROJECT INVOICE</div>
      <div style="font-weight:600;font-size:14px;color:#374151;">${data.invoiceNumber || '—'}</div>
      <div style="margin-top:8px;padding:8px 12px;border-radius:6px;background:${accentLight};-webkit-print-color-adjust:exact;print-color-adjust:exact;font-size:12px;">
        <div><span style="color:#92400e;font-weight:500;">${labels.date}:</span> ${data.invoiceDate || '—'}</div>
        <div><span style="color:#92400e;font-weight:500;">${labels.due}:</span> ${data.dueDate || '—'}</div>
      </div>
    </div>
  </div>
  <div style="display:flex;gap:24px;margin-bottom:28px;">
    <div style="flex:1;padding:14px 16px;border-left:4px solid ${accent};background:${accentLight};-webkit-print-color-adjust:exact;print-color-adjust:exact;border-radius:0 6px 6px 0;">
      <div style="font-size:10px;text-transform:uppercase;letter-spacing:0.1em;font-weight:700;color:${accent};margin-bottom:4px;">${labels.billTo}</div>
      <div style="font-weight:600;">${data.clientName || 'Client Name'}</div>
      ${data.clientAddress ? `<div style="color:#4b5563;white-space:pre-line;font-size:12px;">${data.clientAddress}</div>` : ''}
      ${data.clientEmail ? `<div style="color:#4b5563;font-size:12px;">${data.clientEmail}</div>` : ''}
      ${taxIdHTML(labels.taxId || 'Tax ID', data.clientTaxId, '#4b5563')}
    </div>
  </div>
  <table style="width:100%;border-collapse:collapse;margin-bottom:28px;">
    <thead><tr style="background:${accent};-webkit-print-color-adjust:exact;print-color-adjust:exact;">
      <th style="text-align:left;${thStyle}">${labels.description}</th>
      <th style="${thStyle}width:60px;">${labels.qty}</th>
      <th style="${thStyle}width:96px;">${labels.rate}</th>
      ${showPerItemTax ? `<th style="${thStyle}width:60px;">${taxName}</th>` : ''}
      <th style="${thStyle}width:96px;">${labels.amount}</th>
    </tr></thead>
    <tbody>${lineItemsHTML}</tbody>
  </table>
  <div style="display:flex;justify-content:flex-end;">
    <div style="width:260px;font-size:14px;">
      <div style="display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid #e5e7eb;">
        <span style="color:#6b7280;">${labels.subtotal}</span>
        <span>${formatCurrency(totals.subtotal)}</span>
      </div>
      ${discountHTML}${taxHTML}
      <div style="display:flex;justify-content:space-between;padding:12px 14px;margin-top:8px;border-radius:6px;font-weight:800;font-size:17px;color:#fff;background:${accent};-webkit-print-color-adjust:exact;print-color-adjust:exact;">
        <span>${labels.total}</span>
        <span>${formatCurrency(totals.total)}</span>
      </div>
    </div>
  </div>
  ${notesSection}
  <div style="margin-top:28px;text-align:center;font-size:10px;color:#d1d5db;">${labels.createdWith} &bull; invoicemonk.com</div>
</div>
</body></html>`;
}

export function buildConsultingHTML(data: InvoiceData, totals: InvoiceTotals, formatCurrency: (n: number) => string, labels: Labels): string {
  const accent = 'hsl(152,60%,32%)';
  const accentLight = 'hsl(152,40%,96%)';
  const taxName = getTaxName(data);
  const taxIdLabel = getTaxIdLabel(data);
  const showPerItemTax = hasPerItemTax(data);
  const logoHTML = data.businessLogo
    ? `<img src="${data.businessLogo}" alt="Logo" style="max-height:48px;max-width:160px;object-fit:contain;margin-bottom:8px;" />`
    : '';

  const lineItemsHTML = data.lineItems.map((item, i) => {
    const amount = item.quantity * item.rate;
    const bg = i % 2 === 0 ? `background:${accentLight};-webkit-print-color-adjust:exact;print-color-adjust:exact;` : '';
    return `<tr style="${bg}">
      <td style="padding:10px 14px;border-bottom:1px solid #e5e7eb;">${item.description || '—'}</td>
      <td style="padding:10px 14px;text-align:right;border-bottom:1px solid #e5e7eb;color:#4b5563;">${item.quantity}</td>
      <td style="padding:10px 14px;text-align:right;border-bottom:1px solid #e5e7eb;color:#4b5563;">${formatCurrency(item.rate)}</td>
      ${showPerItemTax ? `<td style="padding:10px 14px;text-align:right;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:12px;">${(item.taxRate ?? data.taxRate)}%</td>` : ''}
      <td style="padding:10px 14px;text-align:right;border-bottom:1px solid #e5e7eb;font-weight:600;">${formatCurrency(amount)}</td>
    </tr>`;
  }).join('');

  const discountHTML = data.discountPercent > 0
    ? `<div style="display:flex;justify-content:space-between;padding:4px 0;color:#15803d;">
        <span>${labels.discount} (${data.discountPercent}%)</span>
        <span>-${formatCurrency(totals.discountAmount)}</span>
      </div>` : '';

  const taxHTML = totals.taxAmount > 0
    ? `<div style="display:flex;justify-content:space-between;padding:4px 0;">
        <span style="color:#6b7280;">${taxName} (${data.taxRate}%)</span>
        <span>${formatCurrency(totals.taxAmount)}</span>
      </div>` : '';

  const notesSection = (data.notes || data.terms)
    ? `<div style="margin-top:36px;padding-top:16px;border-top:1px solid #d1d5db;font-size:12px;color:#6b7280;">
        ${data.notes ? `<div style="margin-bottom:4px;padding:10px 14px;border-radius:6px;background:${accentLight};-webkit-print-color-adjust:exact;print-color-adjust:exact;"><span style="font-weight:600;color:${accent};">Engagement Notes:</span> ${data.notes}</div>` : ''}
        ${data.terms ? `<div style="margin-top:6px;"><span style="font-weight:600;color:#374151;">${labels.terms}:</span> ${data.terms}</div>` : ''}
      </div>` : '';

  const thStyle = `text-align:right;padding:10px 14px;font-size:10px;text-transform:uppercase;letter-spacing:0.1em;font-weight:700;color:${accent};`;

  return `<!DOCTYPE html><html><head><title>Consulting Invoice ${data.invoiceNumber}</title>
<style>*{margin:0;padding:0;box-sizing:border-box;}body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;padding:0;color:#111;font-size:13px;line-height:1.6;-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important;color-adjust:exact!important;}@media print{body{padding:0;}@page{margin:12mm 10mm;size:A4;}table{page-break-inside:avoid;}tr{page-break-inside:avoid;}}</style>
</head><body>
<div style="display:flex;height:6px;-webkit-print-color-adjust:exact;print-color-adjust:exact;">
  <div style="flex:3;background:${accent};"></div>
  <div style="flex:1;background:hsl(152,40%,60%);"></div>
</div>
<div style="padding:30px 40px;">
  <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:36px;">
    <div>${logoHTML}
      <div style="font-size:18px;font-weight:700;color:#1f2937;">${data.businessName || 'Your Business'}</div>
      ${data.businessAddress ? `<div style="color:#6b7280;white-space:pre-line;font-size:12px;margin-top:4px;">${data.businessAddress}</div>` : ''}
      ${data.businessEmail ? `<div style="color:#6b7280;font-size:12px;">${data.businessEmail}</div>` : ''}
      ${data.businessPhone ? `<div style="color:#6b7280;font-size:12px;">${data.businessPhone}</div>` : ''}
      ${taxIdHTML(taxIdLabel, data.businessTaxId)}
    </div>
    <div style="text-align:right;">
      <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.15em;color:${accent};font-weight:600;margin-bottom:2px;">Consulting Invoice</div>
      <div style="font-size:26px;font-weight:800;color:${accent};margin-bottom:8px;">${data.invoiceNumber || '—'}</div>
      <div style="color:#6b7280;font-size:12px;">${labels.date}: ${data.invoiceDate || '—'}</div>
      <div style="color:#6b7280;font-size:12px;">${labels.due}: ${data.dueDate || '—'}</div>
    </div>
  </div>
  <div style="display:flex;gap:20px;margin-bottom:30px;">
    <div style="flex:1;padding:14px 16px;border:1px solid #d1d5db;border-radius:8px;">
      <div style="font-size:10px;text-transform:uppercase;letter-spacing:0.1em;font-weight:600;color:${accent};margin-bottom:4px;">${labels.billTo}</div>
      <div style="font-weight:600;">${data.clientName || 'Client Name'}</div>
      ${data.clientAddress ? `<div style="color:#4b5563;white-space:pre-line;font-size:12px;">${data.clientAddress}</div>` : ''}
      ${data.clientEmail ? `<div style="color:#4b5563;font-size:12px;">${data.clientEmail}</div>` : ''}
      ${taxIdHTML(labels.taxId || 'Tax ID', data.clientTaxId, '#4b5563')}
    </div>
  </div>
  <table style="width:100%;border-collapse:collapse;margin-bottom:28px;">
    <thead><tr style="border-bottom:2px solid ${accent};">
      <th style="text-align:left;${thStyle}">${labels.description}</th>
      <th style="${thStyle}width:60px;">Hours</th>
      <th style="${thStyle}width:96px;">${labels.rate}</th>
      ${showPerItemTax ? `<th style="${thStyle}width:60px;">${taxName}</th>` : ''}
      <th style="${thStyle}width:96px;">${labels.amount}</th>
    </tr></thead>
    <tbody>${lineItemsHTML}</tbody>
  </table>
  <div style="display:flex;justify-content:flex-end;">
    <div style="width:256px;font-size:14px;">
      <div style="display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid #e5e7eb;">
        <span style="color:#6b7280;">${labels.subtotal}</span>
        <span>${formatCurrency(totals.subtotal)}</span>
      </div>
      ${discountHTML}${taxHTML}
      <div style="display:flex;justify-content:space-between;padding:10px 0;margin-top:8px;border-top:3px solid ${accent};font-weight:800;font-size:17px;color:${accent};">
        <span>${labels.total}</span>
        <span>${formatCurrency(totals.total)}</span>
      </div>
    </div>
  </div>
  ${notesSection}
  <div style="margin-top:28px;text-align:center;font-size:10px;color:#d1d5db;">${labels.createdWith} &bull; invoicemonk.com</div>
</div>
</body></html>`;
}

export function buildEcommerceHTML(data: InvoiceData, totals: InvoiceTotals, formatCurrency: (n: number) => string, labels: Labels): string {
  const accent = 'hsl(263,60%,48%)';
  const accentLight = 'hsl(263,40%,96%)';
  const taxName = getTaxName(data);
  const taxIdLabel = getTaxIdLabel(data);
  const showPerItemTax = hasPerItemTax(data);
  const logoHTML = data.businessLogo
    ? `<img src="${data.businessLogo}" alt="Logo" style="max-height:48px;max-width:160px;object-fit:contain;margin-bottom:8px;" />`
    : '';

  const lineItemsHTML = data.lineItems.map((item, i) => {
    const amount = item.quantity * item.rate;
    const bg = i % 2 === 0 ? `background:${accentLight};-webkit-print-color-adjust:exact;print-color-adjust:exact;` : '';
    return `<tr style="${bg}">
      <td style="padding:9px 12px;border-bottom:1px solid #e5e7eb;">${item.description || '—'}</td>
      <td style="padding:9px 12px;text-align:center;border-bottom:1px solid #e5e7eb;color:#4b5563;">${item.quantity}</td>
      <td style="padding:9px 12px;text-align:right;border-bottom:1px solid #e5e7eb;color:#4b5563;">${formatCurrency(item.rate)}</td>
      ${showPerItemTax ? `<td style="padding:9px 12px;text-align:right;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:12px;">${(item.taxRate ?? data.taxRate)}%</td>` : ''}
      <td style="padding:9px 12px;text-align:right;border-bottom:1px solid #e5e7eb;font-weight:600;">${formatCurrency(amount)}</td>
    </tr>`;
  }).join('');

  const discountHTML = data.discountPercent > 0
    ? `<div style="display:flex;justify-content:space-between;padding:6px 12px;border-radius:4px;background:#dcfce7;-webkit-print-color-adjust:exact;print-color-adjust:exact;color:#15803d;font-weight:500;">
        <span>🏷 ${labels.discount} (${data.discountPercent}%)</span>
        <span>-${formatCurrency(totals.discountAmount)}</span>
      </div>` : '';

  const taxHTML = totals.taxAmount > 0
    ? `<div style="display:flex;justify-content:space-between;padding:4px 0;">
        <span style="color:#6b7280;">${taxName} (${data.taxRate}%)</span>
        <span>${formatCurrency(totals.taxAmount)}</span>
      </div>` : '';

  const notesSection = (data.notes || data.terms)
    ? `<div style="margin-top:32px;padding:14px 16px;border-radius:8px;border:1px dashed #d1d5db;font-size:12px;color:#6b7280;">
        ${data.notes ? `<div style="margin-bottom:4px;"><span style="font-weight:600;color:${accent};">Order Notes:</span> ${data.notes}</div>` : ''}
        ${data.terms ? `<div><span style="font-weight:600;color:#374151;">${labels.terms}:</span> ${data.terms}</div>` : ''}
      </div>` : '';

  const thStyle = `text-align:right;padding:10px 12px;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;font-weight:700;color:#fff;`;

  return `<!DOCTYPE html><html><head><title>Sales Invoice ${data.invoiceNumber}</title>
<style>*{margin:0;padding:0;box-sizing:border-box;}body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;padding:0;color:#111;font-size:13px;line-height:1.6;-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important;color-adjust:exact!important;}@media print{body{padding:0;}@page{margin:12mm 10mm;size:A4;}table{page-break-inside:avoid;}tr{page-break-inside:avoid;}}</style>
</head><body>
<div style="height:6px;background:linear-gradient(90deg,${accent},hsl(263,50%,65%));-webkit-print-color-adjust:exact;print-color-adjust:exact;"></div>
<div style="padding:28px 40px;">
  <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:30px;">
    <div>${logoHTML}
      <div style="font-size:18px;font-weight:700;color:#1f2937;">${data.businessName || 'Your Business'}</div>
      ${data.businessAddress ? `<div style="color:#6b7280;white-space:pre-line;font-size:12px;margin-top:4px;">${data.businessAddress}</div>` : ''}
      ${data.businessEmail ? `<div style="color:#6b7280;font-size:12px;">${data.businessEmail}</div>` : ''}
      ${data.businessPhone ? `<div style="color:#6b7280;font-size:12px;">${data.businessPhone}</div>` : ''}
      ${taxIdHTML(taxIdLabel, data.businessTaxId)}
    </div>
    <div style="text-align:right;">
      <div style="display:inline-block;padding:6px 16px;border-radius:20px;background:${accent};color:#fff;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;-webkit-print-color-adjust:exact;print-color-adjust:exact;">Sales Invoice</div>
      <div style="font-weight:600;font-size:15px;margin-top:10px;color:#374151;">${data.invoiceNumber || '—'}</div>
      <div style="color:#9ca3af;font-size:12px;margin-top:4px;">${labels.date}: ${data.invoiceDate || '—'}</div>
      <div style="color:#9ca3af;font-size:12px;">${labels.due}: ${data.dueDate || '—'}</div>
    </div>
  </div>
  <div style="display:flex;gap:16px;margin-bottom:28px;">
    <div style="flex:1;padding:14px 16px;border-radius:8px;background:${accentLight};-webkit-print-color-adjust:exact;print-color-adjust:exact;">
      <div style="font-size:10px;text-transform:uppercase;letter-spacing:0.1em;font-weight:600;color:${accent};margin-bottom:4px;">${labels.billTo}</div>
      <div style="font-weight:600;">${data.clientName || 'Client Name'}</div>
      ${data.clientAddress ? `<div style="color:#4b5563;white-space:pre-line;font-size:12px;">${data.clientAddress}</div>` : ''}
      ${data.clientEmail ? `<div style="color:#4b5563;font-size:12px;">${data.clientEmail}</div>` : ''}
      ${taxIdHTML(labels.taxId || 'Tax ID', data.clientTaxId, '#4b5563')}
    </div>
  </div>
  <table style="width:100%;border-collapse:collapse;margin-bottom:24px;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
    <thead><tr style="background:${accent};-webkit-print-color-adjust:exact;print-color-adjust:exact;">
      <th style="text-align:left;${thStyle}">Product / SKU</th>
      <th style="text-align:center;${thStyle}width:60px;">${labels.qty}</th>
      <th style="${thStyle}width:96px;">Unit Price</th>
      ${showPerItemTax ? `<th style="${thStyle}width:60px;">${taxName}</th>` : ''}
      <th style="${thStyle}width:96px;">${labels.amount}</th>
    </tr></thead>
    <tbody>${lineItemsHTML}</tbody>
  </table>
  <div style="display:flex;justify-content:flex-end;">
    <div style="width:270px;font-size:14px;">
      <div style="display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid #e5e7eb;">
        <span style="color:#6b7280;">${labels.subtotal}</span>
        <span>${formatCurrency(totals.subtotal)}</span>
      </div>
      ${discountHTML}${taxHTML}
      <div style="display:flex;justify-content:space-between;padding:12px 14px;margin-top:8px;border-radius:8px;font-weight:800;font-size:17px;color:#fff;background:${accent};-webkit-print-color-adjust:exact;print-color-adjust:exact;">
        <span>${labels.total}</span>
        <span>${formatCurrency(totals.total)}</span>
      </div>
    </div>
  </div>
  ${notesSection}
  <div style="margin-top:28px;text-align:center;font-size:10px;color:#d1d5db;">${labels.createdWith} &bull; invoicemonk.com</div>
</div>
</body></html>`;
}

export function buildInvoiceHTML(data: InvoiceData, totals: InvoiceTotals, formatCurrency: (n: number) => string, labels: Labels): string {
  switch (data.template) {
    case 'classic':
      return buildClassicHTML(data, totals, formatCurrency, labels);
    case 'minimal':
      return buildMinimalHTML(data, totals, formatCurrency, labels);
    case 'contractor':
      return buildContractorHTML(data, totals, formatCurrency, labels);
    case 'consulting':
      return buildConsultingHTML(data, totals, formatCurrency, labels);
    case 'ecommerce':
      return buildEcommerceHTML(data, totals, formatCurrency, labels);
    default:
      return buildModernHTML(data, totals, formatCurrency, labels);
  }
}

// Template-specific builder mapping for the download feature
const templateBuilderMap: Record<string, typeof buildModernHTML> = {
  modern: buildModernHTML,
  classic: buildClassicHTML,
  minimal: buildMinimalHTML,
  contractor: buildContractorHTML,
  consulting: buildConsultingHTML,
  ecommerce: buildEcommerceHTML,
};

export function getBuilderForTemplate(templateId: string) {
  return templateBuilderMap[templateId] || buildModernHTML;
}

// Sample data for each template download
export interface SampleInvoice {
  data: InvoiceData;
  totals: InvoiceTotals;
}

function computeTotals(lineItems: { quantity: number; rate: number; taxRate?: number }[], discountPercent: number, taxRate: number): InvoiceTotals {
  const subtotal = lineItems.reduce((sum, item) => sum + item.quantity * item.rate, 0);
  const discountAmount = subtotal * (discountPercent / 100);
  const afterDiscount = subtotal - discountAmount;
  const discountRatio = subtotal > 0 ? afterDiscount / subtotal : 1;
  const taxAmount = lineItems.reduce((sum, item) => {
    const itemSubtotal = item.quantity * item.rate;
    const itemAfterDiscount = itemSubtotal * discountRatio;
    const itemTaxRate = item.taxRate ?? taxRate;
    return sum + itemAfterDiscount * (itemTaxRate / 100);
  }, 0);
  const total = afterDiscount + taxAmount;
  return { subtotal, discountAmount, taxAmount, total };
}

const SAMPLE_BASE = {
  businessTaxId: '',
  clientTaxId: '',
};

export function getSampleInvoice(templateId: string): SampleInvoice {
  const samples: Record<string, Omit<InvoiceData, 'template'>> = {
    modern: {
      ...SAMPLE_BASE,
      businessName: 'Acme Design Studio',
      businessAddress: '123 Creative Ave\nSan Francisco, CA 94102',
      businessEmail: 'hello@acmedesign.co',
      businessPhone: '+1 (415) 555-0147',
      businessLogo: '',
      clientName: 'TechVentures Inc.',
      clientAddress: '456 Innovation Blvd\nNew York, NY 10001',
      clientEmail: 'accounts@techventures.com',
      invoiceNumber: 'INV-2026-001',
      invoiceDate: '2026-03-15',
      dueDate: '2026-04-14',
      lineItems: [
        { id: '1', description: 'Website redesign — UX/UI', quantity: 1, rate: 4500 },
        { id: '2', description: 'Frontend development', quantity: 40, rate: 150 },
        { id: '3', description: 'Brand identity package', quantity: 1, rate: 2000 },
      ],
      currency: 'USD',
      taxRate: 8.5,
      discountPercent: 0,
      notes: 'Thank you for your business!',
      terms: 'Payment due within 30 days. Late fees of 1.5% per month apply.',
    },
    classic: {
      ...SAMPLE_BASE,
      businessName: 'Smith & Associates',
      businessAddress: '789 Legal Plaza, Suite 400\nChicago, IL 60601',
      businessEmail: 'billing@smithlaw.com',
      businessPhone: '+1 (312) 555-0291',
      businessLogo: '',
      clientName: 'Global Enterprises Ltd.',
      clientAddress: '321 Corporate Dr\nBoston, MA 02101',
      clientEmail: 'ap@globalent.com',
      invoiceNumber: 'SA-2026-0042',
      invoiceDate: '2026-03-10',
      dueDate: '2026-04-09',
      lineItems: [
        { id: '1', description: 'Legal consultation — contract review', quantity: 8, rate: 350 },
        { id: '2', description: 'Document drafting & filing', quantity: 1, rate: 1200 },
        { id: '3', description: 'Court representation', quantity: 4, rate: 450 },
      ],
      currency: 'USD',
      taxRate: 0,
      discountPercent: 0,
      notes: '',
      terms: 'Net 30. All fees are non-refundable once services are rendered.',
    },
    minimal: {
      ...SAMPLE_BASE,
      businessName: 'Jane Doe Photography',
      businessAddress: '55 Shutter Lane\nAustin, TX 78701',
      businessEmail: 'jane@janedoephoto.com',
      businessPhone: '+1 (512) 555-0183',
      businessLogo: '',
      clientName: 'Sarah & Michael',
      clientAddress: '12 Maple St\nAustin, TX 78704',
      clientEmail: 'sarah.m@email.com',
      invoiceNumber: 'JDP-0087',
      invoiceDate: '2026-03-12',
      dueDate: '2026-03-26',
      lineItems: [
        { id: '1', description: 'Wedding photography — 8 hours', quantity: 1, rate: 3500 },
        { id: '2', description: 'Photo editing & retouching (200 photos)', quantity: 1, rate: 800 },
        { id: '3', description: 'Premium photo album', quantity: 1, rate: 450 },
      ],
      currency: 'USD',
      taxRate: 6.25,
      discountPercent: 5,
      notes: 'Digital gallery link will be sent within 2 weeks.',
      terms: 'Payment due within 14 days of invoice date.',
    },
    contractor: {
      ...SAMPLE_BASE,
      businessName: 'BuildRight Construction',
      businessAddress: '900 Hammer Rd\nDenver, CO 80202',
      businessEmail: 'invoices@buildright.co',
      businessPhone: '+1 (720) 555-0334',
      businessLogo: '',
      clientName: 'Riverside Homes LLC',
      clientAddress: '44 River Bend Way\nDenver, CO 80220',
      clientEmail: 'payments@riversidehomes.com',
      invoiceNumber: 'BRC-2026-019',
      invoiceDate: '2026-03-14',
      dueDate: '2026-04-13',
      lineItems: [
        { id: '1', description: 'Foundation work — labor (3 crew × 5 days)', quantity: 15, rate: 85 },
        { id: '2', description: 'Concrete & rebar materials', quantity: 1, rate: 3200 },
        { id: '3', description: 'Framing — labor (4 crew × 8 days)', quantity: 32, rate: 75 },
        { id: '4', description: 'Lumber & fasteners', quantity: 1, rate: 4800 },
        { id: '5', description: 'Equipment rental — excavator (3 days)', quantity: 3, rate: 450 },
      ],
      currency: 'USD',
      taxRate: 7.65,
      discountPercent: 0,
      notes: 'Project: Lot 12 — Phase 2 framing complete.',
      terms: 'Net 30. Lien rights reserved per state statute.',
    },
    consulting: {
      ...SAMPLE_BASE,
      businessName: 'Strategic Advisors Group',
      businessAddress: '222 Insight Tower, Floor 18\nSeattle, WA 98101',
      businessEmail: 'billing@strategicadvisors.com',
      businessPhone: '+1 (206) 555-0412',
      businessLogo: '',
      clientName: 'NovaTech Solutions',
      clientAddress: '88 Innovation Park\nSeattle, WA 98109',
      clientEmail: 'finance@novatech.io',
      invoiceNumber: 'SAG-2026-108',
      invoiceDate: '2026-03-01',
      dueDate: '2026-03-31',
      lineItems: [
        { id: '1', description: 'Strategic planning workshop (full day)', quantity: 2, rate: 2800 },
        { id: '2', description: 'Market analysis & competitive research', quantity: 24, rate: 275 },
        { id: '3', description: 'Executive coaching sessions', quantity: 6, rate: 400 },
        { id: '4', description: 'Monthly retainer — March 2026', quantity: 1, rate: 5000 },
      ],
      currency: 'USD',
      taxRate: 10,
      discountPercent: 0,
      notes: 'Retainer hours: 20 used of 20 allocated.',
      terms: 'Due upon receipt. Retainer is non-refundable.',
    },
    ecommerce: {
      ...SAMPLE_BASE,
      businessName: 'TechGadgets Wholesale',
      businessAddress: '1500 Commerce Blvd\nMiami, FL 33101',
      businessEmail: 'orders@techgadgets.co',
      businessPhone: '+1 (305) 555-0567',
      businessLogo: '',
      clientName: 'UrbanRetail Stores',
      clientAddress: '77 Market St\nAtlanta, GA 30301',
      clientEmail: 'purchasing@urbanretail.com',
      invoiceNumber: 'TGW-2026-4521',
      invoiceDate: '2026-03-13',
      dueDate: '2026-04-12',
      lineItems: [
        { id: '1', description: 'Wireless Earbuds Pro (SKU: WEP-200)', quantity: 50, rate: 24.99 },
        { id: '2', description: 'USB-C Fast Charger (SKU: UFC-100)', quantity: 100, rate: 12.50 },
        { id: '3', description: 'Bluetooth Speaker Mini (SKU: BSM-150)', quantity: 30, rate: 34.99 },
        { id: '4', description: 'Phone Case Bundle — 3-pack (SKU: PCB-300)', quantity: 75, rate: 8.99 },
      ],
      currency: 'USD',
      taxRate: 7,
      discountPercent: 10,
      notes: 'Order #PO-8834. Shipped via FedEx Ground.',
      terms: 'Net 30. Bulk discount applied. Returns accepted within 14 days.',
    },
  };

  const sampleData = samples[templateId] || samples.modern;
  const data: InvoiceData = { ...sampleData, template: templateId as InvoiceData['template'] };
  const totals = computeTotals(data.lineItems, data.discountPercent, data.taxRate);

  return { data, totals };
}
