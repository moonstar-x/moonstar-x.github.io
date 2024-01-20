import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { Image } from '@components/ui/image';
import { WorkArticle } from '@lib/services/work';
import { RouteDefs } from '@lib/constants/routes';
import { TechBadge } from '@components/work/techBadge';

export interface Props extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, 'ref'> {
  work: WorkArticle['metadata']
}

export const WorkCard: React.FC<Props> = ({ work, className, ...props }) => {
  return (
    <Link className={clsx('group flex flex-col gap-[0.5rem] desktop:gap-[1rem]', className)} href={RouteDefs.workBySlug(work.slug)} {...props}>
      <div className="aspect-video">
        <Image className="aspect-video group-hover:translate-y-[2px]" src={work.cover} />
      </div>

      <div>
        <h4 className="text-justify mb-[10px]">
          {work.name}
        </h4>

        <p className="text-justify mb-[10px]">
          {work.description}
        </p>

        <div className="flex flex-wrap flex-row gap-[0.25rem]">
          {
            work.technologies.map((tech, idx) => (
              <TechBadge key={idx} type={tech} size="sm" pill={false} />
            ))
          }
        </div>
      </div>
    </Link>
  );
};
