import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { GooglePlayBadge } from '@/components/marketing/GooglePlayBadge';

const STORAGE_KEY = 'im_app_banner_dismissed_v2';
const IOS_STORAGE_KEY = 'im_app_banner_ios_dismissed_v1';
const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.invoicemonk.app&utm_source=invoicemonk_site&utm_medium=app_banner&utm_campaign=android';

export const APP_BANNER_HEIGHT = 56; // px — taller to fit the Play badge

type Platform = 'android' | 'ios' | null;

function detectPlatform(): Platform {
  if (typeof navigator === 'undefined') return null;
  const ua = navigator.userAgent;
  if (/Android/i.test(ua)) return 'android';
  // iPadOS 13+ reports as Mac; treat touch Macs as iOS too.
  if (/iPhone|iPad|iPod/i.test(ua)) return 'ios';
  if (/Macintosh/.test(ua) && typeof navigator.maxTouchPoints === 'number' && navigator.maxTouchPoints > 1) return 'ios';
  return null;
}

interface BannerState {
  visible: boolean;
  platform: Platform;
}

export function useAppBannerVisible(): boolean {
  return useAppBannerState().visible;
}

export function useAppBannerState(): BannerState {
  const [state, setState] = useState<BannerState>({ visible: false, platform: null });
  useEffect(() => {
    const platform = detectPlatform();
    if (!platform) return;
    const key = platform === 'android' ? STORAGE_KEY : IOS_STORAGE_KEY;
    try {
      if (!localStorage.getItem(key)) setState({ visible: true, platform });
    } catch {
      setState({ visible: true, platform });
    }
    const onDismiss = () => setState((s) => ({ ...s, visible: false }));
    window.addEventListener('im-app-banner-dismissed', onDismiss);
    return () => window.removeEventListener('im-app-banner-dismissed', onDismiss);
  }, []);
  return state;
}

export function AppBanner() {
  const { visible, platform } = useAppBannerState();
  if (!visible || !platform) return null;

  const dismiss = () => {
    const key = platform === 'android' ? STORAGE_KEY : IOS_STORAGE_KEY;
    try { localStorage.setItem(key, '1'); } catch {}
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
              {platform === 'android'
                ? 'Invoicemonk for Android is here.'
                : 'iPhone app coming soon — join the waitlist.'}
            </span>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {platform === 'android' ? (
              <a
                href={PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get Invoicemonk on Google Play"
                className="hover:opacity-90 transition-opacity"
              >
                <GooglePlayBadge height={36} />
              </a>
            ) : (
              <a
                href="/receipts/waitlist-ios"
                className="text-body-sm font-semibold underline underline-offset-2 hover:opacity-90"
              >
                Join waitlist
              </a>
            )}
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
