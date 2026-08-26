# Athena Labs

Landing page for Athena Labs — human demonstration data collection for training VLA (vision-language-action) models.

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS and shadcn/ui conventions. The hero features an interactive 3D robot rendered with [Spline](https://spline.design/).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Structure

```
app/                    App Router entry, global styles, favicon
components/
  ui/                   shadcn-style primitives (card, spotlight, splite)
  site-header.tsx       Floating pill navbar
  hero-section.tsx      Hero with the Spline robot
  data-types-section.tsx
  scaling-section.tsx
  coverage-section.tsx
  audience-section.tsx
  cta-section.tsx
lib/utils.ts            cn() helper
public/                 Static assets
```

## Notes

- The 3D scene is loaded lazily behind a `Suspense` boundary, so the rest of the page renders before it arrives.
- The email capture form in the CTA section is currently front-end only — it needs to be wired to an endpoint before launch.
