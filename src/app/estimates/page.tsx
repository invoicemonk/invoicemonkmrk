import type { Metadata } from 'next'
import { EstimatesContent } from './EstimatesContent'


export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Estimates & Quotes - Create Professional Estimates',
  description: 'Create professional estimates and quotes. Convert to invoices instantly.',
  keywords: ['estimate software', 'quote generator'],
  alternates: {
    canonical: 'https://invoicemonk.com/estimates',
  },
  openGraph: {
    title: 'Estimates & Quotes - Create Professional Estimates | Invoicemonk',
    description: 'Create professional estimates and quotes. Convert to invoices instantly.',
    url: 'https://invoicemonk.com/estimates',
    type: 'website',
  },
}

export default function EstimatesPage() {
  return <EstimatesContent />
}
