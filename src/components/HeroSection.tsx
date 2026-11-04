"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Landmark,
  Sparkles,
  ArrowRight,
  PlayCircle,
  Sun,
  Moon,
} from "lucide-react";
import TravelMoodsGallery from "./TravelMoodsGallery";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection({ onOpenDemo }: { onOpenDemo?: () => void }) {
  const [isTwilight, setIsTwilight] = useState(false);
  const { t, language } = useLanguage();

  return (
    <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 overflow-hidden">
      {/* Subtle ambient light orb */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-sky-200/25 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Two-Column Grid: Left Narrative (7/12) + Right Showcase Rail (5/12) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT COLUMN: HERO NARRATIVE (ACT 01) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/90 dark:bg-sky-950/60 text-ocean-blue dark:text-sky-300 text-xs font-bold tracking-wider uppercase border border-sky-200 dark:border-sky-800/60 shadow-xs">
              <div className="relative w-4 h-4 shrink-0">
                <Image
                  src="/assets/Ký hiệu/05_light_star.png"
                  alt="Star Glyph"
                  fill
                  className="object-contain"
                />
              </div>
              <span>{t.hero.eyebrow}</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.65rem] xl:text-[3.15rem] font-extrabold font-display text-deep-blue leading-[1.18] tracking-tight text-balance">
              {language === "vi" ? (
                <>
                  <span className="inline lg:whitespace-nowrap">Khám phá một Sài Gòn</span>{" "}
                  <span className="inline lg:whitespace-nowrap">bạn chưa từng thấy.</span>
                </>
              ) : (
                t.hero.title
              )}
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-body-blue/90 leading-relaxed max-w-2xl">
              {t.hero.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#bon-canh-cong"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-ocean-blue text-white hover:bg-deep-blue transition-all font-semibold text-sm sm:text-base shadow-card hover:shadow-floating"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={
                  onOpenDemo
                    ? onOpenDemo
                    : () => {
                      const el = document.getElementById("video-demo");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }
                }
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-white/60 dark:border-white/10 bg-white/75 dark:bg-slate-800/80 backdrop-blur-md text-slate-800 dark:text-white hover:bg-white dark:hover:bg-slate-700 transition-all font-semibold text-sm sm:text-base shadow-sm"
              >
                <PlayCircle className="w-4 h-4 text-ocean-blue dark:text-sky-400" />
                <span>{t.hero.ctaSecondary}</span>
              </button>
            </div>

            {/* 3 Microproof Tags */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 pt-2 text-xs font-semibold">
              <span className="flex items-center gap-1.5 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/80 dark:border-white/10 shadow-xs text-body-blue dark:text-slate-200">
                <MapPin className="w-3.5 h-3.5 text-teal" /> {t.hero.tagRealPlace}
              </span>
              <span className="flex items-center gap-1.5 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/80 dark:border-white/10 shadow-xs text-body-blue dark:text-slate-200">
                <Landmark className="w-3.5 h-3.5 text-sun-gold" /> {t.hero.tagCulture}
              </span>
              <span className="flex items-center gap-1.5 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/80 dark:border-white/10 shadow-xs text-body-blue dark:text-slate-200">
                <Sparkles className="w-3.5 h-3.5 text-veil-lilac" /> {t.hero.tagAR}
              </span>
            </div>

            {/* HERO VISUAL PORT (Seamless Cinematic Window) */}
            <div className="relative rounded-3xl sm:rounded-[32px] overflow-hidden group mt-6 shadow-2xl shadow-sky-950/10 transition-all duration-500">
              {/* Day-to-Night Toggle Pill (INT-01) */}
              <div className="absolute top-4 right-4 z-20 flex items-center bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl rounded-full p-1 border border-white/50 dark:border-white/10 shadow-sm">
                <button
                  onClick={() => setIsTwilight(false)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${!isTwilight
                      ? "bg-white text-slate-900 dark:bg-slate-800 dark:text-amber-200 shadow-xs"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    }`}
                >
                  <Sun className="w-3.5 h-3.5 text-sun-gold" /> {t.hero.btnDay}
                </button>
                <button
                  onClick={() => setIsTwilight(true)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${isTwilight
                      ? "bg-indigo-900 text-indigo-100 dark:bg-indigo-600 dark:text-white shadow-xs"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    }`}
                >
                  <Moon className="w-3.5 h-3.5 text-veil-lilac" /> {t.hero.btnTwilight}
                </button>
              </div>

              {/* Main Visual Image (Real Photo Transition) */}
              <div className="relative h-[380px] sm:h-[460px] lg:h-[500px] w-full overflow-hidden transition-all duration-700">
                <Image
                  src={
                    isTwilight
                      ? "/assets/hero_post_office_twilight_v1.webp"
                      : "/assets/hero_post_office_day_v1.webp"
                  }
                  alt={
                    isTwilight
                      ? t.hero.btnTwilight
                      : t.hero.btnDay
                  }
                  fill
                  priority
                  className="object-cover object-center transition-all duration-700"
                />

                {/* Twilight / Veil Layer (INT-01) */}
                {isTwilight && (
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/80 via-indigo-900/30 to-transparent pointer-events-none animate-in fade-in duration-500">
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/85 backdrop-blur-xl text-white shadow-2xl border border-veil-lilac/50">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-veil-lilac animate-pulse" />
                        <span className="text-[10px] font-bold text-veil-lilac uppercase tracking-wider block">
                          {t.hero.dayToNightBadge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-100 font-medium mt-1 leading-relaxed">
                        {t.hero.dayToNightDesc}
                      </p>
                    </div>
                  </div>
                )}

                {/* Handwritten Note Annotation */}
                <div className="absolute top-4 left-4 z-10 max-w-[260px] pointer-events-none">
                  <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-xs border border-white/40 dark:border-white/10">
                    <p className="font-handwriting text-base sm:text-lg text-deep-blue dark:text-amber-200 rotate-[-1.5deg] leading-tight font-semibold">
                      {t.hero.handwrittenNote}
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 3D MASCOT WELCOME & TRAVEL MOOD PREVIEW */}
          <div className="lg:col-span-5 space-y-6">
            {/* 3D Mascot Welcome Pedestal */}
            <div className="postcard-card rounded-[32px] p-6 sm:p-7 relative overflow-hidden flex flex-col items-center text-center shadow-lg group">
              {/* Ambient Glow inside pedestal */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-sky-300/30 dark:bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Speech Bubble */}
              <div className="relative z-10 mb-2 px-4 py-2 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-sky-200/80 dark:border-sky-800 shadow-md max-w-[280px]">
                <p className="text-xs font-bold text-deep-blue dark:text-sky-200">
                  {language === "vi" ? "Xin chào! Mình là Vara ✨" : "Hello! I am Vara ✨"}
                </p>
                <p className="text-[11px] text-body-blue dark:text-slate-300 mt-0.5">
                  {language === "vi"
                    ? "Cùng mình dạo bước và đánh thức ký ức Sài Gòn nhé!"
                    : "Walk with me and awaken Saigon's memories!"}
                </p>
              </div>

              {/* 3D Welcome Mascot Image */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 my-1 group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl">
                <Image
                  src="/assets/Mascot/01_welcome.png"
                  alt="Vara Welcome Mascot"
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              {/* Floating Souvenir Badge on Pedestal */}
              <div className="mt-2 w-full flex items-center justify-between p-3 rounded-2xl bg-white/70 dark:bg-slate-850/70 border border-sky-100 dark:border-slate-700/80 backdrop-blur-md text-xs">
                <div className="text-left">
                  <span className="text-[10px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider block">
                    {language === "vi" ? "Di sản mở đầu · Stop 01" : "Opening Heritage · Stop 01"}
                  </span>
                  <span className="font-extrabold text-deep-blue dark:text-white">
                    {language === "vi" ? "Bưu Điện Trung Tâm Sài Gòn" : "Saigon Central Post Office"}
                  </span>
                </div>
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-ocean-blue dark:text-sky-300 font-mono font-bold border border-sky-200 dark:border-sky-800">
                  GPS Ready
                </span>
              </div>
            </div>

            {/* Travel Moods Gallery Rail */}
            <TravelMoodsGallery />
          </div>
        </div>
      </div>
    </section>
  );
}
