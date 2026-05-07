import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const BREVO_CONTACTS_URL = "https://api.brevo.com/v3/contacts";

// Simple in-memory rate limit (per IP)
const hits = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQ = 5;

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || entry.resetAt < now) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  entry.count++;
  return entry.count <= MAX_REQ;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const BREVO_API_KEY = Deno.env.get("BREVO_API_KEY");
    const LIST_ID_RAW = Deno.env.get("BREVO_MARKETING_LIST_ID");
    if (!BREVO_API_KEY || !LIST_ID_RAW) {
      console.error("Missing BREVO_API_KEY or BREVO_MARKETING_LIST_ID");
      return new Response(JSON.stringify({ error: "Service not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const listId = parseInt(LIST_ID_RAW, 10);
    if (Number.isNaN(listId)) {
      return new Response(JSON.stringify({ error: "Invalid list ID" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
    if (!rateLimit(ip)) {
      return new Response(JSON.stringify({ error: "Too many requests" }), {
        status: 429,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const body = await req.json().catch(() => null);
    const firstName = typeof body?.firstName === "string" ? body.firstName.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
    const source = typeof body?.source === "string" ? body.source.slice(0, 100) : "exit_intent";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!firstName || firstName.length > 50 || !email || email.length > 255 || !emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid input" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const brevoRes = await fetch(BREVO_CONTACTS_URL, {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": BREVO_API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        attributes: { FIRSTNAME: firstName, SIGNUP_SOURCE: source },
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    if (!brevoRes.ok) {
      const errText = await brevoRes.text();
      // Treat duplicate as success (idempotent)
      if (brevoRes.status === 400 && errText.includes("duplicate_parameter")) {
        return new Response(JSON.stringify({ success: true, duplicate: true }), {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      console.error("Brevo contacts API error:", brevoRes.status, errText);
      return new Response(JSON.stringify({ error: "Failed to subscribe" }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("subscribe-marketing-lead error:", error);
    return new Response(JSON.stringify({ error: "Unexpected error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});