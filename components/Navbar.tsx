"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Chi sono", href: "#about" },
  { label: "Servizi", href: "#services" },
  { label: "Chi aiuto", href: "#who-i-help" },
  { label: "Contatti", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-sage" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className={`font-cormorant text-2xl font-semibold tracking-wide transition-colors duration-300 ${
            scrolled ? "text-cream" : "text-forest"
          }`}
        >
          Giulia
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-dm-sans text-sm transition-colors duration-300 ${
                scrolled
                  ? "text-cream/80 hover:text-cream"
                  : "text-sage hover:text-forest"
              }`}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className={`font-dm-sans text-sm rounded-full px-5 py-2 transition-all duration-300 ${
              scrolled
                ? "text-sage bg-cream hover:bg-mist"
                : "text-cream bg-sage hover:bg-forest"
            }`}
          >
            Prenota una chiamata
          </a>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="md:hidden flex flex-col justify-center gap-[6px] p-1"
        >
          <span
            className={`block h-0.5 w-6 origin-center transition-all duration-300 ${
              scrolled ? "bg-cream" : "bg-forest"
            } ${menuOpen ? "translate-y-1.75 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              scrolled ? "bg-cream" : "bg-forest"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 origin-center transition-all duration-300 ${
              scrolled ? "bg-cream" : "bg-forest"
            } ${menuOpen ? "-translate-y-1.75 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className={`border-t px-6 py-6 flex flex-col gap-5 ${
            scrolled ? "bg-sage border-white/10" : "bg-cream border-mist"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-dm-sans text-base transition-colors duration-200 ${
                scrolled
                  ? "text-cream/80 hover:text-cream"
                  : "text-sage hover:text-forest"
              }`}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className={`font-dm-sans text-sm rounded-full px-5 py-2.5 text-center transition-all duration-200 ${
              scrolled
                ? "text-sage bg-cream hover:bg-mist"
                : "text-sage border border-sage hover:bg-sage hover:text-cream"
            }`}
          >
            Prenota una chiamata
          </a>
        </nav>
      </div>
    </header>
  );
}
