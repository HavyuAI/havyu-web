// ✅ [FEATURE]: Guides content collection — type-safe frontmatter for /guides articles.
// Goes at: src/content/config.ts
import { defineCollection, z } from 'astro:content';

const guides = defineCollection({
  type: 'content',
  schema: z.object({
    // SEO <title> / search headline — keyword-led (what Google + AI engines read).
    title: z.string(),
    // On-page H1 — brand voice ("Have You…?") where it fits. Falls back to title.
    displayTitle: z.string().optional(),
    // Meta description + the card blurb on the hub.
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // Hero image lives in public/guides/ (provide a 1200×675 / 16:9 .webp).
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    // The cluster pillar — sorted first on the hub, badged "Start here".
    pillar: z.boolean().default(false),
    draft: z.boolean().default(false),
    // Drives the visible FAQ block AND the FAQPage JSON-LD (AEO).
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

export const collections = { guides };
