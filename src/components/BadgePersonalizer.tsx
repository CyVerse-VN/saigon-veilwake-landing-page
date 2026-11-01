"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, CheckCircle, Camera, RefreshCw } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function BadgePersonalizer() {
  const [mode, setMode] = useState<"default" | "personalized">("personalized");
  const { t } = useLanguage();

  return (
    <div className="space-y-6 pt-2">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-ocean-blue dark:text-sky-300">
            {t.badgePersonalizer.badge}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-deep-blue mt-0.5">
            {t.badgePersonalizer.title}
          </h3>
          <p className="text-xs sm:text-sm text-body-blue mt-1 leading-relaxed">
            {t.badgePersonalizer.subtitle}
          </p>
        </div>

        {/* State Toggle Buttons */}
        <div className="flex items-center p-1 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-full border border-white/40 dark:border-white/10 shadow-xs shrink-0">
          <button
            onClick={() => setMode("default")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              mode === "default"
                ? "bg-ocean-blue text-white shadow-xs"
                : "text-body-blue hover:text-deep-blue"
            }`}
          >
            {t.badgePersonalizer.btnDefault}
          </button>
          <button
            onClick={() => setMode("personalized")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
              mode === "personalized"
                ? "bg-ocean-blue text-white shadow-xs"
                : "text-body-blue hover:text-deep-blue"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>{t.badgePersonalizer.btnPersonalized}</span>
          </button>
        </div>
      </div>

      {/* Visual Badge Display Area (Frameless, Organic Surface) */}
      <div className="relative bg-gradient-to-b from-white/70 via-cream/30 to-sky-50/40 dark:from-slate-900/50 dark:to-slate-950/40 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-xl shadow-sky-950/5 flex flex-col md:flex-row items-center justify-center gap-8">
        {/* The Badge Postcard / Photo Snapshot Component */}
        <div className="relative group perspective">
          <div className="w-[250px] sm:w-[275px] bg-white dark:bg-slate-900 rounded-2xl p-3.5 shadow-2xl shadow-slate-950/15 ring-1 ring-black/5 dark:ring-white/10 relative overflow-hidden transition-all duration-300 rotate-[-1deg] group-hover:rotate-0">
            {/* Header Stamp Detail */}
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/10 pb-2 mb-2.5">
              <span className="text-[10px] font-bold text-ocean-blue tracking-wider uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sun-gold" />
                {t.badgePersonalizer.stampHeader}
              </span>
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-sky-50 dark:bg-slate-800 text-ocean-blue dark:text-sky-300 font-mono font-bold border border-sky-200/50 dark:border-white/10">
                {t.badgePersonalizer.stampNo}
              </span>
            </div>

            {/* Badge / Snapshot Photo Display */}
            {mode === "default" ? (
              <div className="relative h-56 rounded-xl overflow-hidden bg-slate-50/80 dark:bg-slate-800/60 flex flex-col items-center justify-center p-3 text-center transition-all">
                <div className="relative w-full h-32 rounded-lg overflow-hidden mb-2">
                  <Image
                    src="/assets/badge_default_v1.webp"
                    alt={t.badgePersonalizer.defaultBadgeTitle}
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-xs font-bold text-deep-blue dark:text-white">
                  {t.badgePersonalizer.defaultBadgeTitle}
                </h4>
                <p className="text-[10px] text-body-blue/80 dark:text-slate-300 mt-0.5">
                  {t.badgePersonalizer.defaultBadgeSubtitle}
                </p>
                <span className="mt-1.5 text-[9px] px-2.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 font-bold border border-teal-200/60 inline-block">
                  {t.badgePersonalizer.restoredTag}
                </span>
              </div>
            ) : (
              /* REAL TRAVEL SNAPSHOT / POLAROID PRINT FEEL */
              <div className="relative bg-slate-50/60 dark:bg-slate-800/50 rounded-xl overflow-hidden transition-all duration-300 p-1">
                {/* Frameless photographic print */}
                <div className="relative h-44 w-full overflow-hidden rounded-lg shadow-xs">
                  <Image
                    src="/assets/badge_user_v1.webp"
                    alt={t.badgePersonalizer.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle photographic sheen */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/20 pointer-events-none" />
                </div>
                {/* Photo paper chin with authentic handwritten caption */}
                <div className="pt-2.5 pb-1 px-1 text-center">
                  <p className="font-handwriting text-base text-deep-blue dark:text-amber-200 font-bold rotate-[-1deg] leading-tight">
                    {t.badgePersonalizer.personalizedQuote}
                  </p>
                  <p className="text-[10px] text-body-blue/70 dark:text-slate-400 font-medium mt-0.5">
                    {t.badgePersonalizer.userCaption}
                  </p>
                </div>
              </div>
            )}

            {/* Bottom Caption */}
            <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-[10px]">
              <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-teal" />{" "}
                {t.badgePersonalizer.verifiedTag}
              </span>
              <button
                onClick={() =>
                  setMode(mode === "default" ? "personalized" : "default")
                }
                className="text-ocean-blue dark:text-sky-300 font-bold flex items-center gap-1 hover:underline"
              >
                <RefreshCw className="w-2.5 h-2.5" />{" "}
                {t.badgePersonalizer.switchView}
              </button>
            </div>
          </div>
        </div>

        {/* Accompanying Explanation & Item: Mảnh Ký Ức */}
        <div className="max-w-xs space-y-4 text-left">
          <div className="space-y-1.5">
            <span className="text-[10px] font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider block">
              {t.badgePersonalizer.itemTag}
            </span>
            <h4 className="text-sm font-bold text-deep-blue">
              {t.badgePersonalizer.itemTitle}
            </h4>
            <p className="text-xs text-body-blue leading-relaxed">
              {t.badgePersonalizer.itemDesc}
            </p>
            <div className="pt-1">
              <span className="text-[10px] text-teal-700 dark:text-teal-300 font-semibold bg-teal-50/80 dark:bg-teal-950/40 px-2.5 py-1 rounded-full inline-block border border-teal-200/50">
                {t.badgePersonalizer.itemNote}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-body-blue/80 pt-2 border-t border-sky-200/40 dark:border-white/10">
            <Camera className="w-4 h-4 text-ocean-blue shrink-0" />
            <span>{t.badgePersonalizer.cameraNote}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
