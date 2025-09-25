"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigationItems = ["Products", "About Us", "Stories", "Blog", "Contacts"];

  return (
    <header className="w-full h-[100px] bg-white shadow-custom relative">
      {/* Bottom gradient border */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400/20 via-blue-500/30 to-purple-400/20"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="relative w-40 h-12 drop-shadow-sm">
            <Image
              src="/logo.png"
              alt="MEDPACK Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks items={navigationItems} className="space-x-8" />

            <Button
              variant="primary"
              className="w-[201px] h-[45px] rounded-[30px] text-base font-semibold"
              style={{ background: "#F72D3C" }}
            >
              Partners Portal
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Button
              variant="primary"
              className="text-sm px-4 py-2 hidden sm:block shadow-md"
            >
              Portal
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg transition-all duration-200 hover:bg-gray-100 shadow-sm hover:shadow-md"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu component */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        items={navigationItems}
      />
    </header>
  );
}
