
-- 1. Drop the broad SELECT policy that let anyone LIST files in business-logos
DROP POLICY IF EXISTS "Anyone can view business logos" ON storage.objects;

-- 2. Tighten contact_messages anonymous insert policy with basic validation
DROP POLICY IF EXISTS "Allow anonymous inserts" ON public.contact_messages;
CREATE POLICY "Anonymous can submit contact form"
ON public.contact_messages
FOR INSERT
TO anon, authenticated
WITH CHECK (
  char_length(first_name) BETWEEN 1 AND 100
  AND char_length(last_name) BETWEEN 1 AND 100
  AND char_length(email) BETWEEN 3 AND 320
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND char_length(subject) BETWEEN 1 AND 200
  AND char_length(message) BETWEEN 1 AND 5000
);

-- 3. Move RLS helper functions to a private schema
CREATE SCHEMA IF NOT EXISTS private;
REVOKE ALL ON SCHEMA private FROM PUBLIC;
GRANT USAGE ON SCHEMA private TO anon, authenticated, service_role;

-- private.has_role
CREATE OR REPLACE FUNCTION private.has_role(_user_id uuid, _role public.app_role, _org_id uuid DEFAULT NULL::uuid)
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
      AND (org_id = _org_id OR (_org_id IS NULL AND org_id IS NULL))
  )
$$;

-- private.is_business_member
CREATE OR REPLACE FUNCTION private.is_business_member(_user_id uuid, _business_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.business_members
    WHERE user_id = _user_id
      AND business_id = _business_id
      AND accepted_at IS NOT NULL
  )
$$;

-- private.has_business_role
CREATE OR REPLACE FUNCTION private.has_business_role(_user_id uuid, _business_id uuid, _role public.business_role)
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.business_members
    WHERE user_id = _user_id
      AND business_id = _business_id
      AND role = _role
      AND accepted_at IS NOT NULL
  )
$$;

-- private.has_audit_access (note: calls public.has_role wrapper which proxies back to private)
CREATE OR REPLACE FUNCTION private.has_audit_access(_user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.subscriptions s
    WHERE s.user_id = _user_id
      AND s.status = 'active'
      AND s.tier IN ('professional', 'business')
  )
  OR private.has_role(_user_id, 'platform_admin'::public.app_role)
$$;

REVOKE ALL ON FUNCTION private.has_role(uuid, public.app_role, uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION private.is_business_member(uuid, uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION private.has_business_role(uuid, uuid, public.business_role) FROM PUBLIC;
REVOKE ALL ON FUNCTION private.has_audit_access(uuid) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION private.has_role(uuid, public.app_role, uuid) TO authenticated, service_role;
GRANT EXECUTE ON FUNCTION private.is_business_member(uuid, uuid) TO authenticated, service_role;
GRANT EXECUTE ON FUNCTION private.has_business_role(uuid, uuid, public.business_role) TO authenticated, service_role;
GRANT EXECUTE ON FUNCTION private.has_audit_access(uuid) TO authenticated, service_role;

-- 4. Replace public versions with SECURITY INVOKER pass-through wrappers
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role, _org_id uuid DEFAULT NULL::uuid)
RETURNS boolean
LANGUAGE sql
STABLE SECURITY INVOKER
SET search_path = public
AS $$ SELECT private.has_role(_user_id, _role, _org_id) $$;

CREATE OR REPLACE FUNCTION public.is_business_member(_user_id uuid, _business_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE SECURITY INVOKER
SET search_path = public
AS $$ SELECT private.is_business_member(_user_id, _business_id) $$;

CREATE OR REPLACE FUNCTION public.has_business_role(_user_id uuid, _business_id uuid, _role public.business_role)
RETURNS boolean
LANGUAGE sql
STABLE SECURITY INVOKER
SET search_path = public
AS $$ SELECT private.has_business_role(_user_id, _business_id, _role) $$;

CREATE OR REPLACE FUNCTION public.has_audit_access(_user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE SECURITY INVOKER
SET search_path = public
AS $$ SELECT private.has_audit_access(_user_id) $$;

-- 5. Revoke EXECUTE from PUBLIC, anon, authenticated on every remaining
--    SECURITY DEFINER function in public. service_role keeps EXECUTE via
--    Supabase's blanket GRANT ALL ON FUNCTIONS TO service_role. Triggers
--    fire as the table owner and do not require explicit EXECUTE on the
--    trigger function, so revoking here does not break trigger execution.
DO $$
DECLARE
  r record;
  sig text;
BEGIN
  FOR r IN
    SELECT p.oid, n.nspname, p.proname
    FROM pg_proc p
    JOIN pg_namespace n ON n.oid = p.pronamespace
    WHERE n.nspname = 'public'
      AND p.prosecdef = true
  LOOP
    sig := format('%I.%I(%s)', r.nspname, r.proname, pg_get_function_identity_arguments(r.oid));
    EXECUTE format('REVOKE ALL ON FUNCTION %s FROM PUBLIC', sig);
    EXECUTE format('REVOKE ALL ON FUNCTION %s FROM anon', sig);
    EXECUTE format('REVOKE ALL ON FUNCTION %s FROM authenticated', sig);
    EXECUTE format('GRANT EXECUTE ON FUNCTION %s TO service_role', sig);
  END LOOP;
END $$;
