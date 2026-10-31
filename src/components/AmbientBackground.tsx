"use client";

import { useTheme } from "@/context/ThemeContext";

export default function AmbientBackground() {
  const { isNight } = useTheme();

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Daylight Ambient Colorful Orbs (Vibrant Saigon Sky & Heritage Glow) */}
      {!isNight && (
        <div className="absolute inset-0 transition-opacity duration-700 opacity-100">
          {/* Top-left: Cerulean Sky & Turquoise Aura */}
          <div className="absolute -top-24 -left-20 w-[580px] h-[580px] rounded-full bg-gradient-to-br from-sky-300/50 via-teal-200/40 to-transparent blur-[110px]" />

          {/* Top-right: Sun Gold & Warm Nostalgic Ochre */}
          <div className="absolute top-[12%] -right-24 w-[520px] h-[520px] rounded-full bg-gradient-to-bl from-amber-300/45 via-orange-200/35 to-transparent blur-[120px]" />

          {/* Mid-screen Left: Coastal Blue & Cyan Glow */}
          <div className="absolute top-[38%] -left-32 w-[620px] h-[620px] rounded-full bg-gradient-to-tr from-cyan-300/40 via-sky-200/45 to-transparent blur-[130px]" />

          {/* Mid-screen Right: Lilac Indigo & French Heritage Orchid */}
          <div className="absolute top-[55%] -right-28 w-[580px] h-[580px] rounded-full bg-gradient-to-tl from-indigo-300/40 via-purple-200/35 to-transparent blur-[125px]" />

          {/* Lower-screen Left: Saigon Sun & Sand */}
          <div className="absolute top-[75%] -left-20 w-[540px] h-[540px] rounded-full bg-gradient-to-r from-amber-200/45 via-yellow-100/35 to-teal-100/30 blur-[120px]" />

          {/* Bottom: Coastal Breeze Azure */}
          <div className="absolute -bottom-24 right-1/4 w-[650px] h-[650px] rounded-full bg-gradient-to-t from-sky-300/45 via-teal-200/35 to-transparent blur-[130px]" />
        </div>
      )}

      {/* Nighttime Ambient Cosmic Orbs (Midnight Aurora & Ký Giới Celestial Light) */}
      {isNight && (
        <div className="absolute inset-0 transition-opacity duration-700 opacity-100">
          {/* Top-left: Cosmic Indigo Portal */}
          <div className="absolute -top-24 -left-24 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-600/35 via-purple-700/30 to-transparent blur-[120px]" />

          {/* Top-right: Starlight Cyan Aurora */}
          <div className="absolute top-[10%] -right-24 w-[540px] h-[540px] rounded-full bg-gradient-to-bl from-sky-500/30 via-teal-500/25 to-transparent blur-[120px]" />

          {/* Mid-screen Left: Deep Ký Giới Violet */}
          <div className="absolute top-[38%] -left-32 w-[620px] h-[620px] rounded-full bg-gradient-to-tr from-purple-700/35 via-indigo-600/25 to-transparent blur-[130px]" />

          {/* Mid-screen Right: Starlight Lilac & Blue */}
          <div className="absolute top-[58%] -right-28 w-[580px] h-[580px] rounded-full bg-gradient-to-tl from-indigo-500/35 via-sky-600/25 to-transparent blur-[125px]" />

          {/* Lower-screen: Moon Amber Glow */}
          <div className="absolute top-[76%] -left-20 w-[540px] h-[540px] rounded-full bg-gradient-to-r from-amber-500/20 via-purple-800/30 to-transparent blur-[120px]" />

          {/* Bottom: Deep Twilight Galactic Cyan */}
          <div className="absolute -bottom-24 right-1/4 w-[650px] h-[650px] rounded-full bg-gradient-to-t from-sky-600/30 via-indigo-900/40 to-transparent blur-[140px]" />
        </div>
      )}
    </div>
  );
}

