"use client";
import { useState, createContext } from "react";
import { translations } from "../data/trasnlations";

interface LanguageContextType {
  lang: "es" | "en";
  setLang: (lang: "es" | "en") => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lang, setLang] = useState<"es" | "en">(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("language");
      if (savedLang === "es" || savedLang === "en") return savedLang;
    }
    return "es";
  });

  const handleSetLang = (newLang: "es" | "en") => {
    setLang(newLang);
    localStorage.setItem("language", newLang);
  };

  const value = {
    lang,
    setLang: handleSetLang,
    t: translations[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
