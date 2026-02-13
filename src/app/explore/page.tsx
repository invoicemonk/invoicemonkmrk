import type { Metadata } from 'next'
import { ExploreContent } from './ExploreContent'


export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Explore Topics - Business Resources',
  description: 'Explore guides and resources.',
  keywords: ['resources', 'guides'],
  alternates: {
    canonical: 'https://invoicemonk.com/explore',
  },
  openGraph: {
    title: 'Explore Topics - Business Resources | Invoicemonk',
    description: 'Explore guides and resources.',
    url: 'https://invoicemonk.com/explore',
    type: 'website',
  },
}

export default function ExplorePage() {
  return <ExploreContent />
}
