import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

const BASE = 'https://invoicemonk.com';

interface QAItem {
  question: string;
  answer: string;
}

interface QAPageSchemaProps {
  mainEntity: QAItem;
  /** Additional Q&A pairs on the page */
  additionalQA?: QAItem[];
}

export function QAPageSchema({ mainEntity, additionalQA }: QAPageSchemaProps) {
  const { lang } = useParams<{ lang: string }>();

  const toQA = (item: QAItem) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  });

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'QAPage',
    mainEntity: toQA(mainEntity),
    ...(additionalQA && additionalQA.length > 0
      ? { mentions: additionalQA.map(toQA) }
      : {}),
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
