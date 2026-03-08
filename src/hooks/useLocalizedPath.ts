import { useCallback } from 'react';
import { useParams } from 'react-router-dom';

/**
 * Returns a function that prepends the current language prefix to any absolute path.
 * External URLs, hash links, and mailto links pass through unchanged.
 *
 * Usage:
 *   const lp = useLocalizedPath();
 *   lp("/pricing")  // → "/en/pricing"
 */
export function useLocalizedPath() {
  const { lang } = useParams<{ lang: string }>();
  const prefix = lang?.toLowerCase() || 'en';

  return useCallback(
    (path: string) => {
      if (
        path.startsWith('http') ||
        path.startsWith('//') ||
        path.startsWith('#') ||
        path.startsWith('mailto:') ||
        path.startsWith('tel:')
      ) {
        return path;
      }
      if (path.startsWith('/')) {
        return `/${prefix}${path}`;
      }
      return path;
    },
    [prefix],
  );
}
