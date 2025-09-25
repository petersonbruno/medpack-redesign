"use client";

import Link from "next/link";

export default function NavLinks({ items, onClick, className = "" }) {
  return (
    <nav className={`flex flex-col md:flex-row ${className}`}>
      {items.map((item) => (
        <Link
          key={item}
          href={`/${item.toLowerCase()}`} // dynamic route if available
          className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 md:hover:bg-transparent rounded-lg transition-all duration-200 font-medium"
          onClick={onClick}
        >
          {item}
        </Link>
      ))}
    </nav>
  );
}
