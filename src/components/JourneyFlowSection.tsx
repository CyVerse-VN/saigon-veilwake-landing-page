"use client";

import Image from "next/image";
import { Compass, KeyRound, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function JourneyFlowSection() {
  const { t, language } = useLanguage();

  const steps = [
    {
      num: t.flow.step1Num,
      title: t.flow.step1Title,
      desc: t.flow.step1Desc,
      icon: Compass,
      highlightColor: "text-ocean-blue",
      bgColor: "bg-sky-50/80 dark:bg-sky-950/40",
      borderColor: "border-sky-200 dark:border-sky-800",
    },
    {
      num: t.flow.step2Num,
      title: t.flow.step2Title,
      desc: t.flow.step2Desc,
      icon: KeyRound,
      highlightColor: "text-amber-600",
      bgColor: "bg-amber-50/80 dark:bg-amber-950/40",
      borderColor: "border-amber-200 dark:border-amber-800",
    },
    {
      num: t.flow.step3Num,
      title: t.flow.step3Title,
      desc: t.flow.step3Desc,
      icon: Sparkles,
      highlightColor: "text-teal",
      bgColor: "bg-teal/10 dark:bg-teal/20",
      borderColor: "border-teal/30 dark:border-teal/40",
    },
  ];

  return (
    <section id="dong-chay" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-sky-200/25 dark:bg-sky-900/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/90 dark:bg-sky-950/60 text-ocean-blue dark:text-sky-300 text-xs font-bold uppercase tracking-widest border border-sky-200 dark:border-sky-800 mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-ocean-blue dark:text-sky-300" />
            <span>{t.flow.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-deep-blue dark:text-white tracking-tight">
            {t.flow.title}
          </h2>
          <p className="text-base sm:text-lg text-body-blue/90 dark:text-slate-300 mt-3 leading-relaxed">
            {t.flow.subtitle}
          </p>
        </div>

        {/* Central Visual & Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Step 1 & Step 2 (Col 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            {steps.slice(0, 2).map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className={`postcard-card rounded-2xl p-6 sm:p-7 border ${step.borderColor} transition-all duration-300 hover:scale-[1.02] shadow-sm`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-extrabold tracking-widest uppercase text-amber-700 dark:text-amber-400">
                      {step.num}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full ${step.bgColor} flex items-center justify-center shrink-0 shadow-xs`}
                    >
                      <Icon className={`w-4 h-4 ${step.highlightColor}`} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-display text-deep-blue dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-body-blue/90 dark:text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Center: The Winding River Flow (Col 6-7) */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center relative my-4 lg:my-0">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 drop-shadow-2xl hover:scale-105 transition-transform duration-700">
              <Image
                src="/assets/Ký hiệu/04_flow.png"
                alt="The Flow of Memory"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-[11px] font-bold text-ocean-blue dark:text-sky-300 uppercase tracking-widest mt-2">
              {language === "vi" ? "Dòng Sông Ký Ức" : "River of Memories"}
            </span>
          </div>

          {/* Right Column: Step 3 & Mascot Guide (Col 8-12) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Step 3 Card */}
            {steps.slice(2, 3).map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className={`postcard-card rounded-2xl p-6 sm:p-7 border ${step.borderColor} transition-all duration-300 hover:scale-[1.02] shadow-sm`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-extrabold tracking-widest uppercase text-amber-700 dark:text-amber-400">
                      {step.num}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full ${step.bgColor} flex items-center justify-center shrink-0 shadow-xs`}
                    >
                      <Icon className={`w-4 h-4 ${step.highlightColor}`} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-display text-deep-blue dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-body-blue/90 dark:text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}

            {/* Mascot Guide Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-sky-200/80 dark:border-sky-800 flex items-center gap-4 backdrop-blur-md shadow-xs">
              <div className="relative w-20 h-20 shrink-0 drop-shadow-lg">
                <Image
                  src="/assets/Mascot/02_direction_guide.png"
                  alt="Vara Guide"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-ocean-blue dark:text-sky-300 uppercase tracking-wider block">
                  {language === "vi" ? "Người bạn đồng hành" : "Companion Guide"}
                </span>
                <p className="text-xs text-deep-blue dark:text-slate-200 font-medium leading-relaxed">
                  {t.flow.guideTip}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
