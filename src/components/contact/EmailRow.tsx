import { CopyEmailButton } from '@components/contact/CopyEmailButton';
import { MotionLink } from '@components/motion/MotionLink';
import { fadeUp, REVEAL_VIEWPORT, staggerChildren, TAP_SCALE } from '@components/motion/variants';
import { clsx } from 'clsx';
import * as motion from 'framer-motion/client';
import type { ComponentProps, FC } from 'react';

interface Props extends Omit<ComponentProps<typeof motion.section>, 'children'> {
  email: string;
}

export const EmailRow: FC<Props> = ({ email, className, ...props }: Props) => (
  <motion.section className={clsx('bg-text text-background py-6 xl:py-8.5 px-5 xl:px-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-3.5 xl:gap-10', className)} initial="hidden" variants={staggerChildren(0.2)} viewport={REVEAL_VIEWPORT} whileInView="shown" {...props}>
    <motion.div className="flex flex-col gap-2" variants={staggerChildren(0.08)}>
      <motion.span className="text-[11px] xl:text-xs font-semibold tracking-[0.16em] uppercase text-dark" variants={fadeUp(0, 12)}>
        Email — the fastest way
      </motion.span>
      <motion.span className="font-title font-black text-[34px] xl:text-[44px] break-all xl:break-normal tracking-[-0.04em] xl:tracking-tighter text-background uppercase" variants={fadeUp()}>
        {email}
      </motion.span>
    </motion.div>
    <div className="flex flex-col xl:flex-row gap-3 xl:gap-4">
      <CopyEmailButton email={email} />
      <MotionLink className="group shrink-0 font-title font-bold text-[16px] xl:text-[17px] tracking-[0.06em] uppercase bg-accent text-background pt-4.25 xl:pt-5 pb-3.25 xl:pb-3.75 px-6 xl:px-8 text-center xl:text-start transition-colors duration-200 ease-out hover:bg-background hover:text-text" href={`mailto:${email}`} variants={fadeUp()} whileTap={TAP_SCALE}>
        Write to me
        {' '}
        <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1">
          →
        </span>
      </MotionLink>
    </div>
  </motion.section>
);
