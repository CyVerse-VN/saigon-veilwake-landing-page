---
name: saigon-veilwake-i18n
description: >-
  Bilingual internationalization (i18n) workflow and copy guidelines for Saigon Veilwake.
  Use whenever adding, modifying, or auditing UI text, translations, or localization in Vietnamese (VI) and English (EN).
---

# Saigon: Veilwake — Internationalization (i18n) Architecture

This skill governs the bilingual localization system of the Saigon: Veilwake landing page and project dossier.

---

## 1. File Structure & Responsibilities

* **`src/context/LanguageContext.tsx`**:
  - Manages active language state (`vi` | `en`).
  - Persists preference in `localStorage` under `veilwake_lang`.
  - Provides the active dictionary `t` to landing page components.

* **`src/data/translations.ts`**:
  - Primary source of truth for the landing page (`/`).
  - Holds parallel `vi` and `en` object structures containing all acts (Nav, Hero, Problem, Discover, Badges, Night, Chapter Zero, Values, CTA, Footer).

* **`src/data/projectTranslations.ts`**:
  - Source of truth for the comprehensive project dossier page (`/project`).
  - Contains full technical scope, gameplay loop, competitive edge, and roadmap.

---

## 2. Hard Rules for Code Modifications

1. **Never Hardcode Text**:
   - Every string displayed to the user must originate from `useLanguage().t` or `projectTranslations[language]`.
   - Never write static raw strings directly into JSX elements.

2. **Mirror Completeness**:
   - When adding a new key under `vi`, you **must** simultaneously add the corresponding key under `en` with identical nesting.
   - Run type checks (`npm run build`) to ensure TypeScript validates complete key parity.

3. **Tone of Voice Guidelines**:
   * **Vietnamese (VI)**:
     - Poetic, cultural, nostalgic, evocative Sài Gòn travel journal.
     - Key terms: *Ký Giới* (The Veil), *Kỳ Môn* (Veil Gate), *Đồng hồ Ký Ức* (Memory Watch), *Chương 0: Lá thư chưa từng đến*.
   * **English (EN)**:
     - Immersive editorial travel narrative, evocative cultural discovery, and urban AR intrigue.
     - Key terms: *The Veil*, *Veil Gate*, *Chrono-Compass*, *Chapter Zero: The Undelivered Letter*.

---

## 3. Verification Protocol

When creating or modifying text:
1. Check `src/data/translations.ts` or `src/data/projectTranslations.ts` for existing keys.
2. If adding new keys, add them to both `vi` and `en` objects.
3. Verify that the UI updates correctly in both languages when toggled via the language switch.
4. Run `npm run build` in `landing-page` to guarantee zero missing key errors.
