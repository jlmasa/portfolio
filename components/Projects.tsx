"use client";

import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Casa De Padrid Online Reservation",
    description:
      "Web application used for handling reservation for customers who want catering for their events",
    tags: ["Bootstrap", "PHP", "MySQL", "Hack"],
    github: null,
    live: null,
    featured: true,
    size: "large",
    accent: "#3B82F6",
  },
  {
    id: "02",
    title: "Compus Ministry Online Services",
    description:
      "Web and mobile application use for evaluation of formation services offered by Campus Ministry Letran Calamba",
    tags: ["React.Js", "Node.js", "AntD", "Express JS"],
    github: null,
    live: null,
    featured: false,
    size: "medium",
    accent: "#38BDF8",
  },
  {
    id: "03",
    title: "TravelMate",
    description:
      "Androind Mobile Application made for traveling with live maps that shows nearby restaurants, Hotels, gas station and hospital with news embeded",
    tags: ["Java", "Android Studio", "Volley", "Kotlin"],
    github: "https://github.com/jlmasa/Travel-Mate",
    live: null,
    featured: false,
    size: "medium",
    accent: "#818CF8",
  },
  {
    id: "04",
    title: "Geo Information App",
    description:
      "Web application showing pinpoint projects across a leaflet map",
    tags: ["Next.js", "Leaflet", "PostgreSQL"],
    github: null,
    live: null,
    featured: false,
    size: "small",
    accent: "#22D3EE",
  },
  {
    id: "05",
    title: "Document Control App",
    description:
      "Web Application for listing documents and providing PDF Crystal Reports",
    tags: ["Nest.Js", "React.js", "PostgreSQL"],
    github: null,
    live: null,
    featured: false,
    size: "small",
    accent: "#93C5FD",
  },
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const isLarge = project.size === "large";

  return (
    <div
      className={`group relative border border-[#1A1A1A] bg-[#0D0D0D] hover:border-[#333] transition-all duration-500 p-8 flex flex-col ${isLarge ? "col-span-1 md:col-span-2 min-h-[380px]" : "min-h-[280px]"
        }`}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 30% 30%, ${project.accent}, transparent 70%)` }}
      />

      {/* Top row */}
      <div className="flex items-start justify-between mb-auto">
        <span
          className="text-xs tracking-widest text-[#333]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {project.id}
        </span>
        <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#555] hover:text-[#F5F5F0] transition-colors"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#555] hover:text-[#F5F5F0] transition-colors"
              aria-label="Live demo"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="mt-12">
        <h3
          className={`font-black leading-none tracking-tight text-[#F5F5F0] mb-4 group-hover:text-[${project.accent}] transition-colors duration-300 ${isLarge ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"
            }`}
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
        >
          {project.title}
          <ArrowUpRight
            size={isLarge ? 32 : 20}
            className="inline-block ml-2 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300"
            style={{ color: project.accent }}
          />
        </h3>

        <p
          className={`text-[#999] leading-relaxed mb-6 ${isLarge ? "text-base max-w-xl" : "text-sm"
            }`}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs border border-[#1A1A1A] text-[#888] hover:border-[#333] transition-colors"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Accent corner */}
      <div
        className="absolute bottom-0 right-0 w-16 h-0.5 opacity-0 group-hover:opacity-100 transition-all duration-500"
        style={{ background: project.accent }}
      />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-20">
          <span
            className="text-xs text-[#3B82F6] tracking-widest uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            02 / Projects
          </span>
          <div className="flex-1 h-px bg-[#1A1A1A]" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <h2
            className="text-5xl md:text-6xl font-black leading-none tracking-tighter text-[#F5F5F0]"
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
          >
            Selected
            <br />
            <span
              className="italic font-normal"
              style={{ fontFamily: "'Playfair Display', serif", color: "#3B82F6" }}
            >
              work.
            </span>
          </h2>
          <a
            href="https://github.com/jlmasa"
            target="_blank"
            className="text-sm text-[#555] hover:text-[#3B82F6] transition-colors flex items-center gap-2"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <Github size={14} /> All repos on GitHub →
          </a>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
