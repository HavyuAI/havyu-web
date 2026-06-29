// ✅ [FEATURE]: Author identity + brand channels + Person JSON-LD (E-E-A-T / AEO).
// Goes at: src/data/author.ts
// Single source for the footer "Built by" block AND the Person schema, so the
// visible author and the structured data never drift.
//   - Personal links  → Person entity (the author)
//   - Havyu links     → Organization entity (the brand)
// index.astro augments the Organization schema's sameAs/founder from HAVYU_LINKS
// and adds personSchema() to the page JSON-LD — schema.ts stays untouched.

export const AUTHOR = {
  name: 'James Hainsworth',
  role: 'Developer',
  // Short line for the footer.
  tagline: 'Developer, fitness & AI enthusiast.',
  // Full sentence for the Person schema description.
  bio: 'James Hainsworth is the solo developer behind Havyu AI — a developer and a fitness and AI enthusiast who built Havyu to connect strength training and daily recovery through an AI coach that surfaces the patterns between how you live and how you lift.',
  // Personal profile(s) → Person.sameAs
  instagram: 'https://www.instagram.com/jhainsworth_',
};

// Havyu brand channels → Organization.sameAs (set in index.astro)
export const HAVYU_LINKS = {
  appStore: 'https://apps.apple.com/app/id6766615743',
  tiktok: 'https://www.tiktok.com/@havyu.ai',
  github: 'https://github.com/HavyuAI',
};

// Stable @id so Organization.founder and the Person node refer to the same entity.
export const personId = (origin: string): string => `${origin}/#james-hainsworth`;

export function personSchema(origin: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': personId(origin),
    name: AUTHOR.name,
    jobTitle: AUTHOR.role,
    description: AUTHOR.bio,
    url: origin,
    worksFor: {
      '@type': 'Organization',
      name: 'Havyu AI',
      url: origin,
    },
    sameAs: [AUTHOR.instagram],
  };
}
