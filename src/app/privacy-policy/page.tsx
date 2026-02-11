import type { Metadata } from 'next'
import { PrivacyPolicyContent } from './PrivacyPolicyContent'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy and data protection.',
  keywords: ['privacy'],
  alternates: {
    canonical: 'https://invoicemonk.com/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | InvoiceMonk',
    description: 'Privacy policy and data protection.',
    url: 'https://invoicemonk.com/privacy-policy',
    type: 'website',
  },
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />
}
