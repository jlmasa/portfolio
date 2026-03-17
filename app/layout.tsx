import type { Metadata, Viewport } from "next";
import "./globals.css";

// viewport is now exported separately in Next.js 15+/16
export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "John Lorenz Masa — Full-Stack Developer",
  description:
    "Full-stack web developer crafting elegant digital experiences with modern technologies.",
  keywords: ["developer", "full-stack", "react", "nextjs", "typescript"],
  openGraph: {
    title: "John Lorenz Masa — Full-Stack Developer",
    description: "Full-stack web developer crafting elegant digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
