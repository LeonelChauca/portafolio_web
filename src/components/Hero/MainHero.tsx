"use client";
import useLanguage from "@/src/hooks/useLanguage";
import { Geist, JetBrains_Mono } from "next/font/google";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const MainHero = () => {
  const { t } = useLanguage();
  return (
    <section className={`${geistSans.variable} ${jetbrainsMono.variable}`}>
      <div className={`flex flex-col gap-1  text-6xl font-semibold`}>
        <p className="font-(family-name:--font-geist-sans)">{t.main.title1}</p>
        <p className="font-(family-name:--font-geist-sans) bg-linear-to-r from-white via-gray-600 bg-clip-text text-transparent">
          {t.main.title2}
        </p>
        <p className="font-(family-name:--font-jetbrains-mono) tracking-tighter text-blue-600">
          {t.main.title3}
        </p>
      </div>
      <div className="font-(family-name:--font-jetbrains-mono)">
        <p className="mt-4 text-md text-gray-400 max-w-xl">
          {t.main["description"]}
        </p>
      </div>
    </section>
  );
};
