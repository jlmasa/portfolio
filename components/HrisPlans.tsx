"use client";

import Image from "next/image";
import { Check, Sparkles, ArrowUpRight, ExternalLink } from "lucide-react";

type PlanFeature = {
  label: string;
};

type Plan = {
  id: string;
  tier: 1 | 2 | 3;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  image: string;
  accent: string;
  featured?: boolean;
  inherits?: string;
  features: PlanFeature[];
  live?: string;
};

// NOTE: price values are placeholders — swap for your real pricing.
// NOTE: image paths expect screenshots at /public/demos/hris-basic.png,
// hris-standard.png, hris-premium.png (the three dashboard captures).
// NOTE: `live` points at the hosted demo — same app for all three tiers here,
// so it's one URL. Give each its own if you deploy separate demo instances.
const hrisPlans: Plan[] = [
  {
    id: "basic",
    tier: 1,
    name: "Basic",
    tagline: "Core HR, done right",
    price: "₱1,499",
    period: "/mo",
    description:
      "Employee records, attendance, and self-service — the essentials a lean team needs to run HR without spreadsheets.",
    image: "/demos/basic.png",
    accent: "#64748B",
    features: [
      { label: "Employee records & profiles" },
      { label: "Time & attendance tracking" },
      { label: "Self-service employee portal" },
      { label: "Standard reports" },
    ],
    live: "https://hris-basic.pages.dev/",
  },
  {
    id: "standard",
    tier: 2,
    name: "Standard",
    tagline: "For teams that are hiring",
    price: "₱2,999",
    period: "/mo",
    description:
      "Adds recruitment, benefits, and org structure — built for teams actively growing headcount.",
    image: "/demos/standard.png",
    accent: "#3B82F6",
    featured: true,
    inherits: "Everything in Basic, plus",
    features: [
      { label: "Benefits administration" },
      { label: "Recruitment & applicant tracking" },
      { label: "Team & org structure" },
    ],
    live: "https://hris-standard.pages.dev/",
  },
  {
    id: "premium",
    tier: 3,
    name: "Premium",
    tagline: "Full HR command center",
    price: "₱4,999",
    period: "/mo",
    description:
      "Payroll, performance, and executive analytics on top of Standard — the complete suite for scaling companies.",
    image: "/demos/premium.png",
    accent: "#D4AF37",
    inherits: "Everything in Standard, plus",
    features: [
      { label: "Payroll processing" },
      { label: "Performance reviews" },
      { label: "Executive dashboard" },
    ],
    live: "https://hris-premium.pages.dev/",
  },
];

// NOTE: placeholder inbox — swap for your real contact address.
const CONTACT_EMAIL = "johnlorenz.masa@gmail.com";

// Builds a mailto: link pre-filled with the plan the visitor is asking about.
function getMailtoHref(plan: Plan) {
  const subject = encodeURIComponent(`HRIS ${plan.name} plan inquiry`);
  const body = encodeURIComponent(
    `Hi,\n\nI'm interested in the ${plan.name} plan (${plan.price}${plan.period}). Could you share more details?\n\n`
  );
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

function TierMeter({ tier, accent }: { tier: number; accent: string }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="text-[10px] tracking-widest text-[#444]"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        TIER {tier}/3
      </span>
      <div className="flex gap-1">
        {[1, 2, 3].map((seg) => (
          <span
            key={seg}
            className="h-1 w-4 rounded-full transition-colors duration-500"
            style={{ background: seg <= tier ? accent : "#1A1A1A" }}
          />
        ))}
      </div>
    </div>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const mailtoHref = getMailtoHref(plan);

  return (
    <div
      className={`group relative flex flex-col border bg-[#0D0D0D] rounded-xl overflow-hidden transition-all duration-500 h-full ${plan.featured
          ? "border-[#3B82F6]/40 md:-translate-y-3"
          : "border-[#1A1A1A] hover:border-[#2A2A2A]"
        }`}
      style={
        plan.featured
          ? { boxShadow: "0 0 60px -15px rgba(59,130,246,0.25)" }
          : undefined
      }
    >
      {plan.featured && (
        <div
          className="absolute top-0 right-0 z-10 flex items-center gap-1 px-3 py-1.5 text-[10px] tracking-widest uppercase rounded-bl-lg"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            background: plan.accent,
            color: "#0A0A0A",
          }}
        >
          <Sparkles size={10} />
          Most popular
        </div>
      )}

      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#111] border-b border-[#1A1A1A] shrink-0">
        <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
        <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
        <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
        <span
          className="ml-3 flex-1 text-[10px] text-[#333] truncate"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {plan.live ?? `hris.jlmasa.dev/${plan.id}`}
        </span>
        {plan.live && (
          <a
            href={plan.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#444] hover:text-[#888] transition-colors"
          >
            <ExternalLink size={10} />
          </a>
        )}
      </div>

      {/* Screenshot */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#0A0A0A] shrink-0">
        <Image
          src={plan.image}
          alt={`${plan.name} plan dashboard`}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          sizes="(min-width: 768px) 33vw, 92vw"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-12 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #0D0D0D)" }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-7 gap-5">
        <TierMeter tier={plan.tier} accent={plan.accent} />

        <div>
          <h3
            className="text-3xl font-black leading-none tracking-tight text-[#F5F5F0] mb-1"
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
          >
            {plan.name}
          </h3>
          <p className="text-[13px] text-[#888]">{plan.tagline}</p>
        </div>

        <div className="flex items-baseline gap-1.5">
          <span
            className="text-4xl font-black text-[#F5F5F0]"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {plan.price}
          </span>
          <span
            className="text-[13px] text-[#555]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {plan.period}
          </span>
        </div>

        <p className="text-[14px] text-[#888] leading-relaxed">{plan.description}</p>

        <div className="flex-1 flex flex-col gap-3 pt-4 border-t border-[#1A1A1A]">
          {plan.inherits && (
            <p
              className="text-[12px] italic text-[#555]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {plan.inherits}
            </p>
          )}
          <ul className="flex flex-col gap-2.5">
            {plan.features.map((f) => (
              <li
                key={f.label}
                className="flex items-start gap-2.5 text-[13px] text-[#CCC]"
              >
                <Check size={14} className="mt-0.5 shrink-0" style={{ color: plan.accent }} />
                {f.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Two CTAs: secondary "View demo" (only if a live URL is set) + primary "Get started" (mailto) */}
        <div className="mt-2 flex gap-3">
          {plan.live && (
            <a
              href={plan.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 text-[12px] tracking-widest uppercase rounded-lg border transition-all duration-300"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                borderColor: plan.accent + "55",
                color: plan.accent,
                background: "transparent",
              }}
            >
              View demo
              <ExternalLink size={13} />
            </a>
          )}
          <a
            href={mailtoHref}
            className="flex-1 flex items-center justify-center gap-2 py-3 text-[12px] tracking-widest uppercase rounded-lg border transition-all duration-300"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              borderColor: plan.accent + "55",
              color: "#0A0A0A",
              background: plan.accent,
            }}
          >
            Get started
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function HRISPlans() {
  return (
    <section id="hris-plans" className="w-full py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow — bump "04" if this isn't the fourth section on the page */}
        <div className="flex items-center gap-4 mb-8">
          <span
            className="text-xs text-[#3B82F6] tracking-widest uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            04 / HRIS Plans
          </span>
          <div className="flex-1 h-px bg-[#1A1A1A]" />
        </div>

        <div className="max-w-2xl mb-14">
          <h2
            className="text-5xl md:text-6xl font-black leading-none tracking-tighter text-[#F5F5F0] mb-5"
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
          >
            Built to{" "}
            <span
              className="italic font-normal"
              style={{ fontFamily: "'Playfair Display', serif", color: "#3B82F6" }}
            >
              scale.
            </span>
          </h2>
          <p className="text-[16px] text-[#888] leading-relaxed">
            One HRIS, three tiers. Every plan runs on the same system — you're
            not migrating data when you outgrow one, you're just turning
            modules on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 items-stretch">
          {hrisPlans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}