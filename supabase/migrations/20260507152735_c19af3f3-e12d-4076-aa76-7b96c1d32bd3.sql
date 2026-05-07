
-- Restrict sensitive columns on public.businesses to owners/admins only.
-- Members keep full row visibility for non-sensitive columns via existing RLS.

-- 1) Revoke direct SELECT on sensitive columns from client roles.
REVOKE SELECT (
  government_id_value,
  government_id_type,
  tax_id,
  cac_number
) ON public.businesses FROM anon, authenticated;

-- Note: stripe_connect_account_id and paystack_subaccount_code are not present
-- as columns on public.businesses in the current schema; skipping those.

-- 2) Provide a SECURITY DEFINER accessor for owners/admins to read sensitive fields.
CREATE OR REPLACE FUNCTION public.get_business_sensitive_fields(_business_id uuid)
RETURNS TABLE (
  business_id uuid,
  government_id_value text,
  government_id_type text,
  tax_id text,
  cac_number text
)
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF auth.uid() IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  IF NOT (
    public.has_business_role(auth.uid(), _business_id, 'owner'::business_role)
    OR public.has_business_role(auth.uid(), _business_id, 'admin'::business_role)
    OR public.has_role(auth.uid(), 'platform_admin'::app_role)
  ) THEN
    RAISE EXCEPTION 'Insufficient privileges to read sensitive business fields';
  END IF;

  RETURN QUERY
  SELECT b.id,
         b.government_id_value,
         b.government_id_type,
         b.tax_id,
         b.cac_number
  FROM public.businesses b
  WHERE b.id = _business_id;
END;
$$;

REVOKE ALL ON FUNCTION public.get_business_sensitive_fields(uuid) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_business_sensitive_fields(uuid) TO authenticated;
