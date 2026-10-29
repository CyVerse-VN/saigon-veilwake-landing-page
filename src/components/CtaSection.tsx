"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CtaSection({ onOpenDemo }: { onOpenDemo?: () => void }) {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-sky-50 to-page relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Postcard Frame for the final call to action */}
        <div className="postcard-card p-8 sm:p-12 bg-white/95 backdrop-blur-sm border border-sky-border rounded-[36px] shadow-floating relative overflow-hidden">
          {/* High-res Saigon skyline panorama background accent */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <Image
              src="/assets/saigon_skyline_banner.webp"
              alt="Saigon Skyline Panorama"
              fill
              className="object-cover object-bottom"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-ocean-blue text-xs font-bold tracking-wider uppercase border border-sky-200 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-ocean-blue" />
            <span>{t.cta.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-deep-blue leading-tight max-w-2xl mx-auto">
            {t.cta.title}
          </h2>

          <p className="text-sm sm:text-base text-body-blue mt-4 max-w-xl mx-auto leading-relaxed">
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
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-ocean-blue/40 bg-sky-50 text-deep-blue hover:bg-sky-100 transition-all font-semibold text-sm sm:text-base shadow-sm"
            >
              <span>{t.cta.btnProject}</span>
              <ArrowRight className="w-4 h-4 text-ocean-blue" />
            </Link>
          </div>

          {/* Handwritten Quote */}
          <div className="mt-8 pt-6 border-t border-sky-100">
            <p className="font-handwriting text-base sm:text-xl text-amber-900/80">
              {t.cta.handwrittenQuote}
            </p>
          </div>

          <p className="mt-3 text-[11px] text-body-blue/70">
            {t.cta.note}
          </p>
        </div>
      </div>
    </section>
  );
}
