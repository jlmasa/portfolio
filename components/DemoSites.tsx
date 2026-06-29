"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ExternalLink, ArrowUpRight, Globe, ChevronLeft, ChevronRight } from "lucide-react";

const demoSites = [
  {
    id: "01",
    title: "Forge Gym",
    category: "Fitness & Wellness",
    description:
      "High-intensity gym landing page with membership plans, class schedules, and trainer profiles. Bold typographic hero with a live burn-target widget.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/demos/gym.png",
    live: "https://forgegym-ayf.pages.dev/",
    accent: "#CA8A04",
  },
  {
    id: "02",
    title: "Ember & Salt",
    category: "Fine Dining",
    description:
      "Upscale Filipino restaurant site with editorial typography, reservation flow, and an immersive dark-gold atmosphere.",
    tags: ["Next.js", "Tailwind CSS"],
    image: "/demos/restaurant.png",
    live: "https://embersalts.pages.dev/",
    accent: "#C9A84C",
  },
  {
    id: "03",
    title: "Kapenila",
    category: "Coffee Shop",
    description:
      "Specialty coffee ordering site for a Quezon City café sourcing beans from Benguet and Sagada farmers. Features menu browsing and cart.",
    tags: ["Next.js", "Tailwind CSS"],
    image: "/demos/coffeeshop.png",
    live: "https://kapenila.pages.dev/",
    accent: "#A0734A",
  },
  {
    id: "04",
    title: "Hannah Properties",
    category: "Real Estate",
    description:
      "Property listing platform for Metro Manila with search, listing filters, and agent contact. Houses, condos, and commercial spaces.",
    tags: ["Next.js", "Tailwind CSS"],
    image: "/demos/real-estate.png",
    live: "https://hannahproperties.pages.dev/",
    accent: "#15803D",
  },
  {
    id: "05",
    title: "LP Glass",
    category: "Glass & Aluminum",
    description:
      "Clean service site for a glass and aluminum specialist. Showcases sliding windows, screen doors, awning types, and kitchen cabinet solutions.",
    tags: ["Next.js", "Tailwind CSS"],
    image: "/demos/lpglass.png",
    live: "https://lp-glass.pages.dev/",
    accent: "#0369A1",
  },
  {
    id: "06",
    title: "PearlSmile Dental",
    category: "Healthcare",
    description:
      "Dental clinic site with a 4-step appointment booking flow, service selection, doctor profiles, and same-week scheduling.",
    tags: ["Next.js", "Tailwind CSS"],
    image: "/demos/dental.png",
    live: "https://pearlsmiledental.pages.dev/",
    accent: "#0F766E",
  },
];

function DemoSiteCard({ site }: { site: (typeof demoSites)[0] }) {
  // Track pointer down position to distinguish a click from a drag/scroll
  const pointerDownX = useRef(0);

  const handlePointerDown = (e: React.PointerEvent) => {
    pointerDownX.current = e.clientX;
  };

  const handleClick = (e: React.MouseEvent) => {
    // If the user dragged more than 6px, treat it as a scroll — don't navigate
    if (Math.abs(e.clientX - pointerDownX.current) > 6) return;
    if (site.live) window.open(site.live, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="group relative flex-none border border-[#1A1A1A] bg-[#0D0D0D] hover:border-[#2A2A2A] transition-all duration-500 overflow-hidden flex flex-col rounded-xl"
      style={{
        scrollSnapAlign: "center",
        width: "min(900px, 92vw)",
        height: "100%",
        cursor: site.live ? "pointer" : "default",
      }}
      onPointerDown={handlePointerDown}
      onClick={handleClick}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none z-0"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${site.accent}, transparent 65%)`,
        }}
      />

      {/* Browser chrome bar */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#111] border-b border-[#1A1A1A] relative z-10 shrink-0">
        <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
        <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
        <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
        <span
          className="ml-3 flex-1 text-[10px] text-[#333] truncate"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {site.live ?? `demo.jlmasa.dev/${site.title.toLowerCase().replace(/\s+/g, "-")}`}
        </span>
        {site.live && (
          <a
            href={site.live}
            target="_blank"
            rel="noopener noreferrer"
            // Stop propagation so the card's onClick doesn't also fire
            onClick={(e) => e.stopPropagation()}
            className="text-[#444] hover:text-[#888] transition-colors"
          >
            <ExternalLink size={10} />
          </a>
        )}
      </div>

      {/* Screenshot — flex-1 so it takes remaining space above content */}
      <div className="relative w-full overflow-hidden bg-[#0A0A0A] z-10 flex-1 min-h-0">
        <Image
          src={site.image}
          alt={`${site.title} screenshot`}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="min(900px, 92vw)"
        />
        {/* Bottom vignette */}
        <div
          className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #0D0D0D)" }}
        />
      </div>

      {/* Content — fixed height, never grows */}
      <div className="relative z-10 flex flex-col shrink-0 p-7 gap-3">
        {/* Top row */}
        <div className="flex items-center justify-between">
          <span
            className="text-[10px] tracking-widest text-[#2A2A2A]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {site.id}
          </span>
          <span
            className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] tracking-widest uppercase border rounded"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: site.accent,
              borderColor: site.accent + "55",
              background: site.accent + "10",
            }}
          >
            <Globe size={9} />
            {site.category}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-3xl font-black leading-none tracking-tight text-[#F5F5F0]"
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
        >
          {site.title}
          <ArrowUpRight
            size={20}
            className="inline-block ml-2 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300"
            style={{ color: site.accent }}
          />
        </h3>

        {/* Description */}
        <p className="text-[16px] text-[#888] leading-relaxed">
          {site.description}
        </p>

        {/* Tags + accent line */}
        <div>
          <div className="flex flex-wrap gap-2 mb-3">
            {site.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[10px] border border-[#1A1A1A] text-[#999]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {tag}
              </span>
            ))}
          </div>
          {/* Animated accent line */}
          <div
            className="h-px w-0 group-hover:w-full transition-all duration-700 ease-out"
            style={{ background: site.accent }}
          />
        </div>
      </div>
    </div>
  );
}

export default function DemoSites() {
  const trackRef = useRef<HTMLDivElement>(null);
  const wheelHandlerRef = useRef<((e: WheelEvent) => void) | null>(null);
  const [isHijacked, setIsHijacked] = useState(false);

  const scroll = (dir: "left" | "right") => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({
      left: dir === "left" ? -940 : 940,
      behavior: "smooth",
    });
  };

  const enableHijack = () => {
    if (wheelHandlerRef.current || !trackRef.current) return;
    const handler = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
      e.preventDefault();
      trackRef.current?.scrollBy({ left: e.deltaY * 1.2 });
    };
    wheelHandlerRef.current = handler;
    trackRef.current.addEventListener("wheel", handler, { passive: false });
    setIsHijacked(true);
  };

  const disableHijack = () => {
    if (!wheelHandlerRef.current || !trackRef.current) return;
    trackRef.current.removeEventListener("wheel", wheelHandlerRef.current);
    wheelHandlerRef.current = null;
    setIsHijacked(false);
  };

  return (
    <section
      id="demo-sites"
      className="flex flex-col"
      style={{ height: "100dvh", paddingTop: "48px", paddingBottom: "24px" }}
    >
      {/* Header — fixed height, never grows */}
      <div className="max-w-4xl mx-auto w-full px-6 md:px-12 shrink-0">
        <div className="flex items-center gap-4 mb-8">
          <span
            className="text-xs text-[#3B82F6] tracking-widest uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            03 / Demo Sites
          </span>
          <div className="flex-1 h-px bg-[#1A1A1A]" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <h2
            className="text-5xl md:text-6xl font-black leading-none tracking-tighter text-[#F5F5F0]"
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
          >
            Live
            <br />
            <span
              className="italic font-normal"
              style={{ fontFamily: "'Playfair Display', serif", color: "#3B82F6" }}
            >
              concepts.
            </span>
          </h2>

          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                aria-label="Scroll left"
                className="w-9 h-9 border border-[#1A1A1A] text-[#444] hover:border-[#333] hover:text-[#F5F5F0] transition-all duration-200 flex items-center justify-center rounded"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Scroll right"
                className="w-9 h-9 border border-[#1A1A1A] text-[#444] hover:border-[#333] hover:text-[#F5F5F0] transition-all duration-200 flex items-center justify-center rounded"
              >
                <ChevronRight size={16} />
              </button>
            </div>
            <p
              className="text-[10px] transition-colors duration-300"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: isHijacked ? "#3B82F6" : "#2A2A2A",
              }}
            >
              {isHijacked ? "↔ scroll active" : "hover to scroll horizontally"}
            </p>
          </div>
        </div>
      </div>

      {/* Scrollable track — flex-1 so it fills remaining height */}
      <div
        className="flex-1 min-h-0"
        onMouseEnter={enableHijack}
        onMouseLeave={disableHijack}
      >
        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto overflow-y-hidden h-full"
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            paddingLeft: "clamp(1.5rem, 10vw, 12rem)",
            paddingRight: "clamp(1.5rem, 10vw, 12rem)",
            paddingBottom: "4px",
          }}
        >
          {demoSites.map((site) => (
            <DemoSiteCard key={site.id} site={site} />
          ))}
        </div>
      </div>
    </section>
  );
}