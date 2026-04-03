# Ravenwood Creative — Website

Marketing website for **Ravenwood Creative LLC**, Drew Read's Utah-based video production studio.

## Purpose

Story-driven video production for brands — customer case study videos, corporate event coverage, social media content, and paid social ad management.

## Stack

| Tech | Version |
|------|---------|
| Next.js | 16.x |
| React | 19.x |
| TypeScript | 5.x |
| Tailwind CSS | 4.x |

No external UI libraries. All styles via Tailwind v4 + CSS custom properties.

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Type-check
npx tsc --noEmit

# Build for production
npm run build
```

## Folder Structure

```
ravenwood/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (Navbar + Footer)
│   │   ├── globals.css         # Global styles, CSS vars, grain texture
│   │   ├── page.tsx            # Home page
│   │   ├── services/
│   │   │   └── page.tsx        # Services & pricing packages
│   │   ├── work/
│   │   │   └── page.tsx        # Portfolio / past work grid
│   │   └── contact/
│   │       └── page.tsx        # Contact page (uses ContactForm)
│   └── components/
│       ├── Navbar.tsx          # Fixed top navbar
│       ├── Footer.tsx          # Site footer
│       └── ContactForm.tsx     # Client-side contact form
├── public/                     # Static assets
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

## Design System

| Token | Value |
|-------|-------|
| Background | `#0a0a0f` |
| Gold accent | `#d4a853` |
| Text primary | `#ffffff` |
| Text secondary | `rgba(255,255,255,0.65)` |
| Border | `rgba(255,255,255,0.08)` |

**Aesthetic:** Dark, cinematic — warm gold on near-black. Glass cards with subtle grain overlay.

## Services Featured

- **Case Study Package** — $2,500–$4,000 (hero offering)
- **Showcase Package** — $4,500–$6,500
- **Growth Program** — $2,000–$3,500/month
- **Corporate Event** — Custom quote

## Contact Form

Currently uses a simulated submission. To wire up a real endpoint, update `src/components/ContactForm.tsx` and replace the `setTimeout` mock with a `fetch` call to your form handler (Formspree, Resend, etc.).

## Deployment

Designed for Vercel. Add a `vercel.json` if custom headers or rewrites are needed.

```bash
# Vercel CLI
vercel --prod
```

---

© Ravenwood Creative LLC · drew@ravenwoodcreative.com
