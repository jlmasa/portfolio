import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-12 border-t border-[#111]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="font-black text-lg text-[#F5F5F0] tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
          >
            JLMASA<span className="text-[#3B82F6]">.</span>
          </a>
          <span
            className="text-xs text-[#777] hidden md:block"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Designed & built by John Lorenz Masa
          </span>
        </div>

        <span
          className="text-xs text-[#777] md:hidden"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Designed & built by John Lorenz Masa
        </span>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-5">
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
                className="text-[#666] hover:text-[#3B82F6] transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
          <span
            className="text-xs text-[#777]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            © {year}
          </span>
        </div>
      </div>
    </footer>
  );
}
