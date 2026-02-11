import type { Metadata } from 'next'
import { TermsOfServiceContent } from './TermsOfServiceContent'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service and user agreement.',
  keywords: ['terms'],
  alternates: {
    canonical: 'https://invoicemonk.com/terms-of-service',
  },
  openGraph: {
    title: 'Terms of Service | Invoicemonk',
    description: 'Terms of service and user agreement.',
    url: 'https://invoicemonk.com/terms-of-service',
    type: 'website',
  },
}

export default function TermsOfServicePage() {
  return <TermsOfServiceContent />
}
