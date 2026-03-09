import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

const BASE = 'https://invoicemonk.com';

interface LearningResourceSchemaProps {
  name: string;
  description: string;
  url: string;
  /** What the guide teaches, e.g. ['Invoice creation', 'Payment terms'] */
  teaches: string[];
  /** ISO 8601 duration, e.g. 'PT15M' */
  timeRequired?: string;
  /** e.g. 'Beginner', 'Intermediate', 'Advanced' */
  educationalLevel?: string;
}

export function LearningResourceSchema({
  name,
  description,
  url,
  teaches,
  timeRequired = 'PT10M',
  educationalLevel = 'Beginner',
}: LearningResourceSchemaProps) {
  const { lang } = useParams<{ lang: string }>();
  const prefix = lang?.toLowerCase() || 'en';

  const normalize = (u: string) => {
    if (u.startsWith('http')) return u;
    return `${BASE}/${prefix}${u.startsWith('/') ? u : `/${u}`}`;
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name,
    description,
    url: normalize(url),
    educationalLevel,
    teaches,
    timeRequired,
    provider: { '@id': `${BASE}/#organization` },
    inLanguage: prefix === 'en' ? 'en' : prefix,
    isAccessibleForFree: true,
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
