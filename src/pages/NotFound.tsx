import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      {/* SPA hosting cannot return a 404 status for unmatched paths, so mark the
          page noindex to stop soft 404s entering the crawl/index queue. */}
      <Helmet>
        <title>Page not found — Invoicemonk</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center bg-muted">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">{t('notFound.title')}</h1>
          <p className="mb-4 text-xl text-muted-foreground">{t('notFound.message')}</p>
          <a href="/" className="text-primary underline hover:text-primary/90">
            {t('notFound.link')}
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
