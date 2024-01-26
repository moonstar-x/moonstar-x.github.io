import React from 'react';
import clsx from 'clsx';
import { SocialLinkList } from '@components/ui/socialLinkList';
import { Link, LinkColor } from '@components/ui/link';
import { Button } from '@components/ui/button';
import { Icon } from '@components/ui/icon';
import { EmailIcon } from '@components/ui/icon/library/ui/EmailIcon';
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
  creationYear: number
  letsConnectText?: string
  compact?: boolean
  color?: Color
  className?: string
  onSignatureClick?: () => void
}

export const Footer: React.FC<Props> = ({
  socials,
  owner,
  creationYear,
  letsConnectText,
  compact = false,
  color = 'dark',
  className,
  onSignatureClick,
  ...props
}) => {
  const { bgColor: bgClassName, linkColor } = colorMap[color];
  const { email, ...restOfSocials } = socials;

  const currentYear = new Date().getFullYear();
  const copyrightYear = creationYear === currentYear ? currentYear : `${creationYear} • ${currentYear}`;

  return (
    <footer className={clsx('pb-[1rem]', compact ? 'pt-[1rem]' : 'pt-[4rem]', bgClassName, className)} {...props}>
      <div className="page-container">
        {
          !compact && letsConnectText && (
            <div id="contact" className="text-white text-center mb-[2rem] w-[90%] tablet:w-1/2 mx-auto">
              <h2 className="mb-[1rem] tablet:mb-0 font-bold">
                {str('ui.footer.contact.title')}
              </h2>

              <p className="font-light">
                {letsConnectText}
              </p>

              <Button href={email} className="my-[2rem]" icon={<Icon icon={EmailIcon} color="white" />}>
                {str('ui.footer.contact.links.email')}
              </Button>
            </div>
          )
        }

        <div>
          <SocialLinkList socials={restOfSocials} color={color} />

          <p className="m-0 py-[1rem] text-center mx-auto text-gray-500 typography-caption">
            {str('ui.footer.copyright', { year: copyrightYear })} - <Link href={RouteDefs.home} color={linkColor} withOpacity onClick={onSignatureClick}>{str('ui.footer.signature', { name: owner })}</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
