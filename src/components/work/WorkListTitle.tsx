import { drawLine, fadeUp, REVEAL_VIEWPORT, staggerChildren } from '@components/motion/variants';
import { clsx } from 'clsx';
import * as motion from 'framer-motion/client';
import type { ComponentProps, FC } from 'react';

interface Props extends Omit<ComponentProps<typeof motion.div>, 'children'> {
  count: number;
  title: string;
}

export const WorkListTitle: FC<Props> = ({ title, count, className, ...props }) => (
  <motion.div className={clsx('flex flex-row align-baseline gap-3.5', className)} initial="hidden" variants={staggerChildren(0.1)} viewport={REVEAL_VIEWPORT} whileInView="shown" {...props}>
    <motion.h2 className="font-title font-black text-sm xl:text-[15px] tracking-[0.2em] uppercase text-accent" variants={fadeUp(0, 12)}>
      {title}
      <span className="xl:hidden">
        {' '}
        ·
        {' '}
        {count}
      </span>
    </motion.h2>
    <motion.div className="hidden xl:block grow border-b border-solid h-3.75 border-border origin-left" variants={drawLine} />
    <motion.span className="hidden xl:inline-block text-sm text-muted" variants={fadeUp(0, 12)}>
      {count === 1 ? '1 project' : `${count.toString()} projects`}
    </motion.span>
  </motion.div>
);
