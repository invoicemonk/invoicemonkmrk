import { NavLink as RouterNavLink, NavLinkProps, useParams } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    const { country } = useParams<{ country: string }>();
    const prefix = country?.toLowerCase() || 'us';

    let localizedTo = to;
    if (typeof to === 'string' && to.startsWith('/') && !to.startsWith('//')) {
      localizedTo = `/${prefix}${to}`;
    }

    return (
      <RouterNavLink
        ref={ref}
        to={localizedTo}
        className={({ isActive, isPending }) =>
          cn(className, isActive && activeClassName, isPending && pendingClassName)
        }
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
