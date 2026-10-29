"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import FireflyCanvas from "@/components/FireflyCanvas";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        {children}
        <FireflyCanvas />
      </LanguageProvider>
    </ThemeProvider>
  );
}

