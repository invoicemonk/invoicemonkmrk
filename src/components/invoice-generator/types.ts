export type InvoiceTemplate = 'modern' | 'classic' | 'minimal';

export interface LineItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
}

export interface InvoiceData {
  // Business details
  businessName: string;
  businessAddress: string;
  businessEmail: string;
  businessPhone: string;
  businessLogo: string | null;

  // Client details
  clientName: string;
  clientAddress: string;
  clientEmail: string;

  // Invoice meta
  invoiceNumber: string;
  invoiceDate: string;
  dueDate: string;
  currency: string;

  // Line items
  lineItems: LineItem[];

  // Tax & discount
  taxRate: number;
  discountPercent: number;

  // Notes
  notes: string;
  terms: string;

  // Template
  template: InvoiceTemplate;
}

export interface InvoiceTotals {
  subtotal: number;
  discountAmount: number;
  taxAmount: number;
  total: number;
}

export interface SavedInvoice {
  id: string;
  name: string;
  data: InvoiceData;
  createdAt: string;
  updatedAt: string;
}

export const CURRENCIES = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'NGN', symbol: '₦', name: 'Nigerian Naira' },
  { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar' },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
  { code: 'GHS', symbol: 'GH₵', name: 'Ghanaian Cedi' },
  { code: 'KES', symbol: 'KSh', name: 'Kenyan Shilling' },
  { code: 'ZAR', symbol: 'R', name: 'South African Rand' },
  { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
] as const;

export const DEFAULT_INVOICE_DATA: InvoiceData = {
  businessName: '',
  businessAddress: '',
  businessEmail: '',
  businessPhone: '',
  businessLogo: null,
  clientName: '',
  clientAddress: '',
  clientEmail: '',
  invoiceNumber: '',
  invoiceDate: new Date().toISOString().split('T')[0],
  dueDate: new Date(Date.now() + 30 * 86400000).toISOString().split('T')[0],
  currency: 'USD',
  lineItems: [{ id: crypto.randomUUID(), description: '', quantity: 1, rate: 0 }],
  taxRate: 0,
  discountPercent: 0,
  notes: '',
  terms: '',
  template: 'modern',
};
