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
// TODO: Use custom typography here.
export const Footer: React.FC<Props> = ({
  socials,
  owner,
  color = 'dark',
  className
}) => {
  const bgClassName = colorMap[color];

  const year = new Date().getFullYear();

  return (
    <footer className={clsx(bgClassName, className)}>
      <SocialLinkList socials={socials} color={color} />

      <p className="m-0 pb-[2rem] pt-[1rem] text-center mx-auto text-gray">
        &copy; {year} All rights reserved. - <Link className="" href={RouteDefs.home}>Designed by {owner}</Link>
      </p>
    </footer>
  );
};
