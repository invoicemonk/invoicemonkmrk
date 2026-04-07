import { Helmet } from 'react-helmet-async';
import { useLocation, useParams } from 'react-router-dom';
import { useLocale } from '@/hooks/useLocale';
import { supportedLanguages, languageToHreflang, urlPrefixToCountry } from '@/locales';

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
 * Strip the language prefix from a pathname to get the
 * locale-independent relative path.  e.g. "/en/pricing" → "/pricing"
 */
function stripLanguagePrefix(pathname: string): string {
  const match = pathname.match(/^\/[a-z]{2}(-[a-z]{2})?(\/.*)?$/);
  return match ? (match[2] || '/') : pathname;
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
  const { lang } = useParams<{ lang: string }>();
  const baseUrl = 'https://invoicemonk.com';

  // Relative page path without language prefix (e.g. "/pricing")
  const relPath = stripLanguagePrefix(location.pathname);

  // Route prefixes that have REAL translated content — canonical should self-reference
  // Only include prefixes where /de/, /fr/, /es/, /pt/ actually have unique translations
  const fullyTranslatedPrefixes = [
    '/blog', '/help', '/glossary',
    '/invoicing', '/expenses', '/payments', '/accounting',
    '/estimates', '/receipts', '/client-management',
    '/freelancers', '/consultants', '/contractors', '/agencies',
    '/photographers', '/lawyers', '/accountants', '/ecommerce',
    '/creatives', '/small-businesses',
    '/compliance', '/pricing', '/about', '/contact',
    '/why-invoicemonk', '/developer', '/explore',
    '/free-invoice-generator',
    '/compare', '/best-invoicing-software',
    '/use-cases', '/guides', '/tools', '/partner-program',
    '/privacy-policy', '/terms-of-service', '/cookie-policy', '/legal',
  ];
  const isTranslatedRoute = fullyTranslatedPrefixes.some(p => relPath.startsWith(p));

  // For non-translated routes under a non-English language prefix,
  // override canonical to point to the /en/ equivalent to avoid duplicate content
  const langPrefix = lang?.toLowerCase() || 'en';
  const shouldOverrideCanonical = langPrefix !== 'en' && !isTranslatedRoute;

  const fullCanonical = canonical
    || (shouldOverrideCanonical
      ? `${baseUrl}/en${relPath}`
      : `${baseUrl}${location.pathname}`);

  // Geo region from URL country prefix (e.g. "au" → "AU")

  // Geo region from URL country prefix (e.g. "au" → "AU")
  const countryCode = lang ? urlPrefixToCountry[lang.toLowerCase()] : undefined;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Invoicemonk" />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {countryCode && <meta name="geo.region" content={countryCode} />}

      {/* Canonical – self-referencing */}
      <link rel="canonical" href={fullCanonical} />

      {/* hreflang – 4 language variants + x-default */}
      {supportedLanguages.map((langCode) => (
        <link
          key={langCode}
          rel="alternate"
          hrefLang={languageToHreflang[langCode]}
          href={`${baseUrl}/${langCode}${relPath}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/en${relPath}`} />

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
          {article.modifiedTime && article.modifiedTime > article.publishedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          <meta property="article:author" content={article.author} />
          <meta property="article:section" content={article.section} />
        </>
      )}
    </Helmet>
  );
}
