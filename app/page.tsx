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
      {/* CursorTracker is hidden on mobile via CSS before JS even runs,
          and the component itself also bails out on coarse-pointer devices. */}
      <div className="hidden md:block">
        <CursorTracker />
      </div>
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