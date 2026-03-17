// In Next.js 16, pages are Server Components by default.
// Client-only logic (cursor) is isolated to a client component.
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorTracker from "@/components/CursorTracker";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#75757531]">
      {/* CursorTracker is client-only; page itself stays a Server Component */}
      <CursorTracker />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
