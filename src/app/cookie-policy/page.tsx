import type { Metadata } from 'next'
import { CookiePolicyContent } from './CookiePolicyContent'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie policy and usage.',
  keywords: ['cookies'],
  alternates: {
    canonical: 'https://invoicemonk.com/cookie-policy',
  },
  openGraph: {
    title: 'Cookie Policy | Invoicemonk',
    description: 'Cookie policy and usage.',
    url: 'https://invoicemonk.com/cookie-policy',
    type: 'website',
  },
}

export default function CookiePolicyPage() {
  return <CookiePolicyContent />
}
