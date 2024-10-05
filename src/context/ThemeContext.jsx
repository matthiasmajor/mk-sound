"use client";

import React, { useState, useContext, createContext, useEffect } from "react";

const ThemeContext = createContext(ThemeContextProvider);

export default function ThemeContextProvider({ children }) {
  const [color, setTheme] = useState("light");

  const themeToggle = () => {
    if (color === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };
  useEffect(() => {
    const local = window.localStorage.getItem("theme");
    if (local) {
      return;
    }

    if (local === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ color, themeToggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}
