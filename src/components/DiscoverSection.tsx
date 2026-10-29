"use client";

import Image from "next/image";
import { MapPin, Compass } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function DiscoverSection() {
  const { t } = useLanguage();

  return (
    <section id="cach-choi" className="py-12 sm:py-16 border-t border-sky-border/60 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* LEFT COLUMN: DISCOVER STORY (ACT 03) */}
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold text-ocean-blue tracking-wider uppercase">
              {t.discover.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-deep-blue leading-snug">
              {t.discover.title}
            </h2>
            <p className="text-sm sm:text-base text-body-blue leading-relaxed">
              {t.discover.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-deep-blue pt-1">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-border">
                <MapPin className="w-3.5 h-3.5 text-teal" /> {t.discover.tag1}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-border">
                <Compass className="w-3.5 h-3.5 text-ocean-blue" /> {t.discover.tag2}
              </span>
            </div>

            {/* Map Visual Showcase with Pin Highlights */}
            <div className="relative rounded-3xl overflow-hidden border border-sky-border shadow-soft bg-sky-50 mt-4 p-2">
              <div className="relative h-60 sm:h-72 w-full rounded-2xl overflow-hidden">
                <Image
                  src="/assets/act03_map.png"
                  alt="Saigon Discovery Map"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: SKYLINE SHOWCASE CARD */}
          <div className="lg:col-span-5 space-y-4">
            <div className="postcard-card p-5 sm:p-6 bg-white border border-sky-border rounded-3xl">
              <div className="relative h-44 sm:h-52 w-full rounded-2xl overflow-hidden mb-4 border border-sky-border/80">
                <Image
                  src="/assets/notre_dame_day_aerial.webp"
                  alt="Notre-Dame Cathedral Aerial View"
                  fill
                  className="object-cover"
                />
              </div>

              <span className="text-[11px] font-bold text-ocean-blue uppercase tracking-wider block">
                {t.discover.rightBadge}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-deep-blue mt-0.5">
                {t.discover.rightTitle}
              </h3>
              <p className="text-xs text-body-blue mt-1 leading-relaxed">
                {t.discover.rightDesc}
              </p>

              <div className="mt-4 pt-3 border-t border-sky-border/70 flex items-center justify-between text-xs font-semibold text-ocean-blue">
                <span>{t.discover.rightFooter}</span>
                <span className="text-sm">✦</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
