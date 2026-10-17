// ✅ [FEATURE]: Havyu tokens for Remotion — a literal mirror of the app's
// constants/theme.ts (light) and src/styles/tokens.css. This file is the ONLY
// place hex values live in the video project; compositions read from here.

export const C = {
  // Surfaces (THEME.light)
  cream: '#F3F0E6',
  card: '#FFFFFF',
  border: '#E8E0D5',
  // Training (GYM_LIGHT)
  espresso: '#3E2723',
  chestnut: '#6D4C41',
  subtext: '#8D6E63',
  copper: '#A86E3F',
  latte: '#D7CCC8',
  // Recovery (HABIT_HERO_LIGHT)
  leaf: '#1B5E20',
  mint: '#C8E6C9',
  liveRecovery: '#FFD54F', // today's Perfect Day only
  // "Increase" — the only green action (DESIGN_SYSTEM §2 rule 9), on espresso
  increase: '#66BB6A',
  // BRAND_FIELD
  fieldTop: '#2E7D32',
  fieldMid: '#256428',
  fieldBottom: '#17421B',
  white: '#FFFFFF',
} as const;

/** BRAND_FIELD gradient — stops 0 / 0.55 / 1, (0.15, 0) → (0.85, 1). */
export const brandField = `linear-gradient(160deg, ${C.fieldTop} 0%, ${C.fieldMid} 55%, ${C.fieldBottom} 100%)`;

export const FONT = '"League Spartan", system-ui, sans-serif';

// RADIUS + SHADOWS (theme.ts)
export const R = { sm: 8, md: 12, lg: 18, xl: 24 } as const;
export const SHADOW = {
  card: '0 4px 8px rgba(0,0,0,0.04)',
  md: '0 3px 6px rgba(0,0,0,0.08)',
  lg: '0 6px 12px rgba(0,0,0,0.15)',
} as const;

/** Hex → rgba, for alpha tints of a token (never a new colour). */
export const alpha = (hex: string, a: number): string => {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
};
