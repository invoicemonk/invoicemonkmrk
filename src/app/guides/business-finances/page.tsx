import type { Metadata } from 'next'
import { BusinessFinancesGuideContent } from './BusinessFinancesGuideContent'


export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Business Finances Guide - Financial Management',
  description: 'Master your business finances and accounting.',
  alternates: {
    canonical: 'https://invoicemonk.com/guides/business-finances',
  },
  openGraph: {
    title: 'Business Finances Guide - Financial Management | Invoicemonk',
    description: 'Master your business finances and accounting.',
    url: 'https://invoicemonk.com/guides/business-finances',
    type: 'article',
  },
}

export default function BusinessFinancesGuidePage() {
  return <BusinessFinancesGuideContent />
}
