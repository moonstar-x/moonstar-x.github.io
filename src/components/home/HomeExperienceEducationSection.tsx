import { RouteHashDefs } from '@core/routes/routes';
import type { EducationItem, ExperienceItem } from '@core/services/data/config';
import { clsx } from 'clsx';
import type { ComponentProps, FC } from 'react';

interface Props extends Omit<ComponentProps<'section'>, 'children'> {
  education: EducationItem[];
  educationLanguagesBlurb: string;
  experience: ExperienceItem[];
}

export const HomeExperienceEducationSection: FC<Props> = ({ experience, education, educationLanguagesBlurb, className, ...props }) => (
  <section className={clsx('py-9 px-10 border-b border-solid border-border flex flex-row gap-12.5', className)} id={RouteHashDefs.experience} {...props}>
    <div className="flex grow flex-col gap-4">
      <span className="font-title font-black text-[26px] tracking-[-0.02em] uppercase">
        Experience
      </span>

      <div className="flex flex-col gap-2.75 text-[15px]">
        {experience.map((item) => (
          <div className="flex flex-row gap-5.5 border-solid border-border not-last:border-b pb-2.5" key={`${item.company}-${item.title}`}>
            <span className="w-32.5 shrink-0 text-muted font-medium">
              {item.dateStart.getFullYear()}
              {item.dateEnd?.getFullYear() === item.dateStart.getFullYear() ? '' : ` — ${item.dateEnd?.getFullYear().toString() ?? 'now'}`}
            </span>

            <div>
              <span className="font-semibold">
                {item.title}
              </span>
              ,
              {' '}
              {item.company}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="w-82.5 shrink-0 flex flex-col gap-4">
      <span className="font-title font-black text-[26px] tracking-[-0.02em] uppercase">
        Education
      </span>

      <div className="flex flex-col gap-4">
        {education.map((item) => (
          <div className="flex flex-col gap-2 text-[15px] leading-[1.6]" key={`${item.university}-${item.degree}`}>
            <span className="font-semibold">
              {item.degree}
            </span>

            <p className="text-lighter">
              {item.university}
              <br />

              {item.dateStart.getFullYear()}
              {' '}
              —
              {item.dateEnd?.getFullYear() ?? 'now'}
            </p>

            <span className="inline-block self-start mt-1 font-title font-bold text-[13px] tracking-[0.08em] uppercase bg-accent text-background pt-1.5 pb-1 px-3">
              {item.grade}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-1.5 text-sm leading-[1.7] text-lighter">
        {educationLanguagesBlurb}
      </p>
    </div>
  </section>
);
