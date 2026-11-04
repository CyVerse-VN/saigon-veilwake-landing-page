"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PortalsSection from "@/components/PortalsSection";
import JourneyFlowSection from "@/components/JourneyFlowSection";
import ChapterZeroSection from "@/components/ChapterZeroSection";
import DiscoverSection from "@/components/DiscoverSection";
import BadgesSection from "@/components/BadgesSection";
import NightSection from "@/components/NightSection";
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
      {/* Sticky Header with 3D Sun/Moon Toggle */}
      <Header onOpenDemo={handleOpenDemo} />

      <main className="flex-1">
        {/* ACT 01: HERO & 3D MASCOT WELCOME PEDESTAL */}
        <HeroSection onOpenDemo={handleOpenDemo} />

        {/* ACT 02: BỐN CÁNH CỔNG KÝ GIỚI (4 INTERACTIVE GATEWAYS HUB) */}
        <PortalsSection />

        {/* ACT 03: DÒNG CHẢY HÀNH TRÌNH CÙNG VARA (3D FLOW & GUIDE MASCOT) */}
        <JourneyFlowSection />

        {/* ACT 04: CỔNG 02 CHUYÊN SÂU — CUỐN SÁCH KÝ ỨC (INTERACTIVE STORYBOOK FLIPBOOK) */}
        <ChapterZeroSection />

        {/* ACT 05: CỔNG 01 CHUYÊN SÂU — HẺM NHỎ & BẢN ĐỒ KHÁM PHÁ THỰC ĐỊA */}
        <DiscoverSection />

        {/* ACT 06: CỔNG 03 CHUYÊN SÂU — HỘ CHIẾU & CÁ NHÂN HÓA HUY HIỆU */}
        <BadgesSection />

        {/* ACT 07: CỔNG 04 CHUYÊN SÂU — DU LỊCH ĐÊM & ĐÁNH THỨC LĂNG KÍNH AR */}
        <NightSection />

        {/* ACT 08: GIÁ TRỊ DU LỊCH ĐÔ THỊ & VIDEO DEMO PLAYER */}
        <ValueAndShowcaseSection />

        {/* ACT 09: LỜI KÊU GỌI KHỞI HÀNH & MASCOT VICTORY BANNER */}
        <CtaSection onOpenDemo={handleOpenDemo} />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
