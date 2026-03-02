/**
 * Motion Hierarchy Config
 *
 * Tier 1 — Hero          : Strong entrance, 0.9s, ease-out, large displacement
 * Tier 2 — Primary       : Medium entrance, 0.7s, ease-out
 * Tier 3 — Support       : Light entrance,  0.5s, ease-out, small displacement
 * Tier 4 — Footer / Nav  : Minimal / no scroll-triggered animation
 *
 * Rules
 * - Only one dominant animation per section.
 * - Nested elements inside an animated parent must NOT re-animate.
 * - Interaction animations (whileHover, whileTap) are exempt from tier rules.
 */

// ─── Base transition objects ───────────────────────────────────────────────
export const t1Transition = { duration: 0.9, ease: "easeOut" };
export const t2Transition = { duration: 0.4, ease: "easeOut" };
export const t3Transition = { duration: 0.5, ease: "easeOut" };
export const t4Transition = { duration: 0.3, ease: "easeOut" };

// ─── Tier 1 — Hero (page-load, no viewport trigger) ───────────────────────
export const t1Initial = { opacity: 0, y: 40 };
export const t1Animate = { opacity: 1, y: 0 };

// ─── Tier 2 — Primary sections (scroll-triggered) ─────────────────────────
export const t2Initial = { opacity: 0, y: 25 };
export const t2WhileInView = { opacity: 1, y: 0 };
export const t2Viewport = { once: true, amount: 0.15 };

// ─── Tier 3 — Support sections (scroll-triggered, subtle) ─────────────────
export const t3Initial = { opacity: 0, y: 15 };
export const t3WhileInView = { opacity: 1, y: 0 };
export const t3Viewport = { once: true };

// ─── Shared interaction presets (all tiers) ────────────────────────────────
export const hoverScale = { scale: 1.08 };
export const tapScale = { scale: 0.93 };

// ─── Typography / Manifesto — opacity only, no y displacement ──────────────
// Use for text-heavy sections where movement would compete with reading.
export const fadeInitial = { opacity: 0 };
export const fadeWhileInView = { opacity: 1 };
