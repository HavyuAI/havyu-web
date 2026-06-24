// ✅ [FEATURE]: FAQ content + FAQPage JSON-LD — single source of truth.
// Goes at: src/data/faqs.ts
// The visible FAQ accordion (FAQ.astro) and the FAQPage schema both read this
// array, so the on-page answers and the structured data can never drift —
// which is also a Google requirement (FAQ schema must match visible content).
// Answers are answer-first and plain-text (no markdown) for AEO extraction.

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: 'What is Havyu AI?',
    a: 'Havyu is an AI coach for lifting and recovery. It tracks your workouts and your daily habits in one app, then connects the two — observing how your sleep, protein, hydration and recovery affect your training performance, and surfacing the patterns behind your progress.',
  },
  {
    q: 'Is Havyu free, and what does Pro cost?',
    a: 'Yes, Havyu is free. The full manual tracker — workout logging, habit tracking, charts, history and scheduling — is free to use, along with a limited number of AI routine builds. Havyu Pro, at $4.99 per month or $39.99 per year, unlocks the full coaching layer: the AI Coach, pattern insights, pre-workout briefings and unlimited AI routine building. Pro adds depth, not access.',
  },
  {
    q: 'How is Havyu different from apps like Strong or Fitbod?',
    a: 'Most apps track either lifting or nutrition. Havyu does both, and its AI links them: it matches each training session against the prior day\u2019s recovery habits to surface concrete correlations between how you live and how you perform. Rather than handing you a generic template, it observes and explains your own data.',
  },
  {
    q: 'Does Havyu tell me what exercises, sets and reps to do?',
    a: 'Havyu\u2019s AI Routine Builder can generate a structured routine around a focus you choose, and you can also build routines manually. Its coaching surfaces, though, are observational — they explain what is happening in your training and why, instead of prescribing exact sets, reps or loads. You stay in control of your program.',
  },
  {
    q: 'How does the AI coaching actually work?',
    a: 'Havyu analyses your logged training and habits and surfaces plain-language insights: strength trends, progression stalls, training imbalances, and links between your recovery and your performance. You can ask the coach a question with a single tap, get a briefing before a session, and review what happened afterwards.',
  },
  {
    q: 'Is my training and habit data private?',
    a: 'Your training and habit data is stored locally on your device, not on our servers. AI features transmit only the workout and habit data needed to generate a response — never your name or email — and only after you give explicit consent, which you can withdraw at any time in Settings \u2192 AI Privacy. Havyu does not sell your data or use it for advertising, and our AI provider does not use it to train its models.',
  },
  {
    q: 'Do I need a wearable or special equipment?',
    a: 'No. Havyu works with manual logging — no wearable, sensors or specific equipment required. You log your lifts and habits in seconds, and the coaching builds from there.',
  },
  {
    q: 'Which platforms is Havyu available on?',
    a: 'Havyu is available now on the Apple App Store, with Google Play coming soon.',
  },
];

// ✅ [FEATURE]: FAQPage structured data, built from the same array.
export function faqSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };
}
