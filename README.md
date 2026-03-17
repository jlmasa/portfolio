# Developer Portfolio — Next.js 16

A production-ready full-stack developer portfolio built with **Next.js 16.1**, **React 19.2**, TypeScript, and Tailwind CSS.

## ✨ Features

- **Dark editorial design** — black background, electric blue accents, sharp typographic hierarchy
- **Custom cursor** — smooth-lagging ring with mix-blend-mode difference
- **Typewriter hero** — cycling role animation
- **Animated skill bars** — scroll-triggered IntersectionObserver
- **Bento grid projects** — hover glow with per-project accent color
- **Timeline experience** section
- **Contact form** with success state
- **Fully responsive** — mobile-first design

## 🆕 Next.js 16 Upgrades

| Change | Detail |
|---|---|
| **Turbopack stable** | Default bundler — up to 5-10× faster Fast Refresh |
| **React 19.2** | View Transitions, `useEffectEvent`, `<Activity/>` |
| **`next.config.ts`** | TypeScript-native config (replaces `.js`) |
| **Viewport export** | `export const viewport` separated from `metadata` |
| **Server Components default** | `page.tsx` is a Server Component; cursor isolated to `CursorTracker` client component |
| **ESLint 9 flat config** | `eslint.config.mjs` replaces `.eslintrc.json` |
| **React Compiler (opt-in)** | `reactCompiler: true` in `next.config.ts` to enable auto-memoization |

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server (Turbopack by default in v16)
npm run dev

# Open http://localhost:3000
```

## 🛠 Tech Stack

- **Framework**: Next.js 16.1 (App Router, Turbopack)
- **Runtime**: React 19.2
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3
- **Fonts**: Syne · JetBrains Mono · Playfair Display
- **Icons**: Lucide React

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css         # Global styles + custom cursor CSS
│   ├── layout.tsx          # Root layout — metadata + viewport exports
│   └── page.tsx            # Server Component — composes all sections
├── components/
│   ├── CursorTracker.tsx   # "use client" — custom cursor logic
│   ├── Navbar.tsx          # Scroll-aware nav with mobile menu
│   ├── Hero.tsx            # Typewriter hero section
│   ├── About.tsx           # About + stats + photo
│   ├── Projects.tsx        # Bento grid project showcase
│   ├── Skills.tsx          # Animated skill bars + marquee
│   ├── Experience.tsx      # Timeline work history
│   ├── Contact.tsx         # Contact form with success state
│   └── Footer.tsx          # Footer with social links
├── next.config.ts          # TypeScript native config (v16)
├── eslint.config.mjs       # ESLint 9 flat config
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Color Palette

| Token | Hex | Usage |
|---|---|---|
| Obsidian | `#0A0A0A` | Background |
| Electric Blue | `#3B82F6` | Primary accent |
| Sky Blue | `#38BDF8` | Secondary accent |
| Indigo | `#818CF8` | Tertiary accent |
| Cyan | `#22D3EE` | Quaternary accent |
| Cream | `#F5F5F0` | Body text |

## 🔌 Contact Form Backend

Replace `handleSubmit` in `components/Contact.tsx` with a real service:

```ts
// Option A: Resend
await fetch("https://api.resend.com/emails", {
  method: "POST",
  headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
  body: JSON.stringify({ from: "portfolio@yourdomain.com", to: "you@email.com", subject: `New message from ${formState.name}`, text: formState.message }),
});

// Option B: Formspree
await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formState),
});
```

## ⚛️ Enable React Compiler (optional)

Uncomment in `next.config.ts` for automatic memoization:

```ts
const nextConfig: NextConfig = {
  reactCompiler: true, // stable in Next.js 16
};
```

## 📦 Deploy

```bash
# Vercel (recommended)
npx vercel

# Self-hosted
npm run build && npm start
```

## 📄 License
MIT
