import { isMalformedCrawlerArtifact } from './src/seo/legacy-url-rules';

export const config = {
  matcher: ['/:path*'],
};

/** Return a truthful terminal status for malformed URLs that have no content equivalent. */
export default function middleware(request: Request) {
  const url = new URL(request.url);
  let pathname = url.pathname;
  try {
    pathname = decodeURIComponent(pathname);
  } catch {
    // Keep the encoded form; the matcher handles both forms.
  }

  if (isMalformedCrawlerArtifact(pathname)) {
    return new Response('Gone', {
      status: 410,
      headers: {
        'content-type': 'text/plain; charset=utf-8',
        'x-robots-tag': 'noindex, nofollow',
        'cache-control': 'public, max-age=86400',
      },
    });
  }
}