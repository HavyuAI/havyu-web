import React from 'react';
import { Composition, Still } from 'remotion';
import './fonts';
import { HERO_LOOP, HeroLoop } from './HeroLoop';
import { ARTICLE, ArticleHero, OG, OgCard, type ArticleHeroProps } from './Stills';

const sample: ArticleHeroProps = { title: 'Havyu vs SensAI (2026): which AI lifting coach fits you?', category: 'Comparisons', tone: 'recover' };

export const Root: React.FC = () => (
  <>
    <Composition id="HeroLoop" component={HeroLoop} {...HERO_LOOP} />
    <Still id="OgCard" component={OgCard} {...OG} />
    <Still id="ArticleHero" component={ArticleHero} {...ARTICLE} defaultProps={sample} />
  </>
);
