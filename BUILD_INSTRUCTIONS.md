# ApliSense — Build & Deploy Instructions

## Setup
```bash
npm install --legacy-peer-deps
```

## Development
```bash
npm run dev
```

## Production Build (for Netlify / static hosting)
This project uses a two-step build process:

1. **Vite build** — compiles the React app into `dist/`
2. **Prerender** — generates a fully crawlable static `index.html` for every
   route (home, about, faq, contact, blog index, all 10 blog posts, privacy,
   terms) inside `dist/`. This is REQUIRED for Google AdSense / SEO, because
   without it the raw HTML served to crawlers is just an empty
   `<div id="root"></div>` (React renders client-side only).

Run both steps with:
```bash
npm run build:full
```//
Or individually:
```bash
npm run build       # vite build only
npm run prerender   # generate static HTML in dist/ (run AFTER build)
```

## Deploying to Netlify
1. Run `npm run build:full`
2. Drag and drop the **contents of `dist/`** into Netlify (or connect this repo
   and set build command to `npm run build:full` and publish directory to `dist`)

## Editing Content
- Page content for prerendering lives in `scripts/prerender-pages.mjs` (static pages)
  and `scripts/prerender-posts.mjs` (blog articles).
- The React app source (for the interactive CV analyzer) lives in `src/`.
- AdSense publisher ID (`ca-pub-2451571696320546`) and Google Analytics ID
  (`G-PCPNE1XHBZ`) are hardcoded in `scripts/prerender-shell.mjs` — update both
  there AND in `index.html` if they ever change.

## Important Notes
- `dist/` is included in this export as a ready-to-deploy snapshot, but you
  should always regenerate it with `npm run build:full` after making any
  content changes, rather than hand-editing files inside `dist/`.
- The FAQ page (`/faq`) includes JSON-LD FAQPage schema markup for SEO.
- All pages include a cookie consent banner required for AdSense compliance
  in certain regions (GDPR/EEA).
