import type { Metadata } from 'next'
import { DeveloperContent } from './DeveloperContent'


export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'API & Developer Resources',
  description: 'API documentation and developer resources.',
  keywords: ['api', 'developer'],
  alternates: {
    canonical: 'https://invoicemonk.com/developer',
  },
  openGraph: {
    title: 'API & Developer Resources | Invoicemonk',
    description: 'API documentation and developer resources.',
    url: 'https://invoicemonk.com/developer',
    type: 'website',
  },
}

export default function DeveloperPage() {
  return <DeveloperContent />
}
