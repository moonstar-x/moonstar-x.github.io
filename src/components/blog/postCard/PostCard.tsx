import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { Image } from '@components/ui/image';
import { Time } from '@components/utils/time';
import { Button } from '@components/ui/button';
import { str } from '@lib/services/strings';
import { BlogPost } from '@lib/services/blog';
import { RouteDefs } from '@lib/constants/routes';

export interface Props extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, 'ref'> {
  post: BlogPost['metadata']
  featured?: boolean
}

export const PostCard: React.FC<Props> = ({
  post,
  featured = false,
  className,
  ...props
}) => {
  return (
    <Link className={clsx('group flex flex-col gap-[0.5rem] tablet:gap-[1rem] desktop:gap-[2rem]', featured && 'tablet:flex-row tablet:justify-between tablet:w-full', className)} href={RouteDefs.postBySlug(post.slug)} {...props}>
      <Image className={clsx('aspect-video tablet:aspect-[4/3] group-hover:-translate-y-[2px]', featured && 'tablet:flex-1 desktop:!aspect-[5/3]')} src={post.cover} />

      <div className={clsx(featured && 'tablet:flex-1')}>
        <div className={clsx(featured && 'tablet:flex tablet:flex-col tablet:justify-center tablet:h-full')}>
          <p className={clsx('typography-subtitle2 text-gray-500 flex flex-row gap-[0.5rem] mb-[8px]')}>
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

          <h4 className="text-justify mb-[20px] group-hover:text-primary">
            {post.title}
          </h4>

          <p className="typography-subtitle1 text-gray-600 text-justify">
            {post.description}
          </p>

          {
            featured && (
              <div className="mt-[20px] hidden tablet:block">
                <Button color="white">
                  {str('blog.card.buttons.read')}
                </Button>
              </div>
            )
          }
        </div>
      </div>
    </Link>
  );
};
