import type { Metadata } from 'next'
import { PaymentsContent } from './PaymentsContent'

export const metadata: Metadata = {
  title: 'Payment Processing - Accept Payments Online',
  description: 'Accept online payments, send payment links, and get paid faster.',
  keywords: ['payment processing', 'online payments', 'payment links'],
  alternates: {
    canonical: 'https://invoicemonk.com/payments',
  },
  openGraph: {
    title: 'Payment Processing - Accept Payments Online | Invoicemonk',
    description: 'Accept online payments, send payment links, and get paid faster.',
    url: 'https://invoicemonk.com/payments',
    type: 'website',
  },
}

export default function PaymentsPage() {
  return <PaymentsContent />
}
