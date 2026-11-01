"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Landmark, Moon, Cpu } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ProblemSection() {
  const { t } = useLanguage();

  return (
    <section id="trai-nghiem" className="py-16 sm:py-24 relative">
      {/* Editorial Chapter Waypoint Bridge */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 mb-10">
        <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-ocean-blue dark:text-sky-300 transition-colors duration-300">
          <span>{t.problem.badge}</span>
          <div className="flex-1 h-px bg-gradient-to-r from-ocean-blue/30 via-sky-300/20 to-transparent dark:from-sky-400/40 dark:via-sky-400/10 dark:to-transparent" />
          <span className="text-[10px] text-body-blue/70 dark:text-slate-400 font-mono">10°46&apos;47&quot;N · SÀI GÒN</span>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* LEFT COLUMN: PROBLEM STORYTELLING (ACT 02) */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-deep-blue leading-tight tracking-tight">
              {t.problem.title}
            </h2>
            <p className="text-base sm:text-lg text-body-blue/90 leading-relaxed max-w-2xl">
              {t.problem.description}
            </p>

            <a
              href="#cach-choi"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-ocean-blue hover:text-deep-blue group transition-colors"
            >
              <span>{t.problem.cta}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
            </a>

            {/* Photographic Memory Diptych (Frameless Organic Overlap) */}
            <div className="relative mt-8 pt-4 pb-2">
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-6 sm:gap-0 relative">
                {/* Photo 1 (Left - Cultural Traveler) */}
                <div className="relative w-full max-w-[320px] sm:w-[52%] rotate-[-2deg] hover:rotate-0 hover:z-20 transition-all duration-500 group">
                  <div className="relative h-60 sm:h-72 w-full rounded-2xl overflow-hidden shadow-xl shadow-slate-900/10">
                    <Image
                      src="/assets/act02_postcard_left.webp"
                      alt="Saigon Cultural Traveler"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="pt-2.5 px-1 flex items-center justify-between text-body-blue">
                    <span className="font-handwriting text-lg sm:text-xl font-bold text-deep-blue tracking-wide">
                      {t.problem.postcardTag1}
                    </span>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-body-blue/60 font-semibold">
                      #Saigon2026
                    </span>
                  </div>
                </div>

                {/* Photo 2 (Right - Heritage Corner) */}
                <div className="relative w-full max-w-[320px] sm:w-[52%] sm:-ml-10 sm:mt-10 rotate-[2.5deg] hover:rotate-0 hover:z-20 transition-all duration-500 group">
                  {/* Subtle heritage postal seal accent */}
                  <div className="absolute -top-3 right-5 w-12 h-12 rounded-full border border-dashed border-red-700/50 bg-red-600/10 backdrop-blur-xs flex flex-col items-center justify-center text-[7px] font-bold text-red-800 uppercase tracking-widest rotate-[14deg] z-20 pointer-events-none shadow-xs">
                    <span>SAIGON</span>
                    <span className="text-[6px]">HIST 26</span>
                  </div>

                  <div className="relative h-60 sm:h-72 w-full rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/15">
                    <Image
                      src="/assets/act02_postcard_right.webp"
                      alt="Saigon Heritage Corner"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="pt-2.5 px-1 flex items-center justify-between text-body-blue">
                    <span className="font-handwriting text-lg sm:text-xl font-bold text-deep-blue tracking-wide">
                      {t.problem.postcardTag2}
                    </span>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-body-blue/60 font-semibold">
                      District 1
                    </span>
                  </div>
                </div>
              </div>

              {/* Handwritten Quote Memo */}
              <div className="mt-8 text-center sm:text-left">
                <p className="font-handwriting text-2xl sm:text-3xl text-amber-900 dark:text-amber-200 leading-relaxed max-w-xl">
                  {t.problem.handwrittenQuote}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: TRAVELER'S FIELD JOURNAL (FRAMELESS EDITORIAL SPREAD) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[11px] font-bold text-ocean-blue dark:text-sky-300 uppercase tracking-wider block">
                {t.problem.rightBadge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-deep-blue mt-1 leading-snug">
                {t.problem.rightTitle}
              </h3>
              <p className="text-sm sm:text-base text-body-blue mt-2 leading-relaxed">
                {t.problem.rightDesc}
              </p>
            </div>

            {/* 3 Heritage Discovery Beats (Frameless rows with soft ambient glow) */}
            <div className="space-y-4 pt-1">
              {/* 1. Cultural */}
              <div className="flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-white/80 dark:hover:bg-slate-800/60 group">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-800 dark:text-amber-300 flex items-center justify-center shrink-0 shadow-xs transition-transform group-hover:scale-110">
                  <Landmark className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-deep-blue group-hover:text-ocean-blue transition-colors">
                    {t.problem.pillar1Title}
                  </h4>
                  <p className="text-xs sm:text-sm text-body-blue dark:text-slate-300 mt-1 leading-relaxed">
                    {t.problem.pillar1Desc}
                  </p>
                </div>
              </div>

              {/* 2. Night */}
              <div className="flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-white/80 dark:hover:bg-slate-800/60 group">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 flex items-center justify-center shrink-0 shadow-xs transition-transform group-hover:scale-110">
                  <Moon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-deep-blue group-hover:text-ocean-blue transition-colors">
                    {t.problem.pillar2Title}
                  </h4>
                  <p className="text-xs sm:text-sm text-body-blue dark:text-slate-300 mt-1 leading-relaxed">
                    {t.problem.pillar2Desc}
                  </p>
                </div>
              </div>

              {/* 3. Digital */}
              <div className="flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-white/80 dark:hover:bg-slate-800/60 group">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/15 text-teal-700 dark:text-teal-300 flex items-center justify-center shrink-0 shadow-xs transition-transform group-hover:scale-110">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-deep-blue group-hover:text-ocean-blue transition-colors">
                    {t.problem.pillar3Title}
                  </h4>
                  <p className="text-xs sm:text-sm text-body-blue dark:text-slate-300 mt-1 leading-relaxed">
                    {t.problem.pillar3Desc}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA link to project page */}
            <div className="pt-4 border-t border-sky-200/50 dark:border-white/10">
              <Link
                href="/project"
                className="inline-flex items-center gap-2 text-sm font-bold text-ocean-blue hover:text-deep-blue transition-colors group"
              >
                <span>{t.problem.projectLink}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
