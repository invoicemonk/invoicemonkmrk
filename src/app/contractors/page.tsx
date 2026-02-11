import type { Metadata } from 'next'
import { ContractorsContent } from './ContractorsContent'

export const metadata: Metadata = {
  title: 'Invoicing for Contractors - Job-Based Billing',
  description: 'Software for contractors.',
  keywords: ['contractor invoicing'],
  alternates: {
    canonical: 'https://invoicemonk.com/contractors',
  },
  openGraph: {
    title: 'Invoicing for Contractors - Job-Based Billing | InvoiceMonk',
    description: 'Software for contractors.',
    url: 'https://invoicemonk.com/contractors',
    type: 'website',
  },
}

export default function ContractorsPage() {
  return <ContractorsContent />
}
