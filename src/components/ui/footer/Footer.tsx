import React from 'react';
import clsx from 'clsx';
import { SocialLinkList } from '@components/ui/socialLinkList';
import { Link } from '@components/ui/link';
import { Socials } from '@lib/services/data';
import { RouteDefs } from '@lib/constants/routes';
import { str } from '@lib/services/strings';

type Color = 'light' | 'dark';
const colorMap: Record<Color, string> = {
  light: '',
  dark: 'bg-black'
};

interface Props {
  socials: Socials
  owner: string
  color?: Color
  className?: string
}

export const Footer: React.FC<Props> = ({
  socials,
  owner,
  color = 'dark',
  className
}) => {
  const bgClassName = colorMap[color];

  const year = new Date().getFullYear();

  return (
    <footer className={clsx('py-[1rem]', bgClassName, className)}>
      <div className="page-container">
        <SocialLinkList socials={socials} color={color} />

        <p className="m-0 py-[1rem] text-center mx-auto text-gray typography-caption">
          {str('ui.footer.copyright', { year })} - <Link href={RouteDefs.home} color="white" withOpacity>{str('ui.footer.signature', { name: owner })}</Link>
        </p>
      </div>
    </footer>
  );
};
