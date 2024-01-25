import React from 'react';
import clsx from 'clsx';
import { Button } from '@components/ui/button';
import { str } from '@lib//services/strings';
import { RouteDefs } from '@lib/constants/routes';

export interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {

}

export const NoPostsAvailable: React.FC<Props> = ({ className, ...props }) => {
  return (
    <section className={clsx('page-container border border-solid border-gray-400 rounded-[4px] p-[2rem] desktop:p-[4rem]', className)} {...props}>
      <h1 className="typography-h2 mb-[20px] text-center">
        {str('blog.grid.no_posts.title')}
      </h1>

      <p className="text-justify desktop:text-center mb-[40px]">
        {str('blog.grid.no_posts.description')}
      </p>

      <div className="text-center">
        <Button href={RouteDefs.home} color="white">
          {str('blog.grid.no_posts.back_button')}
        </Button>
      </div>
    </section>
  );
};
