import React from 'react';
import clsx from 'clsx';
import { Icon, IconComponent } from '@components/ui/icon';
import { Button, ButtonProps } from '@components/ui/button';
import { WorkLink as WorkLinkType } from '@lib/services/work';
import { str } from '@lib/services/strings';
import { GitHubIcon } from '@components/ui/icon/library/brand/GitHubIcon';
import { DockerHubIcon } from '@components/ui/icon/library/brand/DockerHubIcon';
import { ExternalLinkIcon } from '@components/ui/icon/library/ui/ExternalLinkIcon';
import { DiscordIcon } from '@components/ui/icon/library/brand/DiscordIcon';
import { SteamIcon } from '@components/ui/icon/library/brand/SteamIcon';
import { NpmIcon } from '@components/ui/icon/library/brand/NpmIcon';
import { AppleIcon } from '@components/ui/icon/library/brand/AppleIcon';
import { GooglePlayIcon } from '@components/ui/icon/library/brand/GooglePlayIcon';

export type WorkLinkObject = {
  icon: IconComponent
  linkStyle: string
  iconStyle: string
  text: string
};
const styleMap: Record<WorkLinkType, WorkLinkObject> = {
  github: {
    icon: GitHubIcon,
    linkStyle: 'text-white !bg-brands-github',
    iconStyle: 'fill-white',
    text: str('work.links.github')
  },
  dockerhub: {
    icon: DockerHubIcon,
    linkStyle: 'text-white !bg-brands-dockerhub',
    iconStyle: 'fill-white',
    text: str('work.links.dockerhub')
  },
  website: {
    icon: ExternalLinkIcon,
    linkStyle: 'text-white bg-gray-500',
    iconStyle: 'fill-white',
    text: str('work.links.website')
  },
  discord: {
    icon: DiscordIcon,
    linkStyle: 'text-white !bg-brands-discord',
    iconStyle: 'fill-white',
    text: str('work.links.discord')
  },
  npm: {
    icon: NpmIcon,
    linkStyle: 'text-white !bg-brands-npm',
    iconStyle: 'fill-white',
    text: str('work.links.npm')
  },
  steam: {
    icon: SteamIcon,
    linkStyle: 'text-white !bg-brands-steam',
    iconStyle: 'fill-white',
    text: str('work.links.steam')
  },
  appstore: {
    icon: AppleIcon,
    linkStyle: 'text-white !bg-brands-apple',
    iconStyle: 'fill-white',
    text: str('work.links.appstore')
  },
  playstore: {
    icon: GooglePlayIcon,
    linkStyle: 'text-white !bg-brands-google',
    iconStyle: 'fill-white',
    text: str('work.links.playstore')
  }
};

export type Props = ButtonProps & {
  link: WorkLinkType
};

export const WorkLink: React.FC<Props> = ({ className, link, ...props }) => {
  if (!styleMap[link]) {
    return null;
  }

  const { icon, iconStyle, linkStyle, text } = styleMap[link];

  return (
    <Button
      className={clsx(linkStyle, className)}
      icon={<Icon icon={icon} className={clsx(iconStyle)} />}
      {...props}
    >
      {text}
    </Button>
  );
};
