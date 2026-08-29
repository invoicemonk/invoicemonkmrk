-- Public product reviews (moderated) and AI discovery prompt capture

CREATE TABLE public.reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  author_name text NOT NULL,
  email text NOT NULL,
  role text,
  company text,
  rating smallint NOT NULL CHECK (rating BETWEEN 1 AND 5),
  review_text text NOT NULL,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected')),
  verified boolean NOT NULL DEFAULT false,
  published_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.reviews TO anon, authenticated;
GRANT ALL ON public.reviews TO service_role;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a review"
  ON public.reviews FOR INSERT TO anon, authenticated
  WITH CHECK (status = 'pending' AND verified = false AND published_at IS NULL);

-- Public-safe view: approved reviews only, no email exposure
CREATE VIEW public.public_reviews
WITH (security_invoker = off) AS
  SELECT id, author_name, role, company, rating, review_text, verified,
         COALESCE(published_at, created_at) AS published_at
  FROM public.reviews
  WHERE status = 'approved';

GRANT SELECT ON public.public_reviews TO anon, authenticated;
GRANT ALL ON public.public_reviews TO service_role;

CREATE TABLE public.ai_discovery_prompts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  source text,
  prompt text NOT NULL,
  assistant text,
  email text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.ai_discovery_prompts TO anon, authenticated;
GRANT ALL ON public.ai_discovery_prompts TO service_role;
ALTER TABLE public.ai_discovery_prompts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit how they found us"
  ON public.ai_discovery_prompts FOR INSERT TO anon, authenticated
  WITH CHECK (char_length(prompt) BETWEEN 2 AND 2000);