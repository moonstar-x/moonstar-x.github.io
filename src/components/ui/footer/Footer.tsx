import React from 'react';
import clsx from 'clsx';
import { SocialLinkList } from '@components/ui/socialLinkList';
import { Link, LinkColor } from '@components/ui/link';
import { Socials } from '@lib/services/data';
import { RouteDefs } from '@lib/constants/routes';
import { str } from '@lib/services/strings';

export type Color = 'light' | 'dark';
const colorMap: Record<Color, { bgColor: string, linkColor: LinkColor }> = {
  light: {
    bgColor: '',
    linkColor: 'primary'
  },
  dark: {
    bgColor: 'bg-black',
    linkColor: 'white'
  }
};

export interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  socials: Socials
  owner: string
  color?: Color
  className?: string
  onSignatureClick?: () => void
}

export const Footer: React.FC<Props> = ({
  socials,
  owner,
  color = 'dark',
  className,
  onSignatureClick,
  ...props
}) => {
  const { bgColor: bgClassName, linkColor } = colorMap[color];

  const year = new Date().getFullYear();

  return (
    <footer className={clsx('py-[1rem]', bgClassName, className)} {...props}>
      <div className="page-container">
        <SocialLinkList socials={socials} color={color} />

        <p className="m-0 py-[1rem] text-center mx-auto text-gray-500 typography-caption">
          {str('ui.footer.copyright', { year })} - <Link href={RouteDefs.home} color={linkColor} withOpacity onClick={onSignatureClick}>{str('ui.footer.signature', { name: owner })}</Link>
        </p>
      </div>
    </footer>
  );
};
