"use client";

import { useState } from "react";
import Image from "next/image";
import { Sun, Moon, Sparkles, Eye, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ChapterZeroTimeline() {
  const [activeStage, setActiveStage] = useState<1 | 2 | 3>(1);
  const [revealedEnding, setRevealedEnding] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="space-y-8">
      {/* Title & Introduction (Frameless Editorial Header) */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-deep-blue leading-tight tracking-tight">
            {t.chapterZero.title}
          </h2>
          <p className="text-base sm:text-lg text-body-blue/90 max-w-2xl mt-2 leading-relaxed">
            {t.chapterZero.subtitle}
          </p>
        </div>
        <span className="text-xs px-3.5 py-1.5 rounded-full bg-cream text-amber-900 font-bold border border-amber-200/80 shrink-0 self-start sm:self-auto shadow-xs">
          {t.chapterZero.canonLock}
        </span>
      </div>

      {/* Two Story Stages Layout (Side-by-side on desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch relative">
        {/* Postcard 1: Chặng 1 - Ban Ngày */}
        <div
          onClick={() => setActiveStage(1)}
          className={`cursor-pointer rounded-3xl p-6 sm:p-8 transition-all duration-300 relative flex flex-col justify-between ${
            activeStage === 1
              ? "bg-amber-50/60 dark:bg-amber-950/20 shadow-xl shadow-amber-900/5 ring-2 ring-sun-gold/50"
              : "bg-white/60 dark:bg-slate-900/40 hover:bg-white/80 dark:hover:bg-slate-800/80 shadow-md"
          }`}
        >
          <div>
            <div className="flex items-center justify-between text-xs mb-3">
              <span className="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5 uppercase tracking-wide">
                <Sun className="w-4 h-4 text-sun-gold" /> {t.chapterZero.stage1Header}
              </span>
              <span className="text-[10px] px-2.5 py-1 rounded-full bg-white/80 dark:bg-slate-800 text-amber-900 dark:text-amber-200 font-semibold shadow-xs">
                {t.chapterZero.stage1Tag}
              </span>
            </div>

            <h4 className="text-xl font-bold font-display text-deep-blue">
              {t.chapterZero.stage1Title}
            </h4>

            {/* Stage Thumbnail */}
            <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden my-4 shadow-lg group">
              <Image
                src="/assets/chapter0_stop1_v1.webp"
                alt={t.chapterZero.stage1Title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <ul className="text-xs sm:text-sm text-body-blue space-y-2 pt-1">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                <span>{t.chapterZero.stage1Item1}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                <span>{t.chapterZero.stage1Item2}</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-amber-200/50 text-xs font-bold text-ocean-blue flex items-center justify-between">
            <span>{t.chapterZero.stage1Reward}</span>
            <span className="text-sm">→</span>
          </div>
        </div>

        {/* Postcard 2: Chặng 2 - Buổi Tối */}
        <div
          onClick={() => setActiveStage(2)}
          className={`cursor-pointer rounded-3xl p-6 sm:p-8 transition-all duration-300 relative flex flex-col justify-between ${
            activeStage === 2
              ? "bg-indigo-50/70 dark:bg-indigo-950/30 shadow-xl shadow-indigo-950/10 ring-2 ring-veil-lilac/50"
              : "bg-white/60 dark:bg-slate-900/40 hover:bg-white/80 dark:hover:bg-slate-800/80 shadow-md"
          }`}
        >
          <div>
            <div className="flex items-center justify-between text-xs mb-3">
              <span className="font-bold text-indigo-900 dark:text-indigo-300 flex items-center gap-1.5 uppercase tracking-wide">
                <Moon className="w-4 h-4 text-veil-lilac" /> {t.chapterZero.stage2Header}
              </span>
              <span className="text-[10px] px-2.5 py-1 rounded-full bg-white/80 dark:bg-slate-800 text-indigo-900 dark:text-indigo-200 font-semibold shadow-xs">
                {t.chapterZero.stage2Tag}
              </span>
            </div>

            <h4 className="text-xl font-bold font-display text-deep-blue">
              {t.chapterZero.stage2Title}
            </h4>

            {/* Stage Thumbnail */}
            <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden my-4 shadow-lg group">
              <Image
                src="/assets/chapter0_stop2_v1.webp"
                alt={t.chapterZero.stage2Title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <ul className="text-xs sm:text-sm text-body-blue space-y-2 pt-1">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-veil-lilac shrink-0" />
                <span>{t.chapterZero.stage2Item1}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-veil-lilac shrink-0" />
                <span>{t.chapterZero.stage2Item2}</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-indigo-200/50 text-xs font-bold text-night-violet dark:text-veil-lilac flex items-center justify-between">
            <span>{t.chapterZero.stage2Reward}</span>
            <span className="text-sm">→</span>
          </div>
        </div>
      </div>

      {/* Climax / Ending Reveal Section (Seamless Ambient Banner) */}
      <div className="mt-6 p-6 rounded-3xl bg-gradient-to-r from-sky-50/70 via-cream/40 to-indigo-50/60 dark:from-slate-900/50 dark:to-slate-950/50 backdrop-blur-md shadow-md flex flex-col sm:flex-row items-center justify-between gap-5">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-ocean-blue flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-veil-lilac" /> {t.chapterZero.climaxBadge}
          </span>
          <h5 className="text-base sm:text-lg font-bold font-display text-deep-blue mt-1">
            {t.chapterZero.climaxTitle}
          </h5>
          <p className="text-xs sm:text-sm text-body-blue mt-1 max-w-lg leading-relaxed">
            {t.chapterZero.climaxDesc}
          </p>
        </div>

        <button
          onClick={() => setRevealedEnding(!revealedEnding)}
          className="px-5 py-2.5 rounded-full bg-white dark:bg-slate-800 border border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white dark:border-sky-400 dark:text-sky-300 dark:hover:bg-sky-400 dark:hover:text-slate-950 transition-all text-xs font-bold shadow-xs shrink-0 flex items-center gap-2"
        >
          <Eye className="w-4 h-4" />
          <span>{revealedEnding ? t.chapterZero.btnHideEnding : t.chapterZero.btnShowEnding}</span>
        </button>
      </div>

      {/* Revealed ending visual preview */}
      {revealedEnding && (
        <div className="mt-4 p-6 rounded-3xl bg-night-indigo text-white shadow-2xl shadow-indigo-950/40 animate-in fade-in duration-300">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative w-full sm:w-56 h-36 rounded-2xl overflow-hidden shrink-0 shadow-lg">
              <Image
                src="/assets/act05_ar_phone.png"
                alt="AR Ending Scene"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-1.5">
              <span className="text-[10px] px-2.5 py-1 rounded-full bg-veil-lilac/30 text-veil-lilac font-mono uppercase tracking-wider">
                {t.chapterZero.endingSceneCode}
              </span>
              <h5 className="text-base sm:text-lg font-bold font-display text-white mt-1">
                {t.chapterZero.endingQuote}
              </h5>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.chapterZero.endingDesc}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Handwritten closing quote */}
      <div className="mt-10 text-center">
        <p className="font-handwriting text-2xl sm:text-3xl text-amber-900 dark:text-amber-200 leading-relaxed">
          {t.chapterZero.handwrittenFooter}
        </p>
      </div>
    </div>
  );
}
