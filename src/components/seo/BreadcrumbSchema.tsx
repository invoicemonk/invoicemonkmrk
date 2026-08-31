import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

const BASE = 'https://invoicemonk.com';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
  /**
   * Absolute URL of the page this breadcrumb belongs to. Used to build the
   * node's `@id` (`<pageUrl>#breadcrumb`) so page-level schema that references
   * `breadcrumb: { "@id": ... }` resolves to this BreadcrumbList.
   * Defaults to the last breadcrumb item's URL.
   */
  pageUrl?: string;
}

export function BreadcrumbSchema({ items, pageUrl }: BreadcrumbSchemaProps) {
  const { lang } = useParams<{ lang: string }>();
  const prefix = lang?.toLowerCase() || 'en';

  const normalize = (url: string) => {
    if (url.startsWith('http')) return url;
    const path = url.startsWith('/') ? url : `/${url}`;
    return `${BASE}/${prefix}${path}`;
  };

  const resolvedPageUrl =
    pageUrl || (items.length > 0 ? normalize(items[items.length - 1].url) : `${BASE}/${prefix}`);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${resolvedPageUrl}#breadcrumb`,
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
