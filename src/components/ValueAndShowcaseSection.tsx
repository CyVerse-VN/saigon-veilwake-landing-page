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

export default function ValueAndShowcaseSection() {
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);
  const { t } = useLanguage();

  return (
    <section id="video-demo" className="py-12 sm:py-16 border-t border-sky-border/60 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* TOP: 3 TOURISM VALUES (ACT 07) */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-ocean-blue tracking-wider uppercase">
            {t.values.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-deep-blue leading-snug">
            {t.values.title}
          </h2>
          <p className="text-sm sm:text-base text-body-blue">
            {t.values.subtitle}
          </p>
        </div>

        {/* 3 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1 */}
          <div className="postcard-card p-6 bg-white border border-sky-border rounded-3xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100/80 text-amber-800 flex items-center justify-center mb-4 shadow-sm">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-deep-blue">{t.values.pillar1Title}</h3>
              <p className="text-xs sm:text-sm text-body-blue mt-2 leading-relaxed">
                {t.values.pillar1Desc}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-sky-100 text-[11px] font-semibold text-teal-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> {t.values.pillar1Check}
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="postcard-card p-6 bg-white border border-sky-border rounded-3xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-100/80 text-indigo-800 flex items-center justify-center mb-4 shadow-sm">
                <Moon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-deep-blue">{t.values.pillar2Title}</h3>
              <p className="text-xs sm:text-sm text-body-blue mt-2 leading-relaxed">
                {t.values.pillar2Desc}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-sky-100 text-[11px] font-semibold text-teal-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> {t.values.pillar2Check}
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="postcard-card p-6 bg-white border border-sky-border rounded-3xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-100/80 text-teal-800 flex items-center justify-center mb-4 shadow-sm">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-deep-blue">{t.values.pillar3Title}</h3>
              <p className="text-xs sm:text-sm text-body-blue mt-2 leading-relaxed">
                {t.values.pillar3Desc}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-sky-100 text-[11px] font-semibold text-teal-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> {t.values.pillar3Check}
            </div>
          </div>
        </div>

        {/* BOTTOM: VIDEO DEMO & PROGRESS STATUS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          {/* VIDEO PLAYER CARD (7/12) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-ocean-blue uppercase tracking-wider">
                  {t.values.videoBadge}
                </span>
                <h3 className="text-xl font-bold text-deep-blue">{t.values.videoTitle}</h3>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-sky-100 text-ocean-blue font-bold">
                {t.values.videoDuration}
              </span>
            </div>

            <div className="relative rounded-3xl overflow-hidden border border-sky-border shadow-floating bg-slate-900 group">
              <div className="relative h-64 sm:h-80 w-full">
                <Image
                  src="/assets/act07_video_thumb.png"
                  alt="Video Gameplay Thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Play Overlay */}
              <div className="absolute inset-0 bg-deep-blue/40 flex items-center justify-center">
                <button
                  onClick={() => setIsPlayingDemo(true)}
                  className="w-16 h-16 rounded-full bg-white/90 text-ocean-blue hover:bg-ocean-blue hover:text-white transition-all flex items-center justify-center shadow-2xl ring-8 ring-white/30 group-hover:scale-110"
                >
                  <Play className="w-7 h-7 ml-1" />
                </button>
              </div>

              {/* Bottom Video Bar */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-center justify-between text-white text-xs">
                <span>{t.values.videoCaption}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-white/20">{t.values.videoLabel}</span>
              </div>
            </div>

            {/* Sub-thumbnails */}
            <div className="grid grid-cols-4 gap-2 text-center text-[10px] text-body-blue">
              <div className="p-1.5 rounded-xl border border-sky-border bg-sky-50/50">
                <span className="font-bold text-deep-blue block">{t.values.tabExplore}</span>
                <span>{t.values.tabExploreSub}</span>
              </div>
              <div className="p-1.5 rounded-xl border border-sky-border bg-sky-50/50">
                <span className="font-bold text-deep-blue block">{t.values.tabBadge}</span>
                <span>{t.values.tabBadgeSub}</span>
              </div>
              <div className="p-1.5 rounded-xl border border-sky-border bg-sky-50/50">
                <span className="font-bold text-deep-blue block">{t.values.tabSeal}</span>
                <span>{t.values.tabSealSub}</span>
              </div>
              <div className="p-1.5 rounded-xl border border-sky-border bg-sky-50/50">
                <span className="font-bold text-deep-blue block">{t.values.tabScene}</span>
                <span>{t.values.tabSceneSub}</span>
              </div>
            </div>
          </div>

          {/* PROGRESS CHECKLIST (5/12) */}
          <div className="lg:col-span-5 postcard-card p-6 bg-white border border-sky-border rounded-3xl space-y-4">
            <span className="text-[11px] font-bold text-ocean-blue uppercase tracking-wider block">
              {t.values.progressBadge}
            </span>
            <h3 className="text-lg font-bold text-deep-blue">
              {t.values.progressTitle}
            </h3>
            <p className="text-xs text-body-blue">
              {t.values.progressSubtitle}
            </p>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-2xl bg-teal-50/70 border border-teal-200">
                <div className="flex items-center justify-between font-bold text-teal-800">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-teal" /> {t.values.pDoneTitle}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-200/80 text-teal-900">
                    100%
                  </span>
                </div>
                <p className="text-body-blue text-[11px] mt-1">
                  {t.values.pDoneDesc}
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-amber-50/70 border border-amber-200">
                <div className="flex items-center justify-between font-bold text-amber-800">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-amber-600" /> {t.values.pTestingTitle}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-200/80 text-amber-900">
                    Active
                  </span>
                </div>
                <p className="text-body-blue text-[11px] mt-1">
                  {t.values.pTestingDesc}
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-sky-50/70 border border-sky-200">
                <div className="flex items-center justify-between font-bold text-ocean-blue">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-ocean-blue" /> {t.values.pRoadmapTitle}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-200/80 text-deep-blue">
                    Roadmap
                  </span>
                </div>
                <p className="text-body-blue text-[11px] mt-1">
                  {t.values.pRoadmapDesc}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/project"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-ocean-blue text-white hover:bg-deep-blue transition-all font-semibold text-xs shadow-md"
              >
                <span>{t.values.btnProjectDossier}</span>
                <ArrowRight className="w-3.5 h-3.5" />
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
                  onClick={() => setIsPlayingDemo(false)}
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
                  onClick={() => setIsPlayingDemo(false)}
                  className="px-4 py-1.5 rounded-full bg-white text-deep-blue font-bold hover:bg-sky-100"
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
