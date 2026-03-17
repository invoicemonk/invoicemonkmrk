export interface CountryProfile {
  /** Label shown at the top of the invoice (e.g. "TAX INVOICE", "VAT INVOICE") */
  invoiceLabel: string;
  /** Placeholder label for the business tax ID field */
  taxIdLabel: string;
  /** Suggested default tax rate (user can override) */
  defaultTaxRate: number;
  /** Name shown in the totals area (e.g. "GST", "VAT", "Tax") */
  taxName: string;
}

export const COUNTRY_PROFILES: Record<string, CountryProfile> = {
  USD: {
    invoiceLabel: 'INVOICE',
    taxIdLabel: 'EIN / Tax ID',
    defaultTaxRate: 0,
    taxName: 'Tax',
  },
  GBP: {
    invoiceLabel: 'VAT INVOICE',
    taxIdLabel: 'VAT No.',
    defaultTaxRate: 20,
    taxName: 'VAT',
  },
  EUR: {
    invoiceLabel: 'INVOICE',
    taxIdLabel: 'VAT ID',
    defaultTaxRate: 0,
    taxName: 'VAT',
  },
  NGN: {
    invoiceLabel: 'INVOICE',
    taxIdLabel: 'TIN',
    defaultTaxRate: 7.5,
    taxName: 'VAT',
  },
  CAD: {
    invoiceLabel: 'INVOICE',
    taxIdLabel: 'GST/HST No.',
    defaultTaxRate: 5,
    taxName: 'GST',
  },
  AUD: {
    invoiceLabel: 'TAX INVOICE',
    taxIdLabel: 'ABN',
    defaultTaxRate: 10,
    taxName: 'GST',
  },
  GHS: {
    invoiceLabel: 'INVOICE',
    taxIdLabel: 'TIN',
    defaultTaxRate: 15,
    taxName: 'VAT',
  },
  KES: {
    invoiceLabel: 'TAX INVOICE',
    taxIdLabel: 'KRA PIN',
    defaultTaxRate: 16,
    taxName: 'VAT',
  },
  ZAR: {
    invoiceLabel: 'TAX INVOICE',
    taxIdLabel: 'VAT No.',
    defaultTaxRate: 15,
    taxName: 'VAT',
  },
  INR: {
    invoiceLabel: 'TAX INVOICE',
    taxIdLabel: 'GSTIN',
    defaultTaxRate: 18,
    taxName: 'GST',
  },
};

export function getCountryProfile(currencyCode: string): CountryProfile {
  return COUNTRY_PROFILES[currencyCode] ?? COUNTRY_PROFILES.USD;
}
