"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Car } from 'lucide-react';

const navLinks = [
  { href: "/book", label: "Book a Ride" },
  { href: "/driver", label: "Become a Driver" },
  { href: "/cities", label: "Cities" },
  { href: "/safety", label: "Safety" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50 }}
      className={[
        "transition-all duration-300",
        scrolled ? "bg-[#1A1A2E]/95 backdrop-blur-md shadow-lg border-b border-white/5" : "bg-transparent",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-[#E94560] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Car className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">
              Ride<span className="text-[#E94560]">Swift</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  pathname === link.href
                    ? "text-[#E94560] bg-[#E94560]/10"
                    : "text-white/70 hover:text-white hover:bg-white/5",
                ].join(" ")}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/book"
              className="px-5 py-2.5 bg-[#E94560] hover:bg-[#c73652] text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Book Now
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div className={["md:hidden transition-all duration-300 overflow-hidden", isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"].join(" ")}>
        <div className="bg-[#16213E] border-t border-white/5 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={[
                "block px-4 py-3 rounded-xl text-sm font-medium transition-all",
                pathname === link.href
                  ? "text-[#E94560] bg-[#E94560]/10"
                  : "text-white/70 hover:text-white hover:bg-white/5",
              ].join(" ")}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/book"
              className="block w-full text-center px-5 py-3 bg-[#E94560] hover:bg-[#c73652] text-white text-sm font-semibold rounded-xl transition-colors"
            >
              Book a Ride Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}