"use client";

import { useState } from "react";
import Image from "next/image";
import { Sun, Clock, Moon, Waves, ChevronRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const moodMeta: Record<
  string,
  { icon: any; iconBg: string; bgClass: string; borderClass: string }
> = {
  daylight: {
    icon: Sun,
    iconBg: "bg-amber-100 text-amber-800",
    bgClass: "bg-sky-50/70 hover:bg-sky-100/80",
    borderClass: "border-sky-200",
  },
  nostalgia: {
    icon: Clock,
    iconBg: "bg-amber-200/60 text-amber-800",
    bgClass: "bg-amber-50/50 hover:bg-amber-100/60",
    borderClass: "border-amber-200/70",
  },
  night: {
    icon: Moon,
    iconBg: "bg-indigo-900 text-indigo-200",
    bgClass: "bg-indigo-50/50 hover:bg-indigo-100/60",
    borderClass: "border-indigo-200/70",
  },
  coastal: {
    icon: Waves,
    iconBg: "bg-teal-100 text-teal-800",
    bgClass: "bg-teal-50/50 hover:bg-teal-100/60",
    borderClass: "border-teal-200/70",
  },
};

export default function TravelMoodsGallery() {
  const [selectedMood, setSelectedMood] = useState<string>("daylight");
  const { t } = useLanguage();

  const currentMood =
    t.moods.items.find((m) => m.id === selectedMood) || t.moods.items[0];

  return (
    <div className="space-y-6">
      {/* Editorial Rail Header */}
      <div className="flex items-start justify-between">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-ocean-blue dark:text-sky-300 block">
            {t.moods.headerBadge}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-deep-blue mt-1">
            {t.moods.title}
          </h3>
          <p className="text-xs sm:text-sm text-body-blue mt-1.5 max-w-sm leading-relaxed">
            {t.moods.subtitle}
          </p>
        </div>
        <span className="text-xs px-2.5 py-1 rounded-full bg-sky-100/80 dark:bg-sky-950/60 text-ocean-blue dark:text-sky-300 font-semibold flex items-center gap-1 shrink-0 border border-sky-200/50 dark:border-sky-800/60">
          <Sparkles className="w-3 h-3 text-ocean-blue dark:text-sky-300" /> {t.moods.intBadge}
        </span>
      </div>

      {/* 4 Mood buttons (Frameless Editorial Row Items) */}
      <div className="space-y-2">
        {t.moods.items.map((mood) => {
          const meta = moodMeta[mood.id] || moodMeta.daylight;
          const Icon = meta.icon;
          const isSelected = selectedMood === mood.id;
          return (
            <button
              key={mood.id}
              onClick={() => setSelectedMood(mood.id)}
              className={`w-full text-left p-3.5 rounded-2xl transition-all duration-300 flex items-center justify-between group ${
                isSelected
                  ? "bg-white/95 dark:bg-slate-800/90 shadow-lg shadow-sky-950/5 ring-1 ring-ocean-blue/30 scale-[1.01]"
                  : "hover:bg-white/70 dark:hover:bg-slate-800/50 text-body-blue"
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${meta.iconBg}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-deep-blue group-hover:text-ocean-blue transition-colors flex items-center gap-2">
                    {mood.name}
                    {isSelected && (
                      <span className="text-[9px] px-2 py-0.5 rounded-full bg-ocean-blue text-white font-medium">
                        {t.moods.viewing}
                      </span>
                    )}
                  </h4>
                  <p className="text-[11px] text-body-blue/90 dark:text-slate-300 mt-0.5">
                    {mood.tagline}
                  </p>
                </div>
              </div>
              <ChevronRight
                className={`w-4 h-4 transition-transform ${
                  isSelected
                    ? "translate-x-1 text-ocean-blue font-bold"
                    : "text-body-blue/40 group-hover:text-ocean-blue group-hover:translate-x-1"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Mood Detail / Concept Preview (Melted naturally into the canvas) */}
      <div className="pt-4 border-t border-sky-200/50 dark:border-white/10 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-deep-blue text-sm">{currentMood.name}</span>
          <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-sky-100/70 dark:bg-sky-950/60 text-ocean-blue dark:text-sky-300 font-semibold border border-sky-200/40 dark:border-sky-800/60">
            {currentMood.status}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-body-blue leading-relaxed">
          {currentMood.description}
        </p>

        {/* Coastal visual preview if coastal selected */}
        {selectedMood === "coastal" && (
          <div className="mt-3 rounded-2xl overflow-hidden shadow-lg relative h-40 w-full transition-all">
            <Image
              src="/assets/mood_coastal_v1.webp"
              alt="Vung Tau Coastal Scene"
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>

      <div className="text-[11px] text-body-blue/60 italic">
        {t.moods.note}
      </div>

      {/* Saigon Architecture & Morning Ritual (Framed Heritage Photography) */}
      <div className="pt-4 border-t border-sky-200/50 dark:border-white/10 space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-deep-blue dark:text-sky-200 text-xs uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-ocean-blue dark:text-sky-300" />
            {t.moods.ritualTitle}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {/* Card 1: French-Colonial Heritage — Saigon Post Office (Vertical Portrait) */}
          <div className="relative aspect-[3/4] min-h-[220px] rounded-2xl overflow-hidden shadow-md group border border-white/60 dark:border-white/10">
            <Image
              src="/assets/hero_french_colonial_post_office.jpg"
              alt={t.moods.ritualPostOffice}
              fill
              sizes="(max-width: 640px) 50vw, 240px"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/90 via-deep-blue/30 to-transparent flex items-end p-3 sm:p-3.5">
              <span className="text-xs text-white font-medium leading-tight line-clamp-2 drop-shadow-sm">
                {t.moods.ritualPostOffice}
              </span>
            </div>
          </div>

          {/* Card 2: Morning Coffee — Vietnamese Phin (Vertical Portrait) */}
          <div className="relative aspect-[3/4] min-h-[220px] rounded-2xl overflow-hidden shadow-md group border border-white/60 dark:border-white/10">
            <Image
              src="/assets/hero_vietnamese_phin_coffee.jpg"
              alt={t.moods.ritualCoffee}
              fill
              sizes="(max-width: 640px) 50vw, 240px"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/90 via-deep-blue/30 to-transparent flex items-end p-3 sm:p-3.5">
              <span className="text-xs text-white font-medium leading-tight line-clamp-2 drop-shadow-sm">
                {t.moods.ritualCoffee}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
