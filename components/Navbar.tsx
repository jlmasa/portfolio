"use client";

import { useState, useEffect } from "react";
import { clsx } from "clsx";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 px-6 md:px-12 transition-all duration-500",
        scrolled
          ? "py-4 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5"
          : "py-8"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-syne font-800 text-xl tracking-tight text-cream"
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
        >
          JLMASA<span className="text-[#3B82F6]">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-mono text-[#999] hover:text-[#3B82F6] transition-colors duration-200 tracking-widest uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Resume_Masa.pdf"
            target="_blank"
            className="px-5 py-2 border border-[#3B82F6] text-[#3B82F6] text-sm font-mono tracking-widest uppercase hover:bg-[#3B82F6] hover:text-white transition-all duration-200"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={clsx(
              "block w-6 h-px bg-cream transition-all duration-300",
              menuOpen && "rotate-45 translate-y-2"
            )}
          />
          <span
            className={clsx(
              "block w-6 h-px bg-cream transition-all duration-300",
              menuOpen && "opacity-0"
            )}
          />
          <span
            className={clsx(
              "block w-6 h-px bg-cream transition-all duration-300",
              menuOpen && "-rotate-45 -translate-y-2"
            )}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "md:hidden fixed inset-0 bg-[#0A0A0A] z-40 flex flex-col items-center justify-center gap-10 transition-all duration-500",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-3xl font-syne font-bold text-cream hover:text-[#3B82F6] transition-colors"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
