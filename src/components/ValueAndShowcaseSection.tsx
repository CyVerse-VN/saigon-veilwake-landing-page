"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Play,
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
  Landmark,
  Moon,
  Cpu,
  X,
  Volume2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useAudio } from "@/context/AudioContext";

export default function ValueAndShowcaseSection() {
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);
  const { t } = useLanguage();
  const { pauseForVideo, resumeFromVideo } = useAudio();

  return (
    <section id="video-demo" className="py-16 sm:py-24 relative">
      {/* Editorial Chapter Waypoint Bridge */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 mb-10">
        <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-ocean-blue/70">
          <span>{t.values.badge}</span>
          <div className="flex-1 h-px bg-gradient-to-r from-ocean-blue/30 via-sky-300/20 to-transparent" />
          <span className="text-[10px] text-body-blue/60 font-mono">BẠCH THƯ DỰ ÁN & GAMEPLAY DEMO</span>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 space-y-16">
        {/* TOP: 3 TOURISM VALUES (ACT 07) */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-deep-blue leading-tight tracking-tight">
            {t.values.title}
          </h2>
          <p className="text-base sm:text-lg text-body-blue/90 leading-relaxed">
            {t.values.subtitle}
          </p>
        </div>

        {/* 3 Value Pillars Grid (Frameless Editorial Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl shadow-xl shadow-sky-950/5 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-800 dark:text-amber-300 flex items-center justify-center mb-5 shadow-xs transition-transform group-hover:scale-110">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-deep-blue">{t.values.pillar1Title}</h3>
              <p className="text-xs sm:text-sm text-body-blue mt-2 leading-relaxed">
                {t.values.pillar1Desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-sky-200/40 dark:border-white/10 text-xs font-semibold text-teal-700 dark:text-teal-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal" /> {t.values.pillar1Check}
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl shadow-xl shadow-sky-950/5 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 flex items-center justify-center mb-5 shadow-xs transition-transform group-hover:scale-110">
                <Moon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-deep-blue">{t.values.pillar2Title}</h3>
              <p className="text-xs sm:text-sm text-body-blue mt-2 leading-relaxed">
                {t.values.pillar2Desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-sky-200/40 dark:border-white/10 text-xs font-semibold text-teal-700 dark:text-teal-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal" /> {t.values.pillar2Check}
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl shadow-xl shadow-sky-950/5 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-500/15 text-teal-700 dark:text-teal-300 flex items-center justify-center mb-5 shadow-xs transition-transform group-hover:scale-110">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-deep-blue">{t.values.pillar3Title}</h3>
              <p className="text-xs sm:text-sm text-body-blue mt-2 leading-relaxed">
                {t.values.pillar3Desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-sky-200/40 dark:border-white/10 text-xs font-semibold text-teal-700 dark:text-teal-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal" /> {t.values.pillar3Check}
            </div>
          </div>
        </div>

        {/* BOTTOM: VIDEO DEMO & PROGRESS STATUS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pt-4">
          {/* VIDEO PLAYER CARD (7/12) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-ocean-blue uppercase tracking-wider block">
                  {t.values.videoBadge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-deep-blue mt-0.5">{t.values.videoTitle}</h3>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-sky-100 text-ocean-blue font-bold border border-sky-200/60">
                {t.values.videoDuration}
              </span>
            </div>

            <div className="relative rounded-3xl sm:rounded-[32px] overflow-hidden shadow-2xl shadow-sky-950/20 bg-slate-900 group">
              <div className="relative h-72 sm:h-96 lg:h-[420px] w-full">
                <Image
                  src="/assets/act07_video_thumb.png"
                  alt="Video Gameplay Thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Play Overlay */}
              <div className="absolute inset-0 bg-deep-blue/40 flex items-center justify-center">
                <button
                  onClick={() => {
                    setIsPlayingDemo(true);
                    pauseForVideo();
                  }}
                  className="w-16 h-16 rounded-full bg-white/95 text-ocean-blue hover:bg-ocean-blue hover:text-white transition-all flex items-center justify-center shadow-2xl ring-8 ring-white/30 group-hover:scale-110"
                >
                  <Play className="w-7 h-7 ml-1" />
                </button>
              </div>

              {/* Bottom Video Bar */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-center justify-between text-white text-xs">
                <span>{t.values.videoCaption}</span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md">{t.values.videoLabel}</span>
              </div>
            </div>

            {/* Sub-thumbnails (Frameless Minimal Pills) */}
            <div className="grid grid-cols-4 gap-2 text-center text-[10px] text-body-blue">
              <div className="p-2 rounded-xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm shadow-xs">
                <span className="font-bold text-deep-blue block">{t.values.tabExplore}</span>
                <span className="text-[9px] text-body-blue/70">{t.values.tabExploreSub}</span>
              </div>
              <div className="p-2 rounded-xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm shadow-xs">
                <span className="font-bold text-deep-blue block">{t.values.tabBadge}</span>
                <span className="text-[9px] text-body-blue/70">{t.values.tabBadgeSub}</span>
              </div>
              <div className="p-2 rounded-xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm shadow-xs">
                <span className="font-bold text-deep-blue block">{t.values.tabSeal}</span>
                <span className="text-[9px] text-body-blue/70">{t.values.tabSealSub}</span>
              </div>
              <div className="p-2 rounded-xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm shadow-xs">
                <span className="font-bold text-deep-blue block">{t.values.tabScene}</span>
                <span className="text-[9px] text-body-blue/70">{t.values.tabSceneSub}</span>
              </div>
            </div>
          </div>

          {/* PROGRESS CHECKLIST (5/12 - Frameless Editorial Column) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[11px] font-bold text-ocean-blue uppercase tracking-wider block">
                {t.values.progressBadge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-deep-blue mt-1 leading-snug">
                {t.values.progressTitle}
              </h3>
              <p className="text-sm sm:text-base text-body-blue mt-1.5 leading-relaxed">
                {t.values.progressSubtitle}
              </p>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="p-4 rounded-2xl bg-teal-50/70 dark:bg-teal-950/30 transition-all hover:shadow-sm">
                <div className="flex items-center justify-between font-bold text-teal-800 dark:text-teal-300">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal" /> {t.values.pDoneTitle}
                  </span>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-teal-200/80 dark:bg-teal-900 text-teal-900 dark:text-teal-100 font-bold">
                    100%
                  </span>
                </div>
                <p className="text-body-blue text-xs mt-1.5 leading-relaxed">
                  {t.values.pDoneDesc}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 transition-all hover:shadow-sm">
                <div className="flex items-center justify-between font-bold text-amber-800 dark:text-amber-300">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-600" /> {t.values.pTestingTitle}
                  </span>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-amber-200/80 dark:bg-amber-900 text-amber-900 dark:text-amber-100 font-bold">
                    Active
                  </span>
                </div>
                <p className="text-body-blue text-xs mt-1.5 leading-relaxed">
                  {t.values.pTestingDesc}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-sky-50/70 dark:bg-sky-950/30 transition-all hover:shadow-sm">
                <div className="flex items-center justify-between font-bold text-ocean-blue dark:text-sky-300">
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-ocean-blue" /> {t.values.pRoadmapTitle}
                  </span>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-sky-200/80 dark:bg-sky-900 text-deep-blue dark:text-sky-100 font-bold">
                    Roadmap
                  </span>
                </div>
                <p className="text-body-blue text-xs mt-1.5 leading-relaxed">
                  {t.values.pRoadmapDesc}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/project"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-ocean-blue text-white hover:bg-deep-blue transition-all font-semibold text-sm shadow-card hover:shadow-floating"
              >
                <span>{t.values.btnProjectDossier}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* MOCK VIDEO DEMO MODAL */}
        {isPlayingDemo && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-white/20 rounded-3xl max-w-3xl w-full p-4 sm:p-6 text-white relative animate-in zoom-in-95 duration-200 shadow-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500 animate-ping inline-block" />
                  <h4 className="text-sm font-bold">{t.values.modalTitle}</h4>
                </div>
                <button
                  onClick={() => {
                    setIsPlayingDemo(false);
                    resumeFromVideo();
                  }}
                  className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Simulated Screen */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black flex flex-col items-center justify-center text-center p-6 border border-white/10">
                <Image
                  src="/assets/act05_notre_dame_night.webp"
                  alt="Gameplay video demo"
                  fill
                  className="object-cover opacity-70"
                />
                <div className="relative z-10 space-y-3 bg-black/60 p-4 rounded-2xl backdrop-blur-sm max-w-md">
                  <Sparkles className="w-8 h-8 text-veil-lilac mx-auto animate-pulse" />
                  <h5 className="text-base font-bold text-amber-200">
                    {t.values.modalHeading}
                  </h5>
                  <p className="text-xs text-slate-300">
                    {t.values.modalDesc}
                  </p>
                  <div className="flex items-center justify-center gap-3 pt-2">
                    <span className="text-[11px] px-2.5 py-1 rounded-full bg-white/20 text-white flex items-center gap-1">
                      <Volume2 className="w-3.5 h-3.5" /> {t.values.modalAudio}
                    </span>
                    <span className="text-[11px] px-2.5 py-1 rounded-full bg-teal-600 text-white font-bold">
                      HIST 2026 Ready
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                <span>{t.values.modalDevice}</span>
                <button
                  onClick={() => {
                    setIsPlayingDemo(false);
                    resumeFromVideo();
                  }}
                  className="px-4 py-1.5 rounded-full bg-white text-slate-900 font-bold hover:bg-sky-100"
                >
                  {t.values.modalClose}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
