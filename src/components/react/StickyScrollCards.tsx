// ✅ [FEATURE]: StickyScrollCards — scroll-driven pillar → AI card stack (React island).
// Goes at: src/components/react/StickyScrollCards.tsx
// Adapted from Componentry's sticky-scroll-cards:
//   - imports from `motion/react` (your installed `motion`), NOT framer-motion
//   - lenis dropped (no global smooth-scroll hijack) + scrollbar hack removed
//   - themed Havyu cards (no images), responsive width, reduced-motion fallback
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

type Accent = 'espresso' | 'green' | 'ai';

interface Card {
  kicker: string;
  title: string;
  body: string;
  accent: Accent;
}

// Order matters: the LAST card ends full-size on top → the AI coach is the finale.
const CARDS: Card[] = [
  {
    kicker: 'Pillar 01',
    title: 'Iron & Earth',
    body: 'Frictionless strength tracking — supersets, RPE, PRs — logged in seconds on the gym floor.',
    accent: 'espresso',
  },
  {
    kicker: 'Pillar 02',
    title: 'Leaf & Growth',
    body: 'Gamified habit accountability — sleep, protein, hydration — through the “Have You…?” deck.',
    accent: 'green',
  },
  {
    kicker: 'The coach',
    title: 'Havyu AI',
    body: 'One intelligence reading both pillars — connecting your recovery to your performance, and surfacing the patterns behind your next PR.',
    accent: 'ai',
  },
];

const ROTATIONS = [-1.5, 1.2, 0];

const STYLES: Record<Accent, { bg: string; kicker: string; title: string; body: string }> = {
  espresso: { bg: 'bg-[#f6f1ec]', kicker: 'text-chestnut', title: 'text-espresso', body: 'text-espresso/70' },
  green: { bg: 'bg-[#eef5ee]', kicker: 'text-forest', title: 'text-espresso', body: 'text-espresso/70' },
  ai: { bg: 'bg-forest-deep', kicker: 'text-ai-bright', title: 'text-white', body: 'text-white/75' },
};

const CARD_SHADOW =
  '0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.07), 0 12px 32px rgba(0,0,0,0.10), 0 24px 56px rgba(0,0,0,0.08)';

function CardFace({ card }: { card: Card }) {
  const s = STYLES[card.accent];
  return (
    <div
      className={`flex h-[400px] w-[88vw] max-w-[440px] flex-col justify-between overflow-hidden rounded-2xl p-7 ${s.bg}`}
      style={{ boxShadow: CARD_SHADOW }}
    >
      <div className="flex items-center justify-between">
        <span className={`text-xs font-bold uppercase tracking-[0.18em] ${s.kicker}`}>
          {card.kicker}
        </span>
        {card.accent === 'ai' && (
          <span className="text-xl text-ai-bright" aria-hidden="true">
            ✦
          </span>
        )}
      </div>
      <div>
        <h3 className={`font-display text-3xl font-black tracking-tight ${s.title}`}>
          {card.title}
        </h3>
        <p className={`mt-3 leading-relaxed ${s.body}`}>{card.body}</p>
      </div>
    </div>
  );
}

function StickyCard({
  i,
  card,
  progress,
  targetScale,
}: {
  i: number;
  card: Card;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  targetScale: number;
}) {
  const scale = useTransform(progress, [i * 0.25, 1], [1, targetScale]);
  return (
    <div className="sticky top-0 flex h-screen items-center justify-center">
      <motion.div
        className="relative origin-top"
        style={{ scale, rotate: ROTATIONS[i % ROTATIONS.length], top: `calc(-5vh + ${i * 26 + 120}px)` }}
      >
        <CardFace card={card} />
      </motion.div>
    </div>
  );
}

export default function StickyScrollCards({ hint = 'scroll to explore' }: { hint?: string }) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const m = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(m.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    m.addEventListener?.('change', onChange);
    return () => m.removeEventListener?.('change', onChange);
  }, []);

  // Reduced-motion: a simple static stack, no scroll-scaling.
  if (reduced) {
    return (
      <div className="flex flex-col items-center gap-6 py-8">
        {CARDS.map((card, i) => (
          <CardFace key={i} card={card} />
        ))}
      </div>
    );
  }

  return (
    <div ref={container} className="relative flex w-full flex-col items-center pt-[30vh] pb-[80vh]">
      <div className="pointer-events-none absolute left-1/2 top-[6%] flex -translate-x-1/2 flex-col items-center gap-3">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-espresso/30">{hint}</p>
        <span className="h-12 w-px bg-gradient-to-b from-espresso/30 to-transparent" />
      </div>

      {CARDS.map((card, i) => {
        const targetScale = Math.max(0.6, 1 - (CARDS.length - i - 1) * 0.1);
        return (
          <StickyCard key={i} i={i} card={card} progress={scrollYProgress} targetScale={targetScale} />
        );
      })}
    </div>
  );
}
