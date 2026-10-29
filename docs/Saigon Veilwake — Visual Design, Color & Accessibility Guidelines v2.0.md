## 1. Design Objective

Design Saigon: Veilwake using a **Premium Immersive Editorial Travel UI** style.

The application should look like an elegant, modern travel discovery product, rather than a traditional fantasy RPG.

Prioritize:

- Beautiful destination photography and immersive maps.
- Bright, elegant, destination-inspired color palettes.
- Refined typography and clear visual hierarchy.
- Minimal floating controls and contextual information panels.
- Subtle glassmorphism and cinematic transitions.
- Excellent readability and accessibility.
- Restrained magical accents for AR and nighttime experiences.

**Visual beauty must never compromise legibility, usability, accessibility, or information hierarchy.**

## 2. Mandatory Design Standards

Follow the established principles and recommendations from:

### A. W3C — WCAG 2.2

Official references:

- WCAG 2.2 Guidelines
- Understanding Contrast — Minimum
- Understanding Non-text Contrast
- Understanding Use of Color
- WCAG Quick Reference

**Requirements:**

- Normal text must achieve at least 4.5:1 contrast.
- Large text must achieve at least 3:1 contrast.
- Essential non-text UI indicators must achieve at least 3:1 contrast against adjacent colors.
- Prefer 7:1 for important body text when practical.
- Never use color as the only means of communicating a state.
- Test disabled, active, selected, hovered, pressed, focused, and error states as applicable.

The WCAG 2.2 AA requirements are mandatory for the final implementation.

### B. Google — Material Design 3

Official references:

- Material Design 3 in Jetpack Compose
- Android Color Design Guidelines
- Google Codelab — Designing with Accessible Colors

**Requirements:**

- Build a semantic color system.
- Use foreground/background color role pairs.
- Define color tokens instead of assigning arbitrary colors independently.
- Maintain consistency across components.
- Ensure interactive elements are recognizable.
- Design separate palettes when necessary for daylight and nighttime interfaces.

### C. Apple — Human Interface Guidelines

Official references:

- Apple HIG — Color
- Apple HIG — Materials

**Requirements:**

- Maintain legibility across different backgrounds.
- Use translucent and blurred surfaces carefully.
- Avoid excessive transparency behind important text.
- Preserve clear separation between foreground controls and background content.
- Use consistent color meanings.
- Consider different lighting environments and device displays.

Do not assume glassmorphism automatically guarantees accessibility.

### D. Nielsen Norman Group — Usability and Visual Hierarchy

Research resources:

- Nielsen Norman Group
- NN/g — Research Articles
- NN/g — Search for Visual Hierarchy
- NN/g — Search for Text Over Images

Study the following concepts:

- Visual hierarchy.
- Visual weight and salience.
- Gestalt grouping principles.
- Proximity, alignment, and whitespace.
- Readability of text over images.
- Progressive disclosure.
- Information density.
- Recognition over recall.

Important content must have stronger visual emphasis than supporting information.

Do not make every element equally prominent.

## 3. Contrast Validation Tools

Use the following tools whenever color contrast or readability is uncertain.

### Primary Tools

**WebAIM Contrast Checker**

https://webaim.org/resources/contrastchecker/

Use for:

- Foreground/background contrast.
- WCAG AA and AAA pass/fail.
- Testing buttons, text, and UI color combinations.

**WebAIM Link Contrast Checker**

https://webaim.org/resources/linkcontrastchecker/

Use to check whether links remain distinguishable from surrounding text.

**Stark — Accessibility Tools**

https://www.getstark.co/

Use for:

- Accessibility reviews within supported design workflows.
- Contrast analysis.
- Accessibility-related design checks.

**Google Lighthouse**

https://developer.chrome.com/docs/lighthouse/overview

Use for automated accessibility audits of implemented websites.

**WAVE Web Accessibility Evaluation Tool**

https://wave.webaim.org/

Use for inspecting accessibility issues on a live or locally accessible web page.

### Important Validation Rule

Automated checkers are helpful but not sufficient.

For text over photographs, gradients, transparent surfaces, maps, and videos, evaluate the **actual rendered/composited background**.

Test the least favorable background regions and relevant interaction states.

If automated evaluation is unavailable, implement a local WCAG contrast-ratio calculation using relative luminance and clearly disclose what was not visually verified.

Never claim WCAG compliance without performing appropriate checks.

## 4. Veilwake Color System

Use the following palette as a starting point.

| Role | Color |
| --- | --- |
| Page Background | #F7FBFF |
| Primary Surface | #FFFFFF |
| Cream Surface | #FFF7E8 |
| Light Sky Surface | #E3F3FC |
| Primary Text | #163B65 |
| Secondary Text | #315977 |
| Primary Action | #14658E |
| Primary Action Text | #FFFFFF |
| Gold Accent | #D9B16F |
| Teal Accent | #37A8B6 |
| Mystical Accent | #927DDB |
| Night Surface | #223966 |
| Night Text | #FFFFFF |

### Color Usage Rules

- Use deep navy for important text on light backgrounds.
- Use white text on sufficiently dark CTA backgrounds.
- Use gold, teal, and violet primarily as accent colors.
- Avoid pale gold text on white backgrounds.
- Avoid light pastel text on pastel surfaces.
- Do not use the same color indiscriminately for interactive buttons and decorative text.
- Verify every foreground/background pair independently.
- Adjust the colors when necessary to meet accessibility standards.

The palette is not permission to use every listed color on every screen.

## 5. Text Over Photography

Veilwake uses immersive photographs of real destinations.

Apply these rules:

1. Prefer positioning important text outside complex photographs.
2. When overlaying text, use protective gradients or readable surfaces.
3. Use semi-opaque cards for destination information.
4. Increase surface opacity when the background becomes visually complex.
5. Avoid relying solely on text shadows or blur.
6. Test with bright daylight, sunset, night photography, and busy maps.
7. Verify contrast after the final image, gradient, and transparency have been combined.

Photography should remain visually impressive without compromising readability.

## 6. Glassmorphism and Floating Controls

Veilwake uses floating navigation controls, destination cards, and bottom sheets.

Follow these principles:

- Glass surfaces must provide sufficient foreground/background separation.
- Important text should use opaque or sufficiently opaque surfaces.
- Floating controls must remain distinguishable on both bright and dark maps.
- Buttons must remain recognizable without relying only on colored backgrounds.
- Essential icons and focus indicators must maintain adequate contrast.
- Avoid excessive borders, shadows, and blur effects.
- Adapt glass opacity and color treatment to the background.

A visually elegant glass surface that makes text difficult to read must be redesigned.

## 7. Visual Hierarchy and Information Architecture

For every screen, identify:

**Primary focus:** The most important content or action.

**Secondary focus:** Supporting information.

**Tertiary focus:** Optional details and decorative elements.

Use:

- Typography scale.
- Font weight.
- Contrast.
- Spacing.
- Alignment.
- Grouping.
- Size and placement.
- Controlled accent colors.

Example for Veilwake Place Details:

1. Destination name and photography.
2. Primary exploration action.
3. Short cultural description.
4. Additional information and secondary actions.

Do not make decorative icons compete visually with destination titles or primary CTAs.

## 8. Context-specific Rules for Veilwake

### Explore Map

- Preserve map readability.
- Ensure markers are identifiable against different map tiles.
- Use shape, icon, and label in addition to color.
- Keep destination cards readable over detailed maps.
- Protect GPS and navigation controls from visual clutter.

### Ký Môn Navigation

- The central circular button must be distinguishable from surrounding controls.
- The expanded four-item menu must use readable icons and labels.
- Ensure sufficient contrast between the menu overlay and the underlying map.
- Keep focus and selection states accessible.

### NPC Companion

- Conversation bubbles must remain readable.
- Use a clearly distinguished appearance for companion messages and user selections.
- Avoid decorative gradients behind long dialogue.
- Maintain consistent typography.

### Journeys and Journal

- Use an editorial travel layout.
- Separate headings, descriptions, progress, and evidence clearly.
- Avoid excessive gamification visual patterns.
- Keep reading comfort as the priority.

### Memory Passport

- Present badges as premium travel souvenirs.
- Maintain readable location names and dates.
- Distinguish unlocked and locked badges using iconography or labels as well as color.
- Do not place essential information over highly detailed badge artwork without protection.

### AR Experiences

- Use minimal HUD.
- Keep guidance legible over live camera content.
- Adapt overlays for dark and bright surroundings.
- Prioritize safety instructions and tracking feedback.
- Avoid obscuring the real environment with unnecessary UI.

## 9. Mandatory AI Research Workflow

You must actively consult the design references above when necessary.

Do not merely list the links as documentation.

Follow this process:

### Step 1 — Research

Before finalizing major UI elements, identify the relevant principles.

Consult the official references for accessibility, color roles, material legibility, and visual hierarchy.

If web browsing is available, retrieve the relevant guidance.

If browsing is unavailable, disclose that limitation and apply the verified rules already included in this specification.

### Step 2 — Design

Create the interface using semantic design tokens and clear visual hierarchy.

Maintain the Immersive Editorial Travel style.

### Step 3 — Validate

Inspect:

- Text contrast.
- Icon and control contrast.
- Foreground/background separation.
- Image overlays.
- Glass surfaces.
- Visual hierarchy.
- Mobile responsiveness.
- Day and night variants.
- Focus and interaction states.

### Step 4 — Fix

If an element fails accessibility or legibility checks:

- Adjust the foreground color.
- Adjust the surface/background color.
- Increase opacity.
- Modify gradients.
- Improve spacing or typography.
- Relocate text away from complex image regions.

Retest the corrected element.

### Step 5 — Report

Provide a concise validation report containing:

| Component | Foreground | Background | Ratio | Target | Result |
| --- | --- | --- | --- | --- | --- |
| Example heading | #163B65 | #FFFFFF | Calculated | 4.5:1 | Pass/Fail |
| Example button | #FFFFFF | #14658E | Calculated | 4.5:1 | Pass/Fail |

Include only ratios that were actually calculated or verified.

Report unresolved issues separately.

## 10. Final Acceptance Criteria

The design is acceptable only when:

- The visual style remains premium, cinematic, and travel-focused.
- Major text and controls meet applicable WCAG 2.2 AA contrast requirements.
- Visual hierarchy is immediately understandable.
- Glassmorphism does not compromise readability.
- Important text remains readable over photography and maps.
- Day and nighttime screens are both usable.
- Color is not the sole indicator of state.
- All major interactive states are distinguishable.
- The final design has been reviewed for accessibility.
- Any unverified accessibility claims are explicitly identified.

**Final instruction: Never sacrifice readability, accessibility, or usability for decorative aesthetics. Use the linked sources as authoritative guidance, validate the implementation, and correct problems before finalizing the design.**