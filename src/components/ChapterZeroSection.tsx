"use client";

import InteractiveStorybook from "./InteractiveStorybook";
import { useLanguage } from "@/context/LanguageContext";

export default function ChapterZeroSection() {
  const { t, language } = useLanguage();

  return (
    <section id="chapter-zero" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Editorial Chapter Waypoint Bridge */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 mb-8 sm:mb-12">
        <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-ocean-blue dark:text-sky-300 transition-colors duration-300">
          <span>{t.chapterZero.badge}</span>
          <div className="flex-1 h-px bg-gradient-to-r from-ocean-blue/30 via-sky-300/20 to-transparent dark:from-sky-400/40 dark:via-sky-400/10 dark:to-transparent" />
          <span className="text-[10px] text-body-blue/70 dark:text-slate-400 font-mono">
            {t.chapterZero.canonLock}
          </span>
        </div>

        {/* Section Header */}
        <div className="mt-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-deep-blue dark:text-white leading-tight tracking-tight">
              {t.chapterZero.title}
            </h2>
            <p className="text-base sm:text-lg text-body-blue/90 dark:text-slate-300 max-w-2xl mt-2 leading-relaxed">
              {t.chapterZero.subtitle}
            </p>
          </div>
          <span className="text-xs px-3.5 py-1.5 rounded-full bg-amber-100/90 dark:bg-amber-950/60 text-amber-950 dark:text-amber-200 font-bold border border-amber-200/80 dark:border-amber-700/50 shrink-0 self-start md:self-auto shadow-xs">
            {language === "vi" ? "Cuốn Sách Ký Ức · Flipbook" : "Memory Storybook · Flipbook"}
          </span>
        </div>
      </div>

      {/* The Interactive Storybook Centerpiece */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <InteractiveStorybook />
      </div>
    </section>
  );
}
