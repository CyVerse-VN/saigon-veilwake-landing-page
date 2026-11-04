"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PlayCircle, Sparkles, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CtaSection({ onOpenDemo }: { onOpenDemo?: () => void }) {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden w-full">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Expansive Full-bleed Skyline Canvas with Mascot Victory */}
        <div className="postcard-card relative rounded-3xl sm:rounded-[44px] overflow-hidden p-8 sm:p-12 lg:p-16 shadow-2xl border border-white/80 dark:border-slate-800">
          {/* Subtle Skyline Backdrop */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <Image
              src="/assets/saigon_skyline_banner.webp"
              alt="Saigon Skyline Panorama"
              fill
              className="object-cover object-bottom"
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 dark:bg-amber-950/60 text-amber-950 dark:text-amber-200 text-xs font-bold tracking-wider uppercase border border-amber-200/80 dark:border-amber-700/60 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>{t.victoryCta.eyebrow}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[2.45rem] xl:text-[2.85rem] font-extrabold font-display text-deep-blue dark:text-white leading-[1.2] tracking-tight text-balance">
                {language === "vi" ? (
                  <>
                    <span className="inline lg:whitespace-nowrap">Cùng Vara</span>{" "}
                    <span className="inline lg:whitespace-nowrap">đánh thức Sài Gòn ngay hôm nay</span>
                  </>
                ) : (
                  t.victoryCta.title
                )}
              </h2>

              <p className="text-base sm:text-lg text-body-blue/90 dark:text-slate-300 max-w-2xl leading-relaxed">
                {t.victoryCta.subtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={
                    onOpenDemo
                      ? onOpenDemo
                      : () => {
                          const el = document.getElementById("video-demo");
                          el?.scrollIntoView({ behavior: "smooth" });
                        }
                  }
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-ocean-blue text-white hover:bg-deep-blue transition-all font-semibold text-sm sm:text-base shadow-card hover:shadow-floating group"
                >
                  <span>{t.victoryCta.btnStart}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <Link
                  href="/project"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/85 dark:bg-slate-800/90 text-deep-blue dark:text-white hover:bg-white dark:hover:bg-slate-700 transition-all font-semibold text-sm sm:text-base shadow-sm border border-sky-100 dark:border-slate-700"
                >
                  <span>{t.cta.btnProject}</span>
                  <ArrowRight className="w-4 h-4 text-ocean-blue" />
                </Link>
              </div>

              {/* Handwritten Quote */}
              <div className="pt-4 border-t border-sky-100 dark:border-slate-800">
                <p className="font-handwriting text-xl sm:text-2xl text-amber-900 dark:text-amber-200 leading-relaxed font-semibold">
                  {t.cta.handwrittenQuote}
                </p>
              </div>
            </div>

            {/* Right Side: Victory Mascot (4 cols) */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center relative">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 drop-shadow-2xl hover:scale-105 transition-transform duration-500">
                <Image
                  src="/assets/Mascot/09_victory.png"
                  alt="Vara Victory"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Mascot Bubble */}
              <div className="mt-2 px-4 py-2 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-sky-200/80 dark:border-sky-800 text-xs text-deep-blue dark:text-sky-200 font-bold shadow-md text-center max-w-[260px]">
                {t.victoryCta.bubbleText}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
