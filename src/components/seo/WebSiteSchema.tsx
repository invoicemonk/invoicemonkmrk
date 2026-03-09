import { Helmet } from 'react-helmet-async';
import { useLocale } from '@/hooks/useLocale';
import { useParams } from 'react-router-dom';

export function WebSiteSchema() {
  const { locale } = useLocale();
  const { lang } = useParams<{ lang: string }>();
  const prefix = lang?.toLowerCase() || 'en';
  const BASE = 'https://invoicemonk.com';

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://invoicemonk.com/#website",
    "name": "Invoicemonk",
    "alternateName": "Invoice Monk",
    "url": "https://invoicemonk.com",
    "description": locale.content.seo.siteDescription,
    "inLanguage": "en",
    "publisher": {
      "@id": "https://invoicemonk.com/#organization"
    },
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${BASE}/${prefix}/blog?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      },
      {
        "@type": "ReadAction",
        "target": `${BASE}/${prefix}/blog`
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
