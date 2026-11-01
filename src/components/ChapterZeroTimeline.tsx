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
        <span className="text-xs px-3.5 py-1.5 rounded-full bg-amber-100/90 dark:bg-amber-950/60 text-amber-950 dark:text-amber-200 font-bold border border-amber-200/80 dark:border-amber-700/50 shrink-0 self-start sm:self-auto shadow-xs">
          {t.chapterZero.canonLock}
        </span>
      </div>

      {/* Two Story Stages Layout (Matching Framer: Distinct Daylight Amber vs Cosmic Obsidian) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch relative">
        {/* Twilight Transition Center Pill (Matching Framer: ☼ 18:00 ☽) */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center pointer-events-none">
          <div className="bg-[#f4eefb] dark:bg-purple-950/80 border border-purple-300/60 dark:border-purple-600/40 px-3.5 py-2 rounded-full shadow-md text-xs font-bold text-purple-900 dark:text-purple-200 tracking-wider">
            ☼ 18:00 ☽
          </div>
        </div>

        {/* Chặng 1: Ban Ngày (Stage 1 - Matching Framer #fff9ec Amber Card) */}
        <div
          onClick={() => setActiveStage(1)}
          className={`cursor-pointer rounded-[28px] p-6 sm:p-7 transition-all duration-300 relative flex flex-col justify-between bg-[#fff9ec] dark:bg-[#1a1c23] border border-amber-500/40 shadow-sm hover:shadow-md ${
            activeStage === 1 ? "ring-2 ring-amber-500/30" : "opacity-95 hover:opacity-100"
          }`}
        >
          <div>
            <div className="flex items-center justify-between text-xs mb-3">
              <span className="font-bold text-amber-900 dark:text-amber-200 flex items-center gap-2 uppercase tracking-wide">
                <span className="w-7 h-7 rounded-full bg-amber-200/80 text-amber-900 dark:bg-amber-900/60 dark:text-amber-300 flex items-center justify-center shrink-0 shadow-xs">
                  <Sun className="w-4 h-4 text-amber-700 dark:text-amber-300" />
                </span>
                {t.chapterZero.stage1Header}
              </span>
              <span className="text-[10px] px-3 py-1 rounded-full bg-amber-200/60 dark:bg-amber-950/60 text-amber-950 dark:text-amber-200 font-semibold border border-amber-400/50 shadow-xs">
                {t.chapterZero.stage1Tag}
              </span>
            </div>

            <h4 className="text-xl sm:text-2xl font-bold font-display text-deep-blue dark:text-amber-100 mt-1">
              {t.chapterZero.stage1Title}
            </h4>

            {/* Stage Thumbnail */}
            <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden my-4 shadow-lg border border-white/80 dark:border-white/10 group">
              <Image
                src="/assets/landmark_central_post_office.jpg"
                alt={t.chapterZero.stage1Title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-white/10 pointer-events-none" />
            </div>

            <ul className="text-xs sm:text-sm text-body-blue/90 dark:text-slate-300 space-y-2.5 pt-1">
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

          <div className="mt-6 p-3 rounded-2xl bg-[#fff0cc] dark:bg-amber-950/50 border border-amber-400/40 text-xs font-bold text-amber-950 dark:text-amber-200 flex items-center justify-between shadow-xs">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-600" />
              {t.chapterZero.stage1Reward}
            </span>
            <span className="text-sm">→</span>
          </div>
        </div>

        {/* Chặng 2: Buổi Tối (Stage 2 - Matching Framer #11182e Cosmic Card) */}
        <div
          onClick={() => setActiveStage(2)}
          className={`cursor-pointer rounded-[28px] p-6 sm:p-7 transition-all duration-300 relative flex flex-col justify-between bg-[#11182e] border border-purple-400/50 shadow-xl shadow-indigo-950/20 text-white hover:shadow-2xl ${
            activeStage === 2 ? "ring-2 ring-purple-400/40" : "opacity-95 hover:opacity-100"
          }`}
        >
          <div>
            <div className="flex items-center justify-between text-xs mb-3">
              <span className="font-bold text-purple-200 flex items-center gap-2 uppercase tracking-wide">
                <span className="w-7 h-7 rounded-full bg-purple-900/70 text-purple-200 flex items-center justify-center shrink-0 shadow-xs border border-purple-400/30">
                  <Moon className="w-4 h-4 text-veil-lilac" />
                </span>
                {t.chapterZero.stage2Header}
              </span>
              <span className="text-[10px] px-3 py-1 rounded-full bg-purple-900/60 text-purple-200 font-semibold border border-purple-400/50 shadow-xs">
                {t.chapterZero.stage2Tag}
              </span>
            </div>

            <h4 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
              {t.chapterZero.stage2Title}
            </h4>

            {/* Stage Thumbnail */}
            <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden my-4 shadow-lg border border-purple-400/40 group">
              <Image
                src="/assets/chapter0_stop2_v1.webp"
                alt={t.chapterZero.stage2Title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/60 via-transparent to-transparent pointer-events-none" />
            </div>

            <ul className="text-xs sm:text-sm text-slate-200 space-y-2.5 pt-1">
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

          <div className="mt-6 p-3 rounded-2xl bg-[#23213d] border border-purple-400/40 text-xs font-bold text-purple-200 flex items-center justify-between shadow-xs">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-veil-lilac" />
              {t.chapterZero.stage2Reward}
            </span>
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
