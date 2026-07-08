CREATE TABLE public.conversion_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  event_type text NOT NULL,
  placement text,
  pillar_id text,
  slug text,
  magnet text,
  cta_variant text,
  session_id text,
  page_url text,
  extra jsonb
);

GRANT INSERT ON public.conversion_events TO anon;
GRANT INSERT ON public.conversion_events TO authenticated;
GRANT ALL ON public.conversion_events TO service_role;

ALTER TABLE public.conversion_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can log conversion events"
  ON public.conversion_events
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE INDEX conversion_events_created_at_idx ON public.conversion_events (created_at DESC);
CREATE INDEX conversion_events_slug_idx ON public.conversion_events (slug);
CREATE INDEX conversion_events_event_type_idx ON public.conversion_events (event_type);