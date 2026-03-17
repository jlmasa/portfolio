"use client";

import { useEffect, useRef } from "react";

export default function CursorTracker() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    const ring = cursorRingRef.current;
    if (!cursor || !ring) return;

    cursor.style.display = "block";
    ring.style.display = "block";

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let rafId: number;
    let isRunning = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Dot: updated directly in the event — zero RAF overhead, zero lerp delay
      cursor.style.transform = `translate3d(${mouseX - 5}px, ${mouseY - 5}px, 0)`;

      // Start the ring loop only when it's not already ticking
      if (!isRunning) {
        isRunning = true;
        rafId = requestAnimationFrame(animateRing);
      }
    };

    const animateRing = () => {
      const dx = mouseX - ringX - 18;
      const dy = mouseY - ringY - 18;

      ringX += dx * 0.15;
      ringY += dy * 0.15;

      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;

      // Keep ticking until the ring has caught up within 0.5px, then stop
      if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
        rafId = requestAnimationFrame(animateRing);
      } else {
        isRunning = false;
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" style={{ display: "none" }} />
      <div ref={cursorRingRef} className="cursor-ring" style={{ display: "none" }} />
    </>
  );
}