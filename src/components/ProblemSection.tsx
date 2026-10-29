"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Landmark, Moon, Cpu } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ProblemSection() {
  const { t } = useLanguage();

  return (
    <section id="trai-nghiem" className="py-12 sm:py-16 border-t border-sky-border/60 bg-gradient-to-b from-white to-sky-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* LEFT COLUMN: PROBLEM STORYTELLING (ACT 02) */}
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold text-ocean-blue tracking-wider uppercase">
              {t.problem.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-deep-blue leading-snug">
              {t.problem.title}
            </h2>
            <p className="text-sm sm:text-base text-body-blue leading-relaxed">
              {t.problem.description}
            </p>

            <a
              href="#cach-choi"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-ocean-blue hover:text-deep-blue group transition-colors"
            >
              <span>{t.problem.cta}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Real Postcard Collage Visual from assets_v1 */}
            <div className="relative rounded-3xl overflow-hidden border border-sky-border shadow-soft bg-white p-4 sm:p-5 mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden border border-sky-100 shadow-sm group">
                  <Image
                    src="/assets/act02_postcard_left.webp"
                    alt="Saigon Cultural Traveler"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute bottom-2 left-2 text-[10px] px-2.5 py-0.5 rounded-full bg-white/90 text-deep-blue font-bold backdrop-blur-xs shadow-xs">
                    {t.problem.postcardTag1}
                  </span>
                </div>
                <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden border border-sky-100 shadow-sm group">
                  <Image
                    src="/assets/act02_postcard_right.webp"
                    alt="Saigon Heritage Corner"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute bottom-2 left-2 text-[10px] px-2.5 py-0.5 rounded-full bg-white/90 text-deep-blue font-bold backdrop-blur-xs shadow-xs">
                    {t.problem.postcardTag2}
                  </span>
                </div>
              </div>
              <div className="mt-3 text-center">
                <p className="font-handwriting text-base sm:text-lg text-amber-900/80">
                  {t.problem.handwrittenQuote}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 3 TOURISM VALUES PREVIEW (ACT 07 PREVIEW) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="postcard-card p-5 sm:p-6 bg-white border border-sky-border rounded-3xl">
              <span className="text-[11px] font-bold text-ocean-blue uppercase tracking-wider block">
                {t.problem.rightBadge}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-deep-blue mt-0.5">
                {t.problem.rightTitle}
              </h3>
              <p className="text-xs text-body-blue mt-1">
                {t.problem.rightDesc}
              </p>

              {/* 3 Value Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-4">
                {/* 1. Cultural */}
                <div className="p-3 rounded-2xl bg-sky-50/60 border border-sky-border text-center flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mb-1.5">
                    <Landmark className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-deep-blue">{t.problem.pillar1Title}</h4>
                  <p className="text-[10px] text-body-blue mt-1 leading-snug">
                    {t.problem.pillar1Desc}
                  </p>
                </div>

                {/* 2. Night */}
                <div className="p-3 rounded-2xl bg-indigo-50/60 border border-indigo-100 text-center flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center mb-1.5">
                    <Moon className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-deep-blue">{t.problem.pillar2Title}</h4>
                  <p className="text-[10px] text-body-blue mt-1 leading-snug">
                    {t.problem.pillar2Desc}
                  </p>
                </div>

                {/* 3. Digital */}
                <div className="p-3 rounded-2xl bg-teal-50/60 border border-teal-100 text-center flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mb-1.5">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-deep-blue">{t.problem.pillar3Title}</h4>
                  <p className="text-[10px] text-body-blue mt-1 leading-snug">
                    {t.problem.pillar3Desc}
                  </p>
                </div>
              </div>

              {/* CTA link to project page */}
              <div className="mt-4 pt-3 border-t border-sky-border/70">
                <Link
                  href="/project"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-ocean-blue hover:text-deep-blue transition-colors"
                >
                  <span>{t.problem.projectLink}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
