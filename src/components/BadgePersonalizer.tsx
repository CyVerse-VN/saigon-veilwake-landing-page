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
          <span className="text-[11px] font-bold uppercase tracking-wider text-ocean-blue">
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
        {/* The Badge Postcard Component */}
        <div className="relative group perspective">
          <div className="postcard-paper w-[240px] sm:w-[270px] bg-white rounded-2xl p-3 shadow-floating border border-amber-200/60 relative overflow-hidden transition-all duration-300">
            {/* Header Stamp Detail */}
            <div className="flex items-center justify-between border-b border-amber-100 pb-2 mb-2">
              <span className="text-[9px] font-bold text-amber-900 tracking-wider uppercase">
                {t.badgePersonalizer.stampHeader}
              </span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-50 text-amber-900 font-mono font-bold border border-amber-200">
                {t.badgePersonalizer.stampNo}
              </span>
            </div>

            {/* Badge Center Display */}
            {mode === "default" ? (
              <div className="relative h-48 rounded-xl overflow-hidden bg-cream/70 border border-amber-200/50 flex flex-col items-center justify-center p-2 text-center">
                <div className="relative w-full h-32 rounded-lg overflow-hidden mb-1">
                  <Image
                    src="/assets/badge_default_v1.webp"
                    alt={t.badgePersonalizer.defaultBadgeTitle}
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-xs font-bold text-slate-900">
                  {t.badgePersonalizer.defaultBadgeTitle}
                </h4>
                <p className="text-[10px] text-slate-600 mt-0.5">
                  {t.badgePersonalizer.defaultBadgeSubtitle}
                </p>
                <span className="mt-1 text-[9px] px-2 py-0.5 rounded-full bg-teal-50 text-teal-800 font-bold border border-teal-200">
                  {t.badgePersonalizer.restoredTag}
                </span>
              </div>
            ) : (
              <div className="relative h-48 rounded-xl overflow-hidden bg-sky-100/50 border border-amber-200/80 shadow-inner">
                {/* User photo inside the souvenir frame */}
                <Image
                  src="/assets/badge_user_v1.webp"
                  alt={t.badgePersonalizer.title}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-deep-blue/80 via-deep-blue/40 to-transparent p-2 text-white text-center">
                  <span className="text-[10px] font-handwriting text-amber-200 block text-sm">
                    {t.badgePersonalizer.personalizedQuote}
                  </span>
                  <span className="text-[9px] text-slate-200 font-medium">
                    {t.badgePersonalizer.userCaption}
                  </span>
                </div>
              </div>
            )}

            {/* Bottom Caption */}
            <div className="mt-2.5 pt-2 border-t border-amber-100 flex items-center justify-between text-[10px]">
              <span className="font-semibold text-slate-800 flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-teal" />{" "}
                {t.badgePersonalizer.verifiedTag}
              </span>
              <button
                onClick={() =>
                  setMode(mode === "default" ? "personalized" : "default")
                }
                className="text-ocean-blue font-bold flex items-center gap-0.5 hover:underline"
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
