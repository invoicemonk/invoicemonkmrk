import type { Metadata } from 'next'
import { WhyInvoicemonkContent } from './WhyInvoicemonkContent'

export const metadata: Metadata = {
  title: 'Why Invoicemonk - Features & Benefits',
  description: 'Discover why thousands trust Invoicemonk.',
  keywords: ['features', 'benefits'],
  alternates: {
    canonical: 'https://invoicemonk.com/why-invoicemonk',
  },
  openGraph: {
    title: 'Why Invoicemonk - Features & Benefits | Invoicemonk',
    description: 'Discover why thousands trust Invoicemonk.',
    url: 'https://invoicemonk.com/why-invoicemonk',
    type: 'website',
  },
}

export default function WhyInvoicemonkPage() {
  return <WhyInvoicemonkContent />
}
