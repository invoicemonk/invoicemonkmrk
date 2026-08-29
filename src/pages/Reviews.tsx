import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { ReviewDisplay, Review } from '@/components/reviews/ReviewDisplay';
import { ReviewForm } from '@/components/reviews/ReviewForm';
import { AIPromptCapture } from '@/components/reviews/AIPromptCapture';
import { supabase } from '@/integrations/supabase/client';

/**
 * Public reviews surface. Only shows reviews that a human approved in the
 * database — nothing is seeded, invented or hardcoded, and AggregateRating
 * schema is emitted only when real approved reviews exist.
 */
export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    (async () => {
      const { data, error } = await supabase
        .from('public_reviews')
        .select('*')
        .order('published_at', { ascending: false })
        .limit(60);
      if (!active) return;
      if (error) console.error('Failed to load reviews:', error);
      setReviews(
        (data ?? []).map((r) => ({
          id: r.id as string,
          author: (r.author_name as string) ?? 'Invoicemonk customer',
          role: (r.role as string) ?? undefined,
          company: (r.company as string) ?? undefined,
          rating: Number(r.rating),
          reviewText: r.review_text as string,
          date: (r.published_at as string) ?? new Date().toISOString(),
          verified: Boolean(r.verified),
        }))
      );
      setLoading(false);
    })();
    return () => {
      active = false;
    };
  }, []);

  const average =
    reviews.length > 0
      ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
      : null;

  const aggregateSchema =
    average && reviews.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Invoicemonk',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web, Android',
          url: 'https://invoicemonk.com/en',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: average,
            reviewCount: reviews.length,
            bestRating: '5',
            worstRating: '1',
          },
        }
      : null;

  return (
    <Layout>
      <SEOHead
        title="Invoicemonk Reviews — What Customers Say"
        description="Real, verified customer reviews of Invoicemonk invoicing software. Read ratings from freelancers, consultants and small businesses, or leave your own review."
      />
      {aggregateSchema && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(aggregateSchema)}</script>
        </Helmet>
      )}
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Reviews', url: '/reviews' },
        ]}
      />

      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="text-heading-xl font-bold text-foreground mb-5">Invoicemonk reviews</h1>
          <p className="text-lg text-muted-foreground" data-answer="true">
            Every review on this page was submitted by an Invoicemonk user and approved by our team
            before publication. We do not buy, incentivise or write reviews, so if a rating is low it
            stays visible. {average ? `Current average: ${average} out of 5 from ${reviews.length} published reviews.` : 'Published reviews appear here as they are approved.'}
          </p>
        </div>
      </section>

      <section className="pb-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {loading ? (
            <p className="text-center text-muted-foreground">Loading reviews…</p>
          ) : (
            <ReviewDisplay reviews={reviews} showAggregateRating={reviews.length > 0} />
          )}
        </div>
      </section>

      <section className="pb-20 bg-muted/30 py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl grid gap-8 lg:grid-cols-2">
          <ReviewForm />
          <AIPromptCapture source="reviews-page" />
        </div>
      </section>
    </Layout>
  );
}
