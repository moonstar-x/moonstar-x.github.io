import { clsx } from 'clsx';
import type { ComponentProps, FC } from 'react';
import Marquee from 'react-fast-marquee';

type Props = Omit<ComponentProps<typeof Marquee>, 'children'>;

export const NotFoundMarquee: FC<Props> = ({ className, ...props }: Props) => (
  <Marquee className={clsx('bg-text text-background pt-3 pb-2 px-0 overflow-hidden whitespace-nowrap', className)} {...props}>
    <span className="font-title font-black text-[22px] uppercase">
      404 ✦ NOT FOUND ✦ 404 ✦ NOT FOUND ✦ 404 ✦ NOT FOUND ✦ 404 ✦ NOT FOUND ✦ 404 ✦ NOT FOUND ✦ 404 ✦ NOT FOUND ✦ 404 ✦ NOT FOUND ✦
    </span>
  </Marquee>
);
