// ✅ [FEATURE]: CoachGenie — replica of the in-app "Havyu · AI Coach" Q&A surface.
// Goes at: src/components/react/CoachGenie.tsx
// Curated question deck → tap a question → text answer in the coach's voice.
// Answers reflect real cross-pillar patterns (sleep↔training, protein↔growth) and stay
// observe-don't-prescribe: reference numbers, lead with positives, never prescribe loads.
import { useState } from 'react';

interface QA {
  q: string;
  a: string;
}

const DECK: QA[] = [
  {
    q: 'What should I focus on right now?',
    a: "Your consistency is the win — you've logged 4 of your last 5 planned sessions. The soft spot is protein: you've hit target on 3 of the last 7 days. Tightening that up is the highest-leverage thing you could do this week.",
  },
  {
    q: 'How is my recovery looking?',
    a: 'Solid overall. Sleep has averaged about 7h 10m this week and your mood scores are trending up. The dips line up with your two late nights — on the days after them, your session volume came in noticeably lower.',
  },
  {
    q: 'Is my sleep helping or hurting my training?',
    a: 'Helping, clearly. Across your recent sessions, the ones following 7+ hours of sleep carried meaningfully heavier top sets than the ones after short nights. Sleep is one of your strongest levers right now — worth protecting.',
  },
  {
    q: 'Am I eating enough to grow?',
    a: "Close, but there's room. On the days you hit your protein target, your next session tended to be higher-volume. You're hitting it about half the time — and the days you miss are the ones where your heavy compounds felt heavier.",
  },
  {
    q: 'Which habit would move the needle most?',
    a: "Protein consistency. It's the habit most tightly linked to your stronger sessions, and it's also the one you're missing most often — so a small change there would show up fastest on the bar.",
  },
];

function BubbleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 5h16v11H9l-4 3v-3H4z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CoachGenie() {
  const [selected, setSelected] = useState<number | null>(null);
  const active = selected !== null ? DECK[selected] : null;

  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-2xl border border-border border-l-4 border-l-ai bg-surface shadow-card">
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-4">
        <span className="flex items-center gap-2 font-display font-bold text-ai">
          <span aria-hidden="true">✦</span> Havyu · AI Coach
        </span>
        <button
          type="button"
          onClick={() => setSelected(null)}
          aria-label="Back to questions"
          className="text-espresso/40 transition hover:text-espresso/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chestnut"
        >
          ✕
        </button>
      </div>

      <div className="px-5 pb-5">
        {/* Greeting */}
        <p className="mt-4 rounded-2xl bg-[#f6f1ec] px-4 py-3 leading-relaxed text-espresso">
          Hey — I've been through your habits and recovery. Tap any question below and
          I'll break it down for you.
        </p>

        {active ? (
          /* Answer view */
          <div className="mt-5" aria-live="polite">
            <p className="flex items-center gap-2 text-sm font-bold text-espresso">
              <span className="text-ai" aria-hidden="true">
                <BubbleIcon />
              </span>
              {active.q}
            </p>
            <p className="mt-3 rounded-2xl bg-[#f6f1ec] px-4 py-3 leading-relaxed text-espresso/90">
              {active.a}
            </p>
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="mt-4 text-sm font-bold text-ai transition hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chestnut"
            >
              ← Ask another
            </button>
          </div>
        ) : (
          /* Question deck */
          <div className="mt-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-espresso/45">
              Ask your coach
            </p>
            <ul className="mt-1">
              {DECK.map((item, i) => (
                <li key={i} className="border-t border-border/70 first:border-t-0">
                  <button
                    type="button"
                    onClick={() => setSelected(i)}
                    className="flex w-full items-center gap-3 py-3.5 text-left transition hover:text-ai focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chestnut"
                  >
                    <span className="shrink-0 text-espresso/35" aria-hidden="true">
                      <BubbleIcon />
                    </span>
                    <span className="font-display font-bold text-espresso">{item.q}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="mt-5 text-xs text-espresso-faded">
          Example answers. In the app, Havyu draws these from your own logged data.
        </p>
      </div>
    </div>
  );
}
