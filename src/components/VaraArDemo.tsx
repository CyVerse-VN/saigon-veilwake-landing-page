"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  Box,
  Camera,
  CheckCircle2,
  Heart,
  Info,
  RotateCcw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

type Platform = "android" | "ios" | "desktop";

const clips = [
  { id: "Idle_3", label: "actionIdle" },
  { id: "Gentlemans_Bow", label: "actionBow" },
  { id: "Arm_Circle_Shuffle", label: "actionWings" },
] as const;

function detectPlatform(): Platform {
  if (typeof window === "undefined") return "desktop";
  const ua = navigator.userAgent;
  if (/Android/i.test(ua)) return "android";
  if (/iPhone|iPad|iPod/i.test(ua)) return "ios";
  return "desktop";
}

function detectInAppBrowser(): boolean {
  if (typeof window === "undefined") return false;
  const ua = navigator.userAgent || navigator.vendor || "";
  return /FBAN|FBAV|Instagram|Line|Kakaotalk|MicroMessenger|Zalo|musical_ly|Snapchat/i.test(ua);
}

export default function VaraArDemo() {
  const { t } = useLanguage();
  const { isNight } = useTheme();
  const viewerRef = useRef<HTMLElement | null>(null);

  const [platform, setPlatform] = useState<Platform>("desktop");
  const [isInApp, setIsInApp] = useState(false);
  const [isSecure, setIsSecure] = useState(true);
  const [activeClip, setActiveClip] = useState<(typeof clips)[number]["id"]>("Idle_3");
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loadError, setLoadError] = useState(false);
  const [canAr, setCanAr] = useState<boolean | null>(null);

  useEffect(() => {
    setPlatform(detectPlatform());
    setIsInApp(detectInAppBrowser());
    setIsSecure(typeof window !== "undefined" ? window.isSecureContext : true);
    void import("@google/model-viewer");
  }, []);

  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    const checkArCapability = () => {
      // @ts-expect-error model-viewer custom property
      if (typeof viewer.canActivateAR === "boolean") {
        // @ts-expect-error model-viewer custom property
        setCanAr(viewer.canActivateAR);
      }
    };

    const handleLoad = () => {
      setReady(true);
      setProgress(100);
      setLoadError(false);
      checkArCapability();
    };

    const handleProgress = (event: Event) => {
      const raw = (event as CustomEvent)?.detail?.totalProgress ?? 0;
      const pct = Math.min(100, Math.round(raw * 100));
      setProgress(pct);
    };

    const handleError = () => {
      setLoadError(true);
      setReady(true);
    };

    const handleArStatus = () => {
      checkArCapability();
    };

    viewer.addEventListener("load", handleLoad);
    viewer.addEventListener("progress", handleProgress);
    viewer.addEventListener("error", handleError);
    viewer.addEventListener("ar-status", handleArStatus);

    // If model was cached or loaded before listener was mounted
    // @ts-expect-error model-viewer custom property
    if (viewer.loaded) {
      handleLoad();
    }

    // Probing for AR capability (WebXR support check can take a moment)
    const checkTimer = setInterval(checkArCapability, 400);

    // Safety timeout: dismiss the full overlay after 8s so user can always see/interact
    const safetyTimer = setTimeout(() => {
      setReady(true);
      checkArCapability();
    }, 8000);

    return () => {
      clearInterval(checkTimer);
      clearTimeout(safetyTimer);
      viewer.removeEventListener("load", handleLoad);
      viewer.removeEventListener("progress", handleProgress);
      viewer.removeEventListener("error", handleError);
      viewer.removeEventListener("ar-status", handleArStatus);
    };
  }, []);

  const handleLaunchAr = () => {
    const viewer = viewerRef.current;
    // @ts-expect-error model-viewer activateAR method
    if (viewer && typeof viewer.activateAR === "function") {
      // @ts-expect-error model-viewer activateAR method
      viewer.activateAR();
    }
  };

  const handleRetryLoad = () => {
    setLoadError(false);
    setReady(false);
    setProgress(0);
    const viewer = viewerRef.current;
    if (viewer) {
      // @ts-expect-error model-viewer src property
      const currentSrc = viewer.src;
      // @ts-expect-error model-viewer src property
      viewer.src = "";
      setTimeout(() => {
        // @ts-expect-error model-viewer src property
        viewer.src = currentSrc || "/ar/vara/vara.glb";
      }, 60);
    }
  };

  let bannerConfig: {
    type: "warning" | "success" | "info" | "neutral";
    icon: typeof AlertTriangle;
    message: string;
  };

  if (isInApp) {
    bannerConfig = {
      type: "warning",
      icon: AlertTriangle,
      message: t.arDemo.arInAppWarning,
    };
  } else if (!isSecure && platform !== "desktop") {
    bannerConfig = {
      type: "warning",
      icon: AlertTriangle,
      message: t.arDemo.arHttpsWarning,
    };
  } else if (canAr === true) {
    bannerConfig = {
      type: "success",
      icon: CheckCircle2,
      message: t.arDemo.arReady,
    };
  } else if (canAr === false) {
    bannerConfig = {
      type: "info",
      icon: Info,
      message: t.arDemo.arNotSupported,
    };
  } else {
    bannerConfig = {
      type: "neutral",
      icon: platform === "desktop" ? Info : CheckCircle2,
      message:
        platform === "android"
          ? t.arDemo.androidReady
          : platform === "ios"
            ? t.arDemo.iosHint
            : t.arDemo.desktopHint,
    };
  }

  const BannerIcon = bannerConfig.icon;

  return (
    <main className="min-h-screen py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-12">
        <Link
          href="/"
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
            isNight
              ? "border-white/15 bg-white/10 text-slate-100 hover:bg-white/15 focus-visible:outline-sky-300"
              : "border-white/80 bg-white/60 text-deep-blue shadow-soft hover:bg-white/80 focus-visible:outline-ocean-blue"
          }`}
        >
          <ArrowLeft className="h-4 w-4" />
          <span>{t.arDemo.back}</span>
        </Link>

        <section className="mt-6 grid items-center gap-8 lg:mt-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Info & Action Controls */}
          <div className="space-y-6 lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-amber-100/75 px-3.5 py-1.5 text-xs font-bold tracking-widest text-amber-950 shadow-xs dark:border-amber-400/30 dark:bg-amber-300/15 dark:text-amber-200">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{t.arDemo.eyebrow}</span>
            </div>

            <div className="space-y-3">
              <h1 className="font-display text-4xl font-extrabold leading-[1.12] tracking-tight text-deep-blue dark:text-white sm:text-5xl">
                {t.arDemo.title}
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-body-blue dark:text-slate-300 sm:text-lg">
                {t.arDemo.description}
              </p>
            </div>

            {/* Device & AR Status Panel */}
            <div
              className={`rounded-3xl p-5 border transition-all ${
                bannerConfig.type === "warning"
                  ? "border-amber-300/60 bg-amber-500/10 text-amber-950 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-200"
                  : bannerConfig.type === "success"
                    ? "border-teal/50 bg-teal/10 text-deep-blue dark:border-teal/30 dark:bg-teal/15 dark:text-teal-100"
                    : bannerConfig.type === "info"
                      ? "border-sky-300/60 bg-sky-500/10 text-deep-blue dark:border-sky-400/30 dark:bg-sky-400/10 dark:text-sky-200"
                      : "glass-sub-panel"
              }`}
            >
              <div className="flex items-start gap-3">
                <BannerIcon
                  className={`mt-0.5 h-5 w-5 shrink-0 ${
                    bannerConfig.type === "warning"
                      ? "text-amber-600 dark:text-amber-400"
                      : bannerConfig.type === "success"
                        ? "text-teal"
                        : bannerConfig.type === "info"
                          ? "text-ocean-blue dark:text-sky-300"
                          : "text-teal"
                  }`}
                />
                <p className="text-sm font-medium leading-relaxed">
                  {bannerConfig.message}
                </p>
              </div>
            </div>

            {/* Primary AR Launch Button - Always visible & prominent */}
            <div className="space-y-2">
              <button
                type="button"
                onClick={handleLaunchAr}
                disabled={!ready || loadError}
                className={`group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl px-6 py-4 text-base font-bold text-white shadow-card transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] ${
                  !ready || loadError
                    ? "cursor-not-allowed bg-slate-400 opacity-60 dark:bg-slate-700"
                    : "bg-gradient-to-r from-ocean-blue via-teal to-ocean-blue bg-[length:200%_auto] hover:bg-right hover:shadow-xl focus-visible:outline-ocean-blue"
                }`}
              >
                <Camera className="h-5 w-5 shrink-0 transition-transform group-hover:scale-110" />
                <span>{t.arDemo.launchAr}</span>
                {canAr === true && (
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-sm animate-pulse" />
                )}
              </button>
            </div>

            {/* 3D Animation Gestures */}
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-ocean-blue dark:text-sky-300">
                {t.arDemo.controlsTitle}
              </p>
              <div className="flex flex-wrap gap-2">
                {clips.map((clip) => {
                  const selected = activeClip === clip.id;
                  return (
                    <button
                      key={clip.id}
                      type="button"
                      onClick={() => setActiveClip(clip.id)}
                      aria-pressed={selected}
                      className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                        selected
                          ? "border-ocean-blue bg-ocean-blue text-white shadow-card focus-visible:outline-ocean-blue"
                          : "border-sky-200/80 bg-white/60 text-deep-blue hover:border-ocean-blue/50 hover:bg-white/85 focus-visible:outline-ocean-blue dark:border-white/15 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10 dark:focus-visible:outline-sky-300"
                      }`}
                    >
                      {t.arDemo[clip.label]}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: 3D Canvas Card */}
          <div className="lg:col-span-7">
            <div className="postcard-card relative overflow-hidden rounded-[2rem] p-3 sm:rounded-[2.5rem] sm:p-5">
              <div className="absolute inset-x-12 top-8 h-40 rounded-full bg-sky-200/45 blur-3xl dark:bg-veil-lilac/25" />

              {/* Loading progress overlay */}
              {!ready && !loadError && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-white/50 backdrop-blur-md dark:bg-slate-950/45 p-6 text-center">
                  <div className="flex items-center gap-2 rounded-full border border-white/80 bg-white/85 px-4 py-2 text-sm font-semibold text-deep-blue shadow-soft dark:border-white/15 dark:bg-slate-900/80 dark:text-slate-100">
                    <span className="h-2.5 w-2.5 animate-ping rounded-full bg-teal" />
                    <span>
                      {t.arDemo.loading}
                      {progress > 0 ? ` (${progress}%)` : ""}
                    </span>
                  </div>
                  {/* Visual progress bar */}
                  <div className="h-1.5 w-48 overflow-hidden rounded-full bg-sky-200/50 dark:bg-white/10">
                    <div
                      className="h-full bg-gradient-to-r from-teal to-ocean-blue transition-all duration-300"
                      style={{ width: `${Math.max(10, progress)}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Error overlay with retry button */}
              {loadError && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-white/85 backdrop-blur-md dark:bg-slate-950/75 p-6 text-center">
                  <AlertTriangle className="h-8 w-8 text-amber-500" />
                  <p className="max-w-xs text-sm font-medium text-body-blue dark:text-slate-200">
                    {t.arDemo.loadFailed}
                  </p>
                  <button
                    type="button"
                    onClick={handleRetryLoad}
                    className="inline-flex items-center gap-2 rounded-full bg-ocean-blue px-4 py-2 text-xs font-bold text-white shadow-card hover:bg-deep-blue"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    <span>{t.arDemo.loadRetry}</span>
                  </button>
                </div>
              )}

              <model-viewer
                ref={viewerRef}
                src="/ar/vara/vara.glb"
                poster="/assets/npc_vara.png"
                alt="Vara, the Varabond companion"
                ar
                ar-modes="webxr scene-viewer quick-look"
                ar-placement="floor"
                ar-scale="auto"
                autoplay
                auto-rotate
                auto-rotate-delay="1400"
                camera-controls
                camera-orbit="20deg 72deg 105%"
                environment-image="neutral"
                interaction-prompt="auto"
                animation-name={activeClip}
                reveal="auto"
                shadow-intensity="0.85"
                touch-action="pan-y"
                loading="eager"
                className="relative z-[1] block h-[460px] w-full sm:h-[560px]"
              >
                {/* Built-in AR slot button inside model-viewer */}
                <button
                  slot="ar-button"
                  type="button"
                  className="absolute inset-x-5 bottom-5 z-10 inline-flex items-center justify-center gap-2 rounded-full bg-ocean-blue px-5 py-3 text-sm font-bold text-white shadow-card transition-colors hover:bg-deep-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean-blue"
                >
                  <Box className="h-4 w-4" />
                  <span>{t.arDemo.arButton}</span>
                </button>
              </model-viewer>

              <div className="absolute inset-x-6 bottom-5 z-[2] flex justify-end pointer-events-none">
                <span className="rounded-full border border-white/40 bg-slate-950/55 px-3 py-1 text-[10px] font-bold tracking-widest text-white backdrop-blur-sm">
                  {t.arDemo.demoBadge}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Informational Cards */}
        <section className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="glass-sub-panel rounded-3xl p-5">
            <div className="flex items-start gap-3">
              <Heart className="mt-0.5 h-5 w-5 shrink-0 text-veil-lilac" />
              <div>
                <h2 className="font-display text-lg font-bold text-deep-blue dark:text-white">
                  {t.arDemo.fallbackTitle}
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-body-blue dark:text-slate-300">
                  {t.arDemo.fallbackDesc}
                </p>
              </div>
            </div>
          </div>
          <div className="glass-sub-panel rounded-3xl p-5">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
              <div>
                <h2 className="font-display text-lg font-bold text-deep-blue dark:text-white">
                  {t.arDemo.safetyTitle}
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-body-blue dark:text-slate-300">
                  {t.arDemo.safetyDesc}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
