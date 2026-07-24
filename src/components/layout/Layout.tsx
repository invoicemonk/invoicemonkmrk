import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AppBanner, APP_BANNER_HEIGHT, useAppBannerVisible } from './AppBanner';
import { OrganizationSchema } from '@/components/seo/OrganizationSchema';
import { ExitIntentPopup } from '@/components/marketing/ExitIntentPopup';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const bannerVisible = useAppBannerVisible();
  const offset = bannerVisible ? APP_BANNER_HEIGHT : 0;
  return (
    <div className="min-h-screen flex flex-col">
      <OrganizationSchema />
      <AppBanner />
      <Navbar topOffset={offset} />
      <main
        className="flex-1"
        style={{ paddingTop: `calc(4rem + ${offset}px)` }}
      >
        <div className="lg:hidden" style={{ height: 0 }} />
        {children}
      </main>
      <Footer />
      <ExitIntentPopup />
    </div>
  );
}
