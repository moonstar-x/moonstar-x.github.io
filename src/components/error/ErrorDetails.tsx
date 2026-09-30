'use client';
import { CopyCodeButton } from '@components/markdown/CopyCodeButton';
import { drawLine, fadeUp, REVEAL_VIEWPORT, staggerChildren } from '@components/motion/variants';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import type { ComponentProps, FC } from 'react';

interface Props extends Omit<ComponentProps<'section'>, 'children'> {
  error: Error & { digest?: string };
}

export const ErrorDetails: FC<Props> = ({ error, className, ...props }) => {
  const message = error.message.length > 0 ? error.message : 'No message was provided.';

  return (
    <section className={clsx('flex flex-col', className)} {...props}>
      <motion.div className="pt-5.5 xl:pt-7.5 px-5 xl:px-10 pb-5 xl:pb-2.5 flex flex-row items-baseline gap-4" initial="hidden" variants={staggerChildren(0.1)} viewport={REVEAL_VIEWPORT} whileInView="shown">
        <motion.h2 className="font-title font-black text-sm xl:text-[15px] tracking-[0.2em] uppercase text-accent" variants={fadeUp(0, 12)}>
          What went wrong
        </motion.h2>
        <motion.hr className="hidden xl:block grow h-px border-border origin-left" variants={drawLine} />
      </motion.div>
      <motion.div className="px-5 xl:px-10 pt-4 xl:pt-5 pb-5 flex flex-col gap-5 xl:gap-6 border-t xl:border-t-0 border-solid border-border" initial="hidden" variants={staggerChildren(0.1)} viewport={REVEAL_VIEWPORT} whileInView="shown">
        <motion.div className="flex flex-col gap-1.25 xl:gap-1.5" variants={fadeUp(0, 32)}>
          <span className="font-code text-xs xl:text-[13px] tracking-widest uppercase text-muted">
            {error.name}
          </span>
          <p className="m-0 font-title font-black text-[26px] xl:text-[36px] leading-[0.95] tracking-[-0.03em] wrap-break-word">
            {message}
          </p>
          {error.digest !== undefined && (
            <span className="pt-1 font-code text-xs xl:text-[13px] text-lighter break-all">
              Digest:
              {' '}
              {error.digest}
            </span>
          )}
        </motion.div>
        {error.stack !== undefined && (
          <motion.div className="bg-text flex flex-col" variants={fadeUp(0, 32)}>
            <div className="py-2.5 px-4.5 border-b border-solid border-code flex items-center justify-between gap-4">
              <span className="font-code text-[11px] tracking-widest uppercase text-accent-light">
                Stack trace
              </span>
              <CopyCodeButton code={error.stack} />
            </div>
            <pre className="m-0 p-4.5 font-code text-xs xl:text-sm leading-[1.75] text-code overflow-x-auto">
              {error.stack}
            </pre>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};
