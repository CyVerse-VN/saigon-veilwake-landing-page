"use client";

import ChapterZeroTimeline from "./ChapterZeroTimeline";
import { useLanguage } from "@/context/LanguageContext";

export default function ChapterZeroSection() {
  const { t } = useLanguage();

  return (
    <section id="chapter-zero" className="py-16 sm:py-24 relative">
      {/* Editorial Chapter Waypoint Bridge */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 mb-10">
        <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-ocean-blue dark:text-sky-300 transition-colors duration-300">
          <span>{t.chapterZero.badge}</span>
          <div className="flex-1 h-px bg-gradient-to-r from-ocean-blue/30 via-sky-300/20 to-transparent dark:from-sky-400/40 dark:via-sky-400/10 dark:to-transparent" />
          <span className="text-[10px] text-body-blue/70 dark:text-slate-400 font-mono">CANON STORY · NARRATIVE QUEST</span>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <ChapterZeroTimeline />
      </div>
    </section>
  );
}

