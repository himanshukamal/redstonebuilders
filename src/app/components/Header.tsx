"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "./navLinks";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#fff6f4] shadow-sm">
      <div className="h-[90px] w-full flex px-4 items-center justify-between">
        {/* The logo file has wide white margins, so it's scaled up inside a cropping box */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="relative block h-[70px] w-[70px] lg:h-[80px] lg:w-[80px] overflow-hidden rounded-md bg-white"
        >
          <Image
            src="/redstonebuilders-logo.jpeg"
            alt="Redstone Builders logo"
            fill
            sizes="80px"
            className="object-cover scale-[1.55]"
            priority
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-semibold py-1 border-b-2 transition-colors ${
                  active
                    ? "text-[#E76969] border-[#E76969]"
                    : "text-gray-900 border-transparent hover:text-[#E76969]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="#enquiry"
            className="bg-[#E76969] hover:bg-[#d45959] text-white px-5 py-2 rounded-md font-bold transition-colors"
          >
            Enquire Now
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-gray-900 p-2"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav className="lg:hidden flex flex-col px-4 pb-4 border-t border-[#F6DCDC]">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`py-3 font-semibold border-b border-[#F6DCDC] ${
                  active ? "text-[#E76969]" : "text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="#enquiry"
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-[#E76969] hover:bg-[#d45959] text-white px-5 py-3 rounded-md font-bold text-center transition-colors"
          >
            Enquire Now
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
