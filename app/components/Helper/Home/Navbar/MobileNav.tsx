"use client";

import React from "react";
import { CgClose } from "react-icons/cg";
import { BiDownload } from "react-icons/bi";
import Link from "next/link";
import { NavLinks } from "../../../../constant/constant";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[1000] bg-black/70 transition-opacity duration-300 ${
          showNav ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeNav}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-[80%] sm:w-[60%] z-[1001] bg-[#0f142e] transition-transform duration-300 ${navOpen}`}
      >
        {/* Close Button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-4 right-4 w-8 h-8 text-white cursor-pointer"
        />

        {/* Logo and Name */}
        <div className="flex flex-col items-center mt-16 mb-10">
          <h1 className="text-2xl font-bold text-white">Shakil</h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-6 px-8">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              onClick={closeNav}
              className="text-lg text-white font-medium hover:text-cyan-300 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}

          {/* Download CV Button */}
          <button className="mt-6 px-6 py-3 text-sm rounded-lg bg-blue-600 hover:bg-blue-800 text-white flex items-center justify-center space-x-2 transition-all duration-300">
            <BiDownload className="w-5 h-5" />
            <span>Download CV</span>
          </button>
        </nav>
      </div>
    </>
  );
};

export default MobileNav;