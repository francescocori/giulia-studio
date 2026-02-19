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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* Main header bar */}
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

          {/* Hamburger — only visible on mobile, hidden when panel is open */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Apri menu"
            aria-expanded={menuOpen}
            className={`md:hidden flex flex-col justify-center gap-1.5 p-1 transition-opacity duration-200 ${
              menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <span className={`block h-0.5 w-6 transition-colors duration-300 ${scrolled ? "bg-cream" : "bg-forest"}`} />
            <span className={`block h-0.5 w-6 transition-colors duration-300 ${scrolled ? "bg-cream" : "bg-forest"}`} />
            <span className={`block h-0.5 w-6 transition-colors duration-300 ${scrolled ? "bg-cream" : "bg-forest"}`} />
          </button>
        </div>
      </header>

      {/* Full-screen side panel */}
      <div
        className={`fixed inset-0 z-50 bg-sage md:hidden transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Panel top bar — mirrors header layout */}
        <div className="px-6 py-5 flex items-center justify-between">
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="font-cormorant text-2xl font-semibold tracking-wide text-cream"
          >
            Giulia
          </a>

          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Chiudi menu"
            className="p-1"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              className="w-6 h-6 text-cream"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Divider */}
        <div className="mx-6 h-px bg-white/10" />

        {/* Nav links */}
        <nav className="px-8 pt-10 pb-10 flex flex-col">
          <div className="flex flex-col gap-1 mb-10">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{ transitionDelay: menuOpen ? `${i * 50 + 80}ms` : "0ms" }}
                className={`font-cormorant text-4xl font-semibold py-2.5 transition-all duration-500 text-cream/80 hover:text-cream ${
                  menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{ transitionDelay: menuOpen ? "300ms" : "0ms" }}
            className={`font-dm-sans text-sm rounded-full px-6 py-3.5 text-center transition-all duration-500 self-start text-sage bg-cream hover:bg-mist ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            Prenota una chiamata
          </a>
        </nav>
      </div>
    </>
  );
}
