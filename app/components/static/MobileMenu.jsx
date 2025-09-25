"use client";

import Link from "next/link";
import Button from "../ui/Button";

export default function MobileMenu({ isOpen, onClose, items, activePath }) {
  return (
    <div
      className={`fixed top-0 right-0 w-full h-full bg-white z-40 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full p-6">
        {/* Close button */}
        <button
          onClick={onClose}
          className="self-end mb-6 text-gray-700 hover:text-gray-900"
          aria-label="Close menu"
        >
          ✕
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-4 flex-1">
          {items.map((item) => {
            const isActive = activePath === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-lg font-medium transition-colors ${
                  isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={onClose}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Partners Portal button at bottom */}
        <div className="mt-auto">
          <Link href="/partners">
            <Button
              variant="primary"
              className="w-full h-[45px] rounded-[30px] text-base font-semibold"
              style={{ background: "#F72D3C" }}
              onClick={onClose}
            >
              Partners Portal
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
