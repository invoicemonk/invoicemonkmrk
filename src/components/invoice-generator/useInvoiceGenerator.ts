import { useState, useCallback, useMemo, useEffect } from 'react';
import { InvoiceData, InvoiceTotals, LineItem, DEFAULT_INVOICE_DATA, CURRENCIES } from './types';

const STORAGE_KEY = 'invoicemonk_free_invoice';

function generateInvoiceNumber(): string {
  const now = new Date();
  const y = String(now.getFullYear()).slice(-2);
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const r = String(Math.floor(Math.random() * 9000) + 1000);
  return `INV-${y}${m}-${r}`;
}

function loadFromStorage(): InvoiceData | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as InvoiceData;
  } catch {
    return null;
  }
}

export function useInvoiceGenerator() {
  const [data, setData] = useState<InvoiceData>(() => {
    const saved = loadFromStorage();
    if (saved) return { ...DEFAULT_INVOICE_DATA, ...saved };
    return { ...DEFAULT_INVOICE_DATA, invoiceNumber: generateInvoiceNumber() };
  });

  // Persist to localStorage on every change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch { /* storage full — ignore */ }
  }, [data]);

  const updateField = useCallback(<K extends keyof InvoiceData>(field: K, value: InvoiceData[K]) => {
    setData(prev => ({ ...prev, [field]: value }));
  }, []);

  // Line item helpers
  const addLineItem = useCallback(() => {
    setData(prev => ({
      ...prev,
      lineItems: [...prev.lineItems, { id: crypto.randomUUID(), description: '', quantity: 1, rate: 0 }],
    }));
  }, []);

  const removeLineItem = useCallback((id: string) => {
    setData(prev => ({
      ...prev,
      lineItems: prev.lineItems.length > 1 ? prev.lineItems.filter(li => li.id !== id) : prev.lineItems,
    }));
  }, []);

  const updateLineItem = useCallback((id: string, field: keyof Omit<LineItem, 'id'>, value: string | number) => {
    setData(prev => ({
      ...prev,
      lineItems: prev.lineItems.map(li => li.id === id ? { ...li, [field]: value } : li),
    }));
  }, []);

  // Logo upload
  const handleLogoUpload = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result;
      if (typeof result === 'string') {
        setData(prev => ({ ...prev, businessLogo: result }));
      }
    };
    reader.readAsDataURL(file);
  }, []);

  const removeLogo = useCallback(() => {
    setData(prev => ({ ...prev, businessLogo: null }));
  }, []);

  // Calculations
  const totals: InvoiceTotals = useMemo(() => {
    const subtotal = data.lineItems.reduce((sum, li) => sum + li.quantity * li.rate, 0);
    const discountAmount = subtotal * (data.discountPercent / 100);
    const afterDiscount = subtotal - discountAmount;
    const taxAmount = afterDiscount * (data.taxRate / 100);
    const total = afterDiscount + taxAmount;
    return { subtotal, discountAmount, taxAmount, total };
  }, [data.lineItems, data.taxRate, data.discountPercent]);

  // Format currency using CURRENCIES symbol lookup
  const formatCurrency = useCallback((amount: number) => {
    const curr = CURRENCIES.find(c => c.code === data.currency);
    const symbol = curr?.symbol ?? data.currency;
    const formatted = Math.abs(amount).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return amount < 0 ? `-${symbol}${formatted}` : `${symbol}${formatted}`;
  }, [data.currency]);

  // Reset
  const resetInvoice = useCallback(() => {
    const fresh = { ...DEFAULT_INVOICE_DATA, invoiceNumber: generateInvoiceNumber() };
    setData(fresh);
  }, []);

  // Load saved invoice
  const loadInvoice = useCallback((invoiceData: InvoiceData) => {
    setData(invoiceData);
  }, []);

  return {
    data,
    totals,
    updateField,
    addLineItem,
    removeLineItem,
    updateLineItem,
    handleLogoUpload,
    removeLogo,
    formatCurrency,
    resetInvoice,
    loadInvoice,
  };
}
