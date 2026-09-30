'use client';
import { ChevronUpIcon } from '@components/icons/ChevronUpIcon';
import { TAP_SCALE } from '@components/motion/variants';
import { Icon } from '@components/ui/Icon';
import { useShouldReduceMotion } from '@hooks/useShouldReduceMotion';
import { AnimatePresence, motion } from 'framer-motion';
import { Fragment, useEffect, useRef, useState } from 'react';
import type { FC } from 'react';

export const ScrollToTopButton: FC = () => {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const shouldReduceMotion = useShouldReduceMotion();

  useEffect(() => {
    const sentinel = sentinelRef.current;

    if (!sentinel) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        setVisible(!entry.isIntersecting);
      }
    });

    observer.observe(sentinel);

    return (): void => {
      observer.disconnect();
    };
  }, []);

  const handleClick = (): void => {
    window.scrollTo({ top: 0, behavior: shouldReduceMotion ? 'instant' : 'smooth' });
  };

  return (
    <Fragment>
      {/* Spans the first viewport of the page; the button shows once it has scrolled out of view. */}
      <div aria-hidden className="pointer-events-none absolute top-0 left-0 h-svh w-px" ref={sentinelRef} />

      <AnimatePresence>
        {
          visible && (
            <motion.button
              animate={{ opacity: 1, y: 0 }}
              aria-label="Scroll to top"
              className="group fixed right-5 bottom-5 xl:right-10 xl:bottom-10 z-10 size-12 flex items-center justify-center rounded-full border-2 border-solid border-accent bg-accent cursor-pointer transition-colors duration-200 ease-out hover:bg-background"
              exit={{ opacity: 0, y: 12 }}
              initial={{ opacity: 0, y: 12 }}
              transition={{ ease: 'easeOut', duration: 0.2 }}
              type="button"
              whileTap={TAP_SCALE}
              onClick={handleClick}
            >
              <Icon className="fill-white transition-colors duration-200 ease-out group-hover:fill-accent" icon={ChevronUpIcon} size="1.5x" />
            </motion.button>
          )
        }
      </AnimatePresence>
    </Fragment>
  );
};
