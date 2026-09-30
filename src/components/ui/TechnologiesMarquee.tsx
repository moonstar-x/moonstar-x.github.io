'use client';
import { useMobile } from '@hooks/useMobile';
import { useShouldReduceMotion } from '@hooks/useShouldReduceMotion';
import type { ComponentProps, FC } from 'react';
import Marquee from 'react-fast-marquee';

interface Props extends Omit<ComponentProps<typeof Marquee>, 'children'> {
  technologies: string[];
}

export const TechnologiesMarquee: FC<Props> = ({ technologies, className, ...props }) => {
  const isMobile = useMobile();
  const shouldReduceMotion = useShouldReduceMotion();
  const technologyCounts = technologies.reduce<Record<string, number>>((counts, technology) => ({
    ...counts,
    [technology]: (counts[technology] ?? 0) + 1
  }), {});
  const uniqueTechnologies = Object.keys(technologyCounts).toSorted((a, b) => (technologyCounts[b] ?? 0) - (technologyCounts[a] ?? 0));
  const repeatedUniqueTechnologies = [
    ...uniqueTechnologies,
    ...uniqueTechnologies,
    ...uniqueTechnologies,
    ...uniqueTechnologies,
    ...uniqueTechnologies
  ].map((tech, index) => [index, tech]);
  const gradientWidth = isMobile ? 0 : 100;

  return (
    <div className={className}>
      <ul aria-label="Technologies I've worked with" className="sr-only">
        {uniqueTechnologies.map((technology) => (
          <li key={technology}>
            {technology}
          </li>
        ))}
      </ul>
      <div aria-hidden>
        <Marquee gradient className="bg-text text-background overflow-hidden whitespace-nowrap" gradientColor="black" gradientWidth={gradientWidth} play={!shouldReduceMotion} {...props}>
          <div className="pt-2.5 xl:pt-3 pb-2">
            {repeatedUniqueTechnologies.map(([key, technology]) => (
              <span className="font-title font-black text-[17px] xl:text-[22px] uppercase after:content-['✦'] after:ml-2 mr-2" key={key}>
                {technology}
              </span>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};
