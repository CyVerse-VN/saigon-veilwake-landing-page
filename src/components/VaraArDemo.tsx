"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Box,
  CheckCircle2,
  Heart,
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
  const ua = navigator.userAgent;
  if (/Android/i.test(ua)) return "android";
  if (/iPhone|iPad|iPod/i.test(ua)) return "ios";
  return "desktop";
}

export default function VaraArDemo() {
  const { t } = useLanguage();
  const { isNight } = useTheme();
  const [platform, setPlatform] = useState<Platform>("desktop");
  const [activeClip, setActiveClip] = useState<(typeof clips)[number]["id"]>("Idle_3");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setPlatform(detectPlatform());
    void import("@google/model-viewer");
  }, []);

  const platformHint =
    platform === "android"
      ? t.arDemo.androidReady
      : platform === "ios"
        ? t.arDemo.iosHint
        : t.arDemo.desktopHint;

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

            <div className="glass-sub-panel rounded-3xl p-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                <p className="text-sm font-medium leading-relaxed text-body-blue dark:text-slate-200">
                  {platformHint}
                </p>
              </div>
            </div>

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

          <div className="lg:col-span-7">
            <div className="postcard-card relative overflow-hidden rounded-[2rem] p-3 sm:rounded-[2.5rem] sm:p-5">
              <div className="absolute inset-x-12 top-8 h-40 rounded-full bg-sky-200/45 blur-3xl dark:bg-veil-lilac/25" />
              {!ready && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/35 backdrop-blur-sm dark:bg-slate-950/25">
                  <div className="flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-2 text-sm font-semibold text-deep-blue shadow-soft dark:border-white/15 dark:bg-slate-950/50 dark:text-slate-100">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-teal" />
                    {t.arDemo.loading}
                  </div>
                </div>
              )}
              <model-viewer
                src="/ar/vara/vara.glb"
                poster="/assets/npc_vara.png"
                alt="Vara, the Varabond companion"
                ar
                ar-modes="scene-viewer"
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
                className="relative z-[1] block h-[460px] w-full sm:h-[560px]"
                onLoad={() => setReady(true)}
              >
                <button
                  slot="ar-button"
                  type="button"
                  className="absolute inset-x-5 bottom-5 inline-flex items-center justify-center gap-2 rounded-full bg-ocean-blue px-5 py-3 text-sm font-bold text-white shadow-card transition-colors hover:bg-deep-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean-blue"
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
