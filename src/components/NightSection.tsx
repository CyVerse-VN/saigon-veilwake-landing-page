"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function NightSection() {
  const [showDetails, setShowDetails] = useState(false);
  const { t, language } = useLanguage();
  const { isNight } = useTheme();

  return (
    <section id="lang-kinh-ar" className="py-20 sm:py-28 relative overflow-hidden w-full transition-colors duration-500 scroll-mt-12">
      {/* 
        TWO SEPARATE ATMOSPHERIC COLOR SETS:
        - Day Mode: Seamless luminous daylight transition with subtle dusk twilight & sun-gold orbs
        - Night Mode: Deep midnight obsidian cosmic atmosphere with starlight violet & ocean glow
      */}
      {isNight ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#060B18]/70 via-[#060B18] to-[#060B18]/70 backdrop-blur-3xl -z-10 transition-colors duration-700" />
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-veil-lilac/25 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-ocean-blue/30 rounded-full blur-[140px] pointer-events-none" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-100/40 to-transparent backdrop-blur-2xl -z-10 transition-colors duration-700" />
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-sky-200/35 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-amber-200/25 rounded-full blur-[140px] pointer-events-none" />
        </>
      )}

      {/* Editorial Chapter Waypoint Bridge */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 mb-10 relative z-10">
        <div className={`flex items-center gap-4 text-xs font-semibold uppercase tracking-widest ${
          isNight ? "text-amber-300 drop-shadow-sm" : "text-ocean-blue"
        }`}>
          <span>{t.night.badge}</span>
          <div className={`flex-1 h-px ${
            isNight
              ? "bg-gradient-to-r from-amber-300/40 via-indigo-400/30 to-transparent"
              : "bg-gradient-to-r from-ocean-blue/40 via-sky-300/50 to-transparent"
          }`} />
          <span className={`text-[10px] font-mono font-medium ${
            isNight ? "text-slate-300" : "text-body-blue/80"
          }`}>
            SAU 18:00 · KÝ GIỚI THỨC TỈNH
          </span>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className={`text-3xl sm:text-4xl lg:text-[2.45rem] xl:text-[2.85rem] font-extrabold font-display leading-[1.2] tracking-tight text-balance ${
              isNight ? "text-white drop-shadow-sm" : "text-deep-blue"
            }`}>
              {language === "vi" ? (
                <>
                  <span className="inline lg:whitespace-nowrap">Khi đêm xuống,</span>{" "}
                  <span className="inline lg:whitespace-nowrap">một thế giới khác thức tỉnh</span>
                </>
              ) : (
                t.night.title
              )}
            </h2>

            <p className={`text-base sm:text-lg leading-relaxed max-w-xl ${
              isNight ? "text-slate-200/90" : "text-body-blue/90"
            }`}>
              {t.night.description}
            </p>

            {/* 4 Conditions (Frameless Open Columns with 2 Distinct Color Sets) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {[
                { title: t.night.cond1Title, desc: t.night.cond1Desc },
                { title: t.night.cond2Title, desc: t.night.cond2Desc },
                { title: t.night.cond3Title, desc: t.night.cond3Desc },
                { title: t.night.cond4Title, desc: t.night.cond4Desc },
              ].map((cond, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-2xl transition-all space-y-1 ${
                    isNight
                      ? "bg-white/5 border border-white/10 hover:bg-white/10"
                      : "bg-white/80 border border-sky-200/70 shadow-xs hover:bg-white hover:border-ocean-blue/40 hover:shadow-sm"
                  }`}
                >
                  <span className={`font-bold block text-xs ${
                    isNight ? "text-amber-300" : "text-amber-800"
                  }`}>
                    {cond.title}
                  </span>
                  <span className={`text-[11px] leading-snug block ${
                    isNight ? "text-slate-300" : "text-slate-600 font-medium"
                  }`}>
                    {cond.desc}
                  </span>
                </div>
              ))}
            </div>

            {/* Field Safety Advisory (Matching Framer) */}
            <div className={`p-4 sm:p-5 rounded-2xl border transition-all ${
              isNight
                ? "bg-[#111d2c] border-sky-400/40 text-slate-200"
                : "bg-sky-50/80 border-sky-200 text-body-blue"
            }`}>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className={`text-xs font-bold uppercase tracking-wider ${
                  isNight ? "text-sky-300" : "text-ocean-blue"
                }`}>
                  {t.night.safetyWarningTitle}
                </span>
              </div>
              <p className={`text-xs leading-relaxed ${
                isNight ? "text-slate-300" : "text-slate-600"
              }`}>
                {t.night.safetyWarningText}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm shadow-md transition-all ${
                  isNight
                    ? "bg-amber-100 text-amber-950 hover:bg-white hover:text-slate-950 shadow-lg shadow-black/25 border border-amber-200/60"
                    : "bg-ocean-blue text-white hover:bg-deep-blue shadow-sky-950/15"
                }`}
              >
                <Camera className={`w-4 h-4 ${isNight ? "text-amber-800" : "text-sky-200"}`} />
                <span>{showDetails ? t.night.btnHide : t.night.btnShow}</span>
              </button>

              <span className={`text-xs flex items-center gap-1.5 px-3.5 py-2 rounded-full font-semibold border ${
                isNight
                  ? "bg-white/10 text-slate-200 border-white/10"
                  : "bg-white/80 text-body-blue border-sky-200/80 shadow-xs"
              }`}>
                <CheckCircle className="w-3.5 h-3.5 text-teal" /> {t.night.labelPrototype}
              </span>
            </div>
          </div>

          {/* Right Visual Box (Night AR Screen - Frameless Cinematic Window) */}
          <div className="lg:col-span-5 relative">
            <div className={`relative rounded-3xl sm:rounded-[32px] overflow-hidden group transition-all duration-500 ${
              isNight
                ? "shadow-2xl shadow-indigo-950/80 border border-white/10"
                : "shadow-2xl shadow-sky-950/15 border border-sky-200/60"
            }`}>
              <div className="relative h-80 sm:h-[440px] w-full">
                <Image
                  src="/assets/act05_notre_dame_night.webp"
                  alt="Notre-Dame Cathedral Night Scene"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#060B18]/95 via-[#060B18]/40 to-transparent flex items-end p-6 sm:p-8">
                <div className="text-left space-y-1.5">
                  <span className="text-[10px] px-3 py-1 rounded-full bg-veil-lilac/70 text-white font-bold uppercase tracking-wider inline-block backdrop-blur-sm shadow-xs">
                    {t.night.sealAwakened}
                  </span>
                  <h4 className="text-lg font-bold text-white font-display drop-shadow-sm">
                    {t.night.notreDameTime}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                    {t.night.notreDameDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expandable details if opened */}
        {showDetails && (
          <div className={`mt-12 pt-8 border-t grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs animate-in fade-in duration-300 ${
            isNight ? "border-white/10 text-slate-200" : "border-sky-200/80 text-body-blue"
          }`}>
            <div className={`p-5 rounded-2xl space-y-1.5 transition-all ${
              isNight ? "bg-white/5 border border-white/10 backdrop-blur-md" : "bg-white/85 border border-sky-200/70 shadow-sm backdrop-blur-sm"
            }`}>
              <h5 className={`font-bold text-sm font-display ${
                isNight ? "text-amber-200" : "text-deep-blue"
              }`}>
                {t.night.detailNightPillar}
              </h5>
              <p className={`leading-relaxed ${
                isNight ? "text-slate-300" : "text-slate-600"
              }`}>
                {t.night.detailNightPillarDesc}
              </p>
            </div>
            <div className={`p-5 rounded-2xl space-y-1.5 transition-all ${
              isNight ? "bg-white/5 border border-white/10 backdrop-blur-md" : "bg-white/85 border border-sky-200/70 shadow-sm backdrop-blur-sm"
            }`}>
              <h5 className={`font-bold text-sm font-display ${
                isNight ? "text-amber-200" : "text-deep-blue"
              }`}>
                {t.night.detailArPillar}
              </h5>
              <p className={`leading-relaxed ${
                isNight ? "text-slate-300" : "text-slate-600"
              }`}>
                {t.night.detailArPillarDesc}
              </p>
            </div>
            <div className={`p-5 rounded-2xl space-y-1.5 transition-all ${
              isNight ? "bg-white/5 border border-white/10 backdrop-blur-md" : "bg-white/85 border border-sky-200/70 shadow-sm backdrop-blur-sm"
            }`}>
              <h5 className={`font-bold text-sm font-display ${
                isNight ? "text-amber-200" : "text-deep-blue"
              }`}>
                {t.night.detailHeritagePillar}
              </h5>
              <p className={`leading-relaxed ${
                isNight ? "text-slate-300" : "text-slate-600"
              }`}>
                {t.night.detailHeritagePillarDesc}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
