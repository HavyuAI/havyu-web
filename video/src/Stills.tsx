// ✅ [FEATURE]: branded stills — the site's share image and one hero per blog
// article, from one system: brand field (Recovery-led) or Espresso (Training-led),
// the white mark, League Spartan, left-aligned. No gradients-as-decoration beyond
// the app's own BRAND_FIELD.
import React from 'react';
import { AbsoluteFill, Img, staticFile } from 'remotion';
import { C, FONT, brandField } from './tokens';

export const OG = { width: 1200, height: 630 } as const;
export const ARTICLE = { width: 1200, height: 675 } as const;

export const OgCard: React.FC = () => (
  <AbsoluteFill style={{ background: brandField, fontFamily: FONT, padding: '84px 96px', justifyContent: 'space-between' }}>
    <Img src={staticFile('havyu-mark.png')} style={{ height: 96, width: 'auto', alignSelf: 'flex-start' }} />
    <div>
      <div style={{ color: C.white, fontSize: 132, fontWeight: 900, lineHeight: 0.95, letterSpacing: -2 }}>Havyu</div>
      <div style={{ color: C.mint, fontSize: 46, fontWeight: 700, marginTop: 18 }}>AI weightlifting and recovery coach</div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', color: alphaWhite, fontSize: 28, fontWeight: 700 }}>
      <span>Train. Recover. Overload.</span>
      <span>havyu.org</span>
    </div>
  </AbsoluteFill>
);

const alphaWhite = 'rgba(255, 255, 255, 0.78)';

export type ArticleHeroProps = { title: string; category: string; tone: 'recover' | 'train' };

export const ArticleHero: React.FC<ArticleHeroProps> = ({ title, category, tone }) => {
  const train = tone === 'train';
  // Long titles step the size down so they always fit three lines.
  const size = title.length > 60 ? 64 : title.length > 40 ? 76 : 88;
  return (
    <AbsoluteFill
      style={{
        background: train ? C.espresso : brandField,
        fontFamily: FONT,
        padding: '80px 96px',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ color: train ? C.latte : C.mint, fontSize: 34, fontWeight: 700 }}>{category}</div>
      <div style={{ color: C.white, fontSize: size, fontWeight: 900, lineHeight: 1.04, letterSpacing: -1, maxWidth: 1000 }}>{title}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <Img src={staticFile('havyu-mark.png')} style={{ height: 44, width: 'auto' }} />
        <span style={{ color: C.white, fontSize: 34, fontWeight: 800 }}>Havyu</span>
      </div>
    </AbsoluteFill>
  );
};
