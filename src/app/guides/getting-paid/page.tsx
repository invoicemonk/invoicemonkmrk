import type { Metadata } from 'next'
import { GettingPaidGuideContent } from './GettingPaidGuideContent'

export const metadata: Metadata = {
  title: 'Getting Paid Faster - Payment Collection Guide',
  description: 'Strategies to get paid faster and improve cash flow.',
  alternates: {
    canonical: 'https://invoicemonk.com/guides/getting-paid',
  },
  openGraph: {
    title: 'Getting Paid Faster - Payment Collection Guide | InvoiceMonk',
    description: 'Strategies to get paid faster and improve cash flow.',
    url: 'https://invoicemonk.com/guides/getting-paid',
    type: 'article',
  },
}

export default function GettingPaidGuidePage() {
  return <GettingPaidGuideContent />
}
