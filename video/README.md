# Havyu video (Remotion)

Source for the site's motion and branded images. Separate from the Astro site:
its own `package.json`, never installed or run by the Cloudflare build. Renders
are committed into `../public`.

| Output | Composition | Command |
|---|---|---|
| `public/hero/hero-loop.mp4` + `hero-poster.webp` | `HeroLoop` (720×640, 8 s loop) | `node render.mjs hero` |
| `public/og-image.png` | `OgCard` (1200×630) | `node render.mjs og` |
| `public/blog/<slug>.webp` | `ArticleHero` (1200×675), one per `src/content/blog/*.md` | `node render.mjs articles` |

Setup: `npm install` in this folder. Preview: `npm run studio`.
Rendering needs a desktop Chromium (set `REMOTION_BROWSER`); it won't run in Termux.

Colours live only in `src/tokens.ts`, a mirror of the app's `constants/theme.ts`.
Remotion is free for individuals and teams of up to three; a company licence is
needed beyond that (remotion.dev/license).
