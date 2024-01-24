import React from 'react';
import clsx from 'clsx';
import { Avatar } from '@components/ui/avatar';
import { Owner } from '@lib/services/data';

export interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  shortBio: Owner['shortBio']
}

export const ShortBio: React.FC<Props> = ({ className, shortBio, ...props }) => {
  return (
    <section className={clsx('page-container flex flex-col-reverse tablet:flex-row gap-[2rem] tablet:gap-[3rem]', className)} {...props}>
      <div className="basis-1/2">
        <h3 className="font-bold mb-[20px]">
          {shortBio.title}
        </h3>

        <div className="flex flex-col gap-[1rem]">
          {
            shortBio.paragraphs.map((text, idx) => (
              <p key={idx} className="text-justify">
                {text}
              </p>
            ))
          }
        </div>
      </div>

      <div className="basis-1/2 flex items-center justify-center">
        <Avatar src={shortBio.image} className="w-full max-w-[400px]" />
      </div>
    </section>
  );
};
