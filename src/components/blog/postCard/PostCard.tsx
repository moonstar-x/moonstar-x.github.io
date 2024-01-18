import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { Image } from '@components/ui/image';
import { BlogPost } from '@lib/services/blog';
import { str } from '@lib/services/strings';
import { RouteDefs } from '@lib/constants/routes';
import { Time } from '@components/utils/time';

export interface Props extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, 'ref'> {
  post: BlogPost['metadata']
}

export const PostCard: React.FC<Props> = ({ post, className, ...props }) => {
  return (
    <Link className={clsx('block group', className)} href={RouteDefs.postBySlug(post.slug)} {...props}>
      <Image className="aspect-video tablet:aspect-[4/3] group-hover:-translate-y-[2px]" src={post.cover} />

      <div className="mt-[0.5rem]">
        <p className="typography-subtitle2 text-gray-500 flex flex-row gap-[0.5rem]">
          <Time className="!typography-subtitle2" date={post.date} />

          <span>
            -
          </span>

          <span>
            {
              post.readingTime > 0 ? str('blog.head.reading_time', { time: post.readingTime }) : str('blog.head.null_reading_time')
            }
          </span>
        </p>

        <h4 className="text-justify mb-[0.5rem] group-hover:text-primary">
          {post.title}
        </h4>

        <p className="typography-subtitle1 text-gray-600 text-justify">
          {post.description}
        </p>
      </div>
    </Link>
  );
};
