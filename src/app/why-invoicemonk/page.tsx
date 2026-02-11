import type { Metadata } from 'next'
import { WhyInvoicemonkContent } from './WhyInvoicemonkContent'

export const metadata: Metadata = {
  title: 'Why InvoiceMonk - Features & Benefits',
  description: 'Discover why thousands trust InvoiceMonk.',
  keywords: ['features', 'benefits'],
  alternates: {
    canonical: 'https://invoicemonk.com/why-invoicemonk',
  },
  openGraph: {
    title: 'Why InvoiceMonk - Features & Benefits | InvoiceMonk',
    description: 'Discover why thousands trust InvoiceMonk.',
    url: 'https://invoicemonk.com/why-invoicemonk',
    type: 'website',
  },
}

export default function WhyInvoicemonkPage() {
  return <WhyInvoicemonkContent />
}
