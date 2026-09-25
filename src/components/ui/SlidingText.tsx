'use client';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import type { ComponentProps, FC } from 'react';

const DEFAULT_INTERVAL = 2000;

interface Props extends Omit<ComponentProps<typeof motion.span>, 'children'> {
  interval?: number;
  options: string[];
}

export const SlidingText: FC<Props> = ({ options, interval = DEFAULT_INTERVAL, className, ...props }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const currentValue = options[currentIndex] ?? '';

  useEffect(() => {
    const handle = setInterval(() => {
      setCurrentIndex((index) => (index + 1) % options.length);
    }, interval);

    return (): void => {
      clearInterval(handle);
    };
  }, [options, interval]);

  return (
    <motion.span
      key={currentIndex}
      {...props}
      animate="show"
      className={clsx('inline-block', className)}
      initial="hide"
      whileTap={{ scale: 0.9 }}
      variants={{
        show: {
          opacity: 1,
          y: 0,
          transition: {
            ease: 'easeOut',
            duration: 0.8
          }
        },
        hide: {
          y: -60,
          opacity: 0
        }
      }}
    >
      {currentValue}
    </motion.span>
  );
};
