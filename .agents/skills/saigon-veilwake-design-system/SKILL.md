---
name: saigon-veilwake-design-system
description: >-
  Design system, color palette, typography, accessibility, and Glassmorphism styling rules for Saigon Veilwake.
  Use whenever modifying CSS, Tailwind classes, components, theme styling (Day/Night mode), or UI cards.
---

# Saigon: Veilwake — Design System & Glassmorphism Guidelines

This skill guides the implementation of UI components for the Saigon: Veilwake web experience, strictly adhering to the **Crystalline Glassmorphism** (Day) and **Obsidian Starlight Glassmorphism** (Night) aesthetic.

---

## 1. Core Principles

1. **Continuous Canvas (Liền mạch)**:
   - The root canvas background is set globally on `body` with `background-attachment: fixed`.
   - Never place solid opaque backgrounds (`bg-white`, solid dark colors) or hard dividing lines (`border-t`) on `<section>` wrappers.
   - All sections must remain transparent so the continuous background and ambient light orbs flow naturally from top to bottom.

2. **True Glassmorphism (Kính gương phản chiếu)**:
   - High translucency (`0.50 - 0.58`) so background light orbs and fireflies are visibly diffused.
   - Deep optical blur (`backdrop-filter: blur(24px) saturate(180%)`).
   - Specular top bevel highlight (`box-shadow: inset 0 1.5px 0 0 rgba(255, 255, 255, 0.95)`).
   - Crisp crystalline rim border.

3. **Ambient Light Blobs (`AmbientBackground.tsx`)**:
   - Fixed at `-z-10` with soft colorful blurs. As the user scrolls, cards glide over these orbs, causing the colors to refract dynamically through the glass.

---

## 2. Token & Styling Reference

### A. Daylight Theme (Crystalline Pearl Glass)

* **Card Class**: `.postcard-card`, `.glass-mirror`, `.glass-card`
* **Card Surface**:
  ```css
  background: rgba(255, 255, 255, 0.58) !important;
  backdrop-filter: blur(24px) saturate(180%) !important;
  border: 1px solid rgba(255, 255, 255, 0.8) !important;
  box-shadow: 
    inset 0 1.5px 0 0 rgba(255, 255, 255, 0.95),
    inset 0 -1px 0 0 rgba(255, 255, 255, 0.35),
    0 20px 42px -6px rgba(20, 101, 142, 0.09),
    0 4px 12px -2px rgba(20, 101, 142, 0.04) !important;
  border-radius: 1.5rem;
  ```
* **Inner Sub-Panels**:
  ```css
  .bg-white, .glass-sub-panel {
    background: rgba(255, 255, 255, 0.5) !important;
    backdrop-filter: blur(16px) saturate(170%) !important;
    border: 1px solid rgba(255, 255, 255, 0.65) !important;
  }
  ```
* **Typography & Palette**:
  - Headings: `--deep-blue: #163B65` (WCAG AAA)
  - Body: `--body-blue: #315977` (WCAG AA)
  - Primary Accent: `--ocean-blue: #14658E`
  - Heritage Accent: `--sun-gold: #E7AA59`
  - River Teal: `--teal: #37A8B6`

---

### B. Night Theme (Ký Giới — Obsidian Starlight Glass)

* **Card Surface**:
  ```css
  html.night-mode .postcard-card,
  html.night-mode .glass-mirror {
    background: rgba(12, 20, 42, 0.52) !important;
    backdrop-filter: blur(26px) saturate(200%) !important;
    border: 1px solid rgba(255, 255, 255, 0.16) !important;
    box-shadow: 
      inset 0 1.5px 0 0 rgba(255, 255, 255, 0.28),
      inset 0 -1px 0 0 rgba(99, 102, 241, 0.25),
      0 20px 48px -6px rgba(0, 0, 0, 0.65),
      0 0 20px -2px rgba(99, 102, 241, 0.14) !important;
  }
  ```
* **Typography & Palette**:
  - Headings: `#FFFFFF` with soft starlight glow
  - Body: `#CBD5E1` (crisp silver, high contrast)
  - Neon Accent: `#38BDF8` (starlight cyan)
  - Moonlight Gold: `#FDE68A` (warm moonlit cursive quotes)
  - Ký Giới Violet: `#C084FC` / `#927DDB`

---

## 3. Typography Stack

* **Body Text**: `var(--font-be-vietnam)` — Be Vietnam Pro (Latin + Vietnamese subsets)
* **Display / Editorial Headings**: `var(--font-playfair)` — Playfair Display
* **Handwritten Quotes**: `var(--font-caveat)` — Caveat (`.font-handwriting`)

---

## 4. Accessibility Checklist (WCAG 2.2 AA)

1. Verify text contrast on glass surfaces:
   - Minimum **4.5:1** contrast for regular body text.
   - Minimum **3.0:1** contrast for large titles and interactive controls.
2. Focus indicators:
   - Ensure `:focus-visible` maintains a clear 2px outline offset.
