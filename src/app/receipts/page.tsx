import type { Metadata } from 'next'
import { ReceiptsContent } from './ReceiptsContent'


export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Receipt Management - Digital Receipt Organization',
  description: 'Scan, organize, and manage receipts digitally.',
  keywords: ['receipt management', 'receipt scanner'],
  alternates: {
    canonical: 'https://invoicemonk.com/receipts',
  },
  openGraph: {
    title: 'Receipt Management - Digital Receipt Organization | Invoicemonk',
    description: 'Scan, organize, and manage receipts digitally.',
    url: 'https://invoicemonk.com/receipts',
    type: 'website',
  },
}

export default function ReceiptsPage() {
  return <ReceiptsContent />
}
