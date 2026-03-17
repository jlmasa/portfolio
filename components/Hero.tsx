"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";

const ROLES = ["Full-Stack Developer", "UI/UX Enthusiast", "Software Engineer", "Systems Architect"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 60);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 30);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((r) => (r + 1) % ROLES.length);
    }

    setDisplayText(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#F5F5F0 1px, transparent 1px), linear-gradient(90deg, #F5F5F0 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing orb */}
      <div
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #3B82F6 0%, #1D4ED8 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 border border-[#3B82F6]/30 bg-[#3B82F6]/5 mb-12"
          style={{ animation: "fadeIn 0.8s ease forwards" }}
        >
          <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
          <span
            className="text-xs text-[#3B82F6] tracking-widest uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Available for new opportunities
          </span>
        </div>

        {/* Main heading */}
        <div className="overflow-hidden mb-4">
          <h1
            className="text-[clamp(3rem,10vw,9rem)] font-black leading-none tracking-tighter text-[#F5F5F0]"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              animation: "slideUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both",
            }}
          >
            John Lorenz
          </h1>
        </div>
        <div className="overflow-hidden mb-8">
          <h1
            className="text-[clamp(3rem,10vw,9rem)] font-black leading-none tracking-tighter"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              WebkitTextStroke: "1px rgba(245,245,240,0.3)",
              color: "transparent",
              animation: "slideUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both",
            }}
          >
            Masa
          </h1>
        </div>

        {/* Role typewriter */}
        <div
          className="flex items-center gap-3 mb-10"
          style={{ animation: "fadeIn 0.8s ease 0.5s both" }}
        >
          <span
            className="text-lg md:text-2xl text-[#999]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            &gt;{" "}
          </span>
          <span
            className="text-lg md:text-2xl text-[#3B82F6]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {displayText}
            <span className="animate-[blink_1s_step-end_infinite] text-[#F5F5F0]">|</span>
          </span>
        </div>

        {/* Description */}
        <p
          className="max-w-2xl text-[#999] text-base md:text-lg leading-relaxed mb-14"
          style={{ animation: "fadeIn 0.8s ease 0.6s both" }}
        >
          I build fast, scalable web applications from pixel-perfect frontends to robust backend
          systems. Currently focused on React, Node.js, and distributed architectures.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
          style={{ animation: "fadeIn 0.8s ease 0.7s both" }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#3B82F6] text-white font-bold text-sm tracking-widest uppercase hover:bg-[#60A5FA] transition-colors duration-200"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            View Projects
            <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 border border-[#333] text-[#F5F5F0] font-bold text-sm tracking-widest uppercase hover:border-[#3B82F6] hover:text-[#3B82F6] transition-all duration-200"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div
          className="flex items-center gap-6 mt-14"
          style={{ animation: "fadeIn 0.8s ease 0.9s both" }}
        >
          {[
            { icon: Github, href: "https://github.com/jlmasa", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/johnmasa/", label: "LinkedIn" },

          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#555] hover:text-[#3B82F6] transition-colors duration-200"
            >
              <Icon size={20} />
            </a>
          ))}
          <div className="w-16 h-px bg-[#222]" />
          <span
            className="text-xs text-[#999] tracking-widest uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Follow along
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span
          className="text-xs tracking-widest uppercase text-[#999]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[#666] to-transparent" />
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
