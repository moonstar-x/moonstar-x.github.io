import React from 'react';
import clsx from 'clsx';
import { Avatar } from '@components/ui/avatar';
import { Owner } from '@lib/services/data';

export interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  shortBio: Owner['shortBio']
  withBackground?: boolean
  priority?: boolean
}

export const ShortBio: React.FC<Props> = ({
  className,
  shortBio,
  withBackground = false,
  priority = false,
  ...props
}) => {
  return (
    <section className={clsx(withBackground && 'bg-gray-100', className)} {...props}>
      <div className="page-container flex flex-col-reverse desktop:flex-row gap-[2rem] tablet:gap-[6rem]">
        <div className="flex-1">
          {
            priority ? (
              <h1 className="font-bold mb-[20px]">
                {shortBio.title}
              </h1>
            ) : (
              <h3 className="font-bold mb-[20px]">
                {shortBio.title}
              </h3>
            )
          }

          <div className="flex flex-col gap-[2rem]">
            {
              shortBio.paragraphs.map((text, idx) => (
                <p key={idx} className="text-justify">
                  {text}
                </p>
              ))
            }
          </div>
        </div>

        <div className="flex items-center justify-center desktop:justify-end">
          <Avatar src={shortBio.image} className="w-full max-w-[400px]" priority={priority} loading={priority ? 'eager' : 'lazy'} />
        </div>
      </div>
    </section>
  );
};
