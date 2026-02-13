import Script from 'next/script';
import { useLocale } from '@/hooks/useLocale';

export function WebSiteSchema() {
  const { locale } = useLocale();

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://invoicemonk.com/#website",
    "name": "Invoicemonk",
    "alternateName": "Invoice Monk",
    "url": "https://invoicemonk.com",
    "description": (locale.content as any).seo.siteDescription,
    "inLanguage": "en",
    "publisher": {
      "@id": "https://invoicemonk.com/#organization"
    },
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://invoicemonk.com/blog?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },
      {
        "@type": "ReadAction",
        "target": "https://invoicemonk.com/blog"
      }
    ]
  };

  return (
    <Script id="schema-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
