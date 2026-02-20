import { useCallback } from 'react';
import { useParams } from 'react-router-dom';

/**
 * Returns a function that prepends the current country prefix to any absolute path.
 * External URLs, hash links, and mailto links pass through unchanged.
 *
 * Usage:
 *   const lp = useLocalizedPath();
 *   lp("/pricing")  // → "/us/pricing"
 */
export function useLocalizedPath() {
  const { country } = useParams<{ country: string }>();
  const prefix = country?.toLowerCase() || 'us';

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
