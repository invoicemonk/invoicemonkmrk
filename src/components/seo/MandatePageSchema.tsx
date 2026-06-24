import { Helmet } from 'react-helmet-async';
import type { Mandate } from '@/data/mandates';
import { MANDATES_LAST_REVIEWED } from '@/data/mandates';

const BASE = 'https://invoicemonk.com';

interface MandatePageSchemaProps {
  mandate: Mandate;
  /** Language prefix for the canonical URL (defaults to 'en'). */
  lang?: string;
}

/**
 * Source-page schema for a single mandate.
 *
 * Koray framework: this is a sub-central source page (NOT an article), so we emit
 *   WebPage > mainEntity: GovernmentService { provider: SoftwareApplication }
 * with additionalProperty for the six Strong Claim Bar fields, plus audience,
 * sameAs (authority site + spec), and dateModified for freshness.
 */
export function MandatePageSchema({ mandate, lang = 'en' }: MandatePageSchemaProps) {
  const pageUrl = `${BASE}/${lang}/e-invoicing/${mandate.slug}`;
  const serviceId = `${BASE}/#mandate-${mandate.slug}`;
  const dateModified = mandate.lastReviewed || MANDATES_LAST_REVIEWED;

  // sameAs: authority URLs from citations + Invoicemonk's pillar
  const authoritySameAs = mandate.citations.map((c) => c.url);

  const additionalProperty = [
    { name: 'Authority', value: mandate.authority },
    { name: 'Mandate', value: mandate.mandate },
    { name: 'Artefact', value: mandate.artefact },
    { name: 'Transport', value: mandate.transport },
    { name: 'Applies to', value: mandate.appliesTo },
    { name: 'Live since', value: mandate.liveSince },
  ].map((p) => ({ '@type': 'PropertyValue', name: p.name, value: p.value }));

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': pageUrl,
    url: pageUrl,
    name: mandate.title,
    description: mandate.metaDescription,
    inLanguage: lang,
    dateModified,
    isPartOf: { '@id': `${BASE}/#website` },
    breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
    mainEntity: {
      '@type': 'GovernmentService',
      '@id': serviceId,
      name: mandate.mandate,
      alternateName: `${mandate.jurisdiction} e-invoicing mandate`,
      description: mandate.directAnswer,
      serviceType: `E-invoicing — ${mandate.localArtefactName}`,
      category: mandate.localArtefactName,
      areaServed: { '@type': 'Country', name: mandate.jurisdiction },
      audience: {
        '@type': 'Audience',
        audienceType: mandate.appliesTo,
        geographicArea: { '@type': 'Country', name: mandate.jurisdiction },
      },
      provider: {
        '@type': 'GovernmentOrganization',
        name: mandate.authority,
        ...(authoritySameAs.length > 0 ? { sameAs: authoritySameAs } : {}),
      },
      // Invoicemonk is the channel through which the service is fulfilled
      availableChannel: {
        '@type': 'ServiceChannel',
        name: 'Invoicemonk',
        serviceUrl: `${BASE}/${lang}/e-invoicing/${mandate.slug}`,
        availableLanguage: lang,
        providedBy: { '@id': `${BASE}/#software` },
      },
      additionalProperty,
      datePosted: mandate.liveSince,
      dateModified,
    },
    about: {
      '@id': serviceId,
    },
    publisher: { '@id': `${BASE}/#organization` },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'article header p:last-of-type', 'dl'],
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}