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
    <div className="postcard-card p-5 sm:p-7 bg-white border border-sky-border rounded-3xl">
      {/* Title & Introduction */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-ocean-blue">
            {t.chapterZero.badge}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-deep-blue mt-0.5">
            {t.chapterZero.title}
          </h3>
          <p className="text-xs sm:text-sm text-body-blue max-w-xl mt-1">
            {t.chapterZero.subtitle}
          </p>
        </div>
        <span className="text-xs px-2.5 py-1 rounded-full bg-cream text-amber-800 font-bold border border-amber-200 shrink-0 self-start">
          {t.chapterZero.canonLock}
        </span>
      </div>

      {/* Two Postcards Layout (Side-by-side on desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch relative">
        {/* Postcard 1: Chặng 1 - Ban Ngày */}
        <div
          onClick={() => setActiveStage(1)}
          className={`cursor-pointer rounded-2xl p-4 border transition-all duration-300 relative flex flex-col justify-between ${
            activeStage === 1
              ? "bg-amber-50/40 border-sun-gold shadow-card ring-2 ring-sun-gold/30"
              : "bg-white border-sky-border hover:bg-sky-50/40"
          }`}
        >
          <div>
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="font-bold text-amber-800 flex items-center gap-1.5 uppercase tracking-wide">
                <Sun className="w-4 h-4 text-sun-gold" /> {t.chapterZero.stage1Header}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white border border-amber-200 text-amber-900 font-semibold">
                {t.chapterZero.stage1Tag}
              </span>
            </div>

            <h4 className="text-base font-bold text-deep-blue">
              {t.chapterZero.stage1Title}
            </h4>

            {/* Postcard Day Thumbnail */}
            <div className="relative h-48 rounded-xl overflow-hidden my-3 border border-amber-100 shadow-sm">
              <Image
                src="/assets/chapter0_stop1_v1.webp"
                alt={t.chapterZero.stage1Title}
                fill
                className="object-cover object-center"
              />
            </div>

            <ul className="text-xs text-body-blue space-y-1.5 pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0" />
                <span>{t.chapterZero.stage1Item1}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0" />
                <span>{t.chapterZero.stage1Item2}</span>
              </li>
            </ul>
          </div>

          <div className="mt-4 pt-3 border-t border-amber-100/80 text-[11px] font-bold text-ocean-blue flex items-center justify-between">
            <span>{t.chapterZero.stage1Reward}</span>
            <span className="text-xs">→</span>
          </div>
        </div>

        {/* Postcard 2: Chặng 2 - Buổi Tối */}
        <div
          onClick={() => setActiveStage(2)}
          className={`cursor-pointer rounded-2xl p-4 border transition-all duration-300 relative flex flex-col justify-between ${
            activeStage === 2
              ? "bg-indigo-50/50 border-night-violet shadow-card ring-2 ring-night-violet/30"
              : "bg-white border-sky-border hover:bg-sky-50/40"
          }`}
        >
          <div>
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="font-bold text-indigo-900 flex items-center gap-1.5 uppercase tracking-wide">
                <Moon className="w-4 h-4 text-veil-lilac" /> {t.chapterZero.stage2Header}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white border border-indigo-200 text-indigo-900 font-semibold">
                {t.chapterZero.stage2Tag}
              </span>
            </div>

            <h4 className="text-base font-bold text-deep-blue">
              {t.chapterZero.stage2Title}
            </h4>

            {/* Postcard Night Thumbnail */}
            <div className="relative h-48 rounded-xl overflow-hidden my-3 border border-indigo-100 shadow-sm">
              <Image
                src="/assets/chapter0_stop2_v1.webp"
                alt={t.chapterZero.stage2Title}
                fill
                className="object-cover object-center"
              />
            </div>

            <ul className="text-xs text-body-blue space-y-1.5 pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-veil-lilac shrink-0" />
                <span>{t.chapterZero.stage2Item1}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-veil-lilac shrink-0" />
                <span>{t.chapterZero.stage2Item2}</span>
              </li>
            </ul>
          </div>

          <div className="mt-4 pt-3 border-t border-indigo-100/80 text-[11px] font-bold text-night-violet flex items-center justify-between">
            <span>{t.chapterZero.stage2Reward}</span>
            <span className="text-xs">→</span>
          </div>
        </div>
      </div>

      {/* Climax / Ending Reveal Section */}
      <div className="mt-5 p-4 rounded-2xl bg-gradient-to-r from-sky-50 via-cream/40 to-indigo-50/50 border border-sky-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-ocean-blue flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-veil-lilac" /> {t.chapterZero.climaxBadge}
          </span>
          <h5 className="text-sm font-bold text-deep-blue mt-0.5">
            {t.chapterZero.climaxTitle}
          </h5>
          <p className="text-xs text-body-blue mt-0.5 max-w-md">
            {t.chapterZero.climaxDesc}
          </p>
        </div>

        <button
          onClick={() => setRevealedEnding(!revealedEnding)}
          className="px-4 py-2 rounded-full bg-white border border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white transition-all text-xs font-bold shadow-sm shrink-0 flex items-center gap-1.5"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>{revealedEnding ? t.chapterZero.btnHideEnding : t.chapterZero.btnShowEnding}</span>
        </button>
      </div>

      {/* Revealed ending visual preview */}
      {revealedEnding && (
        <div className="mt-4 p-4 rounded-2xl bg-night-indigo text-white border border-night-violet animate-in fade-in duration-300">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative w-full sm:w-48 h-28 rounded-xl overflow-hidden shrink-0 border border-white/20">
              <Image
                src="/assets/act05_ar_phone.png"
                alt="AR Ending Scene"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-veil-lilac/30 text-veil-lilac border border-veil-lilac/40 font-mono">
                {t.chapterZero.endingSceneCode}
              </span>
              <h5 className="text-sm font-bold text-white mt-1">
                {t.chapterZero.endingQuote}
              </h5>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                {t.chapterZero.endingDesc}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Handwritten closing quote as in reference-pic */}
      <div className="mt-6 text-center">
        <p className="font-handwriting text-base sm:text-lg text-body-blue/90 tracking-wide">
          {t.chapterZero.handwrittenFooter}
        </p>
      </div>
    </div>
  );
}
