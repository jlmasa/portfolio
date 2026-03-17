import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack is now stable and default in Next.js 16 — no flag needed
  // React Compiler support (stable in v16) — opt-in
  reactCompiler: false,

  // Image optimization defaults updated in v16
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Experimental features available in v16
  experimental: {
    // Turbopack file system caching is stable in 16.1
    // viewTransition is available via React 19.2
  },
};

export default nextConfig;
