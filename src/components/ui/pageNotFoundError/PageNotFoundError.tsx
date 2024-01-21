import React from 'react';
import clsx from 'clsx';
import { Button } from '@components/ui/button';
import { Image } from '@components/ui/image';
import { str } from '@lib//services/strings';
import { RouteDefs } from '@lib/constants/routes';

export interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {

}

export const PageNotFoundError: React.FC<Props> = ({ className, ...props }) => {
  return (
    <section className={clsx('page-container border border-solid border-gray-400 rounded-[4px] p-[2rem] desktop:p-[4rem]', className)} {...props}>
      <h1 className="typography-h2 mb-[20px] text-center">
        {str('ui.page_not_found_error.title')}
      </h1>

      <p className="text-justify desktop:text-center mb-[40px]">
        {str('ui.page_not_found_error.description')}
      </p>

      <Image
        src="https://cataas.com/cat/gif"
        className="mb-[40px] max-w-[500px] aspect-video mx-auto"
        priority
        loading="eager"
      />

      <div className="text-center">
        <Button href={RouteDefs.home} color="white">
          {str('ui.page_not_found_error.back_button')}
        </Button>
      </div>
    </section>
  );
};
