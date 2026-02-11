import type { Metadata } from 'next'
import { ConsultantsContent } from './ConsultantsContent'

export const metadata: Metadata = {
  title: 'Invoicing for Consultants - Professional Billing',
  description: 'Professional invoicing for consultants.',
  keywords: ['consultant invoicing'],
  alternates: {
    canonical: 'https://invoicemonk.com/consultants',
  },
  openGraph: {
    title: 'Invoicing for Consultants - Professional Billing | InvoiceMonk',
    description: 'Professional invoicing for consultants.',
    url: 'https://invoicemonk.com/consultants',
    type: 'website',
  },
}

export default function ConsultantsPage() {
  return <ConsultantsContent />
}
