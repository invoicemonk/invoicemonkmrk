import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Upload, X } from 'lucide-react';
import { InvoiceData, LineItem } from './types';
import { InvoiceLineItems } from './InvoiceLineItems';
import { CurrencySelector } from './CurrencySelector';
import { getCountryProfile } from './countryProfiles';
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  data: InvoiceData;
  updateField: <K extends keyof InvoiceData>(field: K, value: InvoiceData[K]) => void;
  addLineItem: () => void;
  removeLineItem: (id: string) => void;
  updateLineItem: (id: string, field: keyof Omit<LineItem, 'id'>, value: string | number | undefined) => void;
  handleLogoUpload: (file: File) => void;
  removeLogo: () => void;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">{title}</h3>
      {children}
    </div>
  );
}

export function InvoiceForm({
  data, updateField, addLineItem, removeLineItem, updateLineItem, handleLogoUpload, removeLogo,
}: Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation('freeInvoiceGenerator');
  const profile = getCountryProfile(data.currency);

  return (
    <div className="space-y-6">
      {/* Logo */}
      <Section title={t('form.yourLogo')}>
        {data.businessLogo ? (
          <div className="flex items-center gap-3">
            <img src={data.businessLogo} alt="Logo" className="h-12 w-auto rounded border border-border object-contain" />
            <Button type="button" variant="ghost" size="sm" onClick={removeLogo}>
              <X className="w-4 h-4 mr-1" /> {t('form.remove')}
            </Button>
          </div>
        ) : (
          <>
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={e => {
              const f = e.target.files?.[0];
              if (f) handleLogoUpload(f);
            }} />
            <Button type="button" variant="outline" size="sm" onClick={() => fileRef.current?.click()}>
              <Upload className="w-4 h-4 mr-1" /> {t('form.uploadLogo')}
            </Button>
          </>
        )}
      </Section>

      {/* Business Details */}
      <Section title={t('form.yourBusiness')}>
        <Input placeholder={t('form.businessName')} value={data.businessName} onChange={e => updateField('businessName', e.target.value)} className="h-9 text-sm" />
        <Input placeholder={t('form.address')} value={data.businessAddress} onChange={e => updateField('businessAddress', e.target.value)} className="h-9 text-sm" />
        <div className="grid grid-cols-2 gap-2">
          <Input placeholder={t('form.email')} type="email" value={data.businessEmail} onChange={e => updateField('businessEmail', e.target.value)} className="h-9 text-sm" />
          <Input placeholder={t('form.phone')} value={data.businessPhone} onChange={e => updateField('businessPhone', e.target.value)} className="h-9 text-sm" />
        </div>
        <Input
          placeholder={profile.taxIdLabel}
          value={data.businessTaxId}
          onChange={e => updateField('businessTaxId', e.target.value)}
          className="h-9 text-sm"
        />
      </Section>

      {/* Client Details */}
      <Section title={t('form.billTo')}>
        <Input placeholder={t('form.clientName')} value={data.clientName} onChange={e => updateField('clientName', e.target.value)} className="h-9 text-sm" />
        <Input placeholder={t('form.clientAddress')} value={data.clientAddress} onChange={e => updateField('clientAddress', e.target.value)} className="h-9 text-sm" />
        <Input placeholder={t('form.clientEmail')} type="email" value={data.clientEmail} onChange={e => updateField('clientEmail', e.target.value)} className="h-9 text-sm" />
        <Input
          placeholder={t('form.clientTaxId')}
          value={data.clientTaxId}
          onChange={e => updateField('clientTaxId', e.target.value)}
          className="h-9 text-sm"
        />
      </Section>

      {/* Invoice Meta */}
      <Section title={t('form.invoiceDetails')}>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label className="text-xs text-muted-foreground">{t('form.invoiceNumber')}</Label>
            <Input value={data.invoiceNumber} onChange={e => updateField('invoiceNumber', e.target.value)} className="h-9 text-sm" />
          </div>
          <div>
            <Label className="text-xs text-muted-foreground">{t('form.currency')}</Label>
            <CurrencySelector value={data.currency} onChange={v => updateField('currency', v)} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label className="text-xs text-muted-foreground">{t('form.invoiceDate')}</Label>
            <Input type="date" value={data.invoiceDate} onChange={e => updateField('invoiceDate', e.target.value)} className="h-9 text-sm" />
          </div>
          <div>
            <Label className="text-xs text-muted-foreground">{t('form.dueDate')}</Label>
            <Input type="date" value={data.dueDate} onChange={e => updateField('dueDate', e.target.value)} className="h-9 text-sm" />
          </div>
        </div>
      </Section>

      {/* Line Items */}
      <Section title={t('form.items')}>
        <InvoiceLineItems
          items={data.lineItems}
          globalTaxRate={data.taxRate}
          onAdd={addLineItem}
          onRemove={removeLineItem}
          onUpdate={updateLineItem}
        />
      </Section>

      {/* Tax & Discount */}
      <Section title={t('form.taxDiscount')}>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label className="text-xs text-muted-foreground">{profile.taxName} {t('form.taxRate')}</Label>
            <Input type="number" min={0} max={100} step="0.5" value={data.taxRate || ''} onChange={e => updateField('taxRate', Math.min(100, Math.max(0, Number(e.target.value))))} className="h-9 text-sm" />
          </div>
          <div>
            <Label className="text-xs text-muted-foreground">{t('form.discount')}</Label>
            <Input type="number" min={0} max={100} step="0.5" value={data.discountPercent || ''} onChange={e => updateField('discountPercent', Math.min(100, Math.max(0, Number(e.target.value))))} className="h-9 text-sm" />
          </div>
        </div>
      </Section>

      {/* Notes */}
      <Section title={t('form.notesTerms')}>
        <Textarea placeholder={t('form.notesPlaceholder')} value={data.notes} onChange={e => updateField('notes', e.target.value)} rows={2} className="text-sm" />
        <Textarea placeholder={t('form.termsPlaceholder')} value={data.terms} onChange={e => updateField('terms', e.target.value)} rows={2} className="text-sm" />
      </Section>
    </div>
  );
}
