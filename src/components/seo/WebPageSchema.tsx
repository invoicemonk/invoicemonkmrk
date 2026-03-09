import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

const BASE = 'https://invoicemonk.com';

interface HasPartItem {
  name: string;
  url: string;
}

interface WebPageSchemaProps {
  name: string;
  description: string;
  url: string;
  /** Cluster articles that this pillar page contains */
  hasPart?: HasPartItem[];
  /** Optional parent page this page is part of */
  isPartOf?: { name: string; url: string };
}

export function WebPageSchema({ name, description, url, hasPart, isPartOf }: WebPageSchemaProps) {
  const { lang } = useParams<{ lang: string }>();
  const prefix = lang?.toLowerCase() || 'en';

  const normalize = (u: string) => {
    if (u.startsWith('http')) return u;
    const path = u.startsWith('/') ? u : `/${u}`;
    return `${BASE}/${prefix}${path}`;
  };

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': normalize(url),
    name,
    description,
    url: normalize(url),
    isPartOf: isPartOf
      ? { '@type': 'WebPage', name: isPartOf.name, url: normalize(isPartOf.url) }
      : { '@id': `${BASE}/#website` },
    publisher: { '@id': `${BASE}/#organization` },
  };

  if (hasPart && hasPart.length > 0) {
    schema.hasPart = hasPart.map(item => ({
      '@type': 'Article',
      name: item.name,
      url: normalize(item.url),
    }));
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
