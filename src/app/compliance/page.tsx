import type { Metadata } from 'next'
import { ComplianceContent } from './ComplianceContent'

export const metadata: Metadata = {
  title: 'Tax Compliance - Stay Compliant Worldwide',
  description: 'Built-in tax compliance for multiple countries.',
  keywords: ['tax compliance', 'regulations'],
  alternates: {
    canonical: 'https://invoicemonk.com/compliance',
  },
  openGraph: {
    title: 'Tax Compliance - Stay Compliant Worldwide | InvoiceMonk',
    description: 'Built-in tax compliance for multiple countries.',
    url: 'https://invoicemonk.com/compliance',
    type: 'website',
  },
}

export default function CompliancePage() {
  return <ComplianceContent />
}
