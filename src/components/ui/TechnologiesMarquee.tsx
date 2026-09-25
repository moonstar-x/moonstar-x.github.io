import { clsx } from 'clsx';
import type { ComponentProps, FC } from 'react';
import Marquee from 'react-fast-marquee';

interface Props extends Omit<ComponentProps<typeof Marquee>, 'children'> {
  technologies: string[];
}

export const TechnologiesMarquee: FC<Props> = ({ technologies, className, ...props }) => {
  const technologyCounts = technologies.reduce<Record<string, number>>((counts, technology) => ({
    ...counts,
    [technology]: (counts[technology] ?? 0) + 1
  }), {});
  const uniqueTechnologies = Object.keys(technologyCounts).toSorted((a, b) => (technologyCounts[b] ?? 0) - (technologyCounts[a] ?? 0));

  return (
    <Marquee className={clsx('bg-text text-background pt-2.5 xl:pt-3 pb-2 overflow-hidden whitespace-nowrap', className)} {...props}>
      {uniqueTechnologies.map((technology) => (
        <span className="font-title font-black text-[17px] xl:text-[22px] uppercase after:content-['✦'] after:ml-2 mr-2" key={technology}>
          {technology}
        </span>
      ))}
    </Marquee>
  );
};
