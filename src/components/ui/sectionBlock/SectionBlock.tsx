import React from 'react';
import clsx from 'clsx';

export interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  title?: string
  subtitle?: string
  paragraphs: string[]
}

export const SectionBlock: React.FC<Props> = ({ className, title, subtitle, paragraphs, ...props }) => {
  return (
    <section className={clsx('page-container', className)} {...props}>
      {
        (title || subtitle) && (
          <div className="mb-[20px]">
            {
              subtitle && (
                <h6 className="typography-subtitle1 text-gray-500 !font-light">
                  {subtitle}
                </h6>
              )
            }

            {
              title && (
                <h3 className="font-bold">
                  {title}
                </h3>
              )
            }
          </div>
        )
      }

      <div className="flex flex-col gap-[2rem]">
        {
          paragraphs.map((text, idx) => (
            <p key={idx} className="text-justify">
              {text}
            </p>
          ))
        }
      </div>
    </section>
  );
};
