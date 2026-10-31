---
name: saigon-veilwake-seo-perf
description: >-
  Performance optimization, Core Web Vitals, image handling, and SEO standards for Saigon Veilwake.
  Use whenever optimizing page load speed, optimizing Next.js images, configuring metadata, or verifying production builds.
---

# Saigon: Veilwake — SEO & Web Performance (CWV) Guidelines

This skill defines the technical standards for maintaining lightning-fast performance, zero layout shifts, and search-optimized presence.

---

## 1. Image Optimization (`next/image`)

* **Hero & Above-The-Fold Assets**:
  - Assets appearing in the initial viewport (e.g. `logo_emblem.png`, Hero showcase art) must specify `priority={true}`.
  - This ensures preloading by Next.js and protects Largest Contentful Paint (LCP).

* **Responsive Sizing**:
  - Always provide `sizes` on images utilizing `fill`, e.g.:
    `sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"`
  - Keep responsive aspect ratio containers using `relative w-full h-...` to eliminate Cumulative Layout Shift (CLS).

* **Modern Formats**:
  - Prefer `.webp` or compressed `.png` assets in `/public/assets/`.
  - Maintain asset integrity when adding new brand graphics.

---

## 2. Canvas & Animation Performance (INP & Smooth 60fps)

* **Particle Canvas (`FireflyCanvas.tsx`)**:
  - Particle rendering must always run via `requestAnimationFrame`.
  - Mouse move events must be throttled or tracked via target coordinates to avoid frame drop.
  - Set `pointer-events-none` on the canvas overlay to never intercept touch or click events.

* **Backdrop Filter Throttling**:
  - Modern browsers optimize `backdrop-filter: blur(...)` using GPU acceleration.
  - Ensure parent containers do not create unnecessary deeply nested stacking contexts with duplicate blurs.

---

## 3. SEO & OpenGraph Checklist

* **Metadata Configuration**: Located in `src/app/layout.tsx`.
* **Required Tags**:
  - `title`: Saigon: Veilwake — Khám phá một Sài Gòn bạn chưa từng thấy
  - `description`: Rich narrative summary of the interactive AR travel experience.
  - `keywords`: Targeted cultural, travel, and AR gaming search terms.
  - `openGraph`: Verified title, description, image URL, and site name for social link sharing (Facebook, Zalo, Twitter, LinkedIn).

---

## 4. Production Build Verification

Always verify changes by executing:
```bash
cd landing-page
npm run build
```
Verify that all routes prerender statically with zero runtime warnings or bundle bloat.
