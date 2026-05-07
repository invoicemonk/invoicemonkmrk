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
        // Analytics
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
    if (isMobile) {
      mobileTimer = window.setTimeout(trigger, 45000);
    } else {
      document.documentElement.addEventListener("mouseleave", onMouseLeave);
    }

    return () => {
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      if (mobileTimer) window.clearTimeout(mobileTimer);
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