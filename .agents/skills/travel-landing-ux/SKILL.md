---
name: travel-landing-ux
description: >-
  Travel and cultural tourism landing page UX architecture, sensory copywriting, interactive itinerary curation,
  and conversion optimization standards for Saigon: Veilwake.
---

# Travel & Cultural Tourism Landing Page UX Guidelines

This skill guides the design, copy, and interaction patterns for **Saigon: Veilwake**, transforming a static web presence into an emotionally immersive, high-converting cultural travel journey.

---

## 1. The 9-Step Tourism Conversion Funnel

Travel decisions require high emotional resonance and deep trust. Every visitor should be guided through a clear psychological progression:

```
[1. Sensory Hero & Moods] ➔ [2. Social Proof / Authority] ➔ [3. Empathy Bridge (Beyond Sightseeing)]
         ↓
[4. Interactive Map & Itinerary] ➔ [5. Night Tourism Pivot] ➔ [6. Narrative Chapter (Immersion)]
         ↓
[7. Digital Badges & Traveler Proof] ➔ [8. Teaser Video & Core Values] ➔ [9. Low-Friction Action CTA]
```

1. **Sensory Hero Immersion (Above the Fold)**:
   - Deliver the visual and auditory atmosphere of the destination within 3 seconds.
   - Pair an emotional headline with a **Quick Travel Mood Filter** (e.g. Di sản ban ngày, Hẻm nhỏ hoài niệm, Đêm phố thị Ký Giới).
   - Integrate instant micro-trust signals (*e.g., "1,200+ lữ khách đã giải mã thành phố"*).

2. **Authority & Social Proof**:
   - Surface traveler badges, media recognition, or cultural endorsement early to dissolve hesitation.

3. **The Empathy Bridge (The Problem)**:
   - Validate the frustration of generic, superficial mass tourism ("du lịch cưỡi ngựa xem hoa").
   - Position the product as a local insider and cultural companion.

4. **Interactive Map & Curated Route**:
   - Provide concrete spatial context: coordinates, estimated duration, best time to visit, and insider tips.
   - Allow filtering by vibe, district, or time of day.

5. **Night Tourism & Twilight Economy (Đặc sản Đêm Sài Gòn)**:
   - Sài Gòn is a 24-hour city. The night transition must showcase night markets, street food alleys, and nocturnal legends (Ký Giới).

6. **Narrative & Cultural Chapter**:
   - Deepen emotional engagement with serialized stories, historical tidbits, and atmospheric excerpts.

7. **Gamified Passport & Traveler Badges**:
   - Tap into exploration motivation: collector stamps, achievement badges, and interactive passport previews.

8. **Showcase Media & Core Mission**:
   - Authentic video previews and clear preservation values (sustainable tourism, local heritage preservation).

9. **Frictionless Action CTA**:
   - Actionable microcopy: *"Bắt đầu hành trình"*, *"Lưu bản đồ khám phá"*, *"Giải mã Sài Gòn"* (avoid vague *"Gửi"* or *"Bấm vào đây"*).
   - Low barrier to entry: no upfront payment hurdles, instant access.

---

## 2. Sensory Copywriting ("Show, Don't Just Tell")

Generic AI copywriting ruins travel immersion. Adhere to these copywriting rules:

| ❌ Generic / Overused AI Copy | ✅ Sensory & Evocative Travel Copy |
| :--- | :--- |
| "Khám phá vẻ đẹp khó quên của Sài Gòn." | "Hít hà mùi khói than nướng thịt đầu con hẻm nhỏ, lắng nghe tiếng muỗng nhôm gõ vào ly cà phê vợt lúc tinh mơ." |
| "Trải nghiệm cuộc sống về đêm sôi động." | "Khi phố thị lên đèn, sải bước qua những biển hiệu neon rực rỡ và đắm mình trong huyền tích Ký Giới bí ẩn." |
| "Đến với các địa điểm nổi tiếng nhất." | "Bước chân qua bậc thềm rêu phong của Dinh Gia Long, nơi từng viên gạch son còn kể chuyện thời gian." |

### Bilingual Rules (i18n):
- Keep cultural names authentic: *Cà phê vợt, Cà phê bệt, Chợ Lớn, Hẻm, Ký Giới*.
- In English copy, preserve Vietnamese names with poetic English context (e.g., *"Saigon's historic net-filter coffee (cà phê vợt)"*).
- Never hardcode strings directly in TSX components; always register pairs in `translations.ts` and `projectTranslations.ts`.

---

## 3. Interactive Route & Location Metadata Checklist

Every featured destination card or map pin must supply:
- **Tên địa điểm (Place Name)**: Song ngữ rõ ràng.
- **Tọa độ / Quận (District / Coordinates)**: Giúp du khách dễ hình dung cung đường.
- **Thời gian lý tưởng (Best Time of Day)**: Sáng sớm (06:00 - 08:30), Hoàng hôn (17:00 - 18:30), Đêm muộn (20:00 - 00:00).
- **Mẹo bản địa (Local Insider Tip)**: 1 câu hướng dẫn thiết thực (ví dụ: *"Nên đi xe máy hoặc đi bộ để dễ len qua ngõ hẹp"*).
- **Thẻ thể loại (Vibe / Category Tag)**: Di sản, Ẩm thực, Huyền bí, Thư giãn.

---

## 4. Visual Media & Performance (Core Web Vitals)

1. **Hero Visual Protection (LCP)**:
   - Use Next.js `<Image priority={true} ... />` with explicit `sizes`.
   - Never block the hero render with heavy uncompressed video on mobile.
2. **Smooth Glassmorphism**:
   - Adhere to `saigon-veilwake-design-system`: maintain `backdrop-filter: blur(24px) saturate(180%)` on `.postcard-card` and `.glass-mirror`.
   - Never paint opaque white backgrounds on travel cards.
3. **Touch Targets**:
   - Minimum 44x44px for all mobile interactive pins, mood pills, and audio controls.

