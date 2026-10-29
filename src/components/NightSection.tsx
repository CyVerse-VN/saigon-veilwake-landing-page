"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, ShieldAlert, Camera, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function NightSection() {
  const [showDetails, setShowDetails] = useState(false);
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-16 border-t border-sky-border/60 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ISOLATED NIGHT FEATURE BANNER (ACT 05) */}
        <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#1C2C4E] via-[#223966] to-[#3B3264] text-white p-6 sm:p-10 lg:p-12 shadow-floating border border-indigo-400/30">
          {/* Background Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-veil-lilac/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-ocean-blue/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-amber-200 text-xs font-bold tracking-wider uppercase border border-white/20">
                <Sparkles className="w-3.5 h-3.5 text-veil-lilac" />
                <span>{t.night.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display leading-tight text-white">
                {t.night.title}
              </h2>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl">
                {t.night.description}
              </p>

              {/* 4 Conditions */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-[11px]">
                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15">
                  <span className="text-amber-300 font-bold block">{t.night.cond1Title}</span>
                  <span className="text-slate-300 text-[10px]">{t.night.cond1Desc}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15">
                  <span className="text-amber-300 font-bold block">{t.night.cond2Title}</span>
                  <span className="text-slate-300 text-[10px]">{t.night.cond2Desc}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15">
                  <span className="text-amber-300 font-bold block">{t.night.cond3Title}</span>
                  <span className="text-slate-300 text-[10px]">{t.night.cond3Desc}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15">
                  <span className="text-amber-300 font-bold block">{t.night.cond4Title}</span>
                  <span className="text-slate-300 text-[10px]">{t.night.cond4Desc}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cream text-deep-blue hover:bg-white font-bold text-xs sm:text-sm shadow-md transition-all"
                >
                  <Camera className="w-4 h-4 text-ocean-blue" />
                  <span>{showDetails ? t.night.btnHide : t.night.btnShow}</span>
                </button>

                <span className="text-[11px] text-slate-300 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-teal" /> {t.night.labelPrototype}
                </span>
              </div>

              {/* Safety Copy (Mandatory by Spec) */}
              <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 max-w-xl">
                <ShieldAlert className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <p className="leading-snug">
                  <strong>{t.night.safetyWarningTitle}</strong> {t.night.safetyWarningText}
                </p>
              </div>
            </div>

            {/* Right Visual Box (Night AR Screen) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-floating group">
                <div className="relative h-72 sm:h-96 w-full">
                  <Image
                    src="/assets/act05_notre_dame_night.webp"
                    alt="Notre-Dame Cathedral Night Scene"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 via-transparent to-transparent flex items-end p-4">
                  <div className="text-left">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-veil-lilac/40 text-white font-bold border border-veil-lilac/50 uppercase">
                      {t.night.sealAwakened}
                    </span>
                    <h4 className="text-sm font-bold text-white mt-1">
                      {t.night.notreDameTime}
                    </h4>
                    <p className="text-[11px] text-slate-300 mt-0.5">
                      {t.night.notreDameDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expandable details if opened */}
          {showDetails && (
            <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-200 animate-in fade-in duration-300">
              <div className="p-3 rounded-xl bg-white/10">
                <h5 className="font-bold text-amber-200 mb-1">{t.night.detailNightPillar}</h5>
                <p>{t.night.detailNightPillarDesc}</p>
              </div>
              <div className="p-3 rounded-xl bg-white/10">
                <h5 className="font-bold text-amber-200 mb-1">{t.night.detailArPillar}</h5>
                <p>{t.night.detailArPillarDesc}</p>
              </div>
              <div className="p-3 rounded-xl bg-white/10">
                <h5 className="font-bold text-amber-200 mb-1">{t.night.detailHeritagePillar}</h5>
                <p>{t.night.detailHeritagePillarDesc}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
