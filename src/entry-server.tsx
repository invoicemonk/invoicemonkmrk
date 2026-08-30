import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import { AppRoutes } from "./App";
import "./i18n";

export { getContentRoutes } from "./prerender-routes";


export interface RenderResult {
  html: string;
  head: string;
}

/**
 * Renders a single route to static HTML at build time.
 *
 * Returns both the app markup and the collected <head> tags (title,
 * description, canonical, Open Graph, JSON-LD) so the prerender script can
 * write a fully self-describing HTML document per URL.
 */
export function render(url: string): RenderResult {
  const helmetContext: { helmet?: HelmetServerState } = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </HelmetProvider>,
  );

  const helmet = helmetContext.helmet;
  const head = helmet
    ? [
        helmet.title.toString(),
        helmet.meta.toString(),
        helmet.link.toString(),
        helmet.script.toString(),
      ]
        .filter(Boolean)
        .join("\n    ")
    : "";

  return { html, head };
}
