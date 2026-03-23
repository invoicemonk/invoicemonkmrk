import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const INDEXNOW_KEY = "b8f4e2a1c3d5e6f7a8b9c0d1e2f3a4b5";
const HOST = "invoicemonk.com";
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Simple auth check — require the service role key or a shared secret
  const authHeader = req.headers.get("authorization") ?? "";
  const expectedKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
  if (!authHeader.includes(expectedKey) && expectedKey) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    let urlList: string[] = [];

    if (req.method === "POST") {
      const body = await req.json().catch(() => ({}));
      if (body.urls && Array.isArray(body.urls)) {
        urlList = body.urls;
      }
    }

    // If no URLs provided, fetch from sitemap
    if (urlList.length === 0) {
      const sitemapRes = await fetch(`https://${HOST}/sitemap.xml`);
      if (sitemapRes.ok) {
        const xml = await sitemapRes.text();
        const locMatches = xml.matchAll(/<loc>([^<]+)<\/loc>/g);
        for (const match of locMatches) {
          urlList.push(match[1]);
        }
      }
    }

    if (urlList.length === 0) {
      return new Response(
        JSON.stringify({ error: "No URLs to submit" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // IndexNow accepts max 10,000 URLs per request
    const batches: string[][] = [];
    for (let i = 0; i < urlList.length; i += 10000) {
      batches.push(urlList.slice(i, i + 10000));
    }

    const results: { batch: number; status: number; count: number }[] = [];

    for (let i = 0; i < batches.length; i++) {
      const payload = {
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: KEY_LOCATION,
        urlList: batches[i],
      };

      const res = await fetch(INDEXNOW_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      });

      results.push({
        batch: i + 1,
        status: res.status,
        count: batches[i].length,
      });
    }

    return new Response(
      JSON.stringify({
        success: true,
        totalUrls: urlList.length,
        batches: results,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
