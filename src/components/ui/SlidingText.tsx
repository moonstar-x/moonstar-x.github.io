'use client';
import { EASE_OUT_EXPO } from '@components/motion/variants';
import { useShouldReduceMotion } from '@hooks/useShouldReduceMotion';
import { clsx } from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import type { ComponentProps, FC } from 'react';

const DEFAULT_INTERVAL = 2500;

interface Props extends Omit<ComponentProps<typeof motion.span>, 'children'> {
  interval?: number;
  options: string[];
}

export const SlidingText: FC<Props> = ({ options, interval = DEFAULT_INTERVAL, className, ...props }) => {
  const shouldReduceMotion = useShouldReduceMotion();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const activeIndex = shouldReduceMotion ? 0 : currentIndex;
  const currentValue = options[activeIndex] ?? '';

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const handle = setInterval(() => {
      setCurrentIndex((index) => (index + 1) % options.length);
    }, interval);

    return (): void => {
      clearInterval(handle);
    };
  }, [options, interval, shouldReduceMotion]);

  return (
    <motion.span {...props} className={clsx('reveal-mask', className)}>
      <AnimatePresence initial={false} mode="wait">
        <motion.span
          animate={{ y: '0%', opacity: 1, transition: { duration: 0.55, ease: EASE_OUT_EXPO } }}
          className="inline-block"
          exit={{ y: '-60%', opacity: 0, transition: { duration: 0.3, ease: 'easeIn' } }}
          initial={{ y: '110%', opacity: 1 }}
          key={activeIndex}
          whileTap={{ scale: 0.9 }}
        >
          {currentValue}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
};
