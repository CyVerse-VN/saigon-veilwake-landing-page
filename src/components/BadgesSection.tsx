"use client";

import BadgePersonalizer from "./BadgePersonalizer";
import InteractiveAppPreview from "./InteractiveAppPreview";
import { useLanguage } from "@/context/LanguageContext";

export default function BadgesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 relative">
      {/* Editorial Chapter Waypoint Bridge */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 mb-10">
        <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-ocean-blue dark:text-sky-300 transition-colors duration-300">
          <span>{t.badges.badge}</span>
          <div className="flex-1 h-px bg-gradient-to-r from-ocean-blue/30 via-sky-300/20 to-transparent dark:from-sky-400/40 dark:via-sky-400/10 dark:to-transparent" />
          <span className="text-[10px] text-body-blue/70 dark:text-slate-400 font-mono">POSTCARD MEMORIES & PASSPORT</span>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* LEFT COLUMN: BADGES & MEMORIES (ACT 04 + INT-03) */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-deep-blue leading-tight tracking-tight">
              {t.badges.title}
            </h2>
            <p className="text-base sm:text-lg text-body-blue/90 leading-relaxed max-w-2xl">
              {t.badges.description}
            </p>

            {/* Embedded Interactive Badge Personalizer (INT-03) */}
            <BadgePersonalizer />
          </div>

          {/* RIGHT COLUMN: INTERACTIVE MOBILE APP PREVIEW (INT-02) */}
          <div className="lg:col-span-5 space-y-6">
            <InteractiveAppPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
