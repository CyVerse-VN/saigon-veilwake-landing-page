# Saigon: Veilwake — Landing Page Engineering Rules

This directory contains the Next.js 14 landing page and project dossier for **Saigon: Veilwake**.
Any agent operating in this codebase must strictly adhere to the following rules:

---

## 1. Aesthetic & Glassmorphism Guidelines
* **Continuous Canvas**: The background is a seamless, continuous flow defined on `body` with fixed ambient orbs (`AmbientBackground.tsx`). Never put solid opaque backgrounds (`bg-white` or hard dark panels) on `<section>` tags.
* **Glassmorphism**: All cards and elevated panels use `.postcard-card` / `.glass-mirror` with `backdrop-filter: blur(24px) saturate(180%)`, high translucency (50-58%), specular top edge highlights (`inset 0 1.5px 0 0 rgba(255, 255, 255, 0.95)`), and crystalline borders.
* **Day & Night Harmony**:
  - Day: Crystalline pearl glass over ambient sky gradients with deep blue headings (`#163B65`) and body (`#315977`).
  - Night: Obsidian starlight glass over midnight cosmic gradients with white headings (`#FFFFFF`), starlight cyan (`#38BDF8`), and warm golden cursive accents (`#FDE68A`).
  - Fireflies: Interactive canvas on `z-20` with magnetic cursor attraction during Night mode.

---

## 2. Bilingual Translation Rules (i18n)
* **Never hardcode raw text**: Always retrieve copy through `useLanguage().t` (landing page) or `projectTranslations[language]` (`/project`).
* **Full Parity**: Any new translation key added to `vi` must have an identical, high-quality translation in `en` within `src/data/translations.ts` or `src/data/projectTranslations.ts`.

---

## 3. Accessibility & Contrast (WCAG 2.2 AA)
* Minimum 4.5:1 contrast ratio for body copy against glass backgrounds.
* Focus rings (`:focus-visible`) must remain crisp with a 2px outline and 2px offset.
* Interactive buttons must have clear hover and active states.

---

## 4. Build & Type Safety
* Before concluding work on any component or page, run `npm run build` from the `landing-page` directory to ensure static prerendering succeeds with 0 TypeScript or lint errors.

