import Link from 'next/link';
import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface NavLinkProps extends ComponentPropsWithoutRef<typeof Link> {
  className?: string;
  activeClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, ...props }, ref) => {
    // In Next.js, we don't have isActive state like React Router
    // Just use regular Link with className
    return (
      <Link
        ref={ref}
        className={className}
        {...props}
      />
    );
  }
);

NavLink.displayName = 'NavLink';

export { NavLink };
