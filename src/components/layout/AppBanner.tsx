import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { GooglePlayBadge } from '@/components/marketing/GooglePlayBadge';

const STORAGE_KEY = 'im_app_banner_dismissed_v2';
const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.invoicemonk.app';

export const APP_BANNER_HEIGHT = 56; // px — taller to fit the Play badge

function isAndroid(): boolean {
  if (typeof navigator === 'undefined') return false;
  return /Android/i.test(navigator.userAgent);
}

export function useAppBannerVisible() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!isAndroid()) return;
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
        <div className="flex items-center justify-between gap-3 h-full">
          <div className="flex items-center gap-3 min-w-0">
            <span className="text-body-sm font-medium truncate">
              Invoicemonk for Android is here.
            </span>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href={PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get Invoicemonk on Google Play"
              className="hover:opacity-90 transition-opacity"
            >
              <GooglePlayBadge height={36} />
            </a>
            <button
              onClick={dismiss}
              aria-label="Dismiss"
              className="p-1 rounded hover:bg-primary-foreground/10"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
