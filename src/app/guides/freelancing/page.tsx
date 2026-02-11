import type { Metadata } from 'next'
import { FreelancingGuideContent } from './FreelancingGuideContent'

export const metadata: Metadata = {
  title: 'Freelancing Guide - Build Your Business',
  description: 'Complete guide to freelancing success.',
  alternates: {
    canonical: 'https://invoicemonk.com/guides/freelancing',
  },
  openGraph: {
    title: 'Freelancing Guide - Build Your Business | InvoiceMonk',
    description: 'Complete guide to freelancing success.',
    url: 'https://invoicemonk.com/guides/freelancing',
    type: 'article',
  },
}

export default function FreelancingGuidePage() {
  return <FreelancingGuideContent />
}
