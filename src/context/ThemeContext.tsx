"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type ThemeMode = "day" | "night";

interface ThemeContextType {
  theme: ThemeMode;
  isNight: boolean;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>("day");

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("veilwake_theme") as ThemeMode;
      if (savedTheme === "night" || savedTheme === "day") {
        setThemeState(savedTheme);
        applyThemeClass(savedTheme);
      }
    } catch {
      // Ignore
    }
  }, []);

  const applyThemeClass = (newTheme: ThemeMode) => {
    if (typeof document !== "undefined") {
      const root = document.documentElement;
      if (newTheme === "night") {
        root.classList.add("night-mode");
      } else {
        root.classList.remove("night-mode");
      }
    }
  };

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    applyThemeClass(newTheme);
    try {
      localStorage.setItem("veilwake_theme", newTheme);
    } catch {
      // Ignore
    }
  };

  const toggleTheme = () => {
    const nextTheme = theme === "day" ? "night" : "day";
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isNight: theme === "night",
        toggleTheme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

