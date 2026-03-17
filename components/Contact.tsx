"use client";

import { useState } from "react";
import { Send, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate form submission - replace with your actual endpoint
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
    setFormState({ name: "", email: "", message: "" });
  };

  const inputClass =
    "w-full bg-transparent border border-[#1A1A1A] px-5 py-4 text-[#F5F5F0] text-sm placeholder-[#333] focus:outline-none focus:border-[#3B82F6] transition-colors duration-200";

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-20">
          <span
            className="text-xs text-[#3B82F6] tracking-widest uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            05 / Contact
          </span>
          <div className="flex-1 h-px bg-[#1A1A1A]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: CTA */}
          <div>
            <h2
              className="text-5xl md:text-6xl font-black leading-none tracking-tighter text-[#F5F5F0] mb-8"
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
            >
              Let&apos;s build
              <br />
              something
              <br />
              <span
                className="italic font-normal"
                style={{ fontFamily: "'Playfair Display', serif", color: "#3B82F6" }}
              >
                great.
              </span>
            </h2>

            <p className="text-[#666] leading-relaxed mb-12 max-w-sm">
              Whether you have a project in mind, want to discuss a role, or just want to
              chat about tech — my inbox is always open.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "johnlorenz.masa@gmail.com",
                  href: "mailto:johnlorenz.masa@gmail.com",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Makati City / Laguna, PH ",
                  href: null,
                },
                {
                  icon: Clock,
                  label: "Response time",
                  value: "Usually within 24 hours",
                  href: null,
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-[#1A1A1A] flex items-center justify-center text-[#3B82F6] flex-shrink-0">
                    <Icon size={14} />
                  </div>
                  <div>
                    <div
                      className="text-xs text-[#444] tracking-widest uppercase mb-1"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm text-[#888] hover:text-[#3B82F6] transition-colors"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {value}
                      </a>
                    ) : (
                      <span
                        className="text-sm text-[#888]"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          {/* <div>
            {status === "sent" ? (
              <div className="border border-[#3B82F6]/30 bg-[#3B82F6]/5 p-12 flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="text-4xl mb-4">✓</div>
                <h3
                  className="text-xl font-bold text-[#3B82F6] mb-3"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Message Received!
                </h3>
                <p
                  className="text-sm text-[#666]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Thanks for reaching out. I&apos;ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    className="block text-xs text-[#444] tracking-widest uppercase mb-2"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className={inputClass}
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    value={formState.name}
                    onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs text-[#444] tracking-widest uppercase mb-2"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className={inputClass}
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    value={formState.email}
                    onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs text-[#444] tracking-widest uppercase mb-2"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Message
                  </label>
                  <textarea
                    required
                    rows={7}
                    placeholder="Tell me about your project or opportunity..."
                    className={`${inputClass} resize-none`}
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    value={formState.message}
                    onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 bg-[#3B82F6] text-white font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-[#60A5FA] transition-colors duration-200 disabled:opacity-60"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-4 h-4 border border-[#0A0A0A] border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div> */}
        </div>
      </div>
    </section>
  );
}
