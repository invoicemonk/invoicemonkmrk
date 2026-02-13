import type { Metadata } from 'next'
import { EstimatesGuideContent } from './EstimatesGuideContent'


export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Estimates & Proposals Guide',
  description: 'Create winning estimates and proposals.',
  alternates: {
    canonical: 'https://invoicemonk.com/guides/estimates',
  },
  openGraph: {
    title: 'Estimates & Proposals Guide | Invoicemonk',
    description: 'Create winning estimates and proposals.',
    url: 'https://invoicemonk.com/guides/estimates',
    type: 'article',
  },
}

export default function EstimatesGuidePage() {
  return <EstimatesGuideContent />
}
