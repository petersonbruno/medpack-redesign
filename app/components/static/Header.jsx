"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about-us" },
    { name: "Stories", href: "/stories" },
    { name: "Blog", href: "/blog" },
    { name: "Contacts", href: "/contact" },
  ];

  return (
    <header className="w-full h-[100px] bg-white shadow-md relative z-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
        {/* Logo */}
        <div className="relative w-40 h-12 drop-shadow-sm">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="MEDPACK Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-base font-medium transition-colors ${
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          {/* Desktop Partners Portal button */}
          <Link href="/partners" className="ml-4 hidden md:block">
            <button
              className="w-[201px] h-[45px] w-[140px] rounded-[30px] text-base font-semibold 
               bg-[rgba(247,45,60,1)] text-white 
               hover:bg-[rgba(247,45,60,0.85)] transition-colors"
            >
              Partners Portal
            </button>
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg transition-all duration-200 hover:bg-gray-100 shadow-sm hover:shadow-md"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center relative">
              <span
                className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 origin-center ${
                  isMenuOpen
                    ? "rotate-45 translate-y-[6px]"
                    : "-translate-y-1.5"
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 origin-center ${
                  isMenuOpen
                    ? "-rotate-45 -translate-y-[6px]"
                    : "translate-y-1.5"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        items={navigationItems}
        activePath={pathname}
      />
    </header>
  );
}
