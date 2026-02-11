import type { Metadata } from 'next'
import { ContactContent } from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch',
  description: 'Get in touch with our support team.',
  keywords: ['contact', 'support'],
  alternates: {
    canonical: 'https://invoicemonk.com/contact',
  },
  openGraph: {
    title: 'Contact Us - Get in Touch | Invoicemonk',
    description: 'Get in touch with our support team.',
    url: 'https://invoicemonk.com/contact',
    type: 'website',
  },
}

export default function ContactPage() {
  return <ContactContent />
}
