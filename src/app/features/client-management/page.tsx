import type { Metadata } from 'next'
import { ClientManagementContent } from './ClientManagementContent'

export const metadata: Metadata = {
  title: 'Client Management Software - Organize Your Customers',
  description: 'Professional client management tools. Keep customer information, communication history, and billing in one place.',
  keywords: ['client management', 'customer management', 'CRM', 'contact management'],
  alternates: {
    canonical: 'https://invoicemonk.com/features/client-management',
  },
  openGraph: {
    title: 'Client Management Software | InvoiceMonk',
    description: 'Professional client management tools for freelancers and businesses.',
    url: 'https://invoicemonk.com/features/client-management',
    type: 'website',
  },
}

export default function ClientManagementPage() {
  return <ClientManagementContent />
}
