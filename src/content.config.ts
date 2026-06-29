// ✅ [FEATURE]: Guides content collection (Astro 6 — Content Layer / glob loader).
// Goes at: src/content.config.ts   (NOTE: not src/content/config.ts)
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  // glob loader: reads the Markdown files; entry `id` is the slugified filename.
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    // SEO <title> / search headline — keyword-led.
    title: z.string(),
    // On-page H1 — brand voice ("Have You…?") where it fits. Falls back to title.
    displayTitle: z.string().optional(),
    // Meta description + the card blurb on the hub.
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // Hero image lives in public/guides/ (1200×675 / 16:9 .webp).
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    // The cluster pillar — sorted first, badged "Start here".
    pillar: z.boolean().default(false),
    draft: z.boolean().default(false),
    // Drives the visible FAQ block AND the FAQPage JSON-LD (AEO).
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

export const collections = { guides };
