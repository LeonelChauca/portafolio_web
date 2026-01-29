"use client";
import React from "react";
import { MdOutlineWebAsset } from "react-icons/md";
import BadgeComponent from "./ui/BadgeComponent";
import useLanguage from "../hooks/useLanguage";

const NavBar = () => {
  const { t } = useLanguage();
  return (
    <nav className=" text-white fixed top-5 left-0 flex justify-center px-6">
      <div className="w-full bg-slate-900/40 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full flex items-center justify-between shadow-2xl">
        <div className="flex items-center justify-between gap-2 cursor-pointer">
          <BadgeComponent MainColor="blue">
            <MdOutlineWebAsset size={14} />
          </BadgeComponent>
          <p className="font-bold hidden sm:block">
            Dev
            <span className="text-blue-500">Leonel</span>
            <span className=" animate-pulse">_</span>
          </p>
        </div>
        <div></div>
      </div>
    </nav>
  );
};

export default NavBar;
