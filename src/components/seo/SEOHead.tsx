import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useLocale } from '@/hooks/useLocale';
import { supportedCountries, locales, countryToUrlPrefix } from '@/locales';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
  ogType?: 'website' | 'article' | 'profile';
  noindex?: boolean;
  article?: {
    publishedTime: string;
    modifiedTime?: string;
    author: string;
    section: string;
  };
}

/**
 * Strip the two-letter country prefix from a pathname to get the
 * locale-independent relative path.  e.g. "/us/pricing" → "/pricing"
 */
function stripCountryPrefix(pathname: string): string {
  const match = pathname.match(/^\/[a-z]{2}(\/.*)?$/);
  return match ? (match[1] || '/') : pathname;
}

export function SEOHead({
  title,
  description,
  canonical,
  ogImage = 'https://invoicemonk.com/og-image.png',
  ogImageWidth = 1200,
  ogImageHeight = 630,
  ogType = 'website',
  noindex = false,
  article,
}: SEOHeadProps) {
  const { locale } = useLocale();
  const location = useLocation();
  const baseUrl = 'https://invoicemonk.com';

  // Build self-referencing canonical (includes country prefix)
  const fullCanonical = canonical || `${baseUrl}${location.pathname}`;

  // Relative page path without country prefix (e.g. "/pricing")
  const relPath = stripCountryPrefix(location.pathname);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Invoicemonk" />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Canonical – self-referencing */}
      <link rel="canonical" href={fullCanonical} />

      {/* hreflang – all country variants + x-default */}
      {supportedCountries.map((code) => {
        const loc = locales[code];
        const prefix = countryToUrlPrefix[code];
        return (
          <link
            key={code}
            rel="alternate"
            hrefLang={loc.content.seo.hreflangCode}
            href={`${baseUrl}/${prefix}${relPath}`}
          />
        );
      })}
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/us${relPath}`} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content={String(ogImageWidth)} />
      <meta property="og:image:height" content={String(ogImageHeight)} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:site_name" content="Invoicemonk" />
      <meta property="og:locale" content={locale.code.replace('-', '_')} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@invoicemonk" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />

      {/* Article specific meta */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          <meta property="article:author" content={article.author} />
          <meta property="article:section" content={article.section} />
        </>
      )}
    </Helmet>
  );
}
