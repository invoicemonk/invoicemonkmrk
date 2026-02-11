import type { Metadata } from 'next'
import { TaxComplianceGuideContent } from './TaxComplianceGuideContent'

export const metadata: Metadata = {
  title: 'Tax Compliance Guide - Stay Compliant',
  description: 'Navigate tax compliance for your business.',
  alternates: {
    canonical: 'https://invoicemonk.com/guides/tax-compliance',
  },
  openGraph: {
    title: 'Tax Compliance Guide - Stay Compliant | Invoicemonk',
    description: 'Navigate tax compliance for your business.',
    url: 'https://invoicemonk.com/guides/tax-compliance',
    type: 'article',
  },
}

export default function TaxComplianceGuidePage() {
  return <TaxComplianceGuideContent />
}
