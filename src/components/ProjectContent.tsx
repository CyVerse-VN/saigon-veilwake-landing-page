"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Compass,
  Landmark,
  Moon,
  Cpu,
  CheckCircle2,
  AlertCircle,
  Users,
  Sun,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { projectTranslations } from "@/data/projectTranslations";

export default function ProjectContent() {
  const { language, setLanguage } = useLanguage();
  const { isNight, toggleTheme } = useTheme();
  const pt = projectTranslations[language];

  return (
    <div className="min-h-screen bg-page text-deep-blue pb-20">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-sky-border py-4 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ocean-blue hover:text-deep-blue transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{pt.nav.backHome}</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-xs px-2.5 py-1 rounded-full bg-sky-100 text-ocean-blue font-bold">
              {pt.nav.badge}
            </span>
            <span className="text-xs text-body-blue hidden sm:inline">
              {pt.nav.code}
            </span>

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
              className={`p-2 rounded-full transition-all flex items-center justify-center border shadow-xs ${
                isNight
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

            {/* Bilingual Switcher */}
            <div className="flex items-center p-0.5 rounded-full bg-sky-50 border border-sky-border text-xs font-semibold shadow-xs">
              <button
                onClick={() => setLanguage("vi")}
                title="Tiếng Việt"
                className={`px-2.5 py-1 rounded-full transition-all ${
                  language === "vi"
                    ? "bg-ocean-blue text-white shadow-xs font-bold"
                    : "text-body-blue hover:text-deep-blue"
                }`}
              >
                VI
              </button>
              <button
                onClick={() => setLanguage("en")}
                title="English"
                className={`px-2.5 py-1 rounded-full transition-all ${
                  language === "en"
                    ? "bg-ocean-blue text-white shadow-xs font-bold"
                    : "text-body-blue hover:text-deep-blue"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        {/* Header Hero for Project Overview */}
        <div className="border-b border-sky-border pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-ocean-blue text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>{pt.header.eyebrow}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-deep-blue">
            {pt.header.title}
          </h1>
          <p className="text-base sm:text-lg text-body-blue mt-3 max-w-3xl leading-relaxed">
            {pt.header.desc}
          </p>
        </div>

        {/* 2-Column: Table of Contents (Left 4 cols) + Content (Right 8 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8 items-start">
          {/* Quick Anchor Navigation (Sticky Desktop) */}
          <aside className="lg:col-span-4 sticky top-24 space-y-4">
            <div className="postcard-card p-5 bg-white border border-sky-border rounded-2xl shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-ocean-blue mb-3">
                {pt.toc.title}
              </h3>
              <nav className="space-y-1.5 text-xs text-body-blue font-medium">
                <a href="#summary" className="block py-1 hover:text-ocean-blue">
                  {pt.toc.summary}
                </a>
                <a href="#problem" className="block py-1 hover:text-ocean-blue">
                  {pt.toc.problem}
                </a>
                <a href="#loop" className="block py-1 hover:text-ocean-blue">
                  {pt.toc.loop}
                </a>
                <a href="#tourism-value" className="block py-1 hover:text-ocean-blue">
                  {pt.toc.tourismValue}
                </a>
                <a href="#differentiation" className="block py-1 hover:text-ocean-blue">
                  {pt.toc.differentiation}
                </a>
                <a href="#mvp-scope" className="block py-1 hover:text-ocean-blue">
                  {pt.toc.mvpScope}
                </a>
                <a href="#roadmap" className="block py-1 hover:text-ocean-blue">
                  {pt.toc.roadmap}
                </a>
                <a href="#team" className="block py-1 hover:text-ocean-blue">
                  {pt.toc.team}
                </a>
              </nav>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 space-y-1">
              <span className="font-bold flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 text-amber-700" /> {pt.toc.honestyTitle}
              </span>
              <p className="text-[11px] leading-relaxed">
                {pt.toc.honestyDesc}
              </p>
            </div>
          </aside>

          {/* Detailed Content Modules (8 cols) */}
          <main className="lg:col-span-8 space-y-12">
            {/* 1. EXECUTIVE SUMMARY */}
            <section id="summary" className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-display text-deep-blue border-b border-sky-border pb-2">
                {pt.summary.title}
              </h2>
              <p className="text-sm text-body-blue leading-relaxed">
                <strong>Saigon: Veilwake</strong> {pt.summary.lead}
              </p>
              <ul className="text-sm text-body-blue space-y-2 list-disc pl-5">
                <li>
                  <strong>{pt.summary.dayTitle}</strong> {pt.summary.dayDesc}
                </li>
                <li>
                  <strong>{pt.summary.nightTitle}</strong> {pt.summary.nightDesc}
                </li>
                <li>
                  <strong>{pt.summary.audienceTitle}</strong> {pt.summary.audienceDesc}
                </li>
              </ul>
            </section>

            {/* 2. PROBLEM & INSIGHT */}
            <section id="problem" className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-display text-deep-blue border-b border-sky-border pb-2">
                {pt.problem.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200">
                  <h3 className="font-bold text-rose-900 mb-1">{pt.problem.realityTitle}</h3>
                  <p className="text-body-blue leading-relaxed">
                    {pt.problem.realityDesc}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200">
                  <h3 className="font-bold text-teal-900 mb-1">{pt.problem.hypothesisTitle}</h3>
                  <p className="text-body-blue leading-relaxed">
                    {pt.problem.hypothesisDesc}
                  </p>
                </div>
              </div>
            </section>

            {/* 3. EXPERIENCE LOOP */}
            <section id="loop" className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-display text-deep-blue border-b border-sky-border pb-2">
                {pt.loop.title}
              </h2>
              <div className="p-5 rounded-2xl bg-white border border-sky-border shadow-sm space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center text-xs">
                  <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-border">
                    <span className="font-bold text-ocean-blue block">{pt.loop.step1}</span>
                    <span className="text-[11px] text-deep-blue mt-1 block">{pt.loop.step1Desc}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-border">
                    <span className="font-bold text-ocean-blue block">{pt.loop.step2}</span>
                    <span className="text-[11px] text-deep-blue mt-1 block">{pt.loop.step2Desc}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-border">
                    <span className="font-bold text-ocean-blue block">{pt.loop.step3}</span>
                    <span className="text-[11px] text-deep-blue mt-1 block">{pt.loop.step3Desc}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-border">
                    <span className="font-bold text-ocean-blue block">{pt.loop.step4}</span>
                    <span className="text-[11px] text-deep-blue mt-1 block">{pt.loop.step4Desc}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-border">
                    <span className="font-bold text-ocean-blue block">{pt.loop.step5}</span>
                    <span className="text-[11px] text-deep-blue mt-1 block">{pt.loop.step5Desc}</span>
                  </div>
                </div>
                <p className="text-xs text-body-blue italic text-center">
                  {pt.loop.note}
                </p>
              </div>
            </section>

            {/* 4. THREE TOURISM VALUES */}
            <section id="tourism-value" className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-display text-deep-blue border-b border-sky-border pb-2">
                {pt.tourismValue.title}
              </h2>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-white border border-sky-border flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-deep-blue">{pt.tourismValue.p1Title}</h3>
                    <p className="text-body-blue mt-1">
                      {pt.tourismValue.p1Desc}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-sky-border flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center shrink-0">
                    <Moon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-deep-blue">{pt.tourismValue.p2Title}</h3>
                    <p className="text-body-blue mt-1">
                      {pt.tourismValue.p2Desc}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-sky-border flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-deep-blue">{pt.tourismValue.p3Title}</h3>
                    <p className="text-body-blue mt-1">
                      {pt.tourismValue.p3Desc}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. DIFFERENTIATION & BRAND IDENTITY */}
            <section id="differentiation" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-display text-deep-blue border-b border-sky-border pb-2">
                {pt.differentiation.title}
              </h2>
              <div className="p-4 rounded-2xl bg-white border border-sky-border text-xs sm:text-sm text-body-blue space-y-2.5">
                <p>
                  ✓ <strong>{pt.differentiation.diff1Title}</strong> {pt.differentiation.diff1Desc}
                </p>
                <p>
                  ✓ <strong>{pt.differentiation.diff2Title}</strong> {pt.differentiation.diff2Desc}
                </p>
                <p>
                  ✓ <strong>{pt.differentiation.diff3Title}</strong> {pt.differentiation.diff3Desc}
                </p>
              </div>

              {/* Official Brand Identity Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-white to-sky-50/70 border border-sky-border shadow-xs space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-sky-100 pb-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-ocean-blue">
                      {pt.differentiation.brandSystemBadge}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-deep-blue">
                      {pt.differentiation.brandSystemTitle}
                    </h3>
                  </div>
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-sky-100 text-ocean-blue font-bold self-start sm:self-auto">
                    {pt.differentiation.designSystemTag}
                  </span>
                </div>

                {/* Concept Symbol Breakdown */}
                <div className="bg-white rounded-xl p-4 border border-sky-border/70 flex flex-col md:flex-row items-center gap-6">
                  <div className="relative w-full md:w-1/2 max-w-md h-32 sm:h-36 shrink-0 rounded-lg overflow-hidden border border-sky-100 bg-page/50">
                    <Image
                      src="/assets/brand_symbol_concept.webp"
                      alt="Brand Symbol Concept"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="text-xs text-body-blue space-y-1.5 flex-1">
                    <p className="font-semibold text-deep-blue text-xs uppercase tracking-wide">
                      {pt.differentiation.elementsHeading}
                    </p>
                    <ul className="space-y-1 text-[11px] list-disc list-inside text-body-blue/90">
                      <li><strong>{pt.differentiation.el1Title}</strong> {pt.differentiation.el1Desc}</li>
                      <li><strong>{pt.differentiation.el2Title}</strong> {pt.differentiation.el2Desc}</li>
                      <li><strong>{pt.differentiation.el3Title}</strong> {pt.differentiation.el3Desc}</li>
                      <li><strong>{pt.differentiation.el4Title}</strong> {pt.differentiation.el4Desc}</li>
                      <li><strong>{pt.differentiation.el5Title}</strong> {pt.differentiation.el5Desc}</li>
                    </ul>
                  </div>
                </div>

                {/* Mascot Kiri + App Icon Showcase */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white border border-sky-border/70">
                    <div className="w-14 h-14 rounded-full bg-sky-50 border border-sky-200 flex items-center justify-center p-1 shrink-0 overflow-hidden">
                      <Image
                        src="/assets/npc_kiri.png"
                        alt="NPC Kiri"
                        width={50}
                        height={50}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-ocean-blue block">
                        {pt.differentiation.mascotBadge}
                      </span>
                      <h4 className="text-xs font-bold text-deep-blue">
                        {pt.differentiation.mascotName}
                      </h4>
                      <p className="text-[10px] text-body-blue mt-0.5 leading-snug">
                        {pt.differentiation.mascotDesc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white border border-sky-border/70">
                    <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center p-1 shrink-0 overflow-hidden shadow-xs">
                      <Image
                        src="/assets/app_icon_light.png"
                        alt="Mobile App Icon"
                        width={50}
                        height={50}
                        className="object-contain rounded-xl"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-ocean-blue block">
                        {pt.differentiation.appIconBadge}
                      </span>
                      <h4 className="text-xs font-bold text-deep-blue">
                        {pt.differentiation.appIconName}
                      </h4>
                      <p className="text-[10px] text-body-blue mt-0.5 leading-snug">
                        {pt.differentiation.appIconDesc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. MVP SCOPE & EVIDENCE */}
            <section id="mvp-scope" className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-display text-deep-blue border-b border-sky-border pb-2">
                {pt.mvpScope.title}
              </h2>
              <div className="p-5 rounded-2xl bg-white border border-sky-border text-xs space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-deep-blue">{pt.mvpScope.canonTitle}</strong>
                    <span className="text-body-blue block mt-0.5">
                      {pt.mvpScope.canonDescPart1} <strong>{pt.mvpScope.canonDescDay}</strong> {pt.mvpScope.canonDescPart2} <strong>{pt.mvpScope.canonDescNight}</strong> {pt.mvpScope.canonDescPart3}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="rounded-xl overflow-hidden border border-sky-border relative h-36">
                    <Image
                      src="/assets/hero_post_office_day_v1.webp"
                      alt="Post Office"
                      fill
                      className="object-cover"
                    />
                    <span className="absolute bottom-1.5 left-1.5 text-[9px] px-2 py-0.5 rounded bg-black/60 text-white font-bold backdrop-blur-xs">
                      {pt.mvpScope.stop1Caption}
                    </span>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-sky-border relative h-36">
                    <Image
                      src="/assets/chapter0_stop2_v1.webp"
                      alt="Notre-Dame Cathedral"
                      fill
                      className="object-cover"
                    />
                    <span className="absolute bottom-1.5 left-1.5 text-[9px] px-2 py-0.5 rounded bg-black/60 text-white font-bold backdrop-blur-xs">
                      {pt.mvpScope.stop2Caption}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-deep-blue">{pt.mvpScope.safetyTitle}</strong>
                    <span className="text-body-blue block mt-0.5">
                      {pt.mvpScope.safetyDesc}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. ROADMAP */}
            <section id="roadmap" className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-display text-deep-blue border-b border-sky-border pb-2">
                {pt.roadmap.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-border">
                  <span className="font-bold text-ocean-blue block">{pt.roadmap.phase1Tag}</span>
                  <strong className="text-deep-blue block mt-1">{pt.roadmap.phase1Title}</strong>
                  <p className="text-body-blue mt-1">{pt.roadmap.phase1Desc}</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-border">
                  <span className="font-bold text-ocean-blue block">{pt.roadmap.phase2Tag}</span>
                  <strong className="text-deep-blue block mt-1">{pt.roadmap.phase2Title}</strong>
                  <p className="text-body-blue mt-1">{pt.roadmap.phase2Desc}</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-border">
                  <span className="font-bold text-ocean-blue block">{pt.roadmap.phase3Tag}</span>
                  <strong className="text-deep-blue block mt-1">{pt.roadmap.phase3Title}</strong>
                  <p className="text-body-blue mt-1">{pt.roadmap.phase3Desc}</p>
                </div>
              </div>
            </section>

            {/* 8. TEAM & CONTACT */}
            <section id="team" className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-display text-deep-blue border-b border-sky-border pb-2">
                {pt.team.title}
              </h2>
              <div className="p-5 rounded-2xl bg-white border border-sky-border space-y-4 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-ocean-blue">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-deep-blue text-sm">{pt.team.teamName}</h3>
                    <p className="text-body-blue">{pt.team.competition}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-sky-100">
                  <div>
                    <span className="text-body-blue block">{pt.team.trackLabel}</span>
                    <strong className="text-deep-blue">{pt.team.trackValue}</strong>
                  </div>
                  <div>
                    <span className="text-body-blue block">{pt.team.statusLabel}</span>
                    <strong className="text-teal-700">{pt.team.statusValue}</strong>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

