"use client";

import { useState } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Music,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { useAudio } from "@/context/AudioContext";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";

export default function AudioPlayer() {
  const { isPlaying, isMuted, volume, togglePlay, toggleMute, setVolume } =
    useAudio();
  const { isNight } = useTheme();
  const { language } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  const isVi = language === "vi";

  return (
    <aside
      aria-label={isVi ? "Bộ điều khiển nhạc nền" : "Background Music Controller"}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 select-none transition-all duration-300"
    >
      <div
        className={`group flex items-center gap-2 p-1.5 sm:p-2 rounded-full backdrop-blur-xl transition-all duration-300 shadow-xl ${
          isNight
            ? "bg-[#0A1128]/90 border border-indigo-400/30 shadow-indigo-950/70 text-slate-100 ring-1 ring-white/10"
            : "bg-white/90 border border-sky-200/80 shadow-sky-950/10 text-deep-blue ring-1 ring-sky-300/30"
        }`}
      >
        {/* Play / Pause Primary Action Disc */}
        <button
          onClick={togglePlay}
          title={
            isPlaying
              ? isVi
                ? "Tạm dừng nhạc nền"
                : "Pause background music"
              : isVi
              ? "Bật nhạc nền Sài Gòn: Ký Giới"
              : "Play background music"
          }
          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
            isPlaying
              ? isNight
                ? "bg-gradient-to-tr from-indigo-500 to-purple-600 text-white shadow-indigo-500/40 ring-2 ring-indigo-400/40 scale-102"
                : "bg-gradient-to-tr from-ocean-blue to-teal text-white shadow-ocean-blue/30 ring-2 ring-ocean-blue/30 scale-102"
              : isNight
              ? "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
              : "bg-sky-100 text-ocean-blue hover:bg-sky-200 hover:text-deep-blue"
          }`}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 fill-current" />
          ) : (
            <Play className="w-4 h-4 ml-0.5 fill-current" />
          )}
        </button>

        {/* Dynamic Animated Equalizer Bars */}
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 px-1 cursor-pointer"
          title={isVi ? "Bấm để mở rộng" : "Click to expand"}
        >
          <div className="flex items-end gap-[3px] h-4 w-4 justify-center">
            <span
              className={`w-[2.5px] rounded-full transition-all duration-200 ${
                isNight ? "bg-amber-300" : "bg-ocean-blue"
              } ${isPlaying ? "h-3.5 animate-pulse" : "h-1 opacity-40"}`}
            />
            <span
              className={`w-[2.5px] rounded-full transition-all duration-200 ${
                isNight ? "bg-veil-lilac" : "bg-teal"
              } ${isPlaying ? "h-4 animate-bounce" : "h-2 opacity-50"}`}
              style={{ animationDelay: "150ms" }}
            />
            <span
              className={`w-[2.5px] rounded-full transition-all duration-200 ${
                isNight ? "bg-amber-300" : "bg-ocean-blue"
              } ${isPlaying ? "h-2.5 animate-pulse" : "h-1 opacity-40"}`}
              style={{ animationDelay: "300ms" }}
            />
            <span
              className={`w-[2.5px] rounded-full transition-all duration-200 ${
                isNight ? "bg-veil-lilac" : "bg-teal"
              } ${isPlaying ? "h-3 animate-bounce" : "h-1.5 opacity-50"}`}
              style={{ animationDelay: "450ms" }}
            />
          </div>

          {/* Track Info (Always visible on desktop, or when expanded) */}
          <div
            className={`flex flex-col overflow-hidden transition-all duration-300 ${
              isExpanded
                ? "max-w-[180px] sm:max-w-[200px] opacity-100 mr-1"
                : "max-w-0 sm:max-w-[150px] opacity-0 sm:opacity-100 sm:mr-1"
            }`}
          >
            <span className="text-[11px] font-bold truncate leading-tight flex items-center gap-1.5">
              <span>Saigon: Veilwake</span>
              {isPlaying && (
                <span className="w-1.5 h-1.5 rounded-full bg-teal animate-ping inline-block" />
              )}
            </span>
            <span
              className={`text-[9px] font-mono tracking-wider truncate leading-tight ${
                isNight ? "text-slate-400" : "text-body-blue/80"
              }`}
            >
              {isPlaying
                ? isVi
                  ? "Ký Giới Thức Tỉnh · BGM"
                  : "Awaken by Night · BGM"
                : isVi
                ? "Tạm dừng"
                : "Paused"}
            </span>
          </div>
        </div>

        {/* Volume Slider Section (Hover or Expanded) */}
        <div
          className="relative flex items-center"
          onMouseEnter={() => setShowVolumeSlider(true)}
          onMouseLeave={() => setShowVolumeSlider(false)}
        >
          <button
            onClick={toggleMute}
            title={isMuted ? (isVi ? "Bật âm thanh" : "Unmute") : (isVi ? "Tắt tiếng" : "Mute")}
            className={`p-2 rounded-full transition-colors ${
              isNight
                ? "text-slate-300 hover:text-white hover:bg-white/10"
                : "text-body-blue hover:text-deep-blue hover:bg-sky-100"
            }`}
            aria-label="Toggle mute"
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="w-4 h-4 text-red-400" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </button>

          {/* Floating Volume Slider Popup */}
          {(showVolumeSlider || isExpanded) && (
            <div
              className={`hidden sm:flex items-center px-2 py-1.5 rounded-full transition-all duration-200 ${
                isNight ? "bg-slate-900/90 border border-white/10" : "bg-sky-50 border border-sky-200"
              }`}
            >
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-16 h-1 bg-slate-300 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-ocean-blue dark:accent-amber-300"
                aria-label="Volume slider"
              />
              <span className="text-[9px] font-mono ml-1.5 w-6 text-right">
                {Math.round((isMuted ? 0 : volume) * 100)}%
              </span>
            </div>
          )}
        </div>

        {/* Mobile Expand / Collapse Toggle Arrow */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`sm:hidden p-1.5 rounded-full ${
            isNight ? "text-slate-400 hover:text-white" : "text-body-blue hover:text-deep-blue"
          }`}
          aria-label="Toggle controller size"
        >
          {isExpanded ? (
            <ChevronRight className="w-3.5 h-3.5" />
          ) : (
            <ChevronLeft className="w-3.5 h-3.5" />
          )}
        </button>
      </div>
    </aside>
  );
}

