// ✅ [FEATURE]: renders every Remotion asset the site uses into ../public.
//   node render.mjs            → everything
//   node render.mjs hero       → homepage loop (H.264 mp4 — smaller than VP9 here, plays everywhere) + poster
//   node render.mjs og         → share image (public/og-image.png)
//   node render.mjs articles   → one hero per src/content/blog/*.md → public/blog/<slug>.webp
// Needs a Chromium: set REMOTION_BROWSER, or the Playwright build is used if present.
// Rendering does not run in the site build (Cloudflare) — commit the outputs.
import { bundle } from '@remotion/bundler';
import { renderMedia, renderStill, selectComposition } from '@remotion/renderer';
import { existsSync, mkdirSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const pub = path.resolve(here, '../public');
const blogDir = path.resolve(here, '../src/content/blog');
const what = process.argv[2] ?? 'all';

const candidates = [process.env.REMOTION_BROWSER, '/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell'];
const browserExecutable = candidates.find((p) => p && existsSync(p)) ?? null;

const serveUrl = await bundle({ entryPoint: path.join(here, 'src/index.ts') });
const common = { serveUrl, browserExecutable, chromiumOptions: { gl: 'swangle' } };
const out = (...p) => {
  const f = path.join(pub, ...p);
  mkdirSync(path.dirname(f), { recursive: true });
  return f;
};

async function hero() {
  const composition = await selectComposition({ ...common, id: 'HeroLoop' });
  await renderMedia({ ...common, composition, codec: 'h264', crf: 26, pixelFormat: 'yuv420p', muted: true, outputLocation: out('hero', 'hero-loop.mp4') });
  await renderStill({ ...common, composition, frame: 0, imageFormat: 'webp', output: out('hero', 'hero-poster.webp') });
  console.log('hero: done');
}

async function og() {
  const composition = await selectComposition({ ...common, id: 'OgCard' });
  await renderStill({ ...common, composition, imageFormat: 'png', output: out('og-image.png') });
  console.log('og: done');
}

/** Minimal frontmatter read: title, category, tags (no YAML dependency). */
function frontmatter(file) {
  const fm = readFileSync(file, 'utf8').split(/^---$/m)[1] ?? '';
  const get = (k) => (fm.match(new RegExp(`^${k}:\\s*"?(.*?)"?\\s*$`, 'm')) ?? [])[1];
  return { title: get('displayTitle') ?? get('title'), category: get('category') ?? 'Blog', tags: get('tags') ?? '' };
}

async function articles() {
  if (!existsSync(blogDir)) return console.log('articles: no blog posts yet');
  for (const f of readdirSync(blogDir).filter((n) => n.endsWith('.md'))) {
    const slug = f.replace(/\.md$/, '');
    const { title, category, tags } = frontmatter(path.join(blogDir, f));
    const tone = /training|strength|lifting/i.test(tags) ? 'train' : 'recover';
    const inputProps = { title, category, tone };
    const composition = await selectComposition({ ...common, id: 'ArticleHero', inputProps });
    await renderStill({ ...common, composition, inputProps, imageFormat: 'webp', output: out('blog', `${slug}.webp`) });
    console.log(`article: ${slug}`);
  }
}

if (what === 'all' || what === 'og') await og();
if (what === 'all' || what === 'articles') await articles();
if (what === 'all' || what === 'hero') await hero();
