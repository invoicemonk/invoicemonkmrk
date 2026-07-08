import { useEffect, useState } from "react";

const STORAGE_SEEN = "im_exit_popup_seen";
const STORAGE_SUBMITTED = "im_exit_popup_submitted";
const TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

function isSuppressed(): boolean {
  try {
    if (new URLSearchParams(window.location.search).get("no-popup") === "1") return true;
    const path = window.location.pathname;
    if (/\/contact(\/|$)/.test(path) || /\/pricing(\/|$)/.test(path)) return true;
    if (document.referrer.includes("app.invoicemonk.com")) return true;
    const submitted = localStorage.getItem(STORAGE_SUBMITTED);
    if (submitted) return true;
    const seen = localStorage.getItem(STORAGE_SEEN);
    if (seen) {
      const ts = parseInt(seen, 10);
      if (!Number.isNaN(ts) && Date.now() - ts < TTL_MS) return true;
    }
  } catch {
    // ignore
  }
  return false;
}

export function useExitIntent(): { open: boolean; setOpen: (v: boolean) => void; markSubmitted: () => void } {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isSuppressed()) return;

    let triggered = false;
    const trigger = () => {
      if (triggered) return;
      triggered = true;
      try {
        localStorage.setItem(STORAGE_SEEN, Date.now().toString());
        // @ts-expect-error dataLayer global
        (window.dataLayer = window.dataLayer || []).push({ event: "exit_intent_shown" });
      } catch {
        // ignore
      }
      setOpen(true);
    };

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    };

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    let mobileTimer: number | undefined;
    let dwellTimer: number | undefined;
    let dwellArmed = false;

    const armDwell = () => {
      if (dwellArmed) return;
      dwellArmed = true;
      dwellTimer = window.setTimeout(trigger, 30000);
    };

    const onScroll = () => {
      if (!isMobile) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? scrollTop / docHeight : 0;
      if (pct >= 0.6) armDwell();
    };

    if (isMobile) {
      // Fallback: force show after 60s on mobile even without deep scroll.
      mobileTimer = window.setTimeout(trigger, 60000);
      window.addEventListener("scroll", onScroll, { passive: true });
    } else {
      document.documentElement.addEventListener("mouseleave", onMouseLeave);
    }

    return () => {
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
      if (mobileTimer) window.clearTimeout(mobileTimer);
      if (dwellTimer) window.clearTimeout(dwellTimer);
    };
  }, []);

  const markSubmitted = () => {
    try {
      localStorage.setItem(STORAGE_SUBMITTED, "1");
    } catch {
      // ignore
    }
  };

  return { open, setOpen, markSubmitted };
}
