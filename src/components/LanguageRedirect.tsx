import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Rendered at `/`. The project ships a single English locale, so this
 * always redirects to `/en/`. Do not reintroduce timezone-based country
 * detection here — it caused SEO damage by signalling multi-country
 * locale variants. See mem://constraints/single-locale.
 */
export function LanguageRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/en/', { replace: true });
  }, [navigate]);

  return null;
}
