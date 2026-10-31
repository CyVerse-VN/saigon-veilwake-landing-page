"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { AudioProvider } from "@/context/AudioContext";
import FireflyCanvas from "@/components/FireflyCanvas";
import AmbientBackground from "@/components/AmbientBackground";
import AudioPlayer from "@/components/AudioPlayer";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AudioProvider>
          <AmbientBackground />
          {children}
          <AudioPlayer />
          <FireflyCanvas />
        </AudioProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
