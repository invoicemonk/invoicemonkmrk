import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { GlossaryTerm } from '@/data/glossaryTerms';

interface DefinedTermSetSchemaProps {
  terms: GlossaryTerm[];
}

export function DefinedTermSetSchema({ terms }: DefinedTermSetSchemaProps) {
  const { lang } = useParams<{ lang: string }>();
  const prefix = lang?.toLowerCase() || 'en';
  const BASE = 'https://invoicemonk.com';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': `${BASE}/${prefix}/glossary`,
    name: 'Business Finance & Invoicing Glossary',
    description: 'Comprehensive glossary of invoicing, payments, accounting, and business finance terms for small business owners and freelancers.',
    hasDefinedTerm: terms.map(term => {
      const dt: Record<string, unknown> = {
        '@type': 'DefinedTerm',
        '@id': `${BASE}/${prefix}/glossary#${term.slug}`,
        name: term.term,
        description: term.definition,
        inDefinedTermSet: `${BASE}/${prefix}/glossary`
      };
      if (term.sameAs) {
        dt.sameAs = term.sameAs;
      }
      return dt;
    })
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

interface SingleTermSchemaProps {
  term: GlossaryTerm;
}

export function SingleTermSchema({ term }: SingleTermSchemaProps) {
  const { lang } = useParams<{ lang: string }>();
  const prefix = lang?.toLowerCase() || 'en';
  const BASE = 'https://invoicemonk.com';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    '@id': `${BASE}/${prefix}/glossary#${term.slug}`,
    name: term.term,
    description: term.definition,
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      '@id': `${BASE}/${prefix}/glossary`,
      name: 'Business Finance & Invoicing Glossary'
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
