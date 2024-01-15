import React from 'react';
import clsx from 'clsx';
import { SocialLink, SocialLinkBaseOpacity } from '@components/ui/socialLink';
import { IconColor } from '@components/ui/icon';
import { Socials } from '@lib/services/data';

type SocialType = keyof Socials;

export type Color = 'light' | 'dark'
const colorMap: Record<Color, { className: string, color: IconColor, baseOpacity: SocialLinkBaseOpacity }> = {
  light: {
    className: '',
    color: 'black',
    baseOpacity: 30
  },
  dark: {
    className: 'bg-black',
    color: 'white',
    baseOpacity: 50
  }
};

export interface Props {
  socials: Socials,
  color?: Color
  className?: string
}

export const SocialLinkList: React.FC<Props> = ({
  socials,
  color = 'dark',
  className
}) => {
  const { className: bgClassName, color: iconColor, baseOpacity } = colorMap[color];

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
          <li key={idx} className="mx-[8px] dekstop:mx-[15px] inline-block">
            <SocialLink type={type as SocialType} href={href} color={iconColor} size="sm" baseOpacity={baseOpacity} />
          </li>
        ))
      }
    </ul>
  );
};
