import { forwardRef } from 'react';
import { Link as RouterLink, LinkProps, useParams } from 'react-router-dom';

/**
 * Drop-in replacement for React Router's <Link> that automatically
 * prepends the current country prefix (/:country) to absolute paths.
 *
 * External URLs (http/https), hash links, and mailto links pass through unchanged.
 */
const LocalizedLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, ...props }, ref) => {
    const { country } = useParams<{ country: string }>();
    const prefix = country?.toLowerCase() || 'us';

    let localizedTo = to;
    if (typeof to === 'string') {
      if (to.startsWith('/') && !to.startsWith('//')) {
        localizedTo = `/${prefix}${to}`;
      }
    } else if (typeof to === 'object' && to.pathname?.startsWith('/')) {
      localizedTo = { ...to, pathname: `/${prefix}${to.pathname}` };
    }

    return <RouterLink ref={ref} to={localizedTo} {...props} />;
  },
);

LocalizedLink.displayName = 'LocalizedLink';

// Named export as both LocalizedLink and Link for easy migration
export { LocalizedLink, LocalizedLink as Link };
