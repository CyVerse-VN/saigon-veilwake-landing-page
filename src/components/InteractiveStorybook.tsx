"use client";

import React, { useState, useRef, useEffect, forwardRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  MapPin,
  Sparkles,
  CheckCircle2,
  Volume2,
  VolumeX,
  Bookmark,
  RotateCcw,
  Maximize2,
  Minimize2,
  X,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { storybookPages } from "@/data/storybookTemplateData";

// Dynamically import HTMLFlipBook with SSR disabled
const HTMLFlipBook = dynamic(() => import("react-pageflip"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[520px] flex flex-col items-center justify-center p-6">
      <div className="relative w-16 h-16 mb-3 animate-bounce">
        <Image
          src="/assets/Mascot/07_storytelling.png"
          alt="Vara Reading"
          fill
          className="object-contain"
        />
      </div>
      <p className="text-xs font-bold text-ocean-blue dark:text-sky-300 animate-pulse">
        Đang mở Cuốn Sách Ký Ức Sài Gòn...
      </p>
      <span className="text-[10px] text-body-blue/60 dark:text-slate-400 mt-0.5 font-mono">
        Loading Flipbook Engine
      </span>
    </div>
  ),
}) as any;

// Helper: Synthesize an authentic paper rustle sound when flipping
function playPageTurnSound() {
  try {
    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const duration = 0.16;
    const bufferSize = ctx.sampleRate * duration;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
    }
    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(1400, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(700, ctx.currentTime + duration);
    filter.Q.value = 1.6;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.18, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    whiteNoise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    whiteNoise.start();
  } catch (e) {
    // Ignored if user hasn't interacted yet
  }
}

// Custom Page Wrapper forwarding ref to DOM element for react-pageflip
// IMPORTANT: All pages maintain constant paper/parchment colors in both Day and Night modes!
interface PageProps {
  children: React.ReactNode;
  className?: string;
  pageNum?: number;
  "data-density"?: string;
}

const Page = forwardRef<HTMLDivElement, PageProps>((props, ref) => {
  return (
    <div
      ref={ref}
      data-density={props["data-density"]}
      className={`page relative w-full h-full overflow-hidden select-none bg-[#FAF7F0] text-[#1E3A5F] ${props.className || ""}`}
    >
      {props.children}
    </div>
  );
});
Page.displayName = "Page";

export default function InteractiveStorybook() {
  const { language } = useLanguage();
  const bookRef = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 10;
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isFullsize, setIsFullsize] = useState(false);

  // Beat states
  const [selectedQuiz, setSelectedQuiz] = useState<number | null>(null);
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);
  const [hasStamped, setHasStamped] = useState(false);
  const [questStarted, setQuestStarted] = useState(false);
  const [arActive, setArActive] = useState(false);

  // Toggle Fullsize & trigger canvas resize
  const toggleFullsize = () => {
    setIsFullsize((prev) => {
      const next = !prev;
      setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
      }, 150);
      return next;
    });
  };

  // Keyboard navigation & Esc to exit Fullsize
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFullsize) {
        setIsFullsize(false);
        setTimeout(() => window.dispatchEvent(new Event("resize")), 150);
      } else if (e.key === "ArrowLeft") {
        bookRef.current?.pageFlip()?.flipPrev();
      } else if (e.key === "ArrowRight") {
        bookRef.current?.pageFlip()?.flipNext();
      }
    };

    if (isFullsize) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFullsize]);

  // Sync flip event
  const onFlip = (e: any) => {
    setCurrentPage(e.data);
    if (soundEnabled) {
      playPageTurnSound();
    }
  };

  const handleNext = () => {
    bookRef.current?.pageFlip()?.flipNext();
  };

  const handlePrev = () => {
    bookRef.current?.pageFlip()?.flipPrev();
  };

  const handleJumpToPage = (pageNum: number) => {
    bookRef.current?.pageFlip()?.flip(pageNum);
  };

  // Chapter tabs: Cover, Act I, Act II, Act III, Act IV, Ending
  const chapterTabs = [
    { label: language === "vi" ? "Bìa Sách" : "Cover", page: 0 },
    { label: language === "vi" ? "Hồi I" : "Act I", page: 1 },
    { label: language === "vi" ? "Hồi II" : "Act II", page: 3 },
    { label: language === "vi" ? "Hồi III" : "Act III", page: 5 },
    { label: language === "vi" ? "Hồi IV" : "Act IV", page: 7 },
    { label: language === "vi" ? "Kết" : "Ending", page: 9 },
  ];

  return (
    <div
      className={
        isFullsize
          ? "fixed inset-0 z-50 bg-[#050A14]/95 backdrop-blur-2xl p-3 sm:p-5 lg:p-6 flex flex-col justify-between overflow-hidden animate-in fade-in duration-300"
          : "w-full relative py-2 transition-all duration-300"
      }
    >
      {/* Top Controls & Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 px-1 z-20">
        {/* Chapter Tabs & Fullsize Title Indicator */}
        <div className="flex items-center gap-2 max-w-full overflow-x-auto">
          {isFullsize && (
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider shrink-0">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Full Size Reader</span>
            </div>
          )}

          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white/85 dark:bg-slate-900/85 backdrop-blur-md border border-sky-150 dark:border-slate-800 shadow-sm shrink-0">
            {chapterTabs.map((tab, idx) => {
              const isActive =
                tab.page === 0
                  ? currentPage === 0
                  : tab.page === 9
                  ? currentPage >= 9
                  : currentPage === tab.page || currentPage === tab.page + 1;

              return (
                <button
                  key={idx}
                  onClick={() => handleJumpToPage(tab.page)}
                  className={`px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                    isActive
                      ? "bg-ocean-blue text-white shadow-xs scale-105"
                      : "text-body-blue dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-slate-800"
                  }`}
                >
                  <span>{tab.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Controls: Full Size Toggle + Sound FX Toggle + Page Counter + Prev/Next */}
        <div className="flex items-center gap-2 shrink-0">
          {/* FULL SIZE TOGGLE BUTTON */}
          <button
            onClick={toggleFullsize}
            title={
              isFullsize
                ? language === "vi"
                  ? "Thu nhỏ (Esc)"
                  : "Exit Full Size (Esc)"
                : language === "vi"
                ? "Mở xem toàn màn hình (Full Size)"
                : "Open Full Size Reader"
            }
            className={`px-3 py-1.5 rounded-xl border transition-all text-xs font-bold flex items-center gap-1.5 shadow-sm ${
              isFullsize
                ? "bg-amber-500 text-slate-950 border-amber-400 hover:bg-amber-400"
                : "bg-ocean-blue text-white hover:bg-deep-blue border-ocean-blue"
            }`}
          >
            {isFullsize ? (
              <>
                <Minimize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">
                  {language === "vi" ? "Thu Nhỏ (Esc)" : "Exit (Esc)"}
                </span>
              </>
            ) : (
              <>
                <Maximize2 className="w-3.5 h-3.5" />
                <span>{language === "vi" ? "Xem Full Size" : "Full Size"}</span>
              </>
            )}
          </button>

          {/* Sound Toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            title={soundEnabled ? "Tắt âm thanh lật trang" : "Bật âm thanh lật trang"}
            className={`p-1.5 rounded-xl border transition-all text-xs flex items-center gap-1 shadow-xs ${
              soundEnabled
                ? "bg-amber-100/80 dark:bg-amber-950/60 border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-200"
                : "bg-white/80 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400"
            }`}
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-amber-700 dark:text-amber-300" />
            ) : (
              <VolumeX className="w-4 h-4 opacity-50" />
            )}
          </button>

          {/* Page Indicator */}
          <span className="text-xs font-mono font-bold text-ocean-blue dark:text-sky-300 px-2.5 py-1 rounded-full bg-sky-50 dark:bg-slate-800 border border-sky-200 dark:border-slate-700">
            {language === "vi" ? "Trang" : "Page"} {currentPage + 1} / {totalPages}
          </span>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              disabled={currentPage === 0}
              aria-label="Previous Page"
              className={`p-1.5 rounded-xl border transition-all ${
                currentPage === 0
                  ? "opacity-30 cursor-not-allowed border-slate-200 dark:border-slate-800 text-slate-400"
                  : "bg-white dark:bg-slate-800 hover:bg-ocean-blue hover:text-white border-sky-200 dark:border-slate-700 text-deep-blue dark:text-white shadow-xs"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage >= totalPages - 1}
              aria-label="Next Page"
              className={`p-1.5 rounded-xl border transition-all ${
                currentPage >= totalPages - 1
                  ? "opacity-30 cursor-not-allowed border-slate-200 dark:border-slate-800 text-slate-400"
                  : "bg-white dark:bg-slate-800 hover:bg-ocean-blue hover:text-white border-sky-200 dark:border-slate-700 text-deep-blue dark:text-white shadow-xs"
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Close button in fullsize */}
          {isFullsize && (
            <button
              onClick={toggleFullsize}
              aria-label="Close Full Size"
              className="p-1.5 rounded-xl bg-white/10 hover:bg-rose-600 text-white border border-white/20 transition-all ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* FLOATING SIDE CHEVRON BUTTONS IN FULLSIZE MODE */}
      {isFullsize && (
        <>
          <button
            onClick={handlePrev}
            disabled={currentPage === 0}
            aria-label="Previous Page"
            className={`hidden lg:flex fixed left-4 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-full bg-slate-900/80 hover:bg-ocean-blue text-white border border-white/20 backdrop-blur-md shadow-2xl transition-all hover:scale-110 ${
              currentPage === 0 ? "opacity-20 cursor-not-allowed" : ""
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage >= totalPages - 1}
            aria-label="Next Page"
            className={`hidden lg:flex fixed right-4 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-full bg-slate-900/80 hover:bg-ocean-blue text-white border border-white/20 backdrop-blur-md shadow-2xl transition-all hover:scale-110 ${
              currentPage >= totalPages - 1 ? "opacity-20 cursor-not-allowed" : ""
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* FLIPBOOK WORKBENCH */}
      <div
        className={`relative w-full flex flex-col items-center justify-center my-auto bg-transparent ${
          isFullsize ? "h-[78vh] sm:h-[82vh]" : ""
        }`}
      >
        {/* User Interaction Guide Pill (only in standard view) */}
        {!isFullsize && (
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/80 border border-sky-200/80 dark:border-slate-700 text-[11px] font-semibold text-ocean-blue dark:text-sky-300 shadow-sm backdrop-blur-md">
            <BookOpen className="w-3.5 h-3.5 text-amber-600" />
            <span>
              {language === "vi"
                ? "Kéo góc trang giấy bằng chuột/tay để lật trang như sách thật"
                : "Drag page corners with your mouse or finger to turn like a real book"}
            </span>
          </div>
        )}

        {/* ========================================================================= */}
        {/* THE CORE REACT-PAGEFLIP COMPONENT CONTAINER (~10% COMPACTED PROPORTIONS)  */}
        {/* ========================================================================= */}
        <div
          className={`w-full flex justify-center py-1 bg-transparent ${
            isFullsize ? "max-w-[1160px] h-full items-center" : "max-w-[960px]"
          }`}
        >
          <HTMLFlipBook
            ref={bookRef}
            width={isFullsize ? 490 : 430}
            height={isFullsize ? 650 : 575}
            size="stretch"
            minWidth={270}
            maxWidth={isFullsize ? 580 : 485}
            minHeight={390}
            maxHeight={isFullsize ? 740 : 610}
            drawShadow={true}
            maxShadowOpacity={0.3}
            showCover={true}
            mobileScrollSupport={true}
            clickEventForward={true}
            disableFlipByClick={true}
            showPageCorners={true}
            onFlip={onFlip}
            className="mx-auto bg-transparent shadow-none"
            style={{ margin: "0 auto", background: "transparent" }}
          >
            {/* =================================================================== */}
            {/* PAGE 0: BÌA TRƯỚC (HARD COVER) — GÁY SÁCH Ở MÉP TRÁI (LEFT SPINE)    */}
            {/* =================================================================== */}
            <Page
              data-density="hard"
              className="rounded-r-2xl sm:rounded-r-3xl rounded-l-xs p-6 sm:p-8 pl-12 sm:pl-14 flex flex-col justify-between text-center bg-gradient-to-br from-[#0c1829] via-[#091220] to-[#040811] text-amber-100 border-y-[4px] border-r-[4px] border-[#c49a45]/60 relative overflow-hidden"
            >
              {/* THE BOOK SPINE (GÁY SÁCH MẶT TRƯỚC: MÉT TRÁI) */}
              <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-10 bg-gradient-to-r from-[#040912] via-[#091527] to-[#03060c] border-r-2 border-[#c49a45]/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)] flex flex-col justify-between py-5 items-center z-20 pointer-events-none">
                {/* Gold Spine Ribs (Gân gáy dập nổi) */}
                <div className="w-5 h-1 rounded-full bg-[#c49a45]/70 shadow-xs" />
                <div className="w-5 h-1 rounded-full bg-[#c49a45]/70 shadow-xs" />
                <div className="w-5 h-1 rounded-full bg-[#c49a45]/70 shadow-xs" />

                {/* Vertical spine label */}
                <div className="flex-1 flex items-center justify-center my-2">
                  <span className="text-[9px] font-serif font-bold text-[#e6c178] uppercase tracking-[0.25em] [writing-mode:vertical-rl] rotate-180 opacity-90">
                    SAIGON: VEILWAKE
                  </span>
                </div>

                <div className="w-5 h-1 rounded-full bg-[#c49a45]/70 shadow-xs" />
                <div className="w-5 h-1 rounded-full bg-[#c49a45]/70 shadow-xs" />
              </div>

              {/* Gold Filigree Corner Ornaments on the opening side (Right) */}
              <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#c49a45]/80 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-[#c49a45]/80 pointer-events-none" />

              {/* Top Bookmark Ribbon */}
              <div className="absolute -top-1 right-8 z-20 pointer-events-none">
                <div className="w-5 h-11 bg-gradient-to-b from-amber-500 to-amber-700 rounded-b-md shadow-md flex items-end justify-center pb-1.5">
                  <Bookmark className="w-3 h-3 text-amber-100 fill-amber-100" />
                </div>
              </div>

              {/* Cover Header */}
              <div className="space-y-1.5 pt-2">
                <span className="text-[9px] tracking-[0.25em] uppercase text-[#c49a45] font-bold block">
                  BÌA TRƯỚC · CANON DOSSIER
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold font-serif tracking-wide text-white drop-shadow-md">
                  CHƯƠNG 0
                </h1>
                <p className="font-handwriting text-xl sm:text-2xl text-amber-200 mt-0.5">
                  Lá Thư Chưa Từng Đến
                </p>
                <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#c49a45] to-transparent mx-auto mt-1.5" />
              </div>

              {/* Center Mascot Artwork */}
              <div className="my-auto flex flex-col items-center justify-center">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 drop-shadow-[0_10px_20px_rgba(253,230,138,0.25)] hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/assets/Mascot/07_storytelling.png"
                    alt="Vara Storyteller"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-sky-200 uppercase mt-1">
                  1891 — 1972 — 2026
                </span>
              </div>

              {/* Cover Footer & Action */}
              <div className="space-y-2 pb-1">
                <div className="p-2 rounded-lg bg-[#c49a45]/15 border border-[#c49a45]/40 text-[11px] text-amber-200/90 font-serif">
                  Bưu Điện Sài Gòn · Nhà Thờ Đức Bà
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleNext}
                    className="flex-1 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-[11px] uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-1.5"
                  >
                    <span>{language === "vi" ? "Lật Mở Sách" : "Open Book"}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  {!isFullsize && (
                    <button
                      onClick={toggleFullsize}
                      title="Mở xem toàn màn hình"
                      className="px-2.5 py-2 rounded-lg bg-white/15 hover:bg-white/25 text-white font-bold text-[11px] transition-all border border-white/20 flex items-center justify-center gap-1"
                    >
                      <Maximize2 className="w-3 h-3 text-amber-300" />
                      <span className="hidden sm:inline">Full</span>
                    </button>
                  )}
                </div>
              </div>
            </Page>

            {/* =================================================================== */}
            {/* PAGE 1: HỒI I — NARRATIVE & VINTAGE LETTER (LEFT)                   */}
            {/* =================================================================== */}
            <Page className="rounded-l-2xl sm:rounded-l-3xl p-4 sm:p-5 lg:p-6 flex flex-col justify-between border-y border-l border-[#d8caa8]/70 border-r border-[#d8caa8]/30 shadow-[inset_-16px_0_20px_-6px_rgba(50,35,15,0.1)]">
              <div className="space-y-3">
                {/* Header Tag */}
                <div className="flex items-center justify-between border-b border-[#E2D5BA] pb-1.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#9E6514]">
                    {storybookPages[0].actNumber[language]}
                  </span>
                  <span className="text-[9px] font-mono text-[#6A7E94]">
                    {storybookPages[0].timeOfDay[language]}
                  </span>
                </div>

                {/* Title & Location */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-[#132E4F] leading-tight">
                    {storybookPages[0].title[language]}
                  </h3>
                  <div className="flex items-center gap-1 text-[11px] text-[#1C5D8B] mt-0.5 font-semibold">
                    <MapPin className="w-3 h-3 text-teal shrink-0" />
                    <span>{storybookPages[0].location[language]}</span>
                  </div>
                </div>

                {/* Vintage Letter Box */}
                <div className="p-3 rounded-lg bg-[#F4ECDC] border border-[#DECFB0] relative overflow-hidden">
                  <div className="flex items-center justify-between text-[9px] font-serif text-[#7A5B2B] mb-0.5">
                    <span>{storybookPages[0].vintageLetter.sender}</span>
                    <span>14/04/1972</span>
                  </div>
                  <p className="font-handwriting text-sm sm:text-base text-[#163558] leading-snug font-semibold">
                    {storybookPages[0].vintageLetter.quote[language]}
                  </p>
                </div>

                {/* Narrative text */}
                <p className="text-[11px] sm:text-xs text-[#28405A] leading-relaxed font-normal">
                  {storybookPages[0].narrativeBody[language]}
                </p>

                {/* Clue box */}
                <div className="p-2.5 rounded-md bg-[#FFFDF9] border border-[#E4D7BF] text-xs">
                  <span className="font-bold text-[#132E4F] block mb-0.5 text-[11px]">
                    {storybookPages[0].culturalClue.label[language]}
                  </span>
                  <p className="text-[10px] text-[#3B546E] leading-relaxed">
                    {storybookPages[0].culturalClue.detail[language]}
                  </p>
                </div>
              </div>

              {/* Page Number & Tip */}
              <div className="pt-1.5 border-t border-[#E2D5BA] flex items-center justify-between text-[9px] text-[#5A6F84]">
                <span className="line-clamp-1 max-w-[200px]">
                  {storybookPages[0].companionTip[language]}
                </span>
                <span className="font-mono font-bold text-[#7A5B2B] shrink-0">Trang 1</span>
              </div>
            </Page>

            {/* =================================================================== */}
            {/* PAGE 2: HỒI I — PHONE SIMULATOR (MAP RADAR) (RIGHT)                 */}
            {/* =================================================================== */}
            <Page className="rounded-r-2xl sm:rounded-r-3xl p-4 sm:p-5 lg:p-6 flex flex-col justify-between border-y border-r border-[#d8caa8]/70 border-l border-[#d8caa8]/30 shadow-[inset_16px_0_20px_-6px_rgba(50,35,15,0.1)]">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#E2D5BA] pb-1.5">
                <span className="text-[9px] font-bold text-[#1C5D8B] uppercase tracking-wider">
                  Mô phỏng điện thoại · Stop 01
                </span>
                <span className="text-[9px] font-mono text-[#6A7E94]">
                  GPS Live
                </span>
              </div>

              {/* Centered Phone Simulator */}
              <div className="my-auto mx-auto w-full max-w-[245px] rounded-[28px] p-2 bg-slate-900 border-[3.5px] border-slate-700 shadow-xl text-white">
                {/* Notch */}
                <div className="w-14 h-2.5 bg-black rounded-full mx-auto mb-1.5" />

                {/* Phone Screen */}
                <div className="rounded-[18px] bg-slate-950 p-2.5 space-y-2 text-center">
                  <div className="flex items-center justify-between text-[8px] text-slate-400">
                    <span>08:15</span>
                    <span className="text-teal font-bold">5G ●●</span>
                  </div>

                  {/* Simulated Radar Map */}
                  <div className="relative h-28 rounded-lg bg-slate-900 border border-slate-800 overflow-hidden flex flex-col items-center justify-center">
                    <div className="w-14 h-14 rounded-full border border-sky-400/40 animate-ping absolute pointer-events-none" />
                    <div className="w-8 h-8 rounded-full bg-ocean-blue/40 border border-sky-400 flex items-center justify-center relative z-10">
                      <MapPin className="w-4 h-4 text-amber-300" />
                    </div>
                    <span className="text-[9px] font-bold text-white mt-1 z-10">
                      Bưu Điện Trung Tâm
                    </span>
                    <span className="text-[7.5px] text-sky-300 font-mono z-10">
                      10.7798° N, 106.6998° E
                    </span>
                  </div>

                  <div className="p-1.5 rounded-md bg-slate-900 border border-slate-800 text-[9px]">
                    <span className="text-teal font-bold block text-[8.5px]">
                      Cách bạn 45m · Đã định vị
                    </span>
                    <span className="text-slate-300 text-[8px]">
                      {questStarted
                        ? "✓ Đã nhận tín hiệu nhiệm vụ thành công!"
                        : "Chạm nút dưới để quét hoa văn vòm bưu cục"}
                    </span>
                  </div>

                  <button
                    onClick={() => setQuestStarted(true)}
                    className="w-full py-1.5 rounded-md bg-ocean-blue hover:bg-deep-blue text-white font-bold text-[9px] transition-all shadow-sm"
                  >
                    {questStarted ? "Đang Khám Phá..." : "Bắt đầu nhiệm vụ thực địa"}
                  </button>
                </div>
              </div>

              {/* Page Number */}
              <div className="pt-1.5 border-t border-[#E2D5BA] flex items-center justify-between text-[9px] text-[#5A6F84]">
                <span className="font-mono">Ký Môn Map v2.2</span>
                <span className="font-mono font-bold text-[#7A5B2B]">Trang 2</span>
              </div>
            </Page>

            {/* =================================================================== */}
            {/* PAGE 3: HỒI II — NARRATIVE & RIDDLE STORY (LEFT)                    */}
            {/* =================================================================== */}
            <Page className="rounded-l-2xl sm:rounded-l-3xl p-4 sm:p-5 lg:p-6 flex flex-col justify-between border-y border-l border-[#d8caa8]/70 border-r border-[#d8caa8]/30 shadow-[inset_-16px_0_20px_-6px_rgba(50,35,15,0.1)]">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#E2D5BA] pb-1.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#9E6514]">
                    {storybookPages[1].actNumber[language]}
                  </span>
                  <span className="text-[9px] font-mono text-[#6A7E94]">
                    {storybookPages[1].timeOfDay[language]}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-[#132E4F] leading-tight">
                    {storybookPages[1].title[language]}
                  </h3>
                  <div className="flex items-center gap-1 text-[11px] text-[#1C5D8B] mt-0.5 font-semibold">
                    <MapPin className="w-3 h-3 text-teal shrink-0" />
                    <span>{storybookPages[1].location[language]}</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#F4ECDC] border border-[#DECFB0] relative overflow-hidden">
                  <p className="font-handwriting text-sm sm:text-base text-[#163558] leading-snug font-semibold">
                    {storybookPages[1].vintageLetter.quote[language]}
                  </p>
                </div>

                <p className="text-[11px] sm:text-xs text-[#28405A] leading-relaxed font-normal">
                  {storybookPages[1].narrativeBody[language]}
                </p>

                <div className="p-2.5 rounded-md bg-[#FFFDF9] border border-[#E4D7BF] text-xs">
                  <span className="font-bold text-[#132E4F] block mb-0.5 text-[11px]">
                    {storybookPages[1].culturalClue.label[language]}
                  </span>
                  <p className="text-[10px] text-[#3B546E] leading-relaxed">
                    {storybookPages[1].culturalClue.detail[language]}
                  </p>
                </div>
              </div>

              <div className="pt-1.5 border-t border-[#E2D5BA] flex items-center justify-between text-[9px] text-[#5A6F84]">
                <span className="line-clamp-1 max-w-[200px]">
                  {storybookPages[1].companionTip[language]}
                </span>
                <span className="font-mono font-bold text-[#7A5B2B] shrink-0">Trang 3</span>
              </div>
            </Page>

            {/* =================================================================== */}
            {/* PAGE 4: HỒI II — PHONE SIMULATOR (INTERACTIVE QUIZ) (RIGHT)         */}
            {/* =================================================================== */}
            <Page className="rounded-r-2xl sm:rounded-r-3xl p-4 sm:p-5 lg:p-6 flex flex-col justify-between border-y border-r border-[#d8caa8]/70 border-l border-[#d8caa8]/30 shadow-[inset_16px_0_20px_-6px_rgba(50,35,15,0.1)]">
              <div className="flex items-center justify-between border-b border-[#E2D5BA] pb-1.5">
                <span className="text-[9px] font-bold text-[#9E6514] uppercase tracking-wider">
                  Câu Đố Quan Sát Thực Địa
                </span>
                <span className="text-[9px] font-mono text-[#6A7E94]">
                  Puzzle 01/01
                </span>
              </div>

              {/* Phone Simulator with Clickable Quiz */}
              <div className="my-auto mx-auto w-full max-w-[245px] rounded-[28px] p-2 bg-slate-900 border-[3.5px] border-slate-700 shadow-xl text-white">
                <div className="w-14 h-2.5 bg-black rounded-full mx-auto mb-1.5" />

                <div className="rounded-[18px] bg-slate-950 p-2.5 space-y-2">
                  <div className="p-1.5 rounded-md bg-indigo-950/70 border border-indigo-800 text-[9px] leading-snug">
                    <span className="text-amber-300 font-bold block mb-0.5 text-[8.5px]">
                      {storybookPages[1].phoneMockup.badgeText[language]}
                    </span>
                    <p className="text-slate-200 text-[8px] leading-snug">
                      {storybookPages[1].phoneMockup.promptText[language]}
                    </p>
                  </div>

                  {/* Quiz Option buttons */}
                  <div className="space-y-1">
                    {storybookPages[1].phoneMockup.options?.map((opt) => {
                      const isSelected = selectedQuiz === opt.id;
                      let btnStyle = "bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700";
                      if (isSelected) {
                        btnStyle = isQuizSubmitted
                          ? opt.isCorrect
                            ? "bg-teal/20 border-teal text-teal"
                            : "bg-rose-950/40 border-rose-500 text-rose-300"
                          : "bg-ocean-blue/30 border-sky-400 text-white";
                      }

                      return (
                        <button
                          key={opt.id}
                          onClick={() => {
                            setSelectedQuiz(opt.id);
                            setIsQuizSubmitted(false);
                          }}
                          className={`w-full text-left p-1.5 rounded-md border text-[8.5px] leading-tight transition-all flex items-center justify-between ${btnStyle}`}
                        >
                          <span className="line-clamp-2">{opt.text[language]}</span>
                          {isSelected && isQuizSubmitted && opt.isCorrect && (
                            <CheckCircle2 className="w-3 h-3 text-teal shrink-0 ml-1" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => setIsQuizSubmitted(true)}
                    className="w-full py-1.5 rounded-md bg-gradient-to-r from-ocean-blue to-teal text-white font-bold text-[9px] transition-all shadow-sm"
                  >
                    {isQuizSubmitted && selectedQuiz === 2
                      ? "✓ Lời giải chính xác!"
                      : "Xác nhận câu trả lời"}
                  </button>
                </div>
              </div>

              <div className="pt-1.5 border-t border-[#E2D5BA] flex items-center justify-between text-[9px] text-[#5A6F84]">
                <span className="font-mono">Mảnh Ký Ức #01</span>
                <span className="font-mono font-bold text-[#7A5B2B]">Trang 4</span>
              </div>
            </Page>

            {/* =================================================================== */}
            {/* PAGE 5: HỒI III — NARRATIVE & TWILIGHT (LEFT)                       */}
            {/* =================================================================== */}
            <Page className="rounded-l-2xl sm:rounded-l-3xl p-4 sm:p-5 lg:p-6 flex flex-col justify-between border-y border-l border-[#d8caa8]/70 border-r border-[#d8caa8]/30 shadow-[inset_-16px_0_20px_-6px_rgba(50,35,15,0.1)]">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#E2D5BA] pb-1.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#9E6514]">
                    {storybookPages[2].actNumber[language]}
                  </span>
                  <span className="text-[9px] font-mono text-[#6A7E94]">
                    {storybookPages[2].timeOfDay[language]}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-[#132E4F] leading-tight">
                    {storybookPages[2].title[language]}
                  </h3>
                  <div className="flex items-center gap-1 text-[11px] text-[#1C5D8B] mt-0.5 font-semibold">
                    <MapPin className="w-3 h-3 text-teal shrink-0" />
                    <span>{storybookPages[2].location[language]}</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#F4ECDC] border border-[#DECFB0] relative overflow-hidden">
                  <p className="font-handwriting text-sm sm:text-base text-[#163558] leading-snug font-semibold">
                    {storybookPages[2].vintageLetter.quote[language]}
                  </p>
                </div>

                <p className="text-[11px] sm:text-xs text-[#28405A] leading-relaxed font-normal">
                  {storybookPages[2].narrativeBody[language]}
                </p>

                <div className="p-2.5 rounded-md bg-[#FFFDF9] border border-[#E4D7BF] text-xs">
                  <span className="font-bold text-[#132E4F] block mb-0.5 text-[11px]">
                    {storybookPages[2].culturalClue.label[language]}
                  </span>
                  <p className="text-[10px] text-[#3B546E] leading-relaxed">
                    {storybookPages[2].culturalClue.detail[language]}
                  </p>
                </div>
              </div>

              <div className="pt-1.5 border-t border-[#E2D5BA] flex items-center justify-between text-[9px] text-[#5A6F84]">
                <span className="line-clamp-1 max-w-[200px]">
                  {storybookPages[2].companionTip[language]}
                </span>
                <span className="font-mono font-bold text-[#7A5B2B] shrink-0">Trang 5</span>
              </div>
            </Page>

            {/* =================================================================== */}
            {/* PAGE 6: HỒI III — PHONE SIMULATOR (TWILIGHT RADAR) (RIGHT)          */}
            {/* =================================================================== */}
            <Page className="rounded-r-2xl sm:rounded-r-3xl p-4 sm:p-5 lg:p-6 flex flex-col justify-between border-y border-r border-[#d8caa8]/70 border-l border-[#d8caa8]/30 shadow-[inset_16px_0_20px_-6px_rgba(50,35,15,0.1)]">
              <div className="flex items-center justify-between border-b border-[#E2D5BA] pb-1.5">
                <span className="text-[9px] font-bold text-veil-lilac uppercase tracking-wider">
                  Chế Độ Hoàng Hôn · 18:00
                </span>
                <span className="text-[9px] font-mono text-[#6A7E94]">
                  Veil Radar
                </span>
              </div>

              <div className="my-auto mx-auto w-full max-w-[245px] rounded-[28px] p-2 bg-slate-900 border-[3.5px] border-slate-700 shadow-xl text-white">
                <div className="w-14 h-2.5 bg-black rounded-full mx-auto mb-1.5" />

                <div className="rounded-[18px] bg-slate-950 p-2.5 space-y-2 text-center">
                  <div className="relative h-28 rounded-lg bg-gradient-to-b from-indigo-950 to-slate-950 border border-indigo-800/80 p-2 flex flex-col items-center justify-center">
                    <div className="w-14 h-14 rounded-full border border-dashed border-sky-400/50 animate-spin flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                    </div>
                    <span className="text-[9px] font-bold text-sky-200 mt-1.5">
                      Sóng Điệp Ức Ký Giới
                    </span>
                    <span className="text-[7.5px] text-slate-400 font-mono">
                      18:00 Twilight Mode Active
                    </span>
                  </div>

                  <div className="p-1.5 rounded-md bg-slate-900 border border-slate-800 text-[9px]">
                    <span className="text-amber-300 font-bold block text-[8.5px]">
                      {storybookPages[2].phoneMockup.badgeText[language]}
                    </span>
                    <span className="text-slate-300 text-[8px]">
                      {arActive
                        ? "✓ Đã khởi động camera AR sẵn sàng!"
                        : "Hướng camera về tháp chuông để quét Ấn Ký"}
                    </span>
                  </div>

                  <button
                    onClick={() => setArActive(true)}
                    className="w-full py-1.5 rounded-md bg-gradient-to-r from-indigo-600 to-sky-600 text-white font-bold text-[9px] transition-all shadow-sm"
                  >
                    {arActive ? "Ống Kính AR Sẵn Sàng" : "Khởi động Ống Kính AR"}
                  </button>
                </div>
              </div>

              <div className="pt-1.5 border-t border-[#E2D5BA] flex items-center justify-between text-[9px] text-[#5A6F84]">
                <span className="font-mono">Day-to-Night Sensor</span>
                <span className="font-mono font-bold text-[#7A5B2B]">Trang 6</span>
              </div>
            </Page>

            {/* =================================================================== */}
            {/* PAGE 7: HỒI IV — NARRATIVE & AWAKENING (LEFT)                       */}
            {/* =================================================================== */}
            <Page className="rounded-l-2xl sm:rounded-l-3xl p-4 sm:p-5 lg:p-6 flex flex-col justify-between border-y border-l border-[#d8caa8]/70 border-r border-[#d8caa8]/30 shadow-[inset_-16px_0_20px_-6px_rgba(50,35,15,0.1)]">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#E2D5BA] pb-1.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#9E6514]">
                    {storybookPages[3].actNumber[language]}
                  </span>
                  <span className="text-[9px] font-mono text-[#6A7E94]">
                    {storybookPages[3].timeOfDay[language]}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-[#132E4F] leading-tight">
                    {storybookPages[3].title[language]}
                  </h3>
                  <div className="flex items-center gap-1 text-[11px] text-[#1C5D8B] mt-0.5 font-semibold">
                    <MapPin className="w-3 h-3 text-teal shrink-0" />
                    <span>{storybookPages[3].location[language]}</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#F4ECDC] border border-[#DECFB0] relative overflow-hidden">
                  <p className="font-handwriting text-sm sm:text-base text-[#163558] leading-snug font-semibold">
                    {storybookPages[3].vintageLetter.quote[language]}
                  </p>
                </div>

                <p className="text-[11px] sm:text-xs text-[#28405A] leading-relaxed font-normal">
                  {storybookPages[3].narrativeBody[language]}
                </p>

                <div className="p-2.5 rounded-md bg-[#FFFDF9] border border-[#E4D7BF] text-xs">
                  <span className="font-bold text-[#132E4F] block mb-0.5 text-[11px]">
                    {storybookPages[3].culturalClue.label[language]}
                  </span>
                  <p className="text-[10px] text-[#3B546E] leading-relaxed">
                    {storybookPages[3].culturalClue.detail[language]}
                  </p>
                </div>
              </div>

              <div className="pt-1.5 border-t border-[#E2D5BA] flex items-center justify-between text-[9px] text-[#5A6F84]">
                <span className="line-clamp-1 max-w-[200px]">
                  {storybookPages[3].companionTip[language]}
                </span>
                <span className="font-mono font-bold text-[#7A5B2B] shrink-0">Trang 7</span>
              </div>
            </Page>

            {/* =================================================================== */}
            {/* PAGE 8: HỒI IV — PHONE SIMULATOR (AR CAMERA & STAMP) (RIGHT)        */}
            {/* =================================================================== */}
            <Page className="rounded-r-2xl sm:rounded-r-3xl p-4 sm:p-5 lg:p-6 flex flex-col justify-between border-y border-r border-[#d8caa8]/70 border-l border-[#d8caa8]/30 shadow-[inset_16px_0_20px_-6px_rgba(50,35,15,0.1)]">
              <div className="flex items-center justify-between border-b border-[#E2D5BA] pb-1.5">
                <span className="text-[9px] font-bold text-teal uppercase tracking-wider">
                  Cảnh Ký Ức #00 · AR
                </span>
                <span className="text-[9px] font-mono text-[#6A7E94]">
                  Thức Tỉnh
                </span>
              </div>

              <div className="my-auto mx-auto w-full max-w-[245px] rounded-[28px] p-2 bg-slate-900 border-[3.5px] border-slate-700 shadow-xl text-white">
                <div className="w-14 h-2.5 bg-black rounded-full mx-auto mb-1.5" />

                <div className="rounded-[18px] bg-slate-950 p-2.5 space-y-2 text-center">
                  <div className="relative h-28 rounded-lg bg-slate-900 border border-sky-400/50 p-2 flex flex-col items-center justify-center overflow-hidden">
                    {/* Viewfinder crosshairs */}
                    <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t-2 border-l-2 border-sky-400" />
                    <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t-2 border-r-2 border-sky-400" />
                    <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b-2 border-l-2 border-sky-400" />
                    <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b-2 border-r-2 border-sky-400" />

                    <div className="relative z-10 flex flex-col items-center">
                      <span className="text-lg">🕊️✨</span>
                      <span className="text-[9px] font-extrabold text-white mt-0.5">
                        Cảnh Ký Ức #00
                      </span>
                      <span className="text-[7.5px] text-amber-300 font-mono">
                        Những Lời Đã Gửi
                      </span>
                    </div>

                    {/* Stamp Overlay */}
                    {hasStamped && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center animate-in zoom-in duration-300">
                        <div className="w-14 h-14 rounded-full border-2 border-amber-400 text-amber-400 flex flex-col items-center justify-center font-bold text-[7.5px] rotate-[-12deg]">
                          <span>ĐÃ ĐÓNG MỘC</span>
                          <span>CANON 100%</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-1.5 rounded-md bg-slate-900 border border-slate-800 text-[9px]">
                    <span className="text-teal font-bold block text-[8.5px]">
                      {storybookPages[3].phoneMockup.badgeText[language]}
                    </span>
                    <span className="text-slate-300 text-[8px]">
                      {hasStamped
                        ? "✓ Đã lưu bưu thiếp vào Hộ Chiếu Ký Ức!"
                        : "Chạm nút để đóng dấu mộc lưu bưu thiếp"}
                    </span>
                  </div>

                  <button
                    onClick={() => setHasStamped(true)}
                    className="w-full py-1.5 rounded-md bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-[9px] transition-all shadow-sm"
                  >
                    {hasStamped ? "Đã Lưu Bưu Thiếp" : "Đóng Dấu Mộc & Lưu Bưu Thiếp"}
                  </button>
                </div>
              </div>

              <div className="pt-1.5 border-t border-[#E2D5BA] flex items-center justify-between text-[9px] text-[#5A6F84]">
                <span className="font-mono">AR Complete</span>
                <span className="font-mono font-bold text-[#7A5B2B]">Trang 8</span>
              </div>
            </Page>

            {/* =================================================================== */}
            {/* PAGE 9: BÌA SAU (HARD COVER) — GÁY SÁCH Ở MÉP PHẢI (RIGHT SPINE)    */}
            {/* =================================================================== */}
            <Page
              data-density="hard"
              className="rounded-l-2xl sm:rounded-l-3xl rounded-r-xs p-6 sm:p-8 pr-12 sm:pr-14 flex flex-col justify-between text-center bg-gradient-to-br from-[#0c1829] via-[#091220] to-[#040811] text-amber-100 border-y-[4px] border-l-[4px] border-[#c49a45]/60 relative overflow-hidden"
            >
              {/* THE BOOK SPINE (GÁY SÁCH MẶT SAU: MÉT PHẢI) */}
              <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-10 bg-gradient-to-l from-[#040912] via-[#091527] to-[#03060c] border-l-2 border-[#c49a45]/60 shadow-[-4px_0_12px_rgba(0,0,0,0.6)] flex flex-col justify-between py-5 items-center z-20 pointer-events-none">
                {/* Gold Spine Ribs */}
                <div className="w-5 h-1 rounded-full bg-[#c49a45]/70 shadow-xs" />
                <div className="w-5 h-1 rounded-full bg-[#c49a45]/70 shadow-xs" />
                <div className="w-5 h-1 rounded-full bg-[#c49a45]/70 shadow-xs" />

                {/* Vertical spine label */}
                <div className="flex-1 flex items-center justify-center my-2">
                  <span className="text-[9px] font-serif font-bold text-[#e6c178] uppercase tracking-[0.25em] [writing-mode:vertical-rl] opacity-90">
                    HIST 2026 · CANON
                  </span>
                </div>

                <div className="w-5 h-1 rounded-full bg-[#c49a45]/70 shadow-xs" />
                <div className="w-5 h-1 rounded-full bg-[#c49a45]/70 shadow-xs" />
              </div>

              {/* Gold Filigree Corner Ornaments on the opening side (Left) */}
              <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[#c49a45]/80 pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[#c49a45]/80 pointer-events-none" />

              {/* Back Cover Header / Blurb */}
              <div className="space-y-1.5 pt-2">
                <span className="text-[9px] tracking-[0.25em] uppercase text-[#c49a45] font-bold block">
                  BÌA SAU · LỜI KẾT KÝ GIỚI
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold font-serif text-white">
                  Ký Ức Đã Thức Tỉnh
                </h3>
                <p className="font-handwriting text-base sm:text-lg text-amber-200">
                  “Những bức thư gửi muộn luôn tìm được lối về...”
                </p>
                <p className="text-[10px] text-amber-200/80 max-w-xs mx-auto leading-relaxed pt-1">
                  Chapter Zero khép lại chặng hành trình đầu tiên, mở lối cho du khách tự mình khám phá thành phố theo cách hoàn toàn mới.
                </p>
              </div>

              {/* Center Mascot Artwork (Victory) */}
              <div className="my-auto flex flex-col items-center justify-center">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 drop-shadow-[0_10px_20px_rgba(253,230,138,0.25)] hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/assets/Mascot/09_victory.png"
                    alt="Vara Victory"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-[9px] px-2.5 py-0.5 rounded-full bg-[#c49a45]/20 text-amber-300 border border-[#c49a45]/40 font-mono mt-1">
                  HIST 2026 CERTIFIED · MVP CANON
                </span>
              </div>

              {/* Back Cover Footer: ISBN Barcode & Read Again Button */}
              <div className="space-y-2 pb-1">
                {/* Vintage Barcode / Heritage Seal */}
                <div className="inline-flex flex-col items-center bg-white/10 px-3 py-1 rounded-md border border-white/15">
                  <span className="font-mono text-[10px] tracking-widest text-slate-300">
                    ||| | ||||| || |||||| | |||||
                  </span>
                  <span className="text-[8px] font-mono text-amber-200/70">
                    ISBN 978-604-VEILWAKE-2026
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleJumpToPage(0)}
                    className="flex-1 py-2 rounded-lg bg-white/15 hover:bg-white/25 text-white font-bold text-[11px] uppercase tracking-wider transition-all border border-white/20 flex items-center justify-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-amber-300" />
                    <span>{language === "vi" ? "Đọc Lại Từ Đầu" : "Read From Beginning"}</span>
                  </button>
                </div>
              </div>
            </Page>
          </HTMLFlipBook>
        </div>

        {/* Bottom Help Indicator (only in standard view) */}
        {!isFullsize && (
          <div className="mt-3 flex items-center gap-3 text-[10px] font-mono text-body-blue/60 dark:text-slate-400">
            <span>* Kéo góc trang hoặc dùng phím mũi tên ← → để lật</span>
            <span>·</span>
            <span>Bản quyền © 2026 Saigon: Veilwake Team</span>
          </div>
        )}
      </div>
    </div>
  );
}
