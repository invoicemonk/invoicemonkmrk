import type { Metadata } from 'next'
import { AboutContent } from './AboutContent'

export const metadata: Metadata = {
  title: 'About Us - Our Mission and Team',
  description: 'Learn about InvoiceMonk's mission.',
  keywords: ['about', 'team', 'mission'],
  alternates: {
    canonical: 'https://invoicemonk.com/about',
  },
  openGraph: {
    title: 'About Us - Our Mission and Team | InvoiceMonk',
    description: 'Learn about InvoiceMonk's mission.',
    url: 'https://invoicemonk.com/about',
    type: 'website',
  },
}

export default function AboutPage() {
  return <AboutContent />
}
