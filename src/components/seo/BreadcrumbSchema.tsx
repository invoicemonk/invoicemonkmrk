import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

const BASE = 'https://invoicemonk.com';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const { lang } = useParams<{ lang: string }>();
  const prefix = lang?.toLowerCase() || 'en';

  const normalize = (url: string) => {
    if (url.startsWith('http')) return url;
    const path = url.startsWith('/') ? url : `/${url}`;
    return `${BASE}/${prefix}${path}`;
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": normalize(item.url)
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
