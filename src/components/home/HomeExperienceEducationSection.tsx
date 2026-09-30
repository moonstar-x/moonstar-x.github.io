import { fadeUp, REVEAL_VIEWPORT } from '@components/motion/variants';
import { RouteHashDefs } from '@core/routes/routes';
import type { EducationItem, ExperienceItem } from '@core/services/data/config';
import { clsx } from 'clsx';
import * as motion from 'framer-motion/client';
import type { ComponentProps, FC } from 'react';

interface Props extends Omit<ComponentProps<'section'>, 'children'> {
  education: EducationItem[];
  educationLanguagesBlurb: string;
  experience: ExperienceItem[];
}

export const HomeExperienceEducationSection: FC<Props> = ({ experience, education, educationLanguagesBlurb, className, ...props }) => (
  <section className={clsx('py-5.5 xl:py-9 px-5 xl:px-10 flex flex-col xl:flex-row gap-3.5 xl:gap-12.5', className)} id={RouteHashDefs.experience} {...props}>
    <div className="flex grow flex-col gap-4">
      <motion.h2 className="font-title font-black text-[24px] xl:text-[26px] tracking-[-0.03em] xl:tracking-[-0.02em] uppercase" initial="hidden" variants={fadeUp()} viewport={REVEAL_VIEWPORT} whileInView="shown">
        Experience
      </motion.h2>

      <div className="flex flex-col gap-3.5 xl:gap-2.75 text-[15px]">
        {experience.map(({ company, title, dateEnd, dateStart }, index) => (
          <motion.div className="flex flex-col xl:flex-row gap-0.75 xl:gap-5.5 border-solid border-border not-last:border-b pb-2.5" initial="hidden" key={`${company}-${title}`} variants={fadeUp(0.1 + (index * 0.06), 16)} viewport={REVEAL_VIEWPORT} whileInView="shown">
            <span className={clsx('w-32.5 shrink-0 font-semibold xl:font-medium uppercase text-xs xl:text-[15px] tracking-widest xl:tracking-normal', dateEnd === undefined ? 'text-accent' : 'text-muted')}>
              {dateStart.getFullYear()}
              {dateEnd?.getFullYear() === dateStart.getFullYear() ? '' : ` — ${dateEnd?.getFullYear().toString() ?? 'now'}`}
            </span>
            <div>
              <span className="font-semibold">
                {title}
              </span>
              <span className="hidden xl:inline-block">
                ,
                {' '}
                {company}
              </span>
            </div>
            <span className="inline-block xl:hidden text-lighter">
              {company}
            </span>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="xl:w-82.5 xl:shrink-0 flex flex-col gap-3 xl:gap-4 border-t xl:border-t-0 border-solid border-border pt-6.5 xl:pt-0">
      <motion.h2 className="font-title font-black text-[24px] xl:text-[26px] tracking-[-0.03em] xl:tracking-[-0.02em] uppercase" initial="hidden" variants={fadeUp()} viewport={REVEAL_VIEWPORT} whileInView="shown">
        Education
      </motion.h2>

      <div className="flex flex-col gap-3.5 xl:gap-2.75">
        {education.map(({ university, degree, dateEnd, dateStart, grade }, index) => (
          <motion.div className="flex flex-col gap-0 xl:gap-2 text-[15px] leading-[1.6]" initial="hidden" key={`${university}-${degree}`} variants={fadeUp(0.1 + (index * 0.06), 16)} viewport={REVEAL_VIEWPORT} whileInView="shown">
            <span className="font-semibold">
              {degree}
            </span>

            <p className="text-lighter">
              {university}
              <span className="mx-1 inline-block xl:hidden">
                {' '}
                ·
                {' '}
              </span>
              <br className="hidden xl:inline-block" />
              {dateStart.getFullYear()}
              {' '}
              —
              {dateEnd?.getFullYear() ?? 'now'}
            </p>

            <span className="inline-block self-start mt-1 font-title font-bold text-xs xl:text-[13px] tracking-[0.08em] uppercase bg-accent text-background pt-1.5 pb-0.75 xl:pb-1 px-3">
              {grade}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.p className="mt-1.5 text-xs xl:text-sm leading-[1.7] text-lighter" initial="hidden" variants={fadeUp(0.2, 16)} viewport={REVEAL_VIEWPORT} whileInView="shown">
        {educationLanguagesBlurb}
      </motion.p>
    </div>
  </section>
);
