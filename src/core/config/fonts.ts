import { clsx } from 'clsx';
import { Hanken_Grotesk as HankenGrotesk, JetBrains_Mono as JetbrainsMono, League_Spartan as LeagueSpartan } from 'next/font/google';

const hankenGrotesk = HankenGrotesk({
  subsets: ['latin'],
  variable: '--font-hanken-grotesk',
  display: 'swap'
});

const leagueSpartan = LeagueSpartan({
  subsets: ['latin'],
  variable: '--font-league-spartan',
  display: 'swap'
});

const jetbrainsMono = JetbrainsMono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap'
});

export const FONT_VARIABLES_CLASS_NAME: string = clsx(hankenGrotesk.variable, leagueSpartan.variable, jetbrainsMono.variable);
