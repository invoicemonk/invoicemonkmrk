import { useEffect, useState } from 'react';
import { Smartphone, X } from 'lucide-react';

const STORAGE_KEY = 'im_app_banner_dismissed_v1';
const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.invoicemonk.app';

export const APP_BANNER_HEIGHT = 40; // px

export function useAppBannerVisible() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
    const onDismiss = () => setVisible(false);
    window.addEventListener('im-app-banner-dismissed', onDismiss);
    return () => window.removeEventListener('im-app-banner-dismissed', onDismiss);
  }, []);
  return visible;
}

export function AppBanner() {
  const visible = useAppBannerVisible();
  if (!visible) return null;

  const dismiss = () => {
    try { localStorage.setItem(STORAGE_KEY, '1'); } catch {}
    window.dispatchEvent(new Event('im-app-banner-dismissed'));
  };

  return (
    <div
      className="fixed top-0 inset-x-0 z-[60] bg-primary text-primary-foreground"
      style={{ height: APP_BANNER_HEIGHT }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between gap-3 h-full text-caption sm:text-body-sm">
          <a
            href={PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-medium hover:underline min-w-0"
          >
            <Smartphone className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">
              Invoicemonk is now on Android —{' '}
              <span className="underline underline-offset-2">get the app on Google Play</span>
            </span>
          </a>
          <button
            onClick={dismiss}
            aria-label="Dismiss"
            className="p-1 rounded hover:bg-primary-foreground/10 flex-shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
