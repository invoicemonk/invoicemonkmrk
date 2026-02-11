import type { Metadata } from 'next'
import { ExpensesContent } from './ExpensesContent'

export const metadata: Metadata = {
  title: 'Expense Tracking Software - Manage Business Expenses',
  description: 'Track business expenses, scan receipts, and stay organized for your business.',
  keywords: ['expense tracking', 'receipt scanner', 'business expenses'],
  alternates: {
    canonical: 'https://invoicemonk.com/expenses',
  },
  openGraph: {
    title: 'Expense Tracking Software - Manage Business Expenses | Invoicemonk',
    description: 'Track business expenses, scan receipts, and stay organized for your business.',
    url: 'https://invoicemonk.com/expenses',
    type: 'website',
  },
}

export default function ExpensesPage() {
  return <ExpensesContent />
}
