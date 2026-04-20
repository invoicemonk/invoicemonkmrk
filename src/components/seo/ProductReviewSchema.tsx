import { Helmet } from 'react-helmet-async';

interface ToolReview {
  name: string;
  score: number; // out of 10
  description: string;
  pros: string[];
  cons: string[];
}

interface ProductReviewSchemaProps {
  pageUrl: string;
  pageName: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  tools: ToolReview[];
}

/**
 * Combined ItemList + Product/Review/AggregateRating schema for ranked
 * comparison pages. Each tool is emitted as a Product with a Review carrying
 * positiveNotes/negativeNotes and a 1-5 star rating (converted from 0-10).
 */
export function ProductReviewSchema({
  pageUrl,
  pageName,
  datePublished,
  dateModified,
  authorName,
  tools,
}: ProductReviewSchemaProps) {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: pageName,
    url: pageUrl,
    numberOfItems: tools.length,
    itemListElement: tools.map((tool, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: tool.name,
        description: tool.description,
        review: {
          '@type': 'Review',
          datePublished,
          dateModified,
          author: { '@type': 'Organization', name: authorName },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: (tool.score / 2).toFixed(1),
            bestRating: '5',
            worstRating: '1',
          },
          positiveNotes: {
            '@type': 'ItemList',
            itemListElement: tool.pros.map((p, j) => ({
              '@type': 'ListItem',
              position: j + 1,
              name: p,
            })),
          },
          negativeNotes: {
            '@type': 'ItemList',
            itemListElement: tool.cons.map((c, j) => ({
              '@type': 'ListItem',
              position: j + 1,
              name: c,
            })),
          },
        },
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(itemList)}</script>
    </Helmet>
  );
}
