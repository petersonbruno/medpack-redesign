"use client";

import Image from "next/image";
import Button from "../ui/Button";
import NavLinks from "./NavLinks";

export default function MobileMenu({ isOpen, onClose, items }) {
  return (
    <div
      className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Slide-in panel */}
      <div
        className={`absolute right-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Logo + Close */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gradient-to-r from-white to-blue-50/30">
          <div className="relative w-32 h-10">
            <Image
              src="/logo.png"
              alt="MEDPACK Logo"
              fill
              className="object-contain"
            />
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-sm hover:shadow-md"
            aria-label="Close menu"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="p-6">
          <NavLinks items={items} onClick={onClose} className="space-y-2" />

          <div className="mt-8 pt-6 border-t border-gray-100">
            <Button
              variant="primary"
              className="w-[150px] h-[40px] rounded-[30px] text-base font-semibold"
              style={{ background: "#F72D3C" }}
            >
              Partners Portal
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 bg-gray-50/50">
          <div className="text-sm text-gray-500 text-center">
            © 2024 MEDPACK. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
