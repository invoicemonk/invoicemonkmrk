import { useState, useCallback } from 'react';
import { InvoiceData, SavedInvoice } from './types';

const STORAGE_KEY = 'invoicemonk_saved_invoices';
const MAX_INVOICES = 50;

function loadAll(): SavedInvoice[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function persistAll(invoices: SavedInvoice[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(invoices));
  } catch { /* ignore */ }
}

export function useSavedInvoices() {
  const [invoices, setInvoices] = useState<SavedInvoice[]>(loadAll);

  const saveInvoice = useCallback((data: InvoiceData) => {
    const now = new Date().toISOString();
    const name = `${data.invoiceNumber || 'Draft'} — ${data.clientName || 'No client'}`;
    const entry: SavedInvoice = {
      id: crypto.randomUUID(),
      name,
      data: { ...data },
      createdAt: now,
      updatedAt: now,
    };
    setInvoices(prev => {
      const next = [entry, ...prev].slice(0, MAX_INVOICES);
      persistAll(next);
      return next;
    });
  }, []);

  const deleteInvoice = useCallback((id: string) => {
    setInvoices(prev => {
      const next = prev.filter(inv => inv.id !== id);
      persistAll(next);
      return next;
    });
  }, []);

  return { invoices, saveInvoice, deleteInvoice };
}
