import React from 'react';
import clsx from 'clsx';
import humanizeDuration from 'humanize-duration';
import { Timeline, TimelineProps } from '@components/ui/timeline';
import { Time } from '@components/utils/time';
import { Avatar } from '@components/ui/avatar';
import { Icon } from '@components/ui/icon';
import { GraduationIcon } from '@components/ui/icon/library/ui/GraduationIcon';
import { Education } from '@lib/services/data';
import { str } from '@lib/services/strings';
import { CONTENT_LANG } from '@lib/config';

export interface Props extends TimelineProps {
  education: Education[]
}

export const EducationTimeline: React.FC<Props> = ({ education, className, ...props }) => {
  return (
    <Timeline className={clsx('page-container', className)} {...props}>
      {
        education.map(({ degree, university, logo, description, grade, dateStart, dateEnd }, idx) => {
          const startAsDate = dateStart ? new Date(dateStart) : null;
          const endAsDate = dateEnd ? new Date(dateEnd) : new Date();

          const duration = startAsDate ? endAsDate.getTime() - startAsDate.getTime() : null;
          const friendlyDuration = duration ?
            humanizeDuration(duration, {
              language: CONTENT_LANG,
              units: ['y', 'mo'],
              round: true,
              conjunction: str('misc.humanize_duration.conjunction')
            }) : null;

          const timeFormat: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long'
          };

          return (
            <Timeline.Item key={idx} className="flex tablet:flex-row gap-[1rem]">
              <div className="w-[50px] h-[50px]">
                {
                  logo ? (
                    <Avatar src={logo} className="w-full" />
                  ) : (
                    <div className="w-full h-full rounded-[6px] bg-gray-300">
                      <Icon icon={GraduationIcon} className="w-1/2 h-1/2 translate-x-1/2 translate-y-1/2 fill-gray-500" />
                    </div>
                  )
                }
              </div>

              <div className="flex-1">
                {
                  degree && (
                    <h5 className="text-[16px] font-[500]">
                      {university ? str('variations.education_timeline.degree', { degree, university }) : degree}
                    </h5>
                  )
                }

                {
                  grade && (
                    <h6 className="typography-body2 text-gray-500">
                      {grade}
                    </h6>
                  )
                }

                {
                  dateStart && (
                    <h6 className="block typography-body1 text-gray-500">
                      <Time date={dateStart} format={timeFormat} /> - {
                        dateEnd ? (
                          <Time date={dateEnd} format={timeFormat} />
                        ) : str('variations.experience_timeline.present')
                      } · {friendlyDuration}
                    </h6>
                  )
                }

                {
                  description && (
                    <p className="mt-[0.5rem] text-justify">
                      {description}
                    </p>
                  )
                }
              </div>
            </Timeline.Item>
          );
        })
      }

      <Timeline.Origin />
    </Timeline>
  );
};
