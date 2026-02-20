import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Redirects /path/ → /path to prevent duplicate URL ranking signals in GSC.
 * Must be rendered inside BrowserRouter.
 */
export const TrailingSlashRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { pathname, search, hash } = location;
    // Only redirect if there's a trailing slash and it's not the root
    if (pathname !== '/' && pathname.endsWith('/')) {
      const cleanPath = pathname.slice(0, -1);
      navigate(cleanPath + search + hash, { replace: true });
    }
  }, [location, navigate]);

  return null;
};
