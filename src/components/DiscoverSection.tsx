"use client";

import Image from "next/image";
import { MapPin, Compass, Clock, Lightbulb, Sparkles, Navigation } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function DiscoverSection() {
  const { t } = useLanguage();

  return (
    <section id="kham-pha-hem" className="py-16 sm:py-24 relative scroll-mt-12">
      {/* Editorial Chapter Waypoint Bridge */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 mb-10">
        <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-ocean-blue dark:text-sky-300 transition-colors duration-300">
          <span>{t.discover.badge}</span>
          <div className="flex-1 h-px bg-gradient-to-r from-ocean-blue/30 via-sky-300/20 to-transparent dark:from-sky-400/40 dark:via-sky-400/10 dark:to-transparent" />
          <span className="text-[10px] text-body-blue/70 dark:text-slate-400 font-mono">MAP-FIRST · THỰC ĐỊA GPS</span>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
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
          </div>

          {/* RIGHT COLUMN: TRAVEL INSIGHTS (ACT 03 MATCHING FRAMER) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Curated Travel Insights Glass Box */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white/75 dark:bg-slate-900/70 backdrop-blur-xl border border-white/80 dark:border-white/10 shadow-lg shadow-sky-950/5 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-amber-100/80 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 block">
                    {t.discover.bestTimeBadge}
                  </span>
                  <p className="text-xs sm:text-sm text-body-blue/90 dark:text-slate-300 mt-1 font-medium leading-relaxed">
                    {t.discover.bestTimeText}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-sky-100 dark:border-white/5">
                <div className="w-8 h-8 rounded-xl bg-teal/15 text-teal flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal block">
                    {t.discover.insiderTipBadge}
                  </span>
                  <p className="text-xs sm:text-sm text-body-blue/90 dark:text-slate-300 mt-1 leading-relaxed">
                    {t.discover.insiderTipText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SAIGON LANDMARK BENTO (Photographic Field Coordinates — 3-Column Asymmetric Grid) */}
        <div className="mt-14 sm:mt-20 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-ocean-blue dark:text-sky-300 flex items-center gap-1.5 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-teal" />
                {t.discover.bentoTitle}
              </span>
              <p className="text-xs sm:text-sm text-body-blue max-w-2xl leading-relaxed">
                {t.discover.bentoSubtitle}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento Card 1: Bưu điện Trung tâm (col-span-1 md:col-span-2) */}
            <div className="md:col-span-2 relative h-72 sm:h-80 md:h-[340px] rounded-3xl overflow-hidden shadow-xl shadow-sky-950/10 group border border-white/60 dark:border-white/10 flex flex-col justify-between p-5">
              <Image
                src="/assets/landmark_central_post_office.jpg"
                alt={t.discover.bentoPostOffice}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 -z-10"
              />
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/85 dark:bg-slate-900/85 backdrop-blur-md text-[11px] font-mono font-semibold text-deep-blue dark:text-sky-200 border border-white/40 dark:border-white/10 shadow-xs">
                  <Navigation className="w-3 h-3 text-ocean-blue dark:text-sky-400" /> 10°46&apos;N · 106°41&apos;E
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-sm space-y-1.5">
                <h4 className="text-sm sm:text-base font-bold font-display text-deep-blue dark:text-white leading-tight">
                  {t.discover.bentoPostOffice}
                </h4>
                <p className="text-[11px] text-body-blue/90 dark:text-slate-300 leading-relaxed">
                  {t.discover.bentoPostOfficeTip}
                </p>
              </div>
            </div>

            {/* Bento Card 2: Nhà thờ Đức Bà (col-span-1 md:row-span-2 tall portrait card) */}
            <div className="md:row-span-2 relative h-96 sm:h-[480px] md:h-full min-h-[380px] rounded-3xl overflow-hidden shadow-xl shadow-sky-950/10 group border border-white/60 dark:border-white/10 flex flex-col justify-between p-5">
              <Image
                src="/assets/landmark_notre_dame_cathedral.jpg"
                alt={t.discover.bentoNotreDame}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 -z-10"
              />
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/85 dark:bg-slate-900/85 backdrop-blur-md text-[11px] font-mono font-semibold text-deep-blue dark:text-sky-200 border border-white/40 dark:border-white/10 shadow-xs">
                  <Navigation className="w-3 h-3 text-ocean-blue dark:text-sky-400" /> 10°46&apos;N · 106°41&apos;E
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-sm space-y-1.5">
                <h4 className="text-sm sm:text-base font-bold font-display text-deep-blue dark:text-white leading-tight">
                  {t.discover.bentoNotreDame}
                </h4>
                <p className="text-[11px] text-body-blue/90 dark:text-slate-300 leading-relaxed">
                  {t.discover.bentoNotreDameTip}
                </p>
                <span className="text-[10px] text-body-blue/70 dark:text-slate-400 font-mono block pt-0.5">
                  Notre-Dame Cathedral · 10°46’47”N · 106°41’57”E
                </span>
              </div>
            </div>

            {/* Bento Card 3: Hoàng hôn sông Sài Gòn (col-span-1) */}
            <div className="relative h-72 sm:h-80 md:h-[280px] rounded-3xl overflow-hidden shadow-xl shadow-sky-950/10 group border border-white/60 dark:border-white/10 flex flex-col justify-between p-5">
              <Image
                src="/assets/landmark_saigon_river_sunset.jpg"
                alt={t.discover.bentoRiverSunset}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 -z-10"
              />
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/85 dark:bg-slate-900/85 backdrop-blur-md text-[11px] font-mono font-semibold text-deep-blue dark:text-sky-200 border border-white/40 dark:border-white/10 shadow-xs">
                  <Navigation className="w-3 h-3 text-amber-500" /> 10°46&apos;N · 106°42&apos;E
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-sm space-y-1.5">
                <h4 className="text-sm sm:text-base font-bold font-display text-deep-blue dark:text-white leading-tight">
                  {t.discover.bentoRiverSunset}
                </h4>
                <p className="text-[11px] text-body-blue/90 dark:text-slate-300 leading-relaxed">
                  {t.discover.bentoRiverSunsetTip}
                </p>
              </div>
            </div>

            {/* Bento Card 4: Saigon Discovery Map Viewport (col-span-1) */}
            <div className="relative h-72 sm:h-80 md:h-[280px] rounded-3xl overflow-hidden shadow-xl shadow-sky-950/10 group border border-white/60 dark:border-white/10 flex flex-col justify-between p-5">
              <Image
                src="/assets/act03_map.png"
                alt="Saigon Discovery Map Viewport"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 -z-10"
              />
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/85 dark:bg-slate-900/85 backdrop-blur-md text-[11px] font-mono font-semibold text-deep-blue dark:text-sky-200 border border-white/40 dark:border-white/10 shadow-xs">
                  <MapPin className="w-3 h-3 text-teal" /> Map-first GPS
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-sm space-y-1">
                <h4 className="text-sm sm:text-base font-bold font-display text-deep-blue dark:text-white leading-tight">
                  Bản Đồ Khám Phá Thực Địa
                </h4>
                <p className="text-[11px] text-body-blue/90 dark:text-slate-300 leading-relaxed">
                  Định vị toạ độ và khơi mở bí ẩn di sản trực tiếp trên bản đồ số
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
