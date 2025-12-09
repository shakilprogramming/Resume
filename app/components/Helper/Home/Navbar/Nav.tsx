"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { NavLinks } from "../../../../constant/constant";

// Dynamically import icons to ensure they only render on the client
const FaCode = dynamic(() => import("react-icons/fa").then(mod => mod.FaCode), { ssr: false });
const BiDownload = dynamic(() => import("react-icons/bi").then(mod => mod.BiDownload), { ssr: false });
const HiBars3BottomRight = dynamic(() => import("react-icons/hi2").then(mod => mod.HiBars3BottomRight), { ssr: false });

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY >= 90);
    };
    
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
        navBg ? "bg-[#0f142ed9] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between w-[90%] xl:w-[80%] mx-auto h-16">
        {/* Logo */}
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
          <FaCode className="w-5 h-5 text-black" />
        </div>

        {/* Name */}
        <h1 className="text-xl sm:text-2xl font-bold text-white">Shakil</h1>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-base text-white font-medium hover:text-cyan-300 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}

          {/* Download CV Button */}
          <button className="px-6 py-3 text-sm rounded-lg bg-blue-600 hover:bg-blue-800 text-white flex items-center space-x-2 transition-all duration-300">
            <BiDownload className="w-5 h-5" />
            <span>Download CV</span>
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <HiBars3BottomRight
          onClick={openNav}
          className="w-8 h-8 text-white lg:hidden cursor-pointer"
          aria-label="Open mobile menu"
        />
      </div>
    </div>
  );
};

export default Nav;
