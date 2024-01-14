import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { SocialLinkList } from '@components/ui/socialLinkList';
import { Socials } from '@lib/services/json';
import { RouteDefs } from '@lib/constants/routes';

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

// TODO: Use a custom link component here instead.
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
          &copy; {year} All rights reserved. - <Link className="" href={RouteDefs.home}>Designed by {owner}</Link>
        </p>
      </div>
    </footer>
  );
};
