"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Compass,
  Map,
  BookOpen,
  Award,
  Sparkles,
  Camera,
  X,
  MapPin,
  CheckCircle2,
  Lock,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type AppTab = "explore" | "journey" | "journal" | "passport";

export default function InteractiveAppPreview() {
  const [activeTab, setActiveTab] = useState<AppTab>("explore");
  const [kyMonOpen, setKyMonOpen] = useState(false);
  const [npcOpen, setNpcOpen] = useState(false);
  const [arOpen, setArOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(true);
  const { t } = useLanguage();

  return (
    <div className="postcard-card p-5 sm:p-6 bg-white border border-sky-border rounded-3xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-ocean-blue">
            {t.appPreview.badge}
          </span>
          <h3 className="text-base sm:text-lg font-bold text-deep-blue">
            {t.appPreview.title}
          </h3>
          <p className="text-xs text-body-blue">
            {t.appPreview.subtitle}
          </p>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200 font-bold">
          {t.appPreview.specTag}
        </span>
      </div>

      {/* Smartphone Chassis Mockup */}
      <div className="relative mx-auto max-w-[320px] rounded-[36px] p-3 bg-gradient-to-b from-slate-800 to-slate-900 shadow-floating border-4 border-slate-700">
        {/* Dynamic Island / Speaker notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-900 ml-auto mr-2" />
        </div>

        {/* Phone Screen Container */}
        <div className="relative w-full h-[540px] bg-sky-50 rounded-[28px] overflow-hidden flex flex-col justify-between border border-white/20 select-none">
          {/* Top Status Bar */}
          <div className="pt-3 px-5 flex items-center justify-between text-[11px] font-semibold text-deep-blue z-20">
            <span>09:41</span>
            <div className="flex items-center gap-1.5 text-xs">
              <span>5G</span>
              <span className="w-4 h-2 rounded-sm border border-deep-blue/80 inline-block" />
            </div>
          </div>

          {/* Top In-App Header */}
          <div className="px-4 py-2 flex items-center justify-between bg-white/70 backdrop-blur-sm border-b border-sky-border/60 z-10">
            <div className="flex items-center gap-1.5">
              <Image
                src="/assets/logo_emblem.png"
                alt="Emblem"
                width={18}
                height={18}
                className="object-contain"
              />
              <span className="text-xs font-bold text-deep-blue tracking-wide">
                SAIGON: VEILWAKE
              </span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold">
              {t.appPreview.weather}
            </span>
          </div>

          {/* MAIN SCREEN CONTENT ACCORDING TO TAB */}
          <div className="flex-1 relative overflow-hidden">
            {/* 1. EXPLORE TAB (MAP FIRST) */}
            {activeTab === "explore" && (
              <div className="relative w-full h-full bg-[#E5F3F8]">
                {/* Simulated Map Visual */}
                <div className="absolute inset-0 opacity-80">
                  <Image
                    src="/assets/act03_map.png"
                    alt="Map preview"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Marker: Bưu điện Trung tâm */}
                <button
                  onClick={() => setSelectedPlace(true)}
                  className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer animate-bounce"
                >
                  <span className="px-2 py-0.5 rounded-full bg-white text-[10px] font-bold text-deep-blue shadow-md border border-sky-200">
                    {t.appPreview.postOfficeMarker}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-ocean-blue text-white flex items-center justify-center shadow-lg ring-4 ring-ocean-blue/20">
                    <MapPin className="w-4 h-4" />
                  </div>
                </button>

                {/* Marker: Nhà thờ Đức Bà */}
                <button
                  onClick={() => setSelectedPlace(false)}
                  className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer"
                >
                  <span className="px-1.5 py-0.5 rounded-full bg-white/90 text-[9px] font-bold text-deep-blue shadow border border-sky-100">
                    {t.appPreview.notreDameMarker}
                  </span>
                  <div className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center shadow">
                    <MapPin className="w-3 h-3" />
                  </div>
                </button>

                {/* Discovery Bottom Card */}
                {selectedPlace ? (
                  <div className="absolute bottom-20 left-3 right-3 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-sky-border animate-in slide-in-from-bottom-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-wider text-ocean-blue">
                          {t.appPreview.postOfficeBadge}
                        </span>
                        <h4 className="text-xs font-bold text-deep-blue">
                          {t.appPreview.postOfficeTitle}
                        </h4>
                        <p className="text-[10px] text-body-blue mt-0.5">
                          {t.appPreview.postOfficeDistance}
                        </p>
                      </div>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-bold shrink-0">
                        {t.appPreview.readyBadge}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center justify-between pt-1.5 border-t border-sky-100">
                      <span className="text-[9px] text-teal-700 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> {t.appPreview.readyBadge}
                      </span>
                      <button
                        onClick={() => setActiveTab("journey")}
                        className="text-[10px] px-2.5 py-1 rounded-full bg-ocean-blue text-white font-semibold"
                      >
                        {t.appPreview.btnStartQuest}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="absolute bottom-20 left-3 right-3 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-sky-border">
                    <h4 className="text-xs font-bold text-deep-blue">{t.appPreview.notreDameTitle}</h4>
                    <p className="text-[10px] text-body-blue mt-0.5">
                      {t.appPreview.notreDameNightNote}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* 2. JOURNEY TAB (HÀNH TRÌNH) */}
            {activeTab === "journey" && (
              <div className="p-4 h-full bg-white overflow-y-auto">
                <span className="text-[10px] font-bold text-ocean-blue uppercase">
                  {t.appPreview.journeyTitle}
                </span>
                <h4 className="text-sm font-bold text-deep-blue mt-0.5">
                  {t.appPreview.journeySub}
                </h4>
                <div className="mt-3 space-y-2.5">
                  <div className="p-2.5 rounded-xl border border-ocean-blue/30 bg-sky-50/70">
                    <div className="flex items-center justify-between text-[11px] font-bold text-deep-blue">
                      <span>{t.appPreview.stop1Day}</span>
                      <span className="text-[9px] text-ocean-blue">{t.appPreview.stop1DayTag}</span>
                    </div>
                    <p className="text-[10px] text-body-blue mt-1">
                      {t.appPreview.stop1DayDesc}
                    </p>
                    <div className="mt-2 text-[9px] font-semibold text-teal-700">
                      {t.appPreview.stop1DayReward}
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl border border-sky-border bg-slate-50/70 opacity-90">
                    <div className="flex items-center justify-between text-[11px] font-bold text-deep-blue">
                      <span>{t.appPreview.stop2Night}</span>
                      <span className="text-[9px] text-indigo-700">{t.appPreview.stop2NightTag}</span>
                    </div>
                    <p className="text-[10px] text-body-blue mt-1">
                      {t.appPreview.stop2NightDesc}
                    </p>
                    <div className="mt-2 text-[9px] font-semibold text-veil-lilac">
                      {t.appPreview.stop2NightReward}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. JOURNAL TAB (NHẬT KÝ) */}
            {activeTab === "journal" && (
              <div className="p-4 h-full bg-cream/30 overflow-y-auto">
                <span className="text-[10px] font-bold text-amber-700 uppercase">
                  {t.appPreview.journalHeader}
                </span>
                <h4 className="text-sm font-bold text-deep-blue mt-0.5">
                  {t.appPreview.journalTitle}
                </h4>
                <div className="mt-3 space-y-2">
                  <div className="p-2 rounded-xl bg-white border border-amber-200/60 shadow-sm text-[10px]">
                    <span className="font-bold text-deep-blue">1:</span> {t.appPreview.clue1}
                  </div>
                  <div className="p-2 rounded-xl bg-white border border-amber-200/60 shadow-sm text-[10px]">
                    <span className="font-bold text-deep-blue">2:</span> {t.appPreview.clue2}
                  </div>
                </div>
              </div>
            )}

            {/* 4. PASSPORT TAB (HỘ CHIẾU KÝ ỨC) */}
            {activeTab === "passport" && (
              <div className="p-4 h-full bg-white overflow-y-auto text-center">
                <span className="text-[10px] font-bold text-ocean-blue uppercase">
                  {t.appPreview.passportHeader}
                </span>
                <h4 className="text-sm font-bold text-deep-blue mt-0.5">
                  {t.appPreview.passportTitle}
                </h4>
                <div className="mt-3 grid grid-cols-2 gap-2 text-left">
                  <div className="p-2 rounded-xl border border-sky-200 bg-sky-50 text-[10px]">
                    <span className="font-bold text-ocean-blue block">{t.appPreview.badgeTitle}</span>
                    <span className="text-[9px] text-teal-700">{t.appPreview.unlockedSample}</span>
                  </div>
                  <div className="p-2 rounded-xl border border-dashed border-sky-200 bg-slate-50 text-[10px] text-body-blue flex items-center justify-center gap-1">
                    <Lock className="w-3 h-3" /> {t.appPreview.lockedSample}
                  </div>
                </div>
              </div>
            )}

            {/* NPC DIALOG MODAL IF OPEN */}
            {npcOpen && (
              <div className="absolute inset-x-3 bottom-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-sky-border z-30 animate-in fade-in duration-200">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center p-0.5 border border-sky-200 overflow-hidden shrink-0">
                      <Image
                        src="/assets/npc_kiri.png"
                        alt="NPC Kiri"
                        width={30}
                        height={30}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-deep-blue block leading-tight">
                        Kiri
                      </span>
                      <span className="text-[9px] text-ocean-blue font-semibold">
                        {t.appPreview.npcCompanion}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setNpcOpen(false)}
                    className="p-1 rounded-full hover:bg-sky-50 text-body-blue"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-[11px] text-body-blue mt-2 leading-relaxed bg-sky-50/70 p-2 rounded-lg">
                  {t.appPreview.npcDialogue}
                </p>
                <span className="text-[9px] text-body-blue/60 italic block mt-1">
                  {t.appPreview.npcNote}
                </span>
              </div>
            )}

            {/* AR LENS OVERLAY IF OPEN */}
            {arOpen && (
              <div className="absolute inset-0 bg-night-indigo/90 backdrop-blur-sm z-30 flex flex-col items-center justify-between p-4 text-white animate-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between w-full">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-veil-lilac/30 text-white font-bold border border-veil-lilac/50">
                    {t.appPreview.arLensHeader}
                  </span>
                  <button
                    onClick={() => setArOpen(false)}
                    className="p-1 rounded-full bg-white/20 text-white hover:bg-white/30"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-center space-y-2">
                  <Sparkles className="w-10 h-10 text-veil-lilac mx-auto animate-pulse" />
                  <p className="text-xs font-bold">{t.appPreview.arScanning}</p>
                  <p className="text-[10px] text-slate-300 max-w-[200px]">
                    {t.appPreview.arHint}
                  </p>
                </div>
                <button
                  onClick={() => setArOpen(false)}
                  className="px-4 py-1.5 rounded-full bg-veil-lilac text-white text-xs font-bold"
                >
                  {t.appPreview.btnCloseAR}
                </button>
              </div>
            )}

            {/* 2X2 KÝ MÔN POPUP MENU */}
            {kyMonOpen && (
              <div className="absolute inset-x-4 bottom-20 bg-white/95 backdrop-blur-lg rounded-2xl p-3 shadow-2xl border border-sky-border z-40 animate-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between mb-2 pb-1 border-b border-sky-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-ocean-blue">
                    {t.appPreview.kyMonTitle}
                  </span>
                  <button
                    onClick={() => setKyMonOpen(false)}
                    className="p-1 rounded-full hover:bg-sky-50 text-body-blue"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      setActiveTab("explore");
                      setKyMonOpen(false);
                    }}
                    className={`p-2 rounded-xl text-left border flex flex-col gap-1 transition-all ${
                      activeTab === "explore"
                        ? "bg-sky-100 border-ocean-blue text-deep-blue"
                        : "bg-slate-50 border-sky-border text-body-blue hover:bg-sky-50"
                    }`}
                  >
                    <Map className="w-4 h-4 text-ocean-blue" />
                    <span className="text-[11px] font-bold">{t.appPreview.menuExplore}</span>
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab("journey");
                      setKyMonOpen(false);
                    }}
                    className={`p-2 rounded-xl text-left border flex flex-col gap-1 transition-all ${
                      activeTab === "journey"
                        ? "bg-sky-100 border-ocean-blue text-deep-blue"
                        : "bg-slate-50 border-sky-border text-body-blue hover:bg-sky-50"
                    }`}
                  >
                    <Compass className="w-4 h-4 text-ocean-blue" />
                    <span className="text-[11px] font-bold">{t.appPreview.menuJourney}</span>
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab("journal");
                      setKyMonOpen(false);
                    }}
                    className={`p-2 rounded-xl text-left border flex flex-col gap-1 transition-all ${
                      activeTab === "journal"
                        ? "bg-sky-100 border-ocean-blue text-deep-blue"
                        : "bg-slate-50 border-sky-border text-body-blue hover:bg-sky-50"
                    }`}
                  >
                    <BookOpen className="w-4 h-4 text-ocean-blue" />
                    <span className="text-[11px] font-bold">{t.appPreview.menuJournal}</span>
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab("passport");
                      setKyMonOpen(false);
                    }}
                    className={`p-2 rounded-xl text-left border flex flex-col gap-1 transition-all ${
                      activeTab === "passport"
                        ? "bg-sky-100 border-ocean-blue text-deep-blue"
                        : "bg-slate-50 border-sky-border text-body-blue hover:bg-sky-50"
                    }`}
                  >
                    <Award className="w-4 h-4 text-ocean-blue" />
                    <span className="text-[11px] font-bold">{t.appPreview.menuPassport}</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* BOTTOM THREE CONTROLS (SPEC COMPLIANT: NPC - KÝ MÔN - AR LENS) */}
          <div className="px-5 py-3 bg-white/95 backdrop-blur-md border-t border-sky-border/80 flex items-center justify-between z-20">
            {/* Left: NPC Companion */}
            <button
              onClick={() => {
                setNpcOpen(!npcOpen);
                setKyMonOpen(false);
              }}
              title={t.appPreview.npcCompanion}
              className="flex flex-col items-center gap-0.5 text-body-blue hover:text-ocean-blue transition-colors group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center p-0.5 shadow-sm border border-sky-200 overflow-hidden group-hover:scale-105 transition-transform">
                <Image
                  src="/assets/npc_kiri.png"
                  alt="NPC Kiri"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </div>
              <span className="text-[9px] font-bold">{t.appPreview.ctrlNPC}</span>
            </button>

            {/* Center: Central KÝ MÔN button (Opens 2x2 Menu) */}
            <button
              onClick={() => {
                setKyMonOpen(!kyMonOpen);
                setNpcOpen(false);
              }}
              title={t.appPreview.ctrlKyMon}
              className="relative -top-3 flex flex-col items-center group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-ocean-blue to-teal text-white flex items-center justify-center shadow-lg ring-4 ring-white group-hover:scale-105 transition-transform p-2.5">
                <Image
                  src="/assets/logo_emblem.png"
                  alt={t.appPreview.ctrlKyMon}
                  width={26}
                  height={26}
                  className={`object-contain brightness-0 invert transition-transform ${kyMonOpen ? "rotate-45" : ""}`}
                />
              </div>
              <span className="text-[10px] font-bold text-deep-blue mt-0.5">
                {t.appPreview.ctrlKyMon}
              </span>
            </button>

            {/* Right: AR Lens */}
            <button
              onClick={() => {
                setArOpen(!arOpen);
                setKyMonOpen(false);
                setNpcOpen(false);
              }}
              title={t.appPreview.ctrlAR}
              className="flex flex-col items-center gap-0.5 text-body-blue hover:text-veil-lilac transition-colors cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 shadow-sm">
                <Camera className="w-4 h-4" />
              </div>
              <span className="text-[9px] font-bold">{t.appPreview.ctrlAR}</span>
            </button>
          </div>
        </div>
      </div>

      <p className="mt-4 text-center text-xs text-body-blue/80 italic">
        {t.appPreview.footerNote}
      </p>
    </div>
  );
}
