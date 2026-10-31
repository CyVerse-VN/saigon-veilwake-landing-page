"use client";

import Image from "next/image";
import { MapPin, Compass } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function DiscoverSection() {
  const { t } = useLanguage();

  return (
    <section id="cach-choi" className="py-16 sm:py-24 relative">
      {/* Editorial Chapter Waypoint Bridge */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 mb-10">
        <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-ocean-blue/70">
          <span>{t.discover.badge}</span>
          <div className="flex-1 h-px bg-gradient-to-r from-ocean-blue/30 via-sky-300/20 to-transparent" />
          <span className="text-[10px] text-body-blue/60 font-mono">MAP-FIRST · THỰC ĐỊA GPS</span>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* LEFT COLUMN: DISCOVER STORY (ACT 03) */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-deep-blue leading-tight tracking-tight">
              {t.discover.title}
            </h2>
            <p className="text-base sm:text-lg text-body-blue/90 leading-relaxed max-w-2xl">
              {t.discover.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-deep-blue pt-1">
              <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-white/50 dark:border-white/10 shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-teal" /> {t.discover.tag1}
              </span>
              <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-white/50 dark:border-white/10 shadow-xs">
                <Compass className="w-3.5 h-3.5 text-ocean-blue" /> {t.discover.tag2}
              </span>
            </div>

            {/* Map Visual Showcase with Pin Highlights — Panoramic Viewport (Frameless) */}
            <div className="relative rounded-3xl sm:rounded-[32px] overflow-hidden shadow-2xl shadow-sky-950/10 mt-6 h-[380px] sm:h-[460px] lg:h-[500px] w-full transition-all duration-500 group">
              <Image
                src="/assets/act03_map.png"
                alt="Saigon Discovery Map"
                fill
                className="object-cover group-hover:scale-102 transition-transform duration-700"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: SKYLINE SHOWCASE (FRAMELESS EDITORIAL COLUMN) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Photographic Memory Snapshot of Notre Dame */}
            <div className="relative group">
              <div className="relative h-60 sm:h-72 w-full rounded-2xl overflow-hidden shadow-xl shadow-slate-900/10">
                <Image
                  src="/assets/notre_dame_day_aerial.webp"
                  alt="Notre-Dame Cathedral Aerial View"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="pt-2.5 px-1 flex items-center justify-between text-body-blue">
                <span className="font-handwriting text-lg sm:text-xl font-bold text-deep-blue">
                  Notre-Dame Cathedral
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-body-blue/60 font-semibold">
                  10°46&apos;47&quot;N · 106°41&apos;57&quot;E
                </span>
              </div>
            </div>

            <div>
              <span className="text-[11px] font-bold text-ocean-blue uppercase tracking-wider block">
                {t.discover.rightBadge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-deep-blue mt-1 leading-snug">
                {t.discover.rightTitle}
              </h3>
              <p className="text-sm sm:text-base text-body-blue mt-2 leading-relaxed">
                {t.discover.rightDesc}
              </p>
            </div>

            <div className="pt-4 border-t border-sky-200/50 dark:border-white/10 flex items-center justify-between text-xs font-semibold text-ocean-blue">
              <span>{t.discover.rightFooter}</span>
              <span className="text-base text-amber-500">✦</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
