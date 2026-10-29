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
    <div className="postcard-card p-5 sm:p-6 bg-white border border-sky-border rounded-3xl">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-ocean-blue">
            {t.moods.headerBadge}
          </span>
          <h3 className="text-lg font-bold text-deep-blue mt-0.5">
            {t.moods.title}
          </h3>
          <p className="text-xs text-body-blue mt-1">{t.moods.subtitle}</p>
        </div>
        <span className="text-xs px-2 py-0.5 rounded-full bg-sky-100 text-ocean-blue font-semibold flex items-center gap-1">
          <Sparkles className="w-3 h-3" /> {t.moods.intBadge}
        </span>
      </div>

      {/* 4 Mood buttons */}
      <div className="space-y-2.5">
        {t.moods.items.map((mood) => {
          const meta = moodMeta[mood.id] || moodMeta.daylight;
          const Icon = meta.icon;
          const isSelected = selectedMood === mood.id;
          return (
            <button
              key={mood.id}
              onClick={() => setSelectedMood(mood.id)}
              className={`w-full text-left p-3 rounded-2xl border transition-all flex items-center justify-between group ${
                isSelected
                  ? `${meta.bgClass} ${meta.borderClass} shadow-sm ring-1 ring-ocean-blue/30`
                  : "bg-white/80 border-sky-border/80 hover:bg-sky-50/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105 ${meta.iconBg}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-deep-blue flex items-center gap-2">
                    {mood.name}
                    {isSelected && (
                      <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-ocean-blue text-white font-medium">
                        {t.moods.viewing}
                      </span>
                    )}
                  </h4>
                  <p className="text-[11px] text-body-blue mt-0.5">
                    {mood.tagline}
                  </p>
                </div>
              </div>
              <ChevronRight
                className={`w-4 h-4 text-body-blue/50 transition-transform ${
                  isSelected
                    ? "translate-x-1 text-ocean-blue"
                    : "group-hover:translate-x-0.5"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Mood Detail / Concept Preview box */}
      <div className="mt-4 pt-4 border-t border-sky-border/70 bg-sky-50/50 rounded-2xl p-3.5">
        <div className="flex items-center justify-between text-xs mb-1.5">
          <span className="font-bold text-deep-blue">{currentMood.name}</span>
          <span className="text-[10px] px-2 py-0.5 rounded bg-white text-body-blue font-medium border border-sky-border">
            {currentMood.status}
          </span>
        </div>
        <p className="text-xs text-body-blue leading-relaxed">
          {currentMood.description}
        </p>

        {/* Coastal visual preview if coastal selected */}
        {selectedMood === "coastal" && (
          <div className="mt-2.5 rounded-xl overflow-hidden border border-teal-200 shadow-xs relative h-36 w-full">
            <Image
              src="/assets/mood_coastal_v1.webp"
              alt="Vung Tau Coastal Scene"
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>

      <div className="mt-2 text-[10px] text-body-blue/70 italic text-center">
        {t.moods.note}
      </div>
    </div>
  );
}
