"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#0f0f0f]/95 backdrop-blur-sm border-b border-[#2c2c2c] h-20">
        <div className="flex justify-between items-center h-full px-4 md:px-8 max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="text-lg font-black tracking-tighter text-white hover:text-orange-400 transition-colors">
            APPEXE DEVELOPMENTS LTD
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 lg:gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-semibold text-sm uppercase transition-colors ${
                  isActive(link.href)
                    ? "text-orange-500 border-b-2 border-orange-500 pb-1"
                    : "text-gray-300 hover:text-orange-500"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-orange-600 text-white font-semibold text-sm px-6 py-3 rounded uppercase transition-transform active:scale-95 hover:bg-orange-700">
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay + Panel */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Slide-out Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 bg-[#111111] shadow-2xl border-l border-[#2c2c2c] transform transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col pt-24 pb-8 px-6 gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-semibold text-base uppercase py-2 transition-colors ${
                  isActive(link.href)
                    ? "text-orange-500 border-l-4 border-orange-500 pl-4"
                    : "text-gray-300 hover:text-orange-500 pl-4"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="mt-4 bg-orange-600 text-white font-semibold text-sm px-6 py-3 rounded uppercase w-full text-center hover:bg-orange-700 transition">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
}