/**
 * Build-time prerenderer.
 *
 * The site is a client-rendered SPA, which meant every URL returned a
 * byte-identical index.html with the homepage <title> and no
 * <link rel="canonical">. Google clustered those URLs together and reported
 * "Duplicate, Google chose different canonical than user".
 *
 * This script renders every public route to its own static HTML file after
 * `vite build`, so the first response already carries the correct title,
 * description and self-referencing canonical.
 *
 * Run: node scripts/prerender.mjs   (executed automatically by `npm run build`)
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const ssrEntry = path.join(root, "dist-ssr", "entry-server.js");

// Hard cap so the build output can never blow past hosting file limits.
const MAX_PRERENDER_PAGES = Number(process.env.MAX_PRERENDER_PAGES || 5000);

function readRoutes() {
  const sitemapPath = path.join(distDir, "sitemap.xml");
  if (!fs.existsSync(sitemapPath)) {
    throw new Error("dist/sitemap.xml not found — cannot determine routes to prerender");
  }
  const xml = fs.readFileSync(sitemapPath, "utf8");
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());

  const routes = new Set(["/"]);
  for (const loc of locs) {
    try {
      const { pathname } = new URL(loc);
      // Normalise: no trailing slash except root (TrailingSlashRedirect owns that rule)
      const clean = pathname.length > 1 ? pathname.replace(/\/+$/, "") : "/";
      routes.add(clean);
    } catch {
      // ignore malformed entries
    }
  }
  return [...routes];
}

function outputPathFor(route) {
  if (route === "/") return path.join(distDir, "index.html");
  return path.join(distDir, route.replace(/^\//, ""), "index.html");
}

/**
 * The template keeps a fallback <title>/description for the un-prerendered
 * case. Once Helmet's real tags are injected the page would carry two titles
 * and two descriptions, and crawlers read the first one — i.e. the homepage
 * text on every URL. Strip the fallbacks that Helmet replaces.
 */
function stripFallbackHead(html, head) {
  let out = html;
  if (/<title[^>]*>/.test(head)) {
    out = out.replace(/[ \t]*<title>[\s\S]*?<\/title>\n?/, "");
  }
  const dropIfPresent = [
    [/name="description"/, /[ \t]*<meta\s+name="description"[^>]*>\n?/],
    [/property="og:title"/, /[ \t]*<meta\s+property="og:title"[^>]*>\n?/],
    [/property="og:description"/, /[ \t]*<meta\s+property="og:description"[^>]*>\n?/],
    [/property="og:type"/, /[ \t]*<meta\s+property="og:type"[^>]*>\n?/],
    [/property="og:image"/, /[ \t]*<meta\s+property="og:image"[^>]*>\n?/g],
    [/name="twitter:title"/, /[ \t]*<meta\s+name="twitter:title"[^>]*>\n?/],
    [/name="twitter:description"/, /[ \t]*<meta\s+name="twitter:description"[^>]*>\n?/],
    [/name="twitter:image"/, /[ \t]*<meta\s+name="twitter:image"[^>]*>\n?/g],
  ];
  for (const [probe, pattern] of dropIfPresent) {
    if (probe.test(head)) out = out.replace(pattern, "");
  }
  return out;
}

async function main() {
  if (!fs.existsSync(ssrEntry)) {
    throw new Error(`SSR bundle not found at ${ssrEntry} — run \`vite build --ssr src/entry-server.tsx --outDir dist-ssr\` first`);
  }

  const template = fs.readFileSync(path.join(distDir, "index.html"), "utf8");
  const { render, getContentRoutes } = await import(fileURLToPath(new URL(`file://${ssrEntry}`)));

  // Sitemap covers the static/marketing pages; getContentRoutes() adds every
  // registered blog post, help article, author, mandate and guide — including
  // the programmatically generated ones the sitemap generator cannot see.
  const routeSet = new Set(readRoutes());
  for (const route of getContentRoutes()) routeSet.add(route);
  let routes = [...routeSet];

  if (routes.length > MAX_PRERENDER_PAGES) {
    console.warn(`[prerender] ${routes.length} routes exceeds MAX_PRERENDER_PAGES (${MAX_PRERENDER_PAGES}) — truncating`);
    routes = routes.slice(0, MAX_PRERENDER_PAGES);
  }

  let ok = 0;
  const failures = [];

  for (const route of routes) {
    try {
      // "/" is a client-side language redirect with no SEO head of its own.
      // Render the /en homepage there instead, so the root URL ships real
      // content plus a canonical pointing at /en.
      const { html, head } = render(route === "/" ? "/en" : route);

      const page = stripFallbackHead(template, head)
        .replace("</head>", `  ${head}\n  </head>`)
        .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

      const outFile = outputPathFor(route);
      fs.mkdirSync(path.dirname(outFile), { recursive: true });
      fs.writeFileSync(outFile, page);
      ok++;
    } catch (error) {
      failures.push({ route, message: error?.message || String(error) });
    }
  }

  // Unmatched paths are rewritten to /404.html by vercel.json. Render it from
  // the app's NotFound route so crawlers get a noindex page instead of a
  // 200 copy of the homepage (the soft-404 pattern Google flagged).
  try {
    const { html, head } = render("/en/__not-found__");
    const notFoundPage = stripFallbackHead(template, head)
      .replace("</head>", `  ${head}\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
    fs.writeFileSync(path.join(distDir, "404.html"), notFoundPage);
    console.log("[prerender] wrote 404.html");
  } catch (error) {
    console.warn("[prerender] could not render 404.html:", error?.message || error);
  }

  console.log(`[prerender] wrote ${ok}/${routes.length} pages`);
  if (failures.length) {
    console.warn(`[prerender] ${failures.length} route(s) failed and fall back to the SPA shell:`);
    for (const f of failures.slice(0, 20)) console.warn(`  ${f.route}: ${f.message}`);
  }
}

main().catch((error) => {
  console.error("[prerender] fatal:", error);
  process.exit(1);
});
