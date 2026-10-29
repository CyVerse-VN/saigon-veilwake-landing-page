"use client";

import Link from "next/link";
import Image from "next/image";
import { Compass, Youtube, Instagram, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-gradient-to-b from-page to-sky-100/60 border-t border-sky-border pt-16 pb-12 overflow-hidden">
      {/* Decorative floral accents cropped from reference */}
      <div className="absolute bottom-0 left-0 w-36 sm:w-48 opacity-60 pointer-events-none select-none">
        <Image
          src="/assets/footer_floral_left.png"
          alt=""
          width={200}
          height={106}
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-36 sm:w-48 opacity-60 pointer-events-none select-none">
        <Image
          src="/assets/footer_floral_right.png"
          alt=""
          width={224}
          height={106}
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-sky-200/60 flex items-center justify-center text-ocean-blue">
                <Compass className="w-5 h-5 text-ocean-blue" />
              </div>
              <span className="font-bold tracking-wider text-xl text-deep-blue">
                SAIGON: VEILWAKE
              </span>
            </div>
            <p className="text-xs uppercase tracking-widest text-body-blue font-semibold">
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
            <span className="w-9 h-9 rounded-full bg-white border border-sky-border flex items-center justify-center hover:text-ocean-blue hover:border-ocean-blue transition-all cursor-pointer shadow-sm">
              <Youtube className="w-4 h-4" />
            </span>
            <span className="w-9 h-9 rounded-full bg-white border border-sky-border flex items-center justify-center hover:text-ocean-blue hover:border-ocean-blue transition-all cursor-pointer shadow-sm">
              <Instagram className="w-4 h-4" />
            </span>
            <span className="w-9 h-9 rounded-full bg-white border border-sky-border flex items-center justify-center hover:text-ocean-blue hover:border-ocean-blue transition-all cursor-pointer shadow-sm">
              <MapPin className="w-4 h-4" />
            </span>
          </div>

          {/* Divider & Copyright */}
          <div className="w-full max-w-2xl border-t border-sky-border/80 pt-6 mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-body-blue/80 gap-2">
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
