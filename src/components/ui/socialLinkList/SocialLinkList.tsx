import React from 'react';
import clsx from 'clsx';
import { SocialLink } from '@components/ui/socialLink';
import { IconColor } from '@components/ui/icon';
import { Socials } from '@lib/services/json';

type SocialType = keyof Socials;

type Color = 'light' | 'dark'
const colorMap: Record<Color, { className: string, color: IconColor }> = {
  light: {
    className: '',
    color: 'black'
  },
  dark: {
    className: 'bg-black',
    color: 'white'
  }
};

interface Props {
  socials: Socials,
  color?: Color
  className?: string
}

export const SocialLinkList: React.FC<Props> = ({
  socials,
  color = 'dark',
  className
}) => {
  const { className: bgClassName, color: iconColor } = colorMap[color];

  return (
    <ul
      className={clsx(
        'w-full text-center',
        bgClassName,
        className
      )}
    >
      {
        Object.entries(socials).map(([type, href], idx) => (
          <li key={idx} className="mx-[15px] inline-block">
            <SocialLink type={type as SocialType} href={href} color={iconColor} size="sm" />
          </li>
        ))
      }
    </ul>
  );
};
