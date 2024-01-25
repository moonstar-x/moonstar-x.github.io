import React from 'react';
import clsx from 'clsx';
import { Timeline, TimelineProps, parseDatesToFriendlyDuration, timeFormat } from '@components/ui/timeline';
import { Time } from '@components/utils/time';
import { Avatar } from '@components/ui/avatar';
import { Icon } from '@components/ui/icon';
import { BuildingIcon } from '@components/ui/icon/library/ui/BuldingIcon';
import { Experience } from '@lib/services/data';
import { str } from '@lib/services/strings';

export interface Props extends TimelineProps {
  experience: Experience[]
}

export const ExperienceTimeline: React.FC<Props> = ({ experience, className, ...props }) => {
  return (
    <Timeline className={clsx('page-container', className)} {...props}>
      {
        experience.map(({ title, company, logo, description, location, dateStart, dateEnd }, idx) => {
          const friendlyDuration = parseDatesToFriendlyDuration(dateStart, dateEnd);

          return (
            <Timeline.Item key={idx} className="flex tablet:flex-row gap-[1rem]">
              <div className="w-[50px] h-[50px]">
                {
                  logo ? (
                    <Avatar src={logo} className="w-full" />
                  ) : (
                    <div className="w-full h-full rounded-[6px] bg-gray-300">
                      <Icon icon={BuildingIcon} className="w-1/2 h-1/2 translate-x-1/2 translate-y-1/2 fill-gray-500" />
                    </div>
                  )
                }
              </div>

              <div className="flex-1">
                {
                  title && (
                    <h5 className="text-[16px] font-[500]">
                      {company ? str('variations.experience_timeline.position', { title, company }) : title}
                    </h5>
                  )
                }

                {
                  location && (
                    <h6 className="typography-body2 text-gray-500">
                      {location}
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
