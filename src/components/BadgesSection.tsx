"use client";

import BadgePersonalizer from "./BadgePersonalizer";
import InteractiveAppPreview from "./InteractiveAppPreview";
import { useLanguage } from "@/context/LanguageContext";

export default function BadgesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-16 border-t border-sky-border/60 bg-gradient-to-b from-sky-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* LEFT COLUMN: BADGES & MEMORIES (ACT 04 + INT-03) */}
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold text-ocean-blue tracking-wider uppercase">
              {t.badges.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-deep-blue leading-snug">
              {t.badges.title}
            </h2>
            <p className="text-sm sm:text-base text-body-blue leading-relaxed">
              {t.badges.description}
            </p>

            {/* Embedded Interactive Badge Personalizer (INT-03) */}
            <BadgePersonalizer />
          </div>

          {/* RIGHT COLUMN: INTERACTIVE MOBILE APP PREVIEW (INT-02) */}
          <div className="lg:col-span-5 space-y-4">
            <InteractiveAppPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
