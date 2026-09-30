import { MotionLink } from '@components/motion/MotionLink';
import { fadeUp, REVEAL_VIEWPORT, staggerChildren, TAP_SCALE } from '@components/motion/variants';
import { umamiEvent, UmamiEvents } from '@core/analytics/events';
import { DynamicRouteDefs, RouteDefs } from '@core/routes/routes';
import { clsx } from 'clsx';
import * as motion from 'framer-motion/client';
import type { ComponentProps, FC } from 'react';

interface Props extends Omit<ComponentProps<typeof motion.section>, 'children'> {
  nextArticleName?: string | undefined;
  nextArticleSlug?: string | undefined;
}

export const WorkFooterNavigation: FC<Props> = ({ nextArticleName, nextArticleSlug, className, ...props }) => (
  <motion.section className={clsx('border-t border-solid border-border pt-5 pb-3 xl:py-5.5 px-5 xl:px-10 flex flex-col xl:flex-row gap-1 xl:items-center justify-between', className)} initial="hidden" variants={staggerChildren(0.12)} viewport={REVEAL_VIEWPORT} whileInView="shown" {...props}>
    <MotionLink className="group hidden xl:inline-block text-[13px] font-medium tracking-widest uppercase text-muted transition-colors duration-200 ease-out hover:text-accent" href={RouteDefs.work} variants={fadeUp(0, 12)}>
      <span className="inline-block transition-transform duration-200 ease-out group-hover:-translate-x-1">
        ←
      </span>
      {' '}
      <span className="inline-block accent-underline group-hover:accent-underline-shown group-focus-visible:accent-underline-shown">
        All work
      </span>
    </MotionLink>
    {
      nextArticleName !== undefined && nextArticleSlug !== undefined && (
        <motion.div className="flex flex-col xl:flex-row items-baseline xl:gap-3.5 text-text" variants={staggerChildren(0.08)}>
          <motion.span className="text-xs xl:text-[13px] font-medium tracking-widest uppercase text-muted" variants={fadeUp(0, 12)}>
            Next Up
          </motion.span>
          <MotionLink className="group font-title font-black text-[30px] xl:text-[34px] tracking-[-0.035em] uppercase transition-colors duration-200 ease-out hover:text-accent" href={DynamicRouteDefs.workBySlug(nextArticleSlug)} variants={fadeUp()} whileTap={TAP_SCALE} {...umamiEvent(UmamiEvents.nextArticle, { slug: nextArticleSlug })}>
            {nextArticleName}
            {' '}
            <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1">
              →
            </span>
          </MotionLink>
        </motion.div>
      )
    }
  </motion.section>
);
