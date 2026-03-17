"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";

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
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* ── Navbar bar ─────────────────────────────────────────────────────── */}
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
            className="relative z-50 text-xl tracking-tight text-[#F5F5F0]"
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
          >
            JLMASA<span className="text-[#3B82F6]">.</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[#999] hover:text-[#3B82F6] transition-colors duration-200 tracking-widest uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/Resume_Masa.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 border border-[#3B82F6] text-[#3B82F6] text-sm tracking-widest uppercase hover:bg-[#3B82F6] hover:text-white transition-all duration-200"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Resume
            </a>
          </div>

          {/* Hamburger — z-[60] keeps it above the overlay (z-[55]) */}
          <button
            className="md:hidden relative z-[60] flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={clsx(
                "block w-6 h-px bg-[#F5F5F0] transition-all duration-300",
                menuOpen && "rotate-45 translate-y-[7px]"
              )}
            />
            <span
              className={clsx(
                "block w-6 h-px bg-[#F5F5F0] transition-all duration-300",
                menuOpen && "opacity-0 scale-x-0"
              )}
            />
            <span
              className={clsx(
                "block w-6 h-px bg-[#F5F5F0] transition-all duration-300",
                menuOpen && "-rotate-45 -translate-y-[7px]"
              )}
            />
          </button>
        </div>
      </nav>

      {/* ── Mobile full-screen overlay ───────────────────────────────────────
       *  Sibling of <nav>, not a child — so `fixed inset-0` always anchors to
       *  the real viewport, unaffected by backdrop-filter on the navbar.
       * ──────────────────────────────────────────────────────────────────── */}
      <div
        className={clsx(
          "md:hidden fixed inset-0 bg-[#0A0A0A] z-[55]",
          "flex flex-col items-center justify-center gap-10",
          "transition-all duration-500 ease-in-out",
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className={clsx(
              "text-3xl font-bold text-[#F5F5F0] hover:text-[#3B82F6] transition-all duration-300",
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            )}
            style={{
              fontFamily: "'Syne', sans-serif",
              transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
            }}
          >
            {link.label}
          </a>
        ))}

        <a
          href="/Resume_Masa.pdf"
          target="_blank"
          rel="noreferrer"
          onClick={() => setMenuOpen(false)}
          className={clsx(
            "mt-4 px-8 py-3 border border-[#3B82F6] text-[#3B82F6] text-sm tracking-widest uppercase",
            "hover:bg-[#3B82F6] hover:text-white transition-all duration-300",
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          )}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            transitionDelay: menuOpen ? `${navLinks.length * 60}ms` : "0ms",
          }}
        >
          Resume
        </a>
      </div>
    </>
  );
}