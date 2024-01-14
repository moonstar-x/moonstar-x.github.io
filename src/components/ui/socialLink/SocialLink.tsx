import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { Icon, IconComponent, IconColor, IconSize } from '@components/ui/icon';
import { Socials } from '@lib/services/json';
import { EmailIcon } from '@components/ui/icon/library/EmailIcon';
import { GitHubIcon } from '@components/ui/icon/library/GitHubIcon';
import { LinkedInIcon } from '@components/ui/icon/library/LinkedInIcon';
import { TwitterIcon } from '@components/ui/icon/library/TwitterIcon';
import { DiscordIcon } from '@components/ui/icon/library/DiscordIcon';

type SocialType = keyof Socials;
const iconMap: Record<SocialType, IconComponent> = {
  email: EmailIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: TwitterIcon,
  discord: DiscordIcon
};

const childrenColorMap: Record<IconColor, string> = {
  primary: 'text-black hover:text-primary',
  black: 'text-black',
  white: 'text-white'
};

interface Props {
  type: SocialType
  href?: string
  color?: IconColor
  size?: IconSize
  children?: React.ReactNode
}

export const SocialLink: React.FC<Props> = ({
  type,
  href,
  color = 'black',
  size,
  children
}) => {
  const childrenHoverClassName = childrenColorMap[color];

  const iconComponent = (
    <span
      className={clsx(
        'inline-flex flex-row justify-start items-center w-auto px-[6px] py-[8px] rounded-[6px] gap-[1rem]',
        '[&>*]:transition-all [&>*]:ease-in-out [&>*]:duration-300',
        children ? 'hover:bg-transparent-4' : 'outline-none',
        childrenHoverClassName
      )}
    >
      <Icon
        className={clsx(!children && 'outline-none opacity-50 hover:opacity-100')}
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
      <Link href={href}>
        {iconComponent}
      </Link>
    );
  }

  return iconComponent;
};
