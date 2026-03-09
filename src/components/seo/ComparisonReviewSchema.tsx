import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

const BASE = 'https://invoicemonk.com';

interface ComparisonReviewSchemaProps {
  itemName: string;
  competitorName: string;
  /** Reasons to choose Invoicemonk over competitor */
  positiveNotes: string[];
  /** Scenarios where competitor may be suitable */
  negativeNotes: string[];
  url: string;
}

/**
 * ComparisonReviewSchema - Pro/Con structured data for /compare/* pages
 * Uses Google's Review schema with positiveNotes/negativeNotes (ItemList)
 */
export function ComparisonReviewSchema({
  itemName,
  competitorName,
  positiveNotes,
  negativeNotes,
  url,
}: ComparisonReviewSchemaProps) {
  const { lang } = useParams<{ lang: string }>();
  const prefix = lang?.toLowerCase() || 'en';

  const normalize = (u: string) => {
    if (u.startsWith('http')) return u;
    return `${BASE}/${prefix}${u.startsWith('/') ? u : `/${u}`}`;
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    name: `${itemName} vs ${competitorName} Comparison`,
    url: normalize(url),
    author: { '@id': `${BASE}/#organization` },
    itemReviewed: {
      '@type': 'SoftwareApplication',
      name: competitorName,
      applicationCategory: 'BusinessApplication',
    },
    positiveNotes: {
      '@type': 'ItemList',
      itemListElement: positiveNotes.map((note, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: note,
      })),
    },
    negativeNotes: {
      '@type': 'ItemList',
      itemListElement: negativeNotes.map((note, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: note,
      })),
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
