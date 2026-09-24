import { ContactFooter } from '@components/contact/ContactFooter';
import { ContactHero } from '@components/contact/ContactHero';
import { EmailRow } from '@components/contact/EmailRow';
import { SocialsGrid } from '@components/contact/SocialsGrid';
import { RouteDefs } from '@core/routes/routes';
import { getConfig } from '@core/services/data/config';
import { createPageMetadata } from '@core/utils/metadata';
import type { Metadata } from 'next';
import { Fragment } from 'react';
import type { FC } from 'react';

const ContactPage: FC = async () => {
  const config = await getConfig();
  const socialsInGrid = config.profile.socials.filter(({ url }) => !url.startsWith('mailto'));

  return (
    <Fragment>
      <main className="flex-1">
        <ContactHero />
        <EmailRow email={config.profile.email} />
        <SocialsGrid socials={socialsInGrid} />
      </main>
      <ContactFooter blurb={`${config.profile.location} · ${config.profile.timezone} · ${config.profile.languages}`} />
    </Fragment>
  );
};

export const generateMetadata = async (): Promise<Metadata> => await createPageMetadata(RouteDefs.contact, {
  title: "Let's Connect"
});

export default ContactPage;
