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
    // ✅ [FIX]: related-guide slugs (crawl depth / "keep reading"). Optional; rendered later.
    related: z.array(z.string()).default([]),
  }),
});

// ✅ [FEATURE]: Blog collection — comparison, alternatives and product articles
// built for answer engines (SensAI-style template: short answer, dated facts,
// footnoted sources). Kept separate from guides so the evidence-based guides
// cluster stays clean and each hub has its own schema and breadcrumbs.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    // SEO <title> — keyword-led, e.g. "Havyu vs SensAI (2026)".
    title: z.string(),
    // On-page H1 if it should differ from the SEO title.
    displayTitle: z.string().optional(),
    // Meta description + card blurb on /blog.
    description: z.string(),
    // The bold answer box at the top — the line answer engines lift verbatim.
    shortAnswer: z.string(),
    // Section label shown above the H1 and used as Article.articleSection.
    category: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // When competitor prices/features in the article were last checked.
    factsChecked: z.coerce.date().optional(),
    // Hero image in public/blog/ (1200×675 .webp). Optional — falls back to og-image.
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    // Drives the visible FAQ block AND the FAQPage JSON-LD.
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    // Related blog slugs and related guide slugs ("Keep reading").
    related: z.array(z.string()).default([]),
    relatedGuides: z.array(z.string()).default([]),
  }),
});

export const collections = { guides, blog };
