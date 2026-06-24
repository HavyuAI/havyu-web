// ✅ [FEATURE]: JSON-LD structured data builders (SEO + AEO).
// Goes at: src/data/schema.ts
// Each returns a plain object; Base.astro injects them as application/ld+json.
// Pass the site origin (e.g. Astro.site.origin) so URLs stay canonical.

const NAME = 'Havyu AI';
const SLOGAN = 'Smart Lifting';

const DESCRIPTION =
  'Havyu AI is a two-pillar fitness app — Smart Lifting — that combines frictionless strength tracking with daily habit accountability, using AI to surface the connections between your training and your recovery habits.';

export function organizationSchema(origin: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: NAME,
    slogan: SLOGAN,
    url: origin,
    logo: `${origin}/logo.png`, // TODO: add /logo.png to public/
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
    name: `${NAME} · ${SLOGAN}`,
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
