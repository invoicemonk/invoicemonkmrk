DROP VIEW public.public_reviews;

-- Column-level grants: public may read approved reviews but never the email column
GRANT SELECT (id, author_name, role, company, rating, review_text, verified, published_at, created_at)
  ON public.reviews TO anon, authenticated;

CREATE POLICY "Approved reviews are public"
  ON public.reviews FOR SELECT TO anon, authenticated
  USING (status = 'approved');

CREATE VIEW public.public_reviews
WITH (security_invoker = on) AS
  SELECT id, author_name, role, company, rating, review_text, verified,
         COALESCE(published_at, created_at) AS published_at
  FROM public.reviews
  WHERE status = 'approved';

GRANT SELECT ON public.public_reviews TO anon, authenticated;
GRANT ALL ON public.public_reviews TO service_role;