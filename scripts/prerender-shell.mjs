/**
 * prerender-shell.mjs
 *
 * KEY FIX: Uses the real vite-built index.html as the template.
 * SEO content is injected INSIDE <div id="root"> — never hidden.
 * React mounts normally on top of it, restoring the full app.
 * Dark theme (matching the app) used for SEO content so no flash/clash.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const DIST = path.resolve(__dirname, '../dist');
export const PUB  = 'ca-pub-2451571696320546';
export const GA   = 'G-PCPNE1XHBZ';
export const SITE = 'https://aplisense.online';

// Read the vite-built template once
export const TEMPLATE = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');

export function buildHTML({ route, title, desc, extra = '', body }) {
  let html = TEMPLATE;
  html = html.replace(/<title>.*?<\/title>/s, `<title>${title}</title>`);
  html = html.replace(/<meta name="description" content=".*?"(\s*\/)?>/, m =>
    `<meta name="description" content="${desc}" />
    <link rel="canonical" href="${SITE}${route}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${desc}" />
    <meta property="og:url" content="${SITE}${route}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="ApliSense" />
    <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large" />
    ${extra}`
  );
  // Inject SEO content inside #root (React replaces this on mount — app stays fully functional)
  html = html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  return html;
}

/* Dark-theme CSS that matches the app (bg #0a0a0f, cards #12121a, border #1f1f2e) */
export const S = `<style>
.ap{font-family:'Inter',system-ui,sans-serif;color:#e5e7eb;background:#0a0a0f;min-height:100vh}
.ap a{text-decoration:none;color:inherit}
.ap-nav{position:fixed;top:0;left:0;right:0;z-index:9999;background:rgba(10,10,15,.95);backdrop-filter:blur(10px);border-bottom:1px solid #1f1f2e;padding:.9rem 2rem;display:flex;align-items:center;justify-content:space-between}
.ap-logo{display:flex;align-items:center;gap:.5rem;font-weight:800;font-size:1.05rem;color:#fff}
.ap-lb{width:2rem;height:2rem;border-radius:.45rem;background:linear-gradient(135deg,#06b6d4,#8b5cf6);display:flex;align-items:center;justify-content:center;color:#fff;font-size:.85rem;font-weight:700}
.ap-nl{display:flex;gap:1.5rem;font-size:.875rem;color:#9ca3af}
.ap-nl a:hover{color:#06b6d4}
.ap-main{max-width:52rem;margin:0 auto;padding:6.5rem 1.5rem 4rem}
.ap-wide{max-width:74rem;margin:0 auto;padding:6.5rem 1.5rem 4rem}
.ap h1{font-size:2.1rem;font-weight:800;line-height:1.2;margin-bottom:1rem;color:#fff}
.ap h2{font-size:1.45rem;font-weight:700;margin:2.25rem 0 .85rem;padding-bottom:.4rem;border-bottom:2px solid #1f1f2e;color:#fff}
.ap h3{font-size:1.05rem;font-weight:600;margin:1.5rem 0 .5rem;color:#fff}
.ap p{color:#d1d5db;line-height:1.8;margin-bottom:1rem}
.ap ul,.ap ol{color:#d1d5db;padding-left:1.5rem;margin-bottom:1.25rem}
.ap li{margin-bottom:.5rem;line-height:1.75}
.ap strong{color:#fff}
.ap-meta{font-size:.85rem;color:#6b7280;margin-bottom:2rem;padding-bottom:1rem;border-bottom:1px solid #1f1f2e}
.ap-badge{display:inline-block;font-size:.75rem;font-weight:600;background:rgba(6,182,212,.12);color:#22d3ee;border-radius:9999px;padding:.2rem .65rem;margin-bottom:.75rem}
.ap-cta{background:linear-gradient(135deg,rgba(6,182,212,.08),rgba(139,92,246,.08));border:1px solid #06b6d4;border-radius:.85rem;padding:2rem;text-align:center;margin-top:3rem}
.ap-btn{display:inline-block;padding:.75rem 1.5rem;background:#06b6d4;color:#fff!important;border-radius:.5rem;font-weight:600;margin:.25rem}
.ap-btn-o{background:transparent!important;border:1.5px solid #06b6d4;color:#06b6d4!important}
.ap-g2{display:grid;grid-template-columns:1fr 1fr;gap:1.1rem;margin-bottom:1.5rem}
.ap-g3{display:grid;grid-template-columns:repeat(3,1fr);gap:1.1rem}
.ap-card{background:#12121a;border:1px solid #1f1f2e;border-radius:.75rem;padding:1.25rem;transition:border-color .2s;display:block}
.ap-card:hover{border-color:#06b6d4}
.ap-card h3{margin-top:0;font-size:.95rem;color:#fff}
.ap-card p{font-size:.875rem;color:#9ca3af;margin:0}
.ap-card .ar{color:#06b6d4;font-size:.875rem;font-weight:600;display:block;margin-top:.75rem}
.ap table{width:100%;border-collapse:collapse;margin-bottom:1.5rem;font-size:.875rem;color:#d1d5db}
.ap th{background:#12121a;padding:.65rem .85rem;border:1px solid #1f1f2e;font-weight:600;text-align:left;color:#fff}
.ap td{padding:.65rem .85rem;border:1px solid #1f1f2e}
.ap details{border:1px solid #1f1f2e;border-radius:.5rem;overflow:hidden;margin-bottom:.65rem}
.ap summary{padding:.9rem 1rem 1rem;font-weight:600;cursor:pointer;background:#12121a;list-style:none;display:flex;justify-content:space-between;align-items:center;color:#fff}
.ap summary::-webkit-details-marker{display:none}
.ap summary::after{content:'▾';font-size:.8rem;color:#6b7280}
.ap details[open] summary{border-bottom:1px solid #1f1f2e}
.ap details>div{padding:.75rem 1rem 1rem;color:#d1d5db;font-size:.9rem;line-height:1.75;background:#12121a}
.ap-ad{background:#12121a;border:1px dashed #1f1f2e;border-radius:.5rem;padding:1.5rem;text-align:center;margin:2rem 0;min-height:90px;display:flex;align-items:center;justify-content:center}
.ap-foot{border-top:1px solid #1f1f2e;padding:2rem 1.5rem;margin-top:2rem}
.ap-ft{max-width:74rem;margin:0 auto;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem;font-size:.875rem}
.ap-ft a{color:#9ca3af}.ap-ft a:hover{color:#06b6d4}
@media(max-width:640px){.ap-g2,.ap-g3{grid-template-columns:1fr}.ap-nl{display:none}.ap h1{font-size:1.65rem}}
</style>`;

export const PUB_ID = 'ca-pub-2451571696320546';
export const AD = `<div class="ap-ad"><ins class="adsbygoogle" style="display:block;width:100%;min-height:90px" data-ad-client="${PUB_ID}" data-ad-slot="auto" data-ad-format="auto" data-full-width-responsive="true"></ins><script>(adsbygoogle=window.adsbygoogle||[]).push({});</script></div>`;

export const NAV = `<nav class="ap-nav">
  <a href="/" class="ap-logo"><span class="ap-lb">✦</span>ApliSense</a>
  <div class="ap-nl">
    <a href="/">Home</a><a href="/blog">Blog</a><a href="/resume-keywords">CV Keywords</a>
    <a href="/about">About</a><a href="/faq">FAQ</a><a href="/contact">Contact</a>
  </div>
</nav>`;

export const FOOTER = `<footer class="ap-foot">
  <div class="ap-ft">
    <a href="/" style="font-weight:800;color:#fff">✦ ApliSense</a>
    <div style="display:flex;gap:1.25rem;flex-wrap:wrap">
      <a href="/about">About</a><a href="/privacy">Privacy Policy</a>
      <a href="/terms">Terms</a><a href="/contact">Contact</a>
      <a href="/faq">FAQ</a><a href="/blog">Blog</a><a href="/resume-keywords">Keywords</a>
    </div>
    <span style="color:#6b7280">© 2026 ApliSense. All rights reserved.</span>
  </div>
</footer>`;

export const RELATED = `<div style="margin-top:2.5rem"><h3>Related Articles</h3><div class="ap-g2" style="margin-top:.75rem">
<a href="/blog/how-to-write-a-cv" class="ap-card"><h3 style="color:#06b6d4">How to Write a CV</h3><p>Step-by-step guide covering every section with ATS tips.</p></a>
<a href="/blog/how-to-pass-ats" class="ap-card"><h3 style="color:#06b6d4">How to Pass ATS</h3><p>Complete guide to passing automated CV filters in 2026.</p></a>
<a href="/blog/common-cv-mistakes" class="ap-card"><h3 style="color:#06b6d4">Common CV Mistakes</h3><p>15 mistakes that cause instant rejection and how to fix them.</p></a>
<a href="/blog/ats-resume-keywords" class="ap-card"><h3 style="color:#06b6d4">ATS Resume Keywords</h3><p>How to find and use the right keywords for any role.</p></a>
</div></div>`;

export const artSchema = t => `<script type="application/ld+json">{"@context":"https://schema.org","@type":"Article","headline":"${t}","author":{"@type":"Organization","name":"ApliSense"},"publisher":{"@type":"Organization","name":"ApliSense"},"datePublished":"2026-03-08"}</script>`;

export function wp(inner) {
  return `${S}<div class="ap">${NAV}${inner}${FOOTER}</div>`;
}

export function artWrap(title, date, rt, body) {
  const clean = title.replace(/ \| ApliSense$/, '');
  return wp(`<main class="ap-main">
<a href="/blog" style="font-size:.875rem;color:#06b6d4">← Back to Blog</a>
<h1 style="margin-top:.75rem">${clean}</h1>
<p class="ap-meta">${date} &middot; ${rt} &middot; By ApliSense Team</p>
${AD}${body}${AD}
<div class="ap-cta"><h3 style="margin-top:0">Check Your CV Against Real Hiring Criteria — Free</h3>
<p style="margin-bottom:1rem">Upload your CV to ApliSense and get an instant ATS analysis with keyword recommendations for your target role.</p>
<a href="/" class="ap-btn">Analyze My CV — Free</a></div>
${RELATED}</main>`);
}
