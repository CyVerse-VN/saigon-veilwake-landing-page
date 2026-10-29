"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import DiscoverSection from "@/components/DiscoverSection";
import BadgesSection from "@/components/BadgesSection";
import NightSection from "@/components/NightSection";
import ChapterZeroSection from "@/components/ChapterZeroSection";
import ValueAndShowcaseSection from "@/components/ValueAndShowcaseSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  const handleOpenDemo = () => {
    const el = document.getElementById("video-demo");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-page text-deep-blue selection:bg-sky-200 selection:text-deep-blue">
      {/* Sticky Header */}
      <Header onOpenDemo={handleOpenDemo} />

      <main className="flex-1">
        {/* ACT 01: HERO & TRAVEL MOODS SHOWCASE */}
        <HeroSection onOpenDemo={handleOpenDemo} />

        {/* ACT 02: BEYOND SIGHTSEEING (PROBLEM & VALUE PREVIEW) */}
        <ProblemSection />

        {/* ACT 03: DISCOVER MAP & EXPLORATION */}
        <DiscoverSection />

        {/* ACT 04: BADGES & INTERACTIVE APP SHOWCASE */}
        <BadgesSection />

        {/* ACT 05: NIGHT TOURISM & LOCAL CINEMATIC AR PANEL */}
        <NightSection />

        {/* ACT 06: CHAPTER ZERO — LÁ THƯ CHƯA TỪNG ĐẾN */}
        <ChapterZeroSection />

        {/* ACT 07: TOURISM VALUES & DEMO VIDEO PLAYER */}
        <ValueAndShowcaseSection />

        {/* ACT 08: YOUR JOURNEY BEGINS */}
        <CtaSection onOpenDemo={handleOpenDemo} />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

