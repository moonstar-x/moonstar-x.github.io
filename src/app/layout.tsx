import { Footer } from '@components/ui/Footer';
import { Navbar } from '@components/ui/Navbar';
import type { NavbarLink } from '@components/ui/Navbar';
import { APP_CONTENT_LANG } from '@core/config/app';
import { RouteDefs, RouteHashDefs } from '@core/routes/routes';
import { getConfig } from '@core/services/data/config';
import { Hanken_Grotesk as HankenGrotesk, League_Spartan as LeagueSpartan } from 'next/font/google';
import type { FC, ReactNode } from 'react';
import '@styles/main.css';

const hankenGrotesk = HankenGrotesk({
  subsets: ['latin'],
  variable: '--font-hanken-grotesk',
  display: 'swap'
});

const leagueSpartan = LeagueSpartan({
  subsets: ['latin'],
  variable: '--font-league-spartan',
  display: 'swap'
});

interface Props {
  children: ReactNode;
}

const RootLayout: FC<Props> = async ({ children }) => {
  const config = await getConfig();
  const navbarLinks: NavbarLink[] = [
    {
      label: config.navbar.links.projects,
      href: `${RouteDefs.home}${RouteHashDefs.projects}`
    },
    {
      label: config.navbar.links.experience,
      href: `${RouteDefs.home}${RouteHashDefs.experience}`
    },
    {
      label: config.navbar.links.contact,
      href: `${RouteDefs.home}${RouteHashDefs.contact}`,
      accented: true
    }
  ];

  return (
    <html className={`${hankenGrotesk.variable} ${leagueSpartan.variable}`} lang={APP_CONTENT_LANG}>
      <body className="flex flex-col min-h-svh">
        <Navbar links={navbarLinks} title={config.navbar.title} />
        <main className="flex-1">
          {children}
        </main>
        <Footer contactText={config.footer.contact} greetingText={config.footer.greeting} links={config.footer.links} />
      </body>
    </html>
  );
};

export default RootLayout;
