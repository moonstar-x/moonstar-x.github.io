import React from 'react';
import clsx from 'clsx';
import { str } from '@lib//services/strings';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {

}

export const NoPostsAvailable: React.FC<Props> = ({ className, ...props }) => {
  return (
    <section className={clsx('border border-solid border-gray-400 rounded-[4px] p-[2rem] desktop:p-[4rem]', className)} {...props}>
      <h1 className="typography-h2 mb-[20px] text-center">
        {str('blog.grid.no_posts.title')}
      </h1>

      <p className="text-justify desktop:text-center">
        {str('blog.grid.no_posts.description')}
      </p>
    </section>
  );
};
