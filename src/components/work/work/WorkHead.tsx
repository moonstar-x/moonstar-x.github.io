import React, { Fragment } from 'react';
import { Image } from '@components/ui/image';
import { Divider } from '@components/ui/divider';
import { WorkArticle, WorkType, WorkLink as WorkLinkType, WorkStats as WorkStatsType } from '@lib/services/work';
import { str } from '@lib/services/strings';
import { TechBadge } from '@components/work/techBadge';
import { WorkLink } from '@components/work/workLink';
import { WorkStatusBadge } from '@components/work/workStatusBadge';
import { WorkStats } from '@components/work/workStats';

const typeStrings = (type: WorkType): string | null => {
  switch (type) {
    case 'hobby':
      return str('work.type.hobby');
    case 'art':
      return str('work.type.art');
    case 'research':
      return str('work.type.research');
    default:
      return null;
  }
};

const statsStrings = (type: WorkStatsType): string | null => {
  switch (type) {
    case 'github':
      return str('work.stats.github');
    case 'dockerhub':
      return str('work.stats.dockerhub');
    case 'npm':
      return str('work.stats.npm');
    default:
      return null;
  }
};


type Props = WorkArticle['metadata'] & {

}

export const WorkHead: React.FC<Props> = ({ name, description, cover, type, status, technologies, links, stats }) => {
  const typeName = typeStrings(type);

  return (
    <section>
      <Image
        className="aspect-video"
        src={cover}
        priority
        loading="eager"
      />

      <div className="mx-auto">
        {
          typeName && (
            <div className="mt-[10px] typography-body1 text-gray-500">
              [{typeName}]
            </div>
          )
        }

        <h1>
          {name}
        </h1>

        <p className="typography-subtitle1 text-gray-600 text-justify">
          {description}
        </p>

        <Divider />

        <div className="flex flex-col gap-[1rem]">
          <div className="grid grid-cols-12 gap-[1rem]">
            <h6 className="font-light col-span-12 tablet:col-span-3">
              {str('work.head.status')}
            </h6>

            <div className="col-span-12 tablet:col-span-9">
              <WorkStatusBadge status={status} />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-[1rem]">
            <h6 className="font-light col-span-12 tablet:col-span-3">
              {str('work.head.technologies')}
            </h6>

            <div className="col-span-12 tablet:col-span-9">
              <div className="flex flex-wrap flex-row gap-[0.25rem]">
                {
                  technologies.map((tech, idx) => (
                    <TechBadge key={idx} type={tech} />
                  ))
                }
              </div>
            </div>
          </div>

          {
            links && Object.keys(links).length > 0 && (
              <div className="grid grid-cols-12 gap-[1rem]">
                <h6 className="font-light col-span-12">
                  {str('work.head.links')}
                </h6>

                <div className="col-span-12">
                  <div className="flex flex-wrap flex-row gap-[0.5rem] tablet:gap-[1rem] tablet:justify-center">
                    {
                      Object.entries(links).map(([type, url], idx) => (
                        <WorkLink key={idx} link={type as WorkLinkType} href={url} className="w-full tablet:w-auto" />
                      ))
                    }
                  </div>
                </div>
              </div>
            )
          }
        </div>

        {
          stats && Object.keys(stats).length > 0 && (
            <Fragment>
              <Divider />

              <div className="flex flex-col gap-[2rem]">
                {
                  Object.entries(stats).map(([type, identifier], idx) => {
                    const statsName = statsStrings(type as WorkStatsType);

                    return (
                      <div key={idx}>
                        {
                          statsName && (
                            <Fragment>
                              <h5 className="font-light">
                                {statsName}
                              </h5>

                              <Divider className="mt-[10px] mb-[20px]" />
                            </Fragment>
                          )
                        }

                        <WorkStats service={type as WorkStatsType} identifier={identifier} />
                      </div>
                    );
                  })
                }
              </div>
            </Fragment>
          )
        }
      </div>
    </section>
  );
};
