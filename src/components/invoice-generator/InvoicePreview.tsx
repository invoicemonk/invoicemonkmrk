import { InvoiceData, InvoiceTotals, CURRENCIES } from './types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

interface Props {
  data: InvoiceData;
  totals: InvoiceTotals;
  formatCurrency: (n: number) => string;
}

/* ── Modern Template ── */
function ModernTemplate({ data, totals, formatCurrency, t }: Props & { t: (k: string) => string }) {
  const accent = 'hsl(170, 82%, 26%)';
  return (
    <div className="bg-white text-gray-900 rounded-lg shadow-sm border border-border min-h-[700px] text-[13px] leading-relaxed print:shadow-none print:border-none print:p-0 font-sans overflow-hidden">
      {/* Accent bar */}
      <div className="h-2" style={{ background: `linear-gradient(90deg, ${accent}, hsl(170, 70%, 40%))` }} />
      <div className="p-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-10">
          <div>
            {data.businessLogo && (
              <img src={data.businessLogo} alt="Logo" className="h-14 w-auto mb-3 object-contain" />
            )}
            <h2 className="text-lg font-bold text-gray-900">{data.businessName || 'Your Business'}</h2>
            {data.businessAddress && <p className="text-gray-500 whitespace-pre-line text-xs mt-1">{data.businessAddress}</p>}
            {data.businessEmail && <p className="text-gray-500 text-xs">{data.businessEmail}</p>}
            {data.businessPhone && <p className="text-gray-500 text-xs">{data.businessPhone}</p>}
          </div>
          <div className="text-right">
            <h1 className="text-3xl font-extrabold tracking-tight mb-2" style={{ color: accent }}>
              {t('form.invoice')}
            </h1>
            <div className="space-y-0.5">
              <p className="font-semibold text-sm">{data.invoiceNumber || '—'}</p>
              <p className="text-gray-400 text-xs">{t('form.date')}: {data.invoiceDate || '—'}</p>
              <p className="text-gray-400 text-xs">{t('form.due')}: {data.dueDate || '—'}</p>
            </div>
          </div>
        </div>

        {/* Bill To Card */}
        <div className="mb-8 p-4 rounded-lg" style={{ backgroundColor: 'hsl(170, 40%, 96%)' }}>
          <p className="text-[10px] uppercase tracking-widest font-semibold mb-1.5" style={{ color: accent }}>{t('form.billTo')}</p>
          <p className="font-semibold text-gray-900">{data.clientName || 'Client Name'}</p>
          {data.clientAddress && <p className="text-gray-600 whitespace-pre-line text-xs">{data.clientAddress}</p>}
          {data.clientEmail && <p className="text-gray-600 text-xs">{data.clientEmail}</p>}
        </div>

        {/* Table */}
        <table className="w-full mb-8">
          <thead>
            <tr>
              <th className="text-left py-3 text-[10px] uppercase tracking-widest font-semibold border-b-2" style={{ borderColor: accent, color: accent }}>{t('form.description')}</th>
              <th className="text-right py-3 text-[10px] uppercase tracking-widest font-semibold border-b-2 w-16" style={{ borderColor: accent, color: accent }}>{t('form.qty')}</th>
              <th className="text-right py-3 text-[10px] uppercase tracking-widest font-semibold border-b-2 w-24" style={{ borderColor: accent, color: accent }}>{t('form.rate')}</th>
              <th className="text-right py-3 text-[10px] uppercase tracking-widest font-semibold border-b-2 w-24" style={{ borderColor: accent, color: accent }}>{t('form.amount')}</th>
            </tr>
          </thead>
          <tbody>
            {data.lineItems.map((item, i) => {
              const amount = item.quantity * item.rate;
              return (
                <tr key={item.id} className={i % 2 === 0 ? 'bg-gray-50/50' : ''}>
                  <td className="py-2.5">{item.description || '—'}</td>
                  <td className="py-2.5 text-right text-gray-600">{item.quantity}</td>
                  <td className="py-2.5 text-right text-gray-600">{formatCurrency(item.rate)}</td>
                  <td className="py-2.5 text-right font-medium">{formatCurrency(amount)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Totals */}
        <div className="flex justify-end">
          <div className="w-64 space-y-1.5 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">{t('form.subtotal')}</span>
              <span>{formatCurrency(totals.subtotal)}</span>
            </div>
            {data.discountPercent > 0 && (
              <div className="flex justify-between text-green-700">
                <span>{t('form.discount')} ({data.discountPercent}%)</span>
                <span>-{formatCurrency(totals.discountAmount)}</span>
              </div>
            )}
            {data.taxRate > 0 && (
              <div className="flex justify-between">
                <span className="text-gray-400">{t('form.tax')} ({data.taxRate}%)</span>
                <span>{formatCurrency(totals.taxAmount)}</span>
              </div>
            )}
            <div className="flex justify-between pt-3 font-bold text-base rounded-md px-3 py-2 text-white" style={{ backgroundColor: accent }}>
              <span>{t('form.total')}</span>
              <span>{formatCurrency(totals.total)}</span>
            </div>
          </div>
        </div>

        {/* Notes & Terms */}
        {(data.notes || data.terms) && (
          <div className="mt-10 pt-4 border-t border-gray-100 space-y-2 text-xs text-gray-500">
            {data.notes && <div><span className="font-medium text-gray-700">{t('form.notes')}:</span> {data.notes}</div>}
            {data.terms && <div><span className="font-medium text-gray-700">{t('form.terms')}:</span> {data.terms}</div>}
          </div>
        )}

        <div className="mt-8 text-center text-[10px] text-gray-300 print:text-gray-400">
          {t('form.createdWith')} • invoicemonk.com
        </div>
      </div>
    </div>
  );
}

/* ── Classic Template ── */
function ClassicTemplate({ data, totals, formatCurrency, t }: Props & { t: (k: string) => string }) {
  const accent = 'hsl(220, 60%, 30%)';
  return (
    <div className="bg-white text-gray-900 rounded-lg shadow-sm border border-border min-h-[700px] text-[13px] leading-relaxed print:shadow-none print:border-none print:p-0 overflow-hidden" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
      <div className="p-8">
        {/* Header with double rule */}
        <div className="border-b-4 pb-6 mb-6" style={{ borderColor: accent, borderBottomStyle: 'double' }}>
          <div className="flex justify-between items-start">
            <div>
              {data.businessLogo && (
                <img src={data.businessLogo} alt="Logo" className="h-12 w-auto mb-2 object-contain" />
              )}
              <h2 className="text-xl font-bold" style={{ color: accent }}>{data.businessName || 'Your Business'}</h2>
              {data.businessAddress && <p className="text-gray-600 whitespace-pre-line text-xs mt-1">{data.businessAddress}</p>}
              {data.businessEmail && <p className="text-gray-600 text-xs">{data.businessEmail}</p>}
              {data.businessPhone && <p className="text-gray-600 text-xs">{data.businessPhone}</p>}
            </div>
            <div className="text-right">
              <h1 className="text-2xl font-bold tracking-wide uppercase mb-2" style={{ color: accent, letterSpacing: '0.15em' }}>
                {t('form.invoice')}
              </h1>
              <p className="font-semibold text-sm">{data.invoiceNumber || '—'}</p>
            </div>
          </div>
        </div>

        {/* Dates + Bill To in two columns */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="border border-gray-300 rounded p-3">
            <p className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: accent }}>{t('form.billTo')}</p>
            <p className="font-semibold">{data.clientName || 'Client Name'}</p>
            {data.clientAddress && <p className="text-gray-600 whitespace-pre-line text-xs">{data.clientAddress}</p>}
            {data.clientEmail && <p className="text-gray-600 text-xs">{data.clientEmail}</p>}
          </div>
          <div className="text-right space-y-1 text-sm pt-2">
            <p><span className="text-gray-500">{t('form.date')}:</span> <span className="font-medium">{data.invoiceDate || '—'}</span></p>
            <p><span className="text-gray-500">{t('form.due')}:</span> <span className="font-medium">{data.dueDate || '—'}</span></p>
          </div>
        </div>

        {/* Table with full borders */}
        <table className="w-full mb-8 border-collapse">
          <thead>
            <tr style={{ backgroundColor: accent }}>
              <th className="text-left py-2.5 px-3 text-[11px] uppercase tracking-wider font-bold text-white border border-gray-300">{t('form.description')}</th>
              <th className="text-right py-2.5 px-3 text-[11px] uppercase tracking-wider font-bold text-white border border-gray-300 w-16">{t('form.qty')}</th>
              <th className="text-right py-2.5 px-3 text-[11px] uppercase tracking-wider font-bold text-white border border-gray-300 w-24">{t('form.rate')}</th>
              <th className="text-right py-2.5 px-3 text-[11px] uppercase tracking-wider font-bold text-white border border-gray-300 w-24">{t('form.amount')}</th>
            </tr>
          </thead>
          <tbody>
            {data.lineItems.map((item, i) => {
              const amount = item.quantity * item.rate;
              return (
                <tr key={item.id} className={i % 2 === 0 ? 'bg-blue-50/30' : 'bg-white'}>
                  <td className="py-2 px-3 border border-gray-200">{item.description || '—'}</td>
                  <td className="py-2 px-3 text-right border border-gray-200">{item.quantity}</td>
                  <td className="py-2 px-3 text-right border border-gray-200">{formatCurrency(item.rate)}</td>
                  <td className="py-2 px-3 text-right font-medium border border-gray-200">{formatCurrency(amount)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Totals */}
        <div className="flex justify-end">
          <div className="w-64 text-sm">
            <div className="flex justify-between py-1.5 border-b border-gray-200">
              <span className="text-gray-500">{t('form.subtotal')}</span>
              <span>{formatCurrency(totals.subtotal)}</span>
            </div>
            {data.discountPercent > 0 && (
              <div className="flex justify-between py-1.5 border-b border-gray-200 text-green-700">
                <span>{t('form.discount')} ({data.discountPercent}%)</span>
                <span>-{formatCurrency(totals.discountAmount)}</span>
              </div>
            )}
            {data.taxRate > 0 && (
              <div className="flex justify-between py-1.5 border-b border-gray-200">
                <span className="text-gray-500">{t('form.tax')} ({data.taxRate}%)</span>
                <span>{formatCurrency(totals.taxAmount)}</span>
              </div>
            )}
            <div className="flex justify-between py-2 font-bold text-base border-t-4" style={{ borderColor: accent, borderTopStyle: 'double' }}>
              <span style={{ color: accent }}>{t('form.total')}</span>
              <span style={{ color: accent }}>{formatCurrency(totals.total)}</span>
            </div>
          </div>
        </div>

        {/* Notes & Terms */}
        {(data.notes || data.terms) && (
          <div className="mt-10 pt-4 space-y-2 text-xs text-gray-500" style={{ borderTop: `2px solid ${accent}` }}>
            {data.notes && <div><span className="font-bold text-gray-700">{t('form.notes')}:</span> {data.notes}</div>}
            {data.terms && <div><span className="font-bold text-gray-700">{t('form.terms')}:</span> {data.terms}</div>}
          </div>
        )}

        <div className="mt-8 text-center text-[10px] text-gray-300 print:text-gray-400">
          {t('form.createdWith')} • invoicemonk.com
        </div>
      </div>
    </div>
  );
}

/* ── Minimal Template ── */
function MinimalTemplate({ data, totals, formatCurrency, t }: Props & { t: (k: string) => string }) {
  return (
    <div className="bg-white text-gray-900 rounded-lg shadow-sm border border-border min-h-[700px] text-[13px] leading-relaxed print:shadow-none print:border-none print:p-0 font-sans overflow-hidden">
      <div className="p-10">
        {/* Header — ultra clean */}
        <div className="flex justify-between items-start mb-12">
          <div>
            {data.businessLogo && (
              <img src={data.businessLogo} alt="Logo" className="h-10 w-auto mb-2 object-contain grayscale opacity-80" />
            )}
            <h2 className="text-base font-medium text-gray-800">{data.businessName || 'Your Business'}</h2>
            {data.businessAddress && <p className="text-gray-400 whitespace-pre-line text-xs mt-1">{data.businessAddress}</p>}
            {data.businessEmail && <p className="text-gray-400 text-xs">{data.businessEmail}</p>}
            {data.businessPhone && <p className="text-gray-400 text-xs">{data.businessPhone}</p>}
          </div>
          <div className="text-right">
            <h1 className="text-sm font-medium uppercase tracking-[0.3em] text-gray-400 mb-3">
              {t('form.invoice')}
            </h1>
            <p className="text-sm font-mono text-gray-900">{data.invoiceNumber || '—'}</p>
            <div className="mt-3 space-y-0.5">
              <p className="text-gray-400 text-xs">{data.invoiceDate || '—'}</p>
              <p className="text-gray-400 text-xs">{t('form.due')}: {data.dueDate || '—'}</p>
            </div>
          </div>
        </div>

        {/* Bill To — no background */}
        <div className="mb-10">
          <p className="text-[10px] uppercase tracking-[0.25em] text-gray-300 mb-2">{t('form.billTo')}</p>
          <p className="font-medium text-gray-800">{data.clientName || 'Client Name'}</p>
          {data.clientAddress && <p className="text-gray-400 whitespace-pre-line text-xs">{data.clientAddress}</p>}
          {data.clientEmail && <p className="text-gray-400 text-xs">{data.clientEmail}</p>}
        </div>

        {/* Table — thin lines only */}
        <table className="w-full mb-10">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 text-[10px] uppercase tracking-[0.2em] text-gray-300 font-normal">{t('form.description')}</th>
              <th className="text-right py-2 text-[10px] uppercase tracking-[0.2em] text-gray-300 font-normal w-16">{t('form.qty')}</th>
              <th className="text-right py-2 text-[10px] uppercase tracking-[0.2em] text-gray-300 font-normal w-24">{t('form.rate')}</th>
              <th className="text-right py-2 text-[10px] uppercase tracking-[0.2em] text-gray-300 font-normal w-24">{t('form.amount')}</th>
            </tr>
          </thead>
          <tbody>
            {data.lineItems.map(item => {
              const amount = item.quantity * item.rate;
              return (
                <tr key={item.id} className="border-b border-gray-100">
                  <td className="py-3 text-gray-700">{item.description || '—'}</td>
                  <td className="py-3 text-right text-gray-500">{item.quantity}</td>
                  <td className="py-3 text-right text-gray-500">{formatCurrency(item.rate)}</td>
                  <td className="py-3 text-right text-gray-800">{formatCurrency(amount)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Totals — minimal */}
        <div className="flex justify-end">
          <div className="w-56 space-y-2 text-sm">
            <div className="flex justify-between text-gray-400">
              <span>{t('form.subtotal')}</span>
              <span className="text-gray-600">{formatCurrency(totals.subtotal)}</span>
            </div>
            {data.discountPercent > 0 && (
              <div className="flex justify-between text-green-600">
                <span>{t('form.discount')} ({data.discountPercent}%)</span>
                <span>-{formatCurrency(totals.discountAmount)}</span>
              </div>
            )}
            {data.taxRate > 0 && (
              <div className="flex justify-between text-gray-400">
                <span>{t('form.tax')} ({data.taxRate}%)</span>
                <span className="text-gray-600">{formatCurrency(totals.taxAmount)}</span>
              </div>
            )}
            <div className="flex justify-between pt-3 border-t border-gray-200">
              <span className="font-medium text-gray-800">{t('form.total')}</span>
              <span className="font-semibold text-lg text-gray-900">{formatCurrency(totals.total)}</span>
            </div>
          </div>
        </div>

        {/* Notes & Terms */}
        {(data.notes || data.terms) && (
          <div className="mt-12 pt-4 border-t border-gray-100 space-y-2 text-xs text-gray-400">
            {data.notes && <div><span className="text-gray-500">{t('form.notes')}:</span> {data.notes}</div>}
            {data.terms && <div><span className="text-gray-500">{t('form.terms')}:</span> {data.terms}</div>}
          </div>
        )}

        <div className="mt-10 text-center text-[10px] text-gray-200 print:text-gray-400">
          {t('form.createdWith')} • invoicemonk.com
        </div>
      </div>
    </div>
  );
}

export const InvoicePreview = React.forwardRef<HTMLDivElement, Props>(
  ({ data, totals, formatCurrency }, ref) => {
    const { t } = useTranslation('freeInvoiceGenerator');
    const template = data.template || 'modern';

    const templateProps = { data, totals, formatCurrency, t };

    return (
      <div ref={ref}>
        {template === 'classic' && <ClassicTemplate {...templateProps} />}
        {template === 'minimal' && <MinimalTemplate {...templateProps} />}
        {template === 'modern' && <ModernTemplate {...templateProps} />}
      </div>
    );
  }
);

InvoicePreview.displayName = 'InvoicePreview';
