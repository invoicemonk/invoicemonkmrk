import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

const BASE = 'https://invoicemonk.com';

const AUTHOR = { '@type': 'Organization' as const, name: 'Invoicemonk' };

interface QAItem {
  question: string;
  answer: string;
}

interface QAPageSchemaProps {
  mainEntity: QAItem;
  additionalQA?: QAItem[];
  pageUrl: string;
  datePublished?: string;
}

export function QAPageSchema({ mainEntity, additionalQA, pageUrl, datePublished = '2026-01-01' }: QAPageSchemaProps) {
  const { lang } = useParams<{ lang: string }>();
  const langPrefix = lang ? `/${lang}` : '';
  const fullUrl = `${BASE}${langPrefix}${pageUrl}`;

  const toQA = (item: QAItem, index: number) => ({
    '@type': 'Question',
    name: item.question,
    answerCount: 1,
    author: AUTHOR,
    datePublished,
    url: `${fullUrl}#question-${index}`,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
      author: AUTHOR,
      datePublished,
      url: `${fullUrl}#answer-${index}`,
    },
  });

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'QAPage',
    mainEntity: toQA(mainEntity, 0),
    ...(additionalQA && additionalQA.length > 0
      ? { mentions: additionalQA.map((qa, i) => toQA(qa, i + 1)) }
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
