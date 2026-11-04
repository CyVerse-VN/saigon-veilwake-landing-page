"use client";

import Link from "next/link";
import Image from "next/image";
import { Youtube, Instagram, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative pt-16 pb-12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 flex items-center justify-center">
                <Image
                  src="/assets/logo_emblem.png"
                  alt="Vara Mascot Emblem"
                  width={36}
                  height={36}
                  className="object-contain block dark:hidden"
                />
                <Image
                  src="/assets/logo_emblem_dark.png"
                  alt="Vara Mascot Emblem"
                  width={36}
                  height={36}
                  className="object-contain hidden dark:block"
                />
              </div>
              <div className="relative h-7 w-32 flex items-center">
                <Image
                  src="/assets/logo_horizontal.png"
                  alt="Varabond"
                  fill
                  className="object-contain object-left block dark:hidden"
                />
                <Image
                  src="/assets/logo_horizontal_dark.png"
                  alt="Varabond"
                  fill
                  className="object-contain object-left hidden dark:block"
                />
              </div>
            </div>
            <p className="text-xs uppercase tracking-widest text-body-blue dark:text-sky-300 font-semibold">
              {t.footer.tagline}
            </p>
          </div>

          <p className="max-w-xl text-sm text-body-blue/90 leading-relaxed">
            {t.footer.description}
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm font-medium text-deep-blue pt-2">
            <a href="#trai-nghiem" className="hover:text-ocean-blue transition-colors">
              {t.footer.experience}
            </a>
            <a href="#cach-choi" className="hover:text-ocean-blue transition-colors">
              {t.footer.howItWorks}
            </a>
            <a href="#chapter-zero" className="hover:text-ocean-blue transition-colors">
              {t.footer.chapterZero}
            </a>
            <Link href="/project" className="hover:text-ocean-blue transition-colors font-semibold">
              {t.footer.projectDossier}
            </Link>
          </div>

          {/* Social / Channels */}
          <div className="flex items-center gap-4 text-body-blue pt-1">
            <span className="w-9 h-9 rounded-full bg-white/75 dark:bg-slate-900/75 backdrop-blur-md flex items-center justify-center hover:bg-white text-body-blue hover:text-ocean-blue transition-all cursor-pointer shadow-xs">
              <Youtube className="w-4 h-4" />
            </span>
            <span className="w-9 h-9 rounded-full bg-white/75 dark:bg-slate-900/75 backdrop-blur-md flex items-center justify-center hover:text-ocean-blue transition-all cursor-pointer shadow-xs">
              <Instagram className="w-4 h-4" />
            </span>
            <span className="w-9 h-9 rounded-full bg-white/75 dark:bg-slate-900/75 backdrop-blur-md flex items-center justify-center hover:text-ocean-blue transition-all cursor-pointer shadow-xs">
              <MapPin className="w-4 h-4" />
            </span>
          </div>

          {/* Divider & Copyright */}
          <div className="w-full max-w-2xl border-t border-sky-200/40 dark:border-white/10 pt-6 mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-body-blue/80 gap-2">
            <span>{t.footer.copyright}</span>
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 rounded bg-sky-200/50 text-deep-blue font-semibold">HIST 2026</span>
              <span>{t.footer.edition}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
