// ✅ [FEATURE]: HeroLoop — the homepage's one motion moment (8 s, seamless loop).
// Story, in the app's own components: the "Have you…?" deck is answered card by
// card (Inbox-Zero UX, DESIGN_SYSTEM §4), the Recovery coach hero counts up to a
// Perfect Day (gold = now), then the Training coach hero tells you the lift is
// ready to go up. Observe, don't prescribe: it says WHEN, not a load.
import React from 'react';
import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { C, FONT, R, SHADOW, alpha } from './tokens';

export const HERO_LOOP = { width: 720, height: 640, fps: 30, durationInFrames: 240 } as const;

const DECK = [
  { q: 'Have you hit your protein?', meta: 'Target 160 g' },
  { q: 'Have you slept 7 hours?', meta: 'Last night' },
  { q: 'Have you had 2.5 L of water?', meta: 'Today' },
] as const;

const TAP = [26, 70, 114]; // frame each "Yes" is pressed
const PERFECT = 146; // all three answered → Perfect Day
const TRAINING_IN = 160; // Training coach hero arrives
const LOOP_OUT = 208; // scene dips to cream…
const LOOP_IN = 224; // …then the opening state returns, so frame 239 → frame 0 is seamless

const Sender: React.FC<{ color: string }> = ({ color }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
    <Img src={staticFile('havyu-mark.png')} style={{ height: 20 }} />
    <span style={{ color, fontWeight: 700, fontSize: 19 }}>Coach</span>
  </div>
);

const RecoveryHero: React.FC<{ frame: number }> = ({ frame }) => {
  const done = TAP.filter((t) => frame >= t + 8).length;
  const perfect = frame >= PERFECT;
  const support = perfect
    ? 'Sleep, protein and water on target.'
    : done === 0
      ? '0 of 3 done.'
      : done === 1
        ? '1 of 3 done.'
        : 'One to go for a perfect day.';
  const swap = interpolate(frame, [PERFECT - 6, PERFECT + 4], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  // Track fill eases toward the answered count (instant feedback, no snap).
  const fillTarget = (n: number) => n / 3;
  const prevFill = fillTarget(Math.max(0, done - 1));
  const lastTap = TAP[done - 1] ?? 0;
  const fill = done === 0 ? 0 : interpolate(frame, [lastTap + 8, lastTap + 18], [prevFill, fillTarget(done)], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <div style={{ background: C.leaf, borderRadius: R.xl, padding: '28px 30px 30px', boxShadow: SHADOW.md }}>
      <Sender color={C.mint} />
      <div style={{ position: 'relative', height: 84, marginTop: 14 }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 1 - swap, color: C.white, fontWeight: 800, fontSize: 36, lineHeight: 1.12 }}>
          Have you checked in today?
        </div>
        <div style={{ position: 'absolute', inset: 0, opacity: swap, color: C.white, fontWeight: 800, fontSize: 36, lineHeight: 1.12 }}>
          Perfect day.
        </div>
      </div>
      <div style={{ color: C.mint, fontSize: 21, fontWeight: 400, marginTop: 4 }}>{support}</div>
      <div style={{ height: 6, borderRadius: 3, background: alpha(C.mint, 0.25), marginTop: 22, overflow: 'hidden' }}>
        <div style={{ width: `${fill * 100}%`, height: '100%', borderRadius: 3, background: perfect ? C.liveRecovery : C.white }} />
      </div>
    </div>
  );
};

const HabitCard: React.FC<{ i: number; frame: number; fps: number }> = ({ i, frame, fps }) => {
  const tap = TAP[i];
  const press = interpolate(frame, [tap - 4, tap, tap + 4], [1, 0.95, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const fly = spring({ frame: frame - (tap + 4), fps, config: { damping: 18, stiffness: 120, mass: 0.7 } });
  // Cards behind the active one sit lower and smaller, then step forward.
  const stepIn = TAP.slice(0, i).reduce((acc, t) => acc + spring({ frame: frame - (t + 6), fps, config: { damping: 20, stiffness: 140 } }), 0);
  const depth = i - stepIn;
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        transform: `translateY(${depth * 22}px) scale(${1 - depth * 0.05}) translateX(${fly * 820}px) rotate(${fly * 14}deg)`,
        transformOrigin: 'center top',
        opacity: (1 - fly * 0.9) * (depth > 2 ? 0 : 1),
        zIndex: 10 - i,
        background: C.card,
        border: `1px solid ${C.border}`,
        borderRadius: R.xl,
        padding: '30px 30px 28px',
        boxShadow: depth < 0.5 ? SHADOW.lg : SHADOW.card,
      }}
    >
      <div style={{ color: C.chestnut, fontSize: 19, fontWeight: 700 }}>{DECK[i].meta}</div>
      <div style={{ color: C.espresso, fontSize: 34, fontWeight: 800, lineHeight: 1.15, marginTop: 10 }}>{DECK[i].q}</div>
      <div style={{ display: 'flex', gap: 14, marginTop: 28 }}>
        <div
          style={{
            flex: 1,
            transform: `scale(${press})`,
            background: C.leaf,
            color: C.white,
            borderRadius: R.md,
            padding: '18px 0',
            textAlign: 'center',
            fontSize: 22,
            fontWeight: 700,
          }}
        >
          Yes
        </div>
        <div
          style={{
            flex: 1,
            border: `1.5px solid ${C.border}`,
            color: C.chestnut,
            borderRadius: R.md,
            padding: '18px 0',
            textAlign: 'center',
            fontSize: 22,
            fontWeight: 700,
          }}
        >
          Not yet
        </div>
      </div>
    </div>
  );
};

const TrainingHero: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const enter = spring({ frame: frame - TRAINING_IN, fps, config: { damping: 18, stiffness: 110 } });
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        transform: `translateY(${(1 - enter) * 260}px)`,
        opacity: enter,
        background: C.espresso,
        borderRadius: R.xl,
        padding: '28px 30px 30px',
        boxShadow: SHADOW.lg,
      }}
    >
      <Sender color={C.latte} />
      <div style={{ color: C.white, fontWeight: 800, fontSize: 36, lineHeight: 1.12, marginTop: 14 }}>
        Bench press is ready to go up.
      </div>
      <div style={{ color: C.latte, fontSize: 21, marginTop: 10, lineHeight: 1.35 }}>
        Two fully recovered days, and your last three sessions moved well.
      </div>
      <div style={{ height: 1, background: alpha(C.latte, 0.25), marginTop: 22 }} />
      <div style={{ display: 'flex', marginTop: 18 }}>
        {[
          ['Sleep', '7h 40m'],
          ['Protein', '162 g'],
        ].map(([k, v]) => (
          <div key={k} style={{ flex: 1 }}>
            <div style={{ color: C.latte, fontSize: 17, fontWeight: 700 }}>{k}</div>
            <div style={{ color: C.white, fontSize: 26, fontWeight: 800, marginTop: 4 }}>{v}</div>
          </div>
        ))}
        <div style={{ flex: 1 }}>
          <div style={{ color: C.latte, fontSize: 17, fontWeight: 700 }}>Next session</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: C.increase, fontSize: 26, fontWeight: 800, marginTop: 4 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 19V5M5 12l7-7 7 7" stroke={C.increase} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Increase
          </div>
        </div>
      </div>
    </div>
  );
};

const Scene: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => (
  <AbsoluteFill style={{ background: C.cream, fontFamily: FONT, padding: 40 }}>
    <RecoveryHero frame={frame} />
    <div style={{ position: 'relative', marginTop: 28, flex: 1 }}>
      {DECK.map((_, i) => (
        <HabitCard key={i} i={i} frame={frame} fps={fps} />
      ))}
      {frame >= TRAINING_IN - 2 && <TrainingHero frame={frame} fps={fps} />}
    </div>
  </AbsoluteFill>
);

export const HeroLoop: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  // Two-step dissolve (out to cream, then in) — never a double exposure.
  const out = interpolate(frame, [LOOP_OUT, LOOP_IN - 2], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const back = interpolate(frame, [LOOP_IN, durationInFrames - 1], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  return (
    <AbsoluteFill style={{ background: C.cream }}>
      {frame < LOOP_IN ? (
        <AbsoluteFill style={{ opacity: out }}>
          <Scene frame={frame} fps={fps} />
        </AbsoluteFill>
      ) : (
        <AbsoluteFill style={{ opacity: back }}>
          <Scene frame={0} fps={fps} />
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
