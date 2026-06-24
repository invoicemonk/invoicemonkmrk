import { Helmet } from 'react-helmet-async';
import { mandates, MANDATES_LAST_REVIEWED } from '@/data/mandates';

const BASE = 'https://invoicemonk.com';

interface EInvoicingCollectionSchemaProps {
  lang?: string;
}

/**
 * Central source-page schema for /e-invoicing.
 *
 * Koray framework: this is the central pillar, so we emit
 *   CollectionPage > mainEntity: ItemList enumerating the 16 sub-central mandates
 * Each ItemList element is the same GovernmentService @id used on its own mandate page,
 * so the graph resolves cleanly across pages.
 */
export function EInvoicingCollectionSchema({ lang = 'en' }: EInvoicingCollectionSchemaProps) {
  const pageUrl = `${BASE}/${lang}/e-invoicing`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': pageUrl,
    url: pageUrl,
    name: 'Global E-Invoicing Platform — Mandate Matrix',
    description: `Mandate-compliant e-invoicing across ${mandates.length} jurisdictions: authority, mandate, artefact, transport, scope, and live-since for each.`,
    inLanguage: lang,
    dateModified: MANDATES_LAST_REVIEWED,
    isPartOf: { '@id': `${BASE}/#website` },
    publisher: { '@id': `${BASE}/#organization` },
    mainEntity: {
      '@type': 'ItemList',
      name: 'Supported e-invoicing mandates',
      numberOfItems: mandates.length,
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      itemListElement: mandates.map((m, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${BASE}/${lang}/e-invoicing/${m.slug}`,
        item: {
          '@type': 'GovernmentService',
          '@id': `${BASE}/#mandate-${m.slug}`,
          name: m.mandate,
          alternateName: `${m.jurisdiction} e-invoicing mandate`,
          description: m.oneLine,
          serviceType: `E-invoicing — ${m.localArtefactName}`,
          areaServed: { '@type': 'Country', name: m.jurisdiction },
          provider: { '@type': 'GovernmentOrganization', name: m.authority },
          datePosted: m.liveSince,
          url: `${BASE}/${lang}/e-invoicing/${m.slug}`,
        },
      })),
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}