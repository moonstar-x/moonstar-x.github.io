import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { Icon, IconComponent, IconColor, IconSize } from '@components/ui/icon';
import { Socials } from '@lib/services/data';
import { EmailIcon } from '@components/ui/icon/library/ui/EmailIcon';
import { GitHubIcon } from '@components/ui/icon/library/brand/GitHubIcon';
import { LinkedInIcon } from '@components/ui/icon/library/brand/LinkedInIcon';
import { TwitterIcon } from '@components/ui/icon/library/brand/TwitterIcon';
import { DiscordIcon } from '@components/ui/icon/library/brand/DiscordIcon';
import { StackOverflowIcon } from '@components/ui/icon/library/brand/StackOverflowIcon';
import { LeetCodeIcon } from '@components/ui/icon/library/brand/LeetCodeIcon';

type SocialType = keyof Socials;
const iconMap: Record<SocialType, IconComponent> = {
  email: EmailIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  stackoverflow: StackOverflowIcon,
  leetcode: LeetCodeIcon,
  x: TwitterIcon,
  discord: DiscordIcon
};

const childrenColorMap: Record<IconColor, string> = {
  primary: 'text-black hover:text-primary',
  black: 'text-black',
  white: 'text-white'
};

export type BaseOpacity = 30 | 50;
const baseOpacityMap: Record<BaseOpacity, string> = {
  30: 'opacity-30',
  50: 'opacity-50'
};

export interface Props {
  type: SocialType
  href?: string
  color?: IconColor
  size?: IconSize
  baseOpacity?: BaseOpacity
  children?: React.ReactNode
}

export const SocialLink: React.FC<Props> = ({
  type,
  href,
  color = 'black',
  size,
  baseOpacity = 50,
  children
}) => {
  const childrenHoverClassName = childrenColorMap[color];
  const baseOpacityClassName = baseOpacityMap[baseOpacity];

  const iconComponent = (
    <span
      className={clsx(
        'inline-flex flex-row justify-start items-center w-auto px-[6px] py-[8px] rounded-[6px] gap-[1rem]',
        children ? 'hover:bg-transparent-4' : 'outline-none',
        childrenHoverClassName
      )}
    >
      <Icon
        className={clsx(!children && `outline-none hover:opacity-100 ${baseOpacityClassName}`)}
        icon={iconMap[type]}
        color={color}
        size={size}
      />

      {
        children && (
          <span className="typography-button">
            {children}
          </span>
        )
      }
    </span>
  );

  if (href) {
    return (
      <Link href={href} target="_blank">
        {iconComponent}
      </Link>
    );
  }

  return iconComponent;
};
