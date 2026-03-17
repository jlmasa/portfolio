"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "30+", label: "Projects Shipped" },

];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view"); // adds to section ✓
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current); // observe section, not children

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6 md:px-12 relative">
      {/* Section label */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-20">
          <span
            className="text-xs text-[#3B82F6] tracking-widest uppercase reveal"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            01 / About
          </span>
          <div className="flex-1 h-px bg-[#1A1A1A]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Text */}
          <div>
            <h2
              className="text-5xl md:text-6xl font-black leading-none tracking-tighter text-[#F5F5F0] mb-8 reveal"
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
            >
              Crafting digital
              <br />
              <span
                className="italic font-normal"
                style={{ fontFamily: "'Playfair Display', serif", color: "#3B82F6" }}
              >
                experiences
              </span>{" "}
              that matter.
            </h2>

            <div
              className="space-y-5 text-[#888] leading-relaxed text-base reveal"
            >
              <p>
                I&apos;m a full-stack developer with over 5 years of experience building
                products that a lot of people use. I care deeply about the intersection of
                engineering excellence and design sensibility.
              </p>
              <p>
                My work spans the entire stack — from architecting distributed backend systems to
                sweating the micro-interactions in a UI. I believe software should be {" "}
                <span className="text-[#F5F5F0]">fast, accessible, and delightful</span>.
              </p>
              <p>
                I am located in Laguna/makati and when I am not coding you'll find me enjoying foods around my hometown.
              </p>
            </div>

            <div className="mt-10 reveal ">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm text-[#3B82F6] border-b border-[#3B82F6]/30 pb-1 hover:border-[#3B82F6] transition-colors"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Let&apos;s work together →
              </a>
            </div>
          </div>

          {/* Right: Stats + image placeholder */}
          <div className="space-y-8">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 reveal">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 border border-[#1A1A1A] bg-[#111] hover:border-[#3B82F6]/30 transition-colors duration-300 group"
                >
                  <div
                    className="text-4xl font-black text-[#3B82F6] mb-2 group-hover:scale-105 transition-transform duration-200 origin-left"
                    style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs text-[#555] tracking-widest uppercase"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Image / Avatar area */}
            <div className="relative reveal">
              <div className="w-full aspect-[4/3] bg-[#111] border border-[#1A1A1A] overflow-hidden relative">
                {/* Placeholder for actual photo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div
                      className="w-auto h-auto my-auto rounded-full bg-[#1A1A1A] border-2 border-[#3B82F6]/20 mx-auto mb-4 flex items-center justify-center text-4xl"
                    >
                      <Image src="/picture.jpg" width={500} height={300} alt="pic" />
                    </div>
                  </div>
                </div>
                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#3B82F6]/40" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[#3B82F6]/40" />
              </div>
              {/* Gold accent bar */}
              <div className="absolute -right-3 top-8 bottom-8 w-0.5 bg-[#3B82F6]/20" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .in-view .reveal {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .reveal {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        section.in-view .reveal { opacity: 1; transform: translateY(0); }
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
         { transition-delay: 300ms; }
      `}</style>
    </section>
  );
}
