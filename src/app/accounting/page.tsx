import type { Metadata } from 'next'
import { AccountingContent } from './AccountingContent'

export const metadata: Metadata = {
  title: 'Accounting Software - Simple Business Accounting',
  description: 'Easy accounting software for small businesses with financial reports.',
  keywords: ['accounting software', 'small business accounting'],
  alternates: {
    canonical: 'https://invoicemonk.com/accounting',
  },
  openGraph: {
    title: 'Accounting Software - Simple Business Accounting | Invoicemonk',
    description: 'Easy accounting software for small businesses with financial reports.',
    url: 'https://invoicemonk.com/accounting',
    type: 'website',
  },
}

export default function AccountingPage() {
  return <AccountingContent />
}
