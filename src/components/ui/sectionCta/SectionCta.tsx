import React from 'react';
import clsx from 'clsx';
import { Button } from '@components/ui/button';
import { Icon } from '@components/ui/icon';
import { AngleRightIcon } from '@components/ui/icon/library/ui/AngleRightIcon';

export interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  href: string
  text: string
}

export const SectionCta: React.FC<Props> = ({ className, text, href, ...props }) => {
  return (
    <div className={clsx('page-container text-center pt-[2rem] tablet:pt-[4rem]', className)} {...props}>
      <Button href={href} color="clear" iconPosition="right" icon={<Icon icon={AngleRightIcon} color="primary" size="1x" />}>
        {text}
      </Button>
    </div>
  );
};
