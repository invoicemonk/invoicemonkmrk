import { useEffect } from 'react';

/**
 * Hard-redirects the browser to an external URL on mount.
 * Used for retired marketing pages that should now route ready-to-convert
 * traffic straight to the signup app.
 */
export function ExternalRedirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);
  return null;
}

export default ExternalRedirect;
