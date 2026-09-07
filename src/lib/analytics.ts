export const GA_MEASUREMENT_ID = "G-2HXY01ESEN";
export const GTM_CONTAINER_ID = "GTM-53XBZ7VP";

/**
 * Fires a GA4 event via gtag.js. Safe to call even if analytics hasn't
 * loaded yet (e.g. blocked by an ad blocker, or firing before the script
 * finishes) — it just no-ops instead of throwing.
 */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}
