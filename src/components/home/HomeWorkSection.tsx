import { MotionLink } from '@components/motion/MotionLink';
import { drawLine, fadeUp, REVEAL_VIEWPORT, settleIn, staggerChildren } from '@components/motion/variants';
import { DynamicRouteDefs, RouteDefs } from '@core/routes/routes';
import { getTechLabel } from '@core/services/data/tech';
import type { WorkMetadata } from '@core/services/data/work';
import type { ContentMetadata } from '@core/services/markdown';
import { padNumber } from '@core/utils/number';
import { clsx } from 'clsx';
import * as motion from 'framer-motion/client';
import Image from 'next/image';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';

interface Props extends Omit<ComponentProps<'section'>, 'children'> {
  items: Array<ContentMetadata<WorkMetadata>>;
  maxShown?: number;
  maxTechnologiesInStatus?: number;
}

export const HomeWorkSection: FC<Props> = ({ items, className, maxShown = 3, maxTechnologiesInStatus = 2, ...props }) => {
  const slicedItems = items.slice(0, maxShown);

  return (
    <section className={clsx(className)} {...props}>
      <motion.div className="px-5 xl:px-10 pt-6.5 pb-3 xl:pt-8.5 xl:pb-2.5 flex flex-row items-baseline justify-between xl:justify-baseline gap-4" initial="hidden" variants={staggerChildren(0.1)} viewport={REVEAL_VIEWPORT} whileInView="shown">
        <motion.h2 className="font-title font-black text-[24px] xl:text-[30px] tracking-[-0.03em] uppercase" variants={fadeUp()}>
          Some of my work
        </motion.h2>
        <motion.hr className="hidden xl:block grow h-px border-border origin-left" variants={drawLine} />
        <MotionLink className="group shrink-0 text-xs xl:text-sm font-medium tracking-widest uppercase text-accent" href={RouteDefs.work} variants={fadeUp()}>
          <span className="hidden xl:inline-block">See</span>
          {' '}
          all
          {' '}
          {items.length}
          {' '}
          <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1">
            →
          </span>
        </MotionLink>
      </motion.div>

      <ul className="flex flex-col">
        {slicedItems.map(({ status, type, technologies, slug, name, description, cover }, index) => {
          const statusText = status === 'in-development'
            ? 'In Development'
            : technologies.slice(0, maxTechnologiesInStatus).map((technology) => getTechLabel(technology)).join('·');
          const completeStatus = statusText.length > 0 ? `${type} · ${statusText}` : type;

          return (
            <motion.li className="flex border-t last:border-b xl:border-t-0 xl:border-b border-solid border-border" initial="hidden" key={slug} variants={fadeUp(index * 0.1, 32)} viewport={REVEAL_VIEWPORT} whileInView="shown">
              <Link className="group min-h-54.75 grow flex flex-col xl:flex-row items-start xl:items-center gap-3 xl:gap-7.5 p-5 xl:px-10 xl:pt-6 xl:pb-4 transition-colors duration-200 ease-out hover:bg-background-light" href={DynamicRouteDefs.workBySlug(slug)}>
                <div className="w-full h-auto aspect-[2.32] relative overflow-hidden xl:hidden">
                  <motion.div className="absolute inset-0" variants={settleIn}>
                    <Image fill alt={slug} className="w-full h-full object-cover" src={cover} />
                  </motion.div>
                </div>

                <span className="hidden xl:inline-block font-title font-black text-[20px] text-accent w-15 shrink-0">
                  {padNumber(index + 1)}
                </span>

                <div className="flex flex-col grow gap-2">
                  <div className="flex flex-row items-end gap-2.5">
                    <span className="inline-block xl:hidden font-title font-black text-[15px] text-accent">
                      {padNumber(index + 1)}
                    </span>
                    <h3 className="font-title font-black text-[34px] xl:text-[54px] leading-[0.95] xl:leading-[0.92] tracking-[-0.035em] xl:tracking-[-0.04em] uppercase transition-colors duration-200 ease-out group-hover:text-accent">
                      {name}
                    </h3>
                  </div>
                  <p className="text-[15px] xl:text-[16px] font-light leading-[1.55] xl:leading-normal text-lighter max-w-[70ch]">
                    {description}
                  </p>
                </div>

                <div className="shrink-0 text-right flex flex-col gap-1.5">
                  <span className="text-[12px] font-medium tracking-[0.08em] xl:tracking-widest uppercase text-muted transition-colors duration-200 ease-out group-hover:text-lighter">
                    {completeStatus}
                  </span>
                  <span className="hidden xl:inline-block font-title font-black text-[34px] text-accent transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </div>
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};
