// app/components/static/NavLinks.jsx
"use client";

import Link from "next/link";

export default function NavLinks({ items, className = "", onClick }) {
  return (
    <nav className={`flex ${className}`}>
      {items.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 md:hover:bg-transparent rounded-lg transition-all duration-200 font-medium"
          onClick={onClick}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
