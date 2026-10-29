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
  const { t } = useLanguage();

  return (
    <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 overflow-hidden">
      {/* Background ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50/80 via-page to-white -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Grid: Left Narrative (7/12) + Right Showcase Rail (5/12) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* LEFT COLUMN: HERO NARRATIVE (ACT 01) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100/90 text-ocean-blue text-xs font-bold tracking-wider uppercase border border-sky-200">
              <Sparkles className="w-3.5 h-3.5 text-ocean-blue" />
              <span>{t.hero.eyebrow}</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold font-display text-deep-blue leading-[1.15] tracking-tight">
              {t.hero.title}
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-body-blue/90 leading-relaxed max-w-2xl">
              {t.hero.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#trai-nghiem"
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
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-sky-border bg-white text-deep-blue hover:bg-sky-50 transition-all font-semibold text-sm sm:text-base shadow-sm"
              >
                <PlayCircle className="w-4 h-4 text-ocean-blue" />
                <span>{t.hero.ctaSecondary}</span>
              </button>
            </div>

            {/* 3 Microproof Tags */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 pt-2 text-xs font-semibold text-body-blue">
              <span className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full border border-sky-border/80 shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-teal" /> {t.hero.tagRealPlace}
              </span>
              <span className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full border border-sky-border/80 shadow-xs">
                <Landmark className="w-3.5 h-3.5 text-sun-gold" /> {t.hero.tagCulture}
              </span>
              <span className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full border border-sky-border/80 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-veil-lilac" /> {t.hero.tagAR}
              </span>
            </div>

            {/* HERO VISUAL BOX (Daylight is default, with Day-to-Night INT-01 toggle) */}
            <div className="relative rounded-3xl overflow-hidden border border-sky-border shadow-floating bg-white group mt-6">
              {/* Day-to-Night Toggle Pill (INT-01) */}
              <div className="absolute top-4 right-4 z-20 flex items-center bg-white/90 backdrop-blur-md rounded-full p-1 border border-sky-border shadow-md">
                <button
                  onClick={() => setIsTwilight(false)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                    !isTwilight
                      ? "bg-amber-100 text-amber-900 shadow-xs"
                      : "text-body-blue hover:text-deep-blue"
                  }`}
                >
                  <Sun className="w-3 h-3 text-sun-gold" /> {t.hero.btnDay}
                </button>
                <button
                  onClick={() => setIsTwilight(true)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                    isTwilight
                      ? "bg-indigo-900 text-indigo-100 shadow-xs"
                      : "text-body-blue hover:text-deep-blue"
                  }`}
                >
                  <Moon className="w-3 h-3 text-veil-lilac" /> {t.hero.btnTwilight}
                </button>
              </div>

              {/* Main Visual Image (Real Photo Transition) */}
              <div className="relative h-[340px] sm:h-[420px] w-full overflow-hidden transition-all duration-700">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/70 via-indigo-900/30 to-transparent pointer-events-none animate-in fade-in duration-500">
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/95 backdrop-blur-md text-deep-blue shadow-lg border border-veil-lilac/40">
                      <span className="text-[10px] font-bold text-veil-lilac uppercase tracking-wider block">
                        {t.hero.dayToNightBadge}
                      </span>
                      <p className="text-xs font-semibold mt-0.5">
                        {t.hero.dayToNightDesc}
                      </p>
                    </div>
                  </div>
                )}

                {/* Handwritten Note Annotation with Protective Glass Backing */}
                <div className="absolute top-4 left-4 z-10 max-w-[240px] pointer-events-none">
                  <span className="inline-block px-3 py-1.5 rounded-2xl bg-white/90 backdrop-blur-md shadow-xs border border-white/60">
                    <p className="font-handwriting text-base sm:text-lg text-deep-blue rotate-[-2deg] leading-tight font-semibold">
                      {t.hero.handwrittenNote}
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: SHOWCASE RAIL (THEME / TRAVEL MOOD PREVIEW) */}
          <div className="lg:col-span-5 space-y-6">
            <TravelMoodsGallery />
          </div>
        </div>
      </div>
    </section>
  );
}
