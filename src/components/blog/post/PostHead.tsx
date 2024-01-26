import React from 'react';
import { Image } from '@components/ui/image';
import { Time } from '@components/utils/time';
import { Divider } from '@components/ui/divider';
import { BlogPost } from '@lib/services/blog';
import { str } from '@lib/services/strings';

type Props = BlogPost['metadata'] & {

};

export const PostHead: React.FC<Props> = ({ title, description, readingTime, date, cover }) => {
  return (
    <section className="animate__animated animate__fadeIn">
      <Image
        className="aspect-video"
        src={cover}
        priority
        loading="eager"
      />

      <div className="mx-auto">
        <h1>
          {title}
        </h1>

        <p className="typography-subtitle1 text-gray-600 text-justify">
          {description}
        </p>

        <Divider />

        <div className="mt-[2rem] flex flex-row justify-between gap-[4rem]">
          <Time date={date} withTime />

          <p>
            {
              readingTime > 0 ? str('blog.head.reading_time', { time: readingTime }) : str('blog.head.null_reading_time')
            }
          </p>
        </div>
      </div>
    </section>
  );
};
