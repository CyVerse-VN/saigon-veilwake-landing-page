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

            {/* Photographic Memory Diptych (Authentic Polaroid Postcards matching Framer) */}
            <div className="relative mt-8 pt-2 pb-4">
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-6 sm:gap-0 relative">
                {/* Postcard 1 (Left - Cultural Traveler) */}
                <div className="relative w-[280px] sm:w-[290px] p-3 pb-6 bg-[#fffdf6] dark:bg-[#1a202c] border border-amber-900/15 dark:border-amber-700/30 rounded-[2px] shadow-[0px_2px_4px_rgba(65,48,26,0.12),0px_12px_24px_-8px_rgba(65,48,26,0.22)] rotate-[-3deg] hover:rotate-0 hover:z-20 transition-all duration-500 group shrink-0">
                  {/* Photo Container */}
                  <div className="relative h-60 w-full rounded-xs overflow-hidden border border-stone-800/10">
                    <Image
                      src="/assets/act02_postcard_left.webp"
                      alt="Saigon Cultural Traveler"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Postal Seal Stamp on Card 1 */}
                  <div className="absolute bottom-11 right-3 w-16 h-16 rounded-full border-2 border-dashed border-red-700/75 bg-[#fffdf6]/90 dark:bg-slate-900/90 backdrop-blur-xs flex flex-col items-center justify-center text-[8px] font-bold text-red-800 dark:text-red-400 uppercase tracking-widest rotate-[14deg] z-10 pointer-events-none shadow-xs">
                    <span className="leading-tight">SAIGON</span>
                    <span className="text-[7px] leading-tight">HIST 26</span>
                  </div>

                  {/* Polaroid Chin Captions */}
                  <div className="pt-3 px-1 space-y-0.5">
                    <span className="font-handwriting text-xl font-bold text-[#92400E] dark:text-amber-200 block leading-tight">
                      {t.problem.postcardTag1}
                    </span>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-stone-500 dark:text-slate-400 font-semibold block">
                      #Saigon2026
                    </span>
                  </div>
                </div>

                {/* Postcard 2 (Right - Heritage Corner) */}
                <div className="relative w-[280px] sm:w-[290px] p-3 pb-6 bg-[#fffdf6] dark:bg-[#1a202c] border border-amber-900/15 dark:border-amber-700/30 rounded-[2px] shadow-[0px_2px_4px_rgba(65,48,26,0.12),0px_12px_24px_-8px_rgba(65,48,26,0.22)] sm:-ml-4 sm:mt-7 rotate-[3deg] hover:rotate-0 hover:z-20 transition-all duration-500 group shrink-0 z-10">
                  {/* Photo Container */}
                  <div className="relative h-60 w-full rounded-xs overflow-hidden border border-stone-800/10">
                    <Image
                      src="/assets/act02_postcard_right.webp"
                      alt="Saigon Heritage Corner"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Postal Seal Stamp on Card 2 */}
                  <div className="absolute bottom-11 right-3 w-16 h-16 rounded-full border-2 border-dashed border-red-700/75 bg-[#fffdf6]/90 dark:bg-slate-900/90 backdrop-blur-xs flex flex-col items-center justify-center text-[8px] font-bold text-red-800 dark:text-red-400 uppercase tracking-widest rotate-[-8deg] z-10 pointer-events-none shadow-xs">
                    <span className="leading-tight">SAIGON</span>
                    <span className="text-[7px] leading-tight">HIST 26</span>
                  </div>

                  {/* Polaroid Chin Captions */}
                  <div className="pt-3 px-1 space-y-0.5">
                    <span className="font-handwriting text-xl font-bold text-[#92400E] dark:text-amber-200 block leading-tight">
                      {t.problem.postcardTag2}
                    </span>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-stone-500 dark:text-slate-400 font-semibold block">
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

            {/* 3 Heritage Discovery Beats (Tinted Soft Cards matching Framer) */}
            <div className="space-y-3.5 pt-1">
              {/* 1. Cultural */}
              <div className="flex items-center gap-4 p-4 sm:p-4.5 rounded-2xl bg-[#FDF2E2] dark:bg-amber-950/30 border border-white/80 dark:border-amber-700/30 shadow-xs transition-all duration-300 hover:shadow-sm group">
                <div className="w-11 h-11 rounded-xl bg-white/80 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 flex items-center justify-center shrink-0 shadow-xs transition-transform group-hover:scale-105">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-deep-blue dark:text-amber-100 group-hover:text-ocean-blue transition-colors">
                    {t.problem.pillar1Title}
                  </h4>
                  <p className="text-xs sm:text-sm text-body-blue/85 dark:text-slate-300 mt-0.5 leading-relaxed">
                    {t.problem.pillar1Desc}
                  </p>
                </div>
              </div>

              {/* 2. Night */}
              <div className="flex items-center gap-4 p-4 sm:p-4.5 rounded-2xl bg-[#EDF3FD] dark:bg-indigo-950/30 border border-white/80 dark:border-indigo-700/30 shadow-xs transition-all duration-300 hover:shadow-sm group">
                <div className="w-11 h-11 rounded-xl bg-white/80 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 flex items-center justify-center shrink-0 shadow-xs transition-transform group-hover:scale-105">
                  <Moon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-deep-blue dark:text-indigo-100 group-hover:text-ocean-blue transition-colors">
                    {t.problem.pillar2Title}
                  </h4>
                  <p className="text-xs sm:text-sm text-body-blue/85 dark:text-slate-300 mt-0.5 leading-relaxed">
                    {t.problem.pillar2Desc}
                  </p>
                </div>
              </div>

              {/* 3. Digital */}
              <div className="flex items-center gap-4 p-4 sm:p-4.5 rounded-2xl bg-[#EAF7F0] dark:bg-teal-950/30 border border-white/80 dark:border-teal-700/30 shadow-xs transition-all duration-300 hover:shadow-sm group">
                <div className="w-11 h-11 rounded-xl bg-white/80 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 flex items-center justify-center shrink-0 shadow-xs transition-transform group-hover:scale-105">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-deep-blue dark:text-teal-100 group-hover:text-ocean-blue transition-colors">
                    {t.problem.pillar3Title}
                  </h4>
                  <p className="text-xs sm:text-sm text-body-blue/85 dark:text-slate-300 mt-0.5 leading-relaxed">
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
