import type { Metadata } from 'next'
import { GuidesIndexContent } from './GuidesIndexContent'


export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Business Guides - Comprehensive Resources',
  description: 'Expert guides on invoicing, accounting, and business management.',
  alternates: {
    canonical: 'https://invoicemonk.com/guides',
  },
  openGraph: {
    title: 'Business Guides - Comprehensive Resources | Invoicemonk',
    description: 'Expert guides on invoicing, accounting, and business management.',
    url: 'https://invoicemonk.com/guides',
    type: 'article',
  },
}

export default function GuidesIndexPage() {
  return <GuidesIndexContent />
}
