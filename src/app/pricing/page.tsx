import type { Metadata } from 'next'
import { PricingContent } from './PricingContent'


export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Pricing - Affordable Plans for Every Business',
  description: 'Simple, transparent pricing. Free tier available.',
  keywords: ['pricing', 'plans', 'subscription'],
  alternates: {
    canonical: 'https://invoicemonk.com/pricing',
  },
  openGraph: {
    title: 'Pricing - Affordable Plans for Every Business | Invoicemonk',
    description: 'Simple, transparent pricing. Free tier available.',
    url: 'https://invoicemonk.com/pricing',
    type: 'website',
  },
}

export default function PricingPage() {
  return <PricingContent />
}
