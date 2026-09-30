import { MaskedWords } from '@components/motion/MaskedWords';
import { fadeUp, staggerChildren } from '@components/motion/variants';
import type { WorkMetadata } from '@core/services/data/work';
import type { ContentMetadata } from '@core/services/markdown';
import { clsx } from 'clsx';
import * as motion from 'framer-motion/client';
import type { ComponentProps, FC } from 'react';

interface Props extends Omit<ComponentProps<typeof motion.section>, 'children'> {
  metadata: ContentMetadata<WorkMetadata>;
}

export const WorkArticleHero: FC<Props> = ({ metadata, className, ...props }) => (
  <motion.section animate="shown" className={clsx('px-5 xl:px-10 pt-7 xl:pt-11.5 pb-6 xl:pb-9', className)} initial="hidden" variants={staggerChildren(0.2)} {...props}>
    <motion.div className="flex flex-row items-center gap-2 xl:gap-3 pb-6 xl:pb-5" variants={staggerChildren(0.08)}>
      <motion.span className="text-[11px] xl:text-xs font-semibold tracking-[0.12em] xl:tracking-[0.14em] uppercase bg-text text-background py-1.5 px-3" variants={fadeUp(0, 12)}>
        {metadata.type}
      </motion.span>
      <motion.span className="text-[11px] xl:text-xs font-semibold tracking-[0.12em] xl:tracking-[0.14em] uppercase bg-accent text-background py-1.5 px-3" variants={fadeUp(0, 12)}>
        {metadata.status}
      </motion.span>
    </motion.div>
    <h1 className="m-0 font-title font-black text-[62px] xl:text-[148px] leading-[0.83] xl:leading-[0.8] tracking-[-0.055em] xl:tracking-[-0.06em] uppercase">
      <span className="sr-only">
        {metadata.name}
      </span>
      <motion.span aria-hidden variants={staggerChildren(0.07)}>
        <MaskedWords text={metadata.name} />
      </motion.span>
    </h1>
    <motion.p className="mt-3.5 xl:mt-6.5 text-[19px] xl:text-[26px] font-light leading-[1.45] xl:max-w-[46ch] text-light" variants={fadeUp()}>
      {metadata.description}
    </motion.p>
  </motion.section>
);
