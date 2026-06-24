// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// ✅ [FEATURE]: Havyu AI marketing site — base Astro config.
// Canonical site URL drives <link rel="canonical"> + sitemap.xml.
export default defineConfig({
  site: 'https://havyu.org',

  integrations: [
    react(),   // ✅ [FEATURE]: React islands (selective hydration)
    sitemap(), // ✅ [FEATURE]: auto-generated sitemap.xml at build
  ],

  image: {
    // ✅ [FEATURE]: no-op/passthrough image service — skips the native `sharp`
    // binary, which is painful to install on Termux/Android (arm64).
    // Pre-compress images manually; Astro will not transform them.
    service: { entrypoint: 'astro/assets/services/noop' },
  },

  vite: {
    // ✅ [FEATURE]: Tailwind v4 via the Vite plugin (NOT the deprecated
    // @astrojs/tailwind integration). Tokens live in src/styles/tokens.css.
    plugins: [tailwindcss()],
  },
});
