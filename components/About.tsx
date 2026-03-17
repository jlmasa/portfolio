"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 30, suffix: "+", label: "Projects Shipped" },
];

// Easing function: ease-out cubic
function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const duration = 1500; // ms
          const startTime = performance.now();

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutCubic(progress);

            setCount(Math.round(eased * target));

            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={elRef} className="text-4xl font-black text-[#3B82F6] mb-2 group-hover:scale-105 transition-transform duration-200 origin-left tabular-nums"
      style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
    >
      {count}{suffix}
    </div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6 md:px-12 relative">
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

            <div className="space-y-5 text-[#888] leading-relaxed text-[19px] reveal">
              <p>
                I&apos;m a full-stack developer with over 5 years of experience building
                products that a lot of people use. I care deeply about the intersection of
                engineering excellence and design sensibility.
              </p>
              <p>
                My work spans the entire stack — from architecting distributed backend systems to
                sweating the micro-interactions in a UI. I believe software should be{" "}
                <span className="text-[#F5F5F0]">fast, accessible, and delightful</span>.
              </p>
              <p>
                I am located in Laguna/Makati and when I am not coding you&apos;ll find me enjoying
                foods around my hometown.
              </p>
            </div>

            <div className="mt-10 reveal">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm text-[#3B82F6] border-b border-[#3B82F6]/30 pb-1 hover:border-[#3B82F6] transition-colors"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Let&apos;s work together →
              </a>
            </div>
          </div>

          {/* Right: Stats + image */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4 reveal">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 border border-[#1A1A1A] bg-[#111] hover:border-[#3B82F6]/30 transition-colors duration-300 group"
                >
                  <CountUp target={stat.value} suffix={stat.suffix} />
                  <div
                    className="text-xs text-[#555] tracking-widest uppercase"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Image area */}
            <div className="relative reveal">
              <div className="w-full aspect-[4/3] bg-[#111] border border-[#1A1A1A] overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-auto h-auto my-auto rounded-full bg-[#1A1A1A] border-2 border-[#3B82F6]/20 mx-auto mb-4 flex items-center justify-center text-4xl">
                      <Image src="/picture.jpg" width={500} height={300} alt="pic" />
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#3B82F6]/40" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[#3B82F6]/40" />
              </div>
              <div className="absolute -right-3 top-8 bottom-8 w-0.5 bg-[#3B82F6]/20" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .reveal {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        section.in-view .reveal { opacity: 1; transform: translateY(0); }
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
      `}</style>
    </section>
  );
}