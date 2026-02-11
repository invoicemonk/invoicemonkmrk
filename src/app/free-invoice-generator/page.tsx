import type { Metadata } from 'next'
import { FreeInvoiceGeneratorContent } from './FreeInvoiceGeneratorContent'

export const metadata: Metadata = {
  title: 'Free Invoice Generator - Create Invoices Online',
  description: 'Free online invoice generator.',
  keywords: ['free invoice generator'],
  alternates: {
    canonical: 'https://invoicemonk.com/free-invoice-generator',
  },
  openGraph: {
    title: 'Free Invoice Generator - Create Invoices Online | InvoiceMonk',
    description: 'Free online invoice generator.',
    url: 'https://invoicemonk.com/free-invoice-generator',
    type: 'website',
  },
}

export default function FreeInvoiceGeneratorPage() {
  return <FreeInvoiceGeneratorContent />
}
