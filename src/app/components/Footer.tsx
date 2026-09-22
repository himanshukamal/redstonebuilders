import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navLinks } from "./navLinks";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="relative h-[110px] w-[110px] overflow-hidden rounded-md bg-white">
            <Image
              src="/redstonebuilders-logo.jpeg"
              alt="Redstone Builders logo"
              fill
              sizes="110px"
              className="object-cover scale-[1.55]"
            />
          </div>
          <p className="text-white/70 mt-4 text-sm">
            Real estate, construction, rentals and hospitality, all under one roof.
          </p>
        </div>

        <div>
          <p className="font-black uppercase mb-4">Explore</p>
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/70 hover:text-[#E76969] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-black uppercase mb-4">Get in touch</p>
          <p className="text-white/70 text-sm mb-4">
            Have a question about a property, a construction project or a booking? We&apos;re happy to help.
          </p>
          <a
            href="#enquiry"
            className="inline-block bg-[#E76969] hover:bg-[#d45959] text-white px-5 py-2 rounded-md font-bold transition-colors"
          >
            Enquire Now
          </a>
        </div>
      </div>

      <div className="border-t border-white/20 py-4 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Redstone Builders. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
