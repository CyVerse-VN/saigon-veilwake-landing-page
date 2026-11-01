"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CtaSection({ onOpenDemo }: { onOpenDemo?: () => void }) {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden w-full">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 text-center">
        {/* Expansive Full-bleed Skyline Canvas (Grand Finale - Frameless) */}
        <div className="relative rounded-3xl sm:rounded-[48px] overflow-hidden p-8 sm:p-16 lg:p-20 shadow-2xl shadow-sky-950/10 bg-gradient-to-b from-white/80 via-sky-50/50 to-white/90 dark:from-slate-900/60 dark:to-slate-950/60 backdrop-blur-2xl">
          {/* High-res Saigon skyline panorama background accent */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <Image
              src="/assets/saigon_skyline_banner.webp"
              alt="Saigon Skyline Panorama"
              fill
              className="object-cover object-bottom"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 dark:bg-sky-950/60 text-ocean-blue dark:text-sky-300 text-xs font-bold tracking-wider uppercase border border-sky-200/60 dark:border-sky-800/60 mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-ocean-blue dark:text-sky-300" />
            <span>{t.cta.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-deep-blue leading-tight max-w-2xl mx-auto tracking-tight">
            {t.cta.title}
          </h2>

          <p className="text-base sm:text-lg text-body-blue/90 mt-4 max-w-xl mx-auto leading-relaxed">
            {t.cta.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button
              onClick={
                onOpenDemo
                  ? onOpenDemo
                  : () => {
                      const el = document.getElementById("video-demo");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }
              }
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-ocean-blue text-white hover:bg-deep-blue transition-all font-semibold text-sm sm:text-base shadow-card hover:shadow-floating"
            >
              <PlayCircle className="w-5 h-5" />
              <span>{t.cta.btnDemo}</span>
            </button>

            <Link
              href="/project"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/85 dark:bg-slate-800/90 text-deep-blue dark:text-white hover:bg-white dark:hover:bg-slate-700 transition-all font-semibold text-sm sm:text-base shadow-sm border border-white/60 dark:border-white/10"
            >
              <span>{t.cta.btnProject}</span>
              <ArrowRight className="w-4 h-4 text-ocean-blue" />
            </Link>
          </div>

          {/* Handwritten Quote */}
          <div className="mt-10 pt-6 border-t border-sky-200/40 dark:border-white/10">
            <p className="font-handwriting text-2xl sm:text-3xl text-amber-900 dark:text-amber-200 leading-relaxed">
              {t.cta.handwrittenQuote}
            </p>
          </div>

          <p className="mt-3 text-xs text-body-blue/70">
            {t.cta.note}
          </p>
        </div>
      </div>
    </section>
  );
}
