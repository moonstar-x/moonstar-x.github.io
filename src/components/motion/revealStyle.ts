import type { CSSProperties } from 'react';

type RevealStyle = CSSProperties & Record<`--reveal-${string}`, string>;

export const WORD_STAGGER = 0.07;

export const revealStyle = (delay = 0, distance?: number): RevealStyle => ({
  '--reveal-delay': `${delay.toString()}s`,
  ...distance !== undefined && { '--reveal-distance': `${distance.toString()}px` }
});
