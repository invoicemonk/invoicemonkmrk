import type { Metadata } from 'next'
import { GlossaryContent } from './GlossaryContent'

export const metadata: Metadata = {
  title: 'Business & Accounting Glossary',
  description: 'Glossary of business and accounting terms.',
  keywords: ['glossary', 'business terms'],
  alternates: {
    canonical: 'https://invoicemonk.com/glossary',
  },
  openGraph: {
    title: 'Business & Accounting Glossary | Invoicemonk',
    description: 'Glossary of business and accounting terms.',
    url: 'https://invoicemonk.com/glossary',
    type: 'website',
  },
}

export default function GlossaryPage() {
  return <GlossaryContent />
}
