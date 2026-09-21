import { clsx } from 'clsx';
import type { ComponentProps, FC } from 'react';
import Marquee from 'react-fast-marquee';

interface Props extends ComponentProps<typeof Marquee> {
  technologies: string[];
}

export const TechnologiesMarquee: FC<Props> = ({ technologies, className, ...props }) => {
  const uniqueTechnologies = technologies;

  return (
    <Marquee className={clsx('bg-text text-background pt-3 pb-2 overflow-hidden whitespace-nowrap', className)} {...props}>
      {uniqueTechnologies.map((technology) => (
        <span className="font-title font-black text-[22px] uppercase after:content-['✦'] after:ml-2 mr-2" key={technology}>
          {technology}
        </span>
      ))}
    </Marquee>
  );
};
