import React from 'react';
import clsx from 'clsx';

export interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string
  subtitle: string
}

export const SectionHeader: React.FC<Props> = ({ className, title, subtitle, ...props }) => {
  return (
    <div className={clsx('page-container text-center py-[4rem]', className)} {...props}>
      <h3 className="font-bold">
        {title}
      </h3>

      <p className="text-gray-500 w-full tablet:max-w-[50%] mx-auto">
        {subtitle}
      </p>
    </div>
  );
};
