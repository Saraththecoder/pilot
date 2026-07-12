"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "#portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--color-brand-dark)] shadow-lg"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center overflow-hidden mix-blend-screen">
                <Image 
                  src="/logo.png" 
                  alt="SkyPilot Logo" 
                  fill 
                  className="object-contain scale-125"
                />
              </div>
              <span className="font-oswald text-2xl font-bold uppercase tracking-wider hidden sm:block">
                <span className="text-gradient-silver">Sky</span>
                <span className="text-[var(--color-brand-orange)]">Pilot</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-widest font-inter hover:text-[var(--color-brand-orange)] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <a
              href="https://wa.me/919391705935"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2 rounded-full font-oswald tracking-wide font-bold transition-all duration-300 ${
                isScrolled
                  ? "bg-[var(--color-brand-orange)] text-[var(--color-brand-dark)] hover:bg-orange-600 hover:text-white"
                  : "border-2 border-[var(--color-brand-orange)] text-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange)] hover:text-[var(--color-brand-dark)]"
              }`}
            >
              Get a Free Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[var(--color-brand-orange)] focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[var(--color-brand-dark)] border-t border-gray-800 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-4 text-base uppercase tracking-widest font-inter hover:text-[var(--color-brand-orange)] border-b border-gray-800"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-3">
              <a
                href="https://wa.me/919391705935"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[var(--color-brand-orange)] text-[var(--color-brand-dark)] px-6 py-3 rounded-full font-oswald tracking-wide font-bold hover:bg-orange-600 hover:text-white transition-colors"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
