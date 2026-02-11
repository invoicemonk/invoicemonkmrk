import type { Metadata } from 'next'
import { SmallBusinessesContent } from './SmallBusinessesContent'

export const metadata: Metadata = {
  title: 'Small Business Software - All-in-One Solution',
  description: 'Complete solution for small businesses.',
  keywords: ['small business software'],
  alternates: {
    canonical: 'https://invoicemonk.com/small-businesses',
  },
  openGraph: {
    title: 'Small Business Software - All-in-One Solution | InvoiceMonk',
    description: 'Complete solution for small businesses.',
    url: 'https://invoicemonk.com/small-businesses',
    type: 'website',
  },
}

export default function SmallBusinessesPage() {
  return <SmallBusinessesContent />
}
