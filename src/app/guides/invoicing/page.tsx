import type { Metadata } from 'next'
import { InvoicingGuideContent } from './InvoicingGuideContent'

export const metadata: Metadata = {
  title: 'Complete Invoicing Guide - Best Practices',
  description: 'Everything you need to know about professional invoicing.',
  alternates: {
    canonical: 'https://invoicemonk.com/guides/invoicing',
  },
  openGraph: {
    title: 'Complete Invoicing Guide - Best Practices | Invoicemonk',
    description: 'Everything you need to know about professional invoicing.',
    url: 'https://invoicemonk.com/guides/invoicing',
    type: 'article',
  },
}

export default function InvoicingGuidePage() {
  return <InvoicingGuideContent />
}
