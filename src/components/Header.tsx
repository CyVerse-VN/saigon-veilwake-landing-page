"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, PlayCircle, Globe, Moon, Sun, Volume2, VolumeX } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { useAudio } from "@/context/AudioContext";

export default function Header({ onOpenDemo }: { onOpenDemo?: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { isNight, toggleTheme } = useTheme();
  const { isPlaying, togglePlay } = useAudio();

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
            <Image
              src="/assets/logo_emblem.png"
              alt="Saigon: Veilwake Emblem"
              width={34}
              height={34}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-wider text-base sm:text-lg text-deep-blue leading-tight">
              SAIGON: VEILWAKE
            </span>
            <span className="text-[10px] tracking-widest uppercase text-body-blue/80 font-medium -mt-0.5">
              {t.nav.brandTagline}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-body-blue">
          <a
            href="#trai-nghiem"
            className="hover:text-ocean-blue transition-colors py-1"
          >
            {t.nav.experience}
          </a>
          <a
            href="#cach-choi"
            className="hover:text-ocean-blue transition-colors py-1"
          >
            {t.nav.howItWorks}
          </a>
          <a
            href="#chapter-zero"
            className="hover:text-ocean-blue transition-colors py-1"
          >
            {t.nav.chapterZero}
          </a>
          <Link
            href="/project"
            className="hover:text-ocean-blue transition-colors py-1 flex items-center gap-1 font-semibold text-deep-blue"
          >
            {t.nav.project}{" "}
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-100 text-ocean-blue font-bold">
              {t.nav.histBadge}
            </span>
          </Link>
        </nav>

        {/* Right Action: Demo CTA + Interactive Lang Switcher + Theme Toggle + BGM */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Background Music Quick Toggle */}
          <button
            onClick={togglePlay}
            title={
              isPlaying
                ? language === "vi"
                  ? "Tạm dừng nhạc nền"
                  : "Pause BGM"
                : language === "vi"
                  ? "Bật nhạc nền Sài Gòn: Ký Giới"
                  : "Play BGM"
            }
            className={`p-2 rounded-full transition-all flex items-center justify-center border shadow-xs relative ${isPlaying
                ? isNight
                  ? "bg-indigo-950/90 border-indigo-400/60 text-amber-300 ring-2 ring-indigo-400/30 hover:scale-105"
                  : "bg-sky-100 border-sky-300 text-ocean-blue ring-2 ring-ocean-blue/30 hover:scale-105"
                : isNight
                  ? "bg-slate-900/60 border-slate-700 text-slate-400 hover:text-white hover:scale-105"
                  : "bg-sky-50 border-sky-border text-slate-500 hover:text-deep-blue hover:scale-105"
              }`}
            aria-label={isPlaying ? "Pause background music" : "Play background music"}
          >
            {isPlaying ? (
              <Volume2 className="w-4 h-4 text-teal animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4 opacity-70" />
            )}
            {isPlaying && (
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-teal animate-ping" />
            )}
          </button>

          {/* Theme Toggle (Day / Night with Fireflies) */}
          <button
            onClick={toggleTheme}
            title={
              isNight
                ? language === "vi"
                  ? "Trở về Ban Ngày"
                  : "Switch to Daylight"
                : language === "vi"
                  ? "Đánh thức Ký Giới Ban Đêm"
                  : "Awaken Night Mode"
            }
            className={`p-2 rounded-full transition-all flex items-center justify-center border shadow-xs ${isNight
                ? "bg-indigo-950/90 border-indigo-400/60 text-amber-300 hover:scale-105 ring-2 ring-indigo-400/30"
                : "bg-sky-50 border-sky-border text-indigo-700 hover:text-deep-blue hover:scale-105"
              }`}
            aria-label="Toggle Night Mode"
          >
            {isNight ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-700" />
            )}
          </button>

          {/* Bilingual Language Switcher Button Group */}
          <div className="flex items-center p-0.5 rounded-full bg-sky-50 border border-sky-border text-xs font-semibold shadow-xs">
            <button
              onClick={() => setLanguage("vi")}
              title="Tiếng Việt"
              className={`px-2.5 py-1 rounded-full transition-all ${language === "vi"
                  ? "bg-ocean-blue text-white shadow-xs font-bold"
                  : "text-body-blue hover:text-deep-blue"
                }`}
            >
              VI
            </button>
            <button
              onClick={() => setLanguage("en")}
              title="English"
              className={`px-2.5 py-1 rounded-full transition-all ${language === "en"
                  ? "bg-ocean-blue text-white shadow-xs font-bold"
                  : "text-body-blue hover:text-deep-blue"
                }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={
              onOpenDemo
                ? onOpenDemo
                : () => {
                  const el = document.getElementById("video-demo");
                  el?.scrollIntoView({ behavior: "smooth" });
                }
            }
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white dark:border-sky-400 dark:text-sky-300 dark:hover:bg-sky-400 dark:hover:text-slate-950 transition-all text-xs sm:text-sm font-semibold shadow-sm"
          >
            <PlayCircle className="w-4 h-4" />
            <span>{t.nav.watchDemo}</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile BGM Toggle */}
          <button
            onClick={togglePlay}
            className={`p-1.5 rounded-full border transition-all relative ${isPlaying
                ? isNight
                  ? "bg-indigo-950 border-indigo-400 text-amber-300"
                  : "bg-sky-100 border-sky-300 text-ocean-blue"
                : isNight
                  ? "bg-slate-900/60 border-slate-700 text-slate-400"
                  : "bg-sky-50 border-sky-border text-slate-500"
              }`}
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? (
              <Volume2 className="w-3.5 h-3.5 text-teal" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 opacity-70" />
            )}
          </button>

          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-1.5 rounded-full border transition-all ${isNight
                ? "bg-indigo-950 border-indigo-400 text-amber-300"
                : "bg-sky-50 border-sky-border text-indigo-700"
              }`}
            aria-label="Toggle Night Mode"
          >
            {isNight ? (
              <Sun className="w-3.5 h-3.5 text-amber-300" />
            ) : (
              <Moon className="w-3.5 h-3.5 text-indigo-700" />
            )}
          </button>

          {/* Mobile Language Switcher */}
          <div className="flex items-center p-0.5 rounded-full bg-sky-50 border border-sky-border text-xs font-semibold">
            <button
              onClick={() => setLanguage("vi")}
              className={`px-2 py-0.5 rounded-full text-[11px] ${language === "vi"
                  ? "bg-ocean-blue text-white font-bold"
                  : "text-body-blue"
                }`}
            >
              VI
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-0.5 rounded-full text-[11px] ${language === "en"
                  ? "bg-ocean-blue text-white font-bold"
                  : "text-body-blue"
                }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg text-deep-blue hover:bg-sky-50 dark:hover:bg-slate-800 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-sky-border dark:border-white/10 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <a
            href="#trai-nghiem"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-deep-blue hover:bg-sky-50 dark:hover:bg-slate-800"
          >
            {t.nav.experience}
          </a>
          <a
            href="#cach-choi"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-deep-blue hover:bg-sky-50 dark:hover:bg-slate-800"
          >
            {t.nav.howItWorks}
          </a>
          <a
            href="#chapter-zero"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-deep-blue hover:bg-sky-50 dark:hover:bg-slate-800"
          >
            {t.nav.chapterZero}
          </a>
          <Link
            href="/project"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-ocean-blue hover:bg-sky-50 dark:hover:bg-slate-800"
          >
            {t.nav.projectDossier}
          </Link>
          <div className="pt-2 border-t border-sky-100 flex items-center justify-between">
            <span className="text-xs text-body-blue flex items-center gap-1">
              <Globe className="w-3.5 h-3.5" />
              {t.nav.langIndicator}
            </span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                const el = document.getElementById("video-demo");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-4 py-2 rounded-full bg-ocean-blue text-white text-xs font-semibold"
            >
              {t.nav.watchDemo}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
