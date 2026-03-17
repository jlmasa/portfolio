"use client";

import { useEffect, useRef } from "react";

const skillCategories = [
  {
    category: "Frontend",
    color: "#3B82F6",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "CSS / Tailwind", level: 90 },
    ],
  },
  {
    category: "Backend",
    color: "#38BDF8",
    skills: [
      { name: "Node.js / Express", level: 93 },
      { name: "NestJS", level: 88 },
    ],
  },
  {
    category: "Infrastructure",
    color: "#818CF8",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "Docker", level: 82 },
      { name: "Vercel", level: 85 },
      { name: "CI/CD Pipelines", level: 80 },
    ],
  },
];

const tools = [
  "Git", "npm", "Postman", "pnpm", "ESLint", "Visual Studio code", "Ubuntu"
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && barRef.current) {
          barRef.current.style.width = `${level}%`;
        }
      },
      { threshold: 0.5 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <span
          className="text-sm text-[#999] group-hover:text-[#F5F5F0] transition-colors"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {name}
        </span>
        <span
          className="text-xs text-[#7e7e7e]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {level}%
        </span>
      </div>
      <div className="h-px bg-[#1A1A1A] w-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full w-0 transition-all duration-1000 ease-out"
          style={{
            background: color,
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 md:px-12 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-20">
          <span
            className="text-xs text-[#3B82F6] tracking-widest uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            03 / Skills
          </span>
          <div className="flex-1 h-px bg-[#1A1A1A]" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2
            className="text-5xl md:text-6xl font-black leading-none tracking-tighter text-[#F5F5F0]"
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
          >
            Tech
            <br />
            <span
              className="italic font-normal"
              style={{ fontFamily: "'Playfair Display', serif", color: "#3B82F6" }}
            >
              arsenal.
            </span>
          </h2>
          <p
            className="text-sm text-[#555] max-w-xs"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Technologies I work with daily and have shipped to production.
          </p>
        </div>

        {/* Skill categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {skillCategories.map((cat) => (
            <div key={cat.category}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 rounded-full" style={{ background: cat.color }} />
                <h3
                  className="text-xs tracking-widest uppercase text-[#555]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {cat.category}
                </h3>
              </div>
              <div className="space-y-6">
                {cat.skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={cat.color}
                    delay={i * 100}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools marquee */}
        <div>
          <p
            className="text-xs text-[#333] tracking-widest uppercase mb-6 text-center"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Tools & Workflow
          </p>
          <div className="relative overflow-hidden">
            <div className="flex gap-6 w-max animate-[marquee_20s_linear_infinite]">
              {[...tools, ...tools].map((tool, i) => (
                <span
                  key={`${tool}-${i}`}
                  className="px-4 py-2 border border-[#1A1A1A] text-[#7e7e7e] text-sm whitespace-nowrap hover:border-[#3B82F6]/30 hover:text-[#3B82F6] transition-colors"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
