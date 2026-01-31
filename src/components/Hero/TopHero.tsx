"use client";
import useLanguage from "@/src/hooks/useLanguage";
import { JetBrains_Mono } from "next/font/google";
import { LuDot } from "react-icons/lu";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const TopHero = () => {
  const { t } = useLanguage();
  return (
    <div className={`flex flex-col gap-6 ${jetbrainsMono.variable} text-md`}>
      <div>
        <div className="bg-green-400/10 px-3 py-0.5 rounded-lg text-green-400 border border-green-700 inline-flex items-center gap-2 font-semibold">
          <LuDot className="scale-[3.5] animate-pulse" />
          <span className="font-(family-name:--font-jetbrains)">{t.badge}</span>
        </div>
      </div>
      <div>
        <p className="font-(family-name:--font-jetbrains) text-blue-600">
          {">"} const role = "<span className="text-white">{t.role}</span>";
        </p>
      </div>
    </div>
  );
};
