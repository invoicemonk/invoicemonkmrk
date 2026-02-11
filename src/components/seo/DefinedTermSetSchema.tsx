import Script from 'next/script';
import { GlossaryTerm } from '@/data/glossaryTerms';

interface DefinedTermSetSchemaProps {
  terms: GlossaryTerm[];
}

export function DefinedTermSetSchema({ terms }: DefinedTermSetSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': 'https://invoicemonk.com/glossary',
    name: 'Business Finance & Invoicing Glossary',
    description: 'Comprehensive glossary of invoicing, payments, accounting, and business finance terms for small business owners and freelancers.',
    hasDefinedTerm: terms.map(term => ({
      '@type': 'DefinedTerm',
      '@id': `https://invoicemonk.com/glossary#${term.slug}`,
      name: term.term,
      description: term.definition,
      inDefinedTermSet: 'https://invoicemonk.com/glossary'
    }))
  };

  return (
    <Script id="schema-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

interface SingleTermSchemaProps {
  term: GlossaryTerm;
}

export function SingleTermSchema({ term }: SingleTermSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    '@id': `https://invoicemonk.com/glossary#${term.slug}`,
    name: term.term,
    description: term.definition,
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      '@id': 'https://invoicemonk.com/glossary',
      name: 'Business Finance & Invoicing Glossary'
    }
  };

  return (
    <Script id="schema-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
