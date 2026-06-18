/**
 * prerender.mjs — MAIN ENTRY
 * Run after `vite build`: node scripts/prerender.mjs
 *
 * v2 fix: SEO content is injected inside the real #root div from the
 * vite-built index.html (never hidden), so React mounts normally and the
 * full interactive CV analyzer keeps working for real visitors, while
 * crawlers that don't execute JS still see complete, readable content.
 */
import fs from 'fs';
import path from 'path';
import { buildHTML, artSchema, artWrap, DIST, SITE, PUB, GA } from './prerender-shell.mjs';
import { staticPages } from './prerender-pages.mjs';
import { blogPosts } from './prerender-posts.mjs';

const pages = [...staticPages];

blogPosts.forEach(({ s, t, d, rt, b }) => {
  const clean = t.replace(/ \| ApliSense$/, '');
  pages.push({
    route: s,
    title: t,
    desc: d,
    extra: artSchema(clean),
    body: artWrap(t, 'March 8, 2026', rt, b)
  });
});

let n = 0;
for (const pg of pages) {
  const segs = pg.route === '/' ? [] : pg.route.split('/').filter(Boolean);
  const dir  = segs.length === 0 ? DIST : path.join(DIST, ...segs);
  fs.mkdirSync(dir, { recursive: true });
  const file = segs.length === 0 ? path.join(DIST, 'index.html') : path.join(dir, 'index.html');
  fs.writeFileSync(file, buildHTML({ route: pg.route, title: pg.title, desc: pg.desc, extra: pg.extra || '', body: pg.body }), 'utf8');
  console.log(`✓ ${pg.route}`);
  n++;
}

fs.writeFileSync(path.join(DIST, 'robots.txt'),
`User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`, 'utf8');

const urls = pages.map(p =>
  `  <url>\n    <loc>${SITE}${p.route}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${p.route === '/' ? '1.0' : p.route.startsWith('/blog') ? '0.9' : '0.8'}</priority>\n  </url>`
).join('\n');
fs.writeFileSync(path.join(DIST, 'sitemap.xml'),
`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, 'utf8');

fs.writeFileSync(path.join(DIST, '_redirects'),
`# Pre-rendered pages are served as static HTML directly\n# SPA fallback for non-prerendered routes (e.g. /resume-keywords/*)\n/*    /index.html   200\n`, 'utf8');

console.log(`\n✅ ${n} static pages generated — app remains fully interactive (React mounts over #root content)`);
console.log(`🔑 AdSense ${PUB} present (already in vite-built template)`);
console.log(`📊 Google Analytics ${GA} present (already in vite-built template)`);
console.log(`📄 robots.txt  ✓`);
console.log(`🗺  sitemap.xml ✓`);
console.log(`🔀 _redirects  ✓`);
