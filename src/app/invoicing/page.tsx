import type { Metadata } from 'next'
import { InvoicingContent } from './InvoicingContent'

export const metadata: Metadata = {
  title: 'Invoicing Software - Create Professional Invoices Fast',
  description: 'Professional invoicing software for small businesses and freelancers. Create, send, and track invoices in minutes.',
  keywords: ['invoicing software', 'invoice generator', 'online invoicing'],
  alternates: {
    canonical: 'https://invoicemonk.com/invoicing',
  },
  openGraph: {
    title: 'Invoicing Software - Create Professional Invoices Fast | InvoiceMonk',
    description: 'Professional invoicing software for small businesses and freelancers. Create, send, and track invoices in minutes.',
    url: 'https://invoicemonk.com/invoicing',
    type: 'website',
  },
}

export default function InvoicingPage() {
  return <InvoicingContent />
}
