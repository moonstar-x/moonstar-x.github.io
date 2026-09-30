'use client';
import { useMobile } from '@hooks/useMobile';
import { useShouldReduceMotion } from '@hooks/useShouldReduceMotion';
import type { ComponentProps, FC } from 'react';
import Marquee from 'react-fast-marquee';

type Props = Omit<ComponentProps<typeof Marquee>, 'children'>;

export const NotFoundMarquee: FC<Props> = ({ className, ...props }: Props) => {
  const isMobile = useMobile();
  const shouldReduceMotion = useShouldReduceMotion();
  const text = '404 ✦ NOT FOUND ✦ '.repeat(100);
  const gradientWidth = isMobile ? 0 : 100;

  return (
    <div aria-hidden className={className}>
      <Marquee gradient pauseOnHover className="bg-text text-background overflow-hidden whitespace-nowrap" gradientColor="black" gradientWidth={gradientWidth} play={!shouldReduceMotion} {...props}>
        <div className="pt-2.5 xl:pt-3 pb-2">
          <span className="font-title font-black text-[17px] xl:text-[22px] uppercase">
            {text}
          </span>
        </div>
      </Marquee>
    </div>
  );
};
