"use client";

import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function PortalsSection() {
  const { t } = useLanguage();

  const portalCards = [
    {
      id: "portal-1",
      mascot: "/assets/Mascot/06_hidden_spot.png",
      tag: t.portals.portal1Tag,
      title: t.portals.portal1Title,
      desc: t.portals.portal1Desc,
      btn: t.portals.portal1Btn,
      route: t.portals.portal1Route,
      chips: t.portals.portal1Chips,
      targetAnchor: "#kham-pha-hem",
    },
    {
      id: "portal-2",
      mascot: "/assets/Mascot/07_storytelling.png",
      tag: t.portals.portal2Tag,
      title: t.portals.portal2Title,
      desc: t.portals.portal2Desc,
      btn: t.portals.portal2Btn,
      route: t.portals.portal2Route,
      chips: t.portals.portal2Chips,
      targetAnchor: "#chapter-zero",
    },
    {
      id: "portal-3",
      mascot: "/assets/Mascot/08_check_in.png",
      tag: t.portals.portal3Tag,
      title: t.portals.portal3Title,
      desc: t.portals.portal3Desc,
      btn: t.portals.portal3Btn,
      route: t.portals.portal3Route,
      chips: t.portals.portal3Chips,
      targetAnchor: "#ho-chieu-huy-hieu",
    },
    {
      id: "portal-4",
      mascot: "/assets/Mascot/04_ar_scan.png",
      tag: t.portals.portal4Tag,
      title: t.portals.portal4Title,
      desc: t.portals.portal4Desc,
      btn: t.portals.portal4Btn,
      route: t.portals.portal4Route,
      chips: t.portals.portal4Chips,
      targetAnchor: "#lang-kinh-ar",
    },
  ];

  const handleScrollTo = (anchor: string) => {
    const el = document.querySelector(anchor);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="bon-canh-cong" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background ambient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-sky-200/20 dark:bg-indigo-900/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 dark:bg-amber-950/50 text-amber-900 dark:text-amber-200 text-xs font-bold uppercase tracking-widest border border-amber-200 dark:border-amber-700/60 mb-3 shadow-xs">
            <div className="relative w-4 h-4 shrink-0">
              <Image
                src="/assets/Ký hiệu/03_magic_portal.png"
                alt="Magic Portal"
                fill
                className="object-contain"
              />
            </div>
            <span>{t.portals.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-deep-blue dark:text-white tracking-tight">
            {t.portals.title}
          </h2>
          <p className="text-base sm:text-lg text-body-blue/90 dark:text-slate-300 mt-3 leading-relaxed">
            {t.portals.subtitle}
          </p>
        </div>

        {/* 4 Glass Cards Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {portalCards.map((portal) => (
            <div
              key={portal.id}
              className="postcard-card rounded-[28px] p-6 sm:p-8 flex flex-col justify-between group hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Meta Tag & Sub-route pill */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-extrabold tracking-widest uppercase text-amber-700 dark:text-amber-400">
                  {portal.tag}
                </span>
                <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-sky-100/80 dark:bg-sky-950/60 text-ocean-blue dark:text-sky-300 border border-sky-200/80 dark:border-sky-800">
                  {portal.route}
                </span>
              </div>

              {/* Card Title & Content Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center my-auto">
                <div className="sm:col-span-8 space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-deep-blue dark:text-white group-hover:text-ocean-blue dark:group-hover:text-sky-300 transition-colors">
                    {portal.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-body-blue/90 dark:text-slate-300 leading-relaxed">
                    {portal.desc}
                  </p>

                  {/* Micro Chips */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {portal.chips.map((chip, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white/80 dark:bg-slate-800/80 text-deep-blue dark:text-slate-200 border border-sky-100 dark:border-slate-700 shadow-xs"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mascot Visual on the Right */}
                <div className="sm:col-span-4 flex justify-center sm:justify-end">
                  <div className="relative w-36 h-36 sm:w-40 sm:h-40 group-hover:scale-105 transition-transform duration-500 drop-shadow-xl">
                    <Image
                      src={portal.mascot}
                      alt={portal.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-5 mt-4 border-t border-sky-100/80 dark:border-slate-700/80 flex items-center justify-between">
                <button
                  onClick={() => handleScrollTo(portal.targetAnchor)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-ocean-blue text-white hover:bg-deep-blue transition-all font-semibold text-xs shadow-xs group-hover:translate-x-1"
                >
                  <span>{portal.btn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="w-2 h-2 rounded-full bg-ocean-blue/30 group-hover:bg-teal group-hover:scale-150 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

