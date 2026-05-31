#!/usr/bin/env node
// ============================================================
//  THE OFFICIAL GAZETTE — PRE-RENDER SCRIPT
//  Bakes content.js into index.html as static HTML.
//  Googlebot reads real HTML, not JS-rendered content.
//
//  RUN: node prerender.js
//  Run this once after updating content.js, before git commit.
// ============================================================

const fs   = require('fs');
const path = require('path');

// ── LOAD CONTENT ──────────────────────────────────────────
const contentSrc = fs.readFileSync(path.join(__dirname, 'content.js'), 'utf8');
let GAZETTE;
try {
  const fn = new Function(contentSrc + '; return GAZETTE;');
  GAZETTE = fn();
} catch (e) {
  console.error('❌  content.js parse error:', e.message);
  process.exit(1);
}

// ── LOAD INDEX TEMPLATE ────────────────────────────────────
const htmlSrc = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

// ── HELPERS ───────────────────────────────────────────────
function esc(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function applyRedactions(text) {
  return String(text).replace(/(█+)/g,
    `<span class="redact" title="[REDACTED]" aria-label="redacted">$1</span>`);
}

// ── BUILD SEO HEAD TAGS ────────────────────────────────────
const activeBulletin = GAZETTE.bulletins.find(b => b.active) || GAZETTE.bulletins[0];
const seoTitle       = `${GAZETTE.meta.title} — Satirical Record of Indian Governance`;
const seoDesc        = `${activeBulletin.headline} ${GAZETTE.meta.edition}. Satirical record of Indian government policies, broken promises, and institutional accountability.`;
const seoDescClean   = seoDesc.replace(/"/g, "'").slice(0, 160);
const canonicalURL   = 'https://thegazette.in'; // update when domain is live

const seoTags = `
  <!-- ── PRIMARY SEO ──────────────────────────────────── -->
  <title>${esc(seoTitle)}</title>
  <meta name="description" content="${esc(seoDescClean)}">
  <meta name="keywords" content="india satire, government accountability, electoral bonds, demonetisation, farm laws, press freedom india, broken promises india, political satire india, official gazette satire">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${canonicalURL}/">

  <!-- ── OPEN GRAPH (WhatsApp, Facebook, LinkedIn) ─────── -->
  <meta property="og:type"        content="website">
  <meta property="og:site_name"   content="${esc(GAZETTE.meta.title)}">
  <meta property="og:title"       content="${esc(seoTitle)}">
  <meta property="og:description" content="${esc(seoDescClean)}">
  <meta property="og:url"         content="${canonicalURL}/">
  <meta property="og:image"       content="${canonicalURL}/og-image.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt"   content="The Official Gazette — Satirical Record of Indian Governance">
  <meta property="og:locale"      content="en_IN">

  <!-- ── TWITTER / X CARD ──────────────────────────────── -->
  <meta name="twitter:card"        content="summary_large_image">
  <meta name="twitter:title"       content="${esc(seoTitle)}">
  <meta name="twitter:description" content="${esc(seoDescClean)}">
  <meta name="twitter:image"       content="${canonicalURL}/og-image.jpg">
  <meta name="twitter:image:alt"   content="The Official Gazette">

  <!-- ── FAVICONS ──────────────────────────────────────── -->
  <link rel="icon"             href="/favicon.ico" sizes="any">
  <link rel="icon"             href="/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <meta name="theme-color"    content="#F2EBD9">
  <meta name="msapplication-TileColor" content="#C0392B">

  <!-- ── STRUCTURED DATA ───────────────────────────────── -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "SatiricalArticle",
    "name": "${esc(GAZETTE.meta.title)}",
    "headline": "${esc(activeBulletin.headline)}",
    "description": "${esc(seoDescClean)}",
    "url": "${canonicalURL}/",
    "image": "${canonicalURL}/og-image.jpg",
    "dateModified": "${new Date().toISOString().split('T')[0]}",
    "inLanguage": "en-IN",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "${esc(GAZETTE.meta.title)}",
      "url": "${canonicalURL}",
      "logo": {
        "@type": "ImageObject",
        "url": "${canonicalURL}/favicon.svg"
      }
    },
    "about": [
      ${GAZETTE.files.map(f => `{
        "@type": "Thing",
        "name": "${esc(f.title)}"
      }`).join(',\n      ')}
    ]
  }
  <\/script>`;

// ── BUILD STATIC HTML SECTIONS ────────────────────────────

// Ticker
const tickerHTML = [...GAZETTE.ticker, ...GAZETTE.ticker]
  .map(t => `<span>${esc(t)}</span>`).join('');

// Masthead
const mastheadHTML = `
  <div class="masthead-eyebrow">
    <span class="label">${esc(GAZETTE.meta.edition)}</span>
  </div>
  <span class="gazette-nameplate" aria-label="The Official Gazette">${esc(GAZETTE.meta.title)}</span>
  <div class="gazette-ruled-sub">
    <span class="gazette-ruled-sub-text">
      ${esc(GAZETTE.meta.subtitle)} &nbsp;·&nbsp;
      <s>${esc(GAZETTE.meta.subtitle)}</s> &nbsp;·&nbsp;
      <span class="gazette-vacant">${esc(GAZETTE.meta.subsubtitle)}</span>
    </span>
  </div>
  <div class="masthead-meta">
    <span>${esc(GAZETTE.meta.price)}</span>
    <span>${esc(GAZETTE.meta.updated)}</span>
  </div>
  <hr class="rule-heavy masthead-divider">`;

// Hero bulletin
const b = activeBulletin;
const heroStampClass = ['stamp', b.stampColor === 'black' ? 'ink-black' : ''].filter(Boolean).join(' ');
const statsHTML = GAZETTE.stats.map(s => `
  <div class="stat-box t-${esc(s.theme)}">
    <div class="stat-label">${esc(s.label)}</div>
    <div class="stat-value">${esc(s.value)}</div>
    <div class="stat-note">${esc(s.note)}</div>
  </div>`).join('');

const heroHTML = `
  <div class="hero-main">
    <div class="bulletin-tag">${esc(b.tag)}</div>
    <h1 class="bulletin-headline">${esc(b.headline)}</h1>
    <div class="bulletin-body">${applyRedactions(esc(b.subtext))}</div>
    <div class="stamp-area">
      <div>
        <span class="${heroStampClass} slammed" id="hero-stamp">${esc(b.stamp)}</span>
        <span class="stamp-attribution">${esc(b.attribution)}</span>
      </div>
    </div>
  </div>
  <div class="stats-col">${statsHTML}</div>`;

// Case files
const filesHTML = GAZETTE.files.map((f, i) => {
  const sc = ['file-stamp', f.stampColor === 'black' ? 'ink-black' : ''].filter(Boolean).join(' ');
  return `
  <article class="file-card in-view" style="transition-delay:${i * 55}ms">
    <div class="file-header">
      <span class="file-id">${esc(f.id)}</span>
      <span class="${sc} slammed" data-stamp>${esc(f.stamp)}</span>
    </div>
    <h2 class="file-title">${esc(f.title)}</h2>
    <div class="vs-wrap">
      <div class="vs-col official">
        <div class="vs-head">Official Claim</div>
        <div class="vs-body">${esc(f.official)}</div>
      </div>
      <div class="vs-col reality">
        <div class="vs-head">What Happened</div>
        <div class="vs-body">${esc(f.reality)}</div>
      </div>
    </div>
    <div class="file-note">${esc(f.footnote)}</div>
  </article>`;
}).join('');

// Schemes
const schemesHTML = GAZETTE.schemes.map((s, i) => `
  <div class="scheme-row in-view" style="transition-delay:${i * 75}ms">
    <div class="scheme-code">${esc(s.code)}</div>
    <div class="scheme-body">
      <h3 class="scheme-title">${esc(s.title)}</h3>
      <div class="scheme-desc">${esc(s.description)}</div>
    </div>
    <div class="scheme-meta">
      <div class="scheme-meta-item">
        <div class="scheme-meta-label">Benefit</div>
        <div class="scheme-meta-val">${esc(s.benefit)}</div>
      </div>
      <div class="scheme-meta-item">
        <div class="scheme-meta-label">Eligibility</div>
        <div class="scheme-meta-val">${esc(s.eligibility)}</div>
      </div>
    </div>
  </div>`).join('');

// Redacted
const r = GAZETTE.redacted;
const redactLinesHTML = r.lines.map(line => {
  if (line.redacted) {
    const w = 55 + Math.floor(Math.random() * 30);
    return `<div class="redact-line">
      <span class="redact-bar wiped" style="--w:${w}%"></span>
    </div>`;
  }
  return `<div class="redact-line reveal-line">
    <span class="reveal-text typed">${esc(line.text)}</span>
  </div>`;
}).join('');

const redactedHTML = `
  <div class="redacted-block">
    <div class="redacted-heading">${esc(r.title)}</div>
    ${redactLinesHTML}
    <div class="redacted-foot">${esc(r.footnote)}</div>
  </div>`;

// Footer
const footerHTML = `
  <span>${esc(GAZETTE.meta.footer)}</span>
  <span>${esc(GAZETTE.meta.footerRight)}</span>`;

// ── PATCH HTML ────────────────────────────────────────────
let html = htmlSrc;

// 1. Replace <title> + bare meta description with full SEO block
html = html.replace(
  /<title>.*?<\/title>\s*<link rel="preconnect"/s,
  `${seoTags}\n  <link rel="preconnect"`
);

// 2. Inject static ticker
html = html.replace(
  /<div class="ticker-track" id="ticker-track"><\/div>/,
  `<div class="ticker-track" id="ticker-track">${tickerHTML}</div>`
);

// 3. Inject static masthead
html = html.replace(
  /<header class="masthead">[\s\S]*?<\/header>/,
  `<header class="masthead">${mastheadHTML}</header>`
);

// 4. Inject static hero
html = html.replace(
  /<div class="hero-grid" id="hero-grid"><\/div>/,
  `<div class="hero-grid" id="hero-grid">${heroHTML}</div>`
);

// 5. Inject static files
html = html.replace(
  /<div class="files-grid" id="files-grid"><\/div>/,
  `<div class="files-grid" id="files-grid">${filesHTML}</div>`
);

// 6. Inject static schemes
html = html.replace(
  /<div class="schemes-wrap" id="schemes-wrap"><\/div>/,
  `<div class="schemes-wrap" id="schemes-wrap">${schemesHTML}</div>`
);

// 7. Inject static redacted
html = html.replace(
  /<div id="redacted-mount"><\/div>/,
  `<div id="redacted-mount">${redactedHTML}</div>`
);

// 8. Inject static footer
html = html.replace(
  /<footer class="site-footer">\s*<span id="footer-l"><\/span>\s*<span id="footer-r"><\/span>\s*<\/footer>/,
  `<footer class="site-footer">${footerHTML}</footer>`
);

// 9. Mark as pre-rendered — JS renderer skips re-render if static content exists
html = html.replace(
  '</body>',
  `<script>window.__GAZETTE_PRERENDERED__ = true;</script>\n</body>`
);

// ── WRITE OUTPUT ──────────────────────────────────────────
fs.writeFileSync(path.join(__dirname, 'index.html'), html, 'utf8');

console.log('✓  index.html pre-rendered');
console.log(`   ${GAZETTE.files.length} case files baked in`);
console.log(`   ${GAZETTE.schemes.length} schemes baked in`);
console.log(`   Bulletin: "${activeBulletin.headline.slice(0, 60)}..."`);
console.log('\n   Commit index.html + content.js together.');
