import type { Metadata } from 'next'
import { FreelancersContent } from './FreelancersContent'


export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Invoicing for Freelancers - Get Paid Faster',
  description: 'Software built for freelancers.',
  keywords: ['freelance invoicing'],
  alternates: {
    canonical: 'https://invoicemonk.com/freelancers',
  },
  openGraph: {
    title: 'Invoicing for Freelancers - Get Paid Faster | Invoicemonk',
    description: 'Software built for freelancers.',
    url: 'https://invoicemonk.com/freelancers',
    type: 'website',
  },
}

export default function FreelancersPage() {
  return <FreelancersContent />
}
