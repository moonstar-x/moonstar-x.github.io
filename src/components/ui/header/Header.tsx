import React from 'react';
import { DesktopHeader } from './DesktopHeader';
import { MobileHeader } from './MobileHeader';
import { str } from '@lib/services/strings';
import { RouteDefs } from '@lib/constants/routes';
import { Socials } from '@lib/services/data';

const links: Record<string, string> = {
  [RouteDefs.work]: str('ui.header.links.work'),
  [RouteDefs.about]: str('ui.header.links.about'),
  [RouteDefs.blog]: str('ui.header.links.blog'),
  [RouteDefs.contact]: str('ui.header.links.contact')
};

interface Props {
  brand: string
  socials: Socials
  owner: string
}

export const Header: React.FC<Props> = ({ brand, socials, owner }) => {
  return (
    <header className="z-10 w-full h-[50px]">
      <DesktopHeader
        className="hidden desktop:block"
        brand={brand}
        brandHref={RouteDefs.home}
        links={links}
      />

      <MobileHeader
        className="block desktop:hidden"
        brand={brand}
        brandHref={RouteDefs.home}
        links={links}
        socials={socials}
        owner={owner}
      />
    </header>
  );
};
