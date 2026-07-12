// ✅ [FEATURE]: JSON-LD structured data builders (SEO + AEO).
// Goes at: src/data/schema.ts
// Each returns a plain object; Base.astro injects them as application/ld+json.
// Pass the site origin (e.g. Astro.site.origin) so URLs stay canonical.

const NAME = 'Havyu AI';
// ✅ [FIX]: locked tagline (11 July 2026). Was 'Smart Lifting' — that's the
// training PILLAR's name (per Brand.md), not the brand's slogan. Using it as
// the slogan was exactly the "never lead with features/pillars" mistake
// Brand.md's messaging hierarchy (Coach → Progress → Pillars → Features) warns against.
const SLOGAN = 'The AI Coach for Lifting Weights';

// ✅ [FIX]: rewritten to lead with the Coach (Brand.md hierarchy), framing the
// pillars as two inputs to one system rather than naming a pillar as if it
// were the whole product's identity.
const DESCRIPTION =
  'Havyu is the AI Coach for Lifting Weights. It observes your training and your recovery — Smart Lifting and Habits — as two inputs to one connected coaching system, surfacing the patterns behind your progress.';

export function organizationSchema(origin: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: NAME,
    slogan: SLOGAN,
    url: origin,
    // ✅ [FIX]: use the shipped icon (was /logo.png, which 404s — no such asset).
    logo: `${origin}/apple-touch-icon.png`,
    description: DESCRIPTION,
    sameAs: [
      // TODO: add App Store, Google Play, and social profile URLs.
      // Entity consistency across these links is an AEO ranking signal.
    ],
  };
}

export function webSiteSchema(origin: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${NAME} — ${SLOGAN}`,
    url: origin,
    description: DESCRIPTION,
  };
}

export function appSchema(origin: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: NAME,
    alternateName: `${NAME}: ${SLOGAN}`,
    operatingSystem: 'iOS, Android',
    applicationCategory: 'HealthApplication',
    url: origin,
    description: DESCRIPTION,
    // No aggregateRating until real store reviews exist (don't fabricate).
    offers: [
      {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        description:
          'Free — full manual tracker: logging, habits, charts, history, scheduler.',
      },
      {
        '@type': 'Offer',
        price: '4.99',
        priceCurrency: 'USD',
        description:
          'Pro monthly — AI coaching, AI routine builder, deeper insights. 14-day free trial.',
      },
      {
        '@type': 'Offer',
        price: '39.99',
        priceCurrency: 'USD',
        description:
          'Pro annual — AI coaching, AI routine builder, deeper insights.',
      },
    ],
  };
}
