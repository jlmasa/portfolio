"use client";

const experiences = [
  {
    year: "2024 — Present",
    role: "Full-Stack Developer",
    company: "Quadstruct Inc",
    location: "Makati City, PH",
    description:
      "Leads the end-to-end development of internal administrative systems including an HRIS, Document Control System, Inventory System, and Supplies Management System. Builds specialized engineering tools that assist structural engineers with computations, data analysis, and workflow efficiency using a modern tech stack — ReactJS, NextJS, Tailwind, NodeJS, ExpressJS, Prisma, MySQL, REST APIs, and Microservices. Also designed and launched the company's public-facing website, and provides ongoing IT support to end-users covering software installations, hardware troubleshooting, and network issues.",
    highlights: ["Javascript", "TypeScript", "Python", "ReactJS", "NodeJs", "Express", "Nest", "NextJS", "TailwindCSS", "MySQL", "PostgreSQL", "Docker", "Ubuntu"],
  },
  {
    year: "2021 — 2023",
    role: "Innovation Expert / Developer",
    company: "Denso Philippines",
    location: "Calamba, PH",
    description:
      "Developed and automated key L&D processes across departments, delivering digital solutions such as an e-Training platform, Learning Management System, and Trainers Evaluation System. Leveraged a diverse tech stack including HTML, CSS, PHP, MySQL, JavaScript, ReactJS, NodeJS, MS VBA, and Microsoft Power Platform to streamline workflows and reduce manual effort. Conducted software training sessions for associates, specialists, and team leaders, and provided ongoing technical support across the organization.",
    highlights: ["Javascript", "ReactJS", "NodeJs", "MySQL", "HTML", "CSS", "PHP", "MS VBA", "MS PowerApps"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-20">
          <span
            className="text-xs text-[#3B82F6] tracking-widest uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            04 / Experience
          </span>
          <div className="flex-1 h-px bg-[#1A1A1A]" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2
            className="text-5xl md:text-6xl font-black leading-none tracking-tighter text-[#F5F5F0]"
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
          >
            Where I&apos;ve
            <br />
            <span
              className="italic font-normal"
              style={{ fontFamily: "'Playfair Display', serif", color: "#3B82F6" }}
            >
              worked.
            </span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-3 bottom-3 w-px bg-[#1A1A1A] hidden md:block" />

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className="group relative md:pl-12 pb-16 last:pb-0"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-3 w-2 h-2 -translate-x-1/2 rounded-full bg-[#1A1A1A] border border-[#333] group-hover:bg-[#3B82F6] group-hover:border-[#3B82F6] transition-all duration-300 hidden md:block"
                />

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12">
                  {/* Left: meta */}
                  <div>
                    <div
                      className="text-xs text-[#777] mb-2 tracking-widest"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {exp.year}
                    </div>
                    <div
                      className="text-xs text-[#999]"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {exp.location}
                    </div>
                  </div>

                  {/* Right: content */}
                  <div className="border border-[#1A1A1A] p-8 bg-[#0D0D0D] group-hover:border-[#333] transition-colors duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3
                          className="text-xl font-bold text-[#F5F5F0] mb-1"
                          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
                        >
                          {exp.role}
                        </h3>
                        <div
                          className="text-sm text-[#3B82F6]"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          @ {exp.company}
                        </div>
                      </div>
                      <span
                        className="text-xs px-3 py-1 border border-[#1A1A1A] text-[#444] self-start"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        0{i + 1}
                      </span>
                    </div>

                    <p className="text-[#666] text-sm leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-[#111] border border-[#1A1A1A] text-[#555]"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
