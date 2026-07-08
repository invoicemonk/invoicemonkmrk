/**
 * Conversion event tracking.
 *
 * Sends fire-and-forget events to public.conversion_events (Supabase)
 * AND pushes to dataLayer for GA/GTM. Never throws; never blocks UI.
 *
 * Event types:
 *   - impression         — CTA/lead-magnet rendered into view
 *   - click              — signup / secondary CTA clicked
 *   - form_view          — content-upgrade form displayed
 *   - form_submit        — lead-magnet form submitted successfully
 *   - sticky_click       — sticky-bar CTA clicked
 *   - sticky_dismiss     — sticky-bar dismissed
 *   - exit_intent_shown  — exit-intent popup opened
 *   - exit_intent_submit — exit-intent form submitted
 */

import { supabase } from '@/integrations/supabase/client';

export type ConversionEventType =
  | 'impression'
  | 'click'
  | 'form_view'
  | 'form_submit'
  | 'sticky_click'
  | 'sticky_dismiss'
  | 'exit_intent_shown'
  | 'exit_intent_submit';

export interface ConversionEventPayload {
  eventType: ConversionEventType;
  placement?: string;         // 'sidebar' | 'article_end' | 'mid_h2_2' | 'sticky' | 'exit_intent' | 'blog_hero'
  pillarId?: string;
  slug?: string;
  magnet?: string;            // lead magnet id when applicable
  ctaVariant?: string;        // 'signup' | 'download' | 'trial' | 'proof' | etc.
  extra?: Record<string, unknown>;
}

function getSessionId(): string {
  try {
    let sid = sessionStorage.getItem('im_conv_session');
    if (!sid) {
      sid = `conv_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
      sessionStorage.setItem('im_conv_session', sid);
    }
    return sid;
  } catch {
    return 'no_session';
  }
}

export function logConversion(payload: ConversionEventPayload): void {
  try {
    // dataLayer push for GTM/GA4
    // @ts-expect-error dataLayer global
    (window.dataLayer = window.dataLayer || []).push({
      event: `conv_${payload.eventType}`,
      placement: payload.placement,
      pillarId: payload.pillarId,
      slug: payload.slug,
      magnet: payload.magnet,
      ctaVariant: payload.ctaVariant,
      ...(payload.extra || {}),
    });
  } catch {
    // ignore
  }

  // Supabase insert (fire-and-forget)
  try {
    void supabase
      .from('conversion_events')
      .insert({
        event_type: payload.eventType,
        placement: payload.placement ?? null,
        pillar_id: payload.pillarId ?? null,
        slug: payload.slug ?? null,
        magnet: payload.magnet ?? null,
        cta_variant: payload.ctaVariant ?? null,
        session_id: getSessionId(),
        page_url: typeof window !== 'undefined' ? window.location.pathname : null,
        extra: payload.extra ?? null,
      })
      .then(() => {})
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .then(undefined, (_err) => {
        // Silent: analytics must never break UX
      });
  } catch {
    // ignore
  }
}

/** Log once per session per key (dedupes impressions). */
const seen = new Set<string>();
export function logConversionOnce(key: string, payload: ConversionEventPayload): void {
  if (seen.has(key)) return;
  seen.add(key);
  logConversion(payload);
}
