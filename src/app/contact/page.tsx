import { ContactFooter } from '@components/contact/ContactFooter';
import { ContactHero } from '@components/contact/ContactHero';
import { EmailRow } from '@components/contact/EmailRow';
import { getConfig } from '@core/services/data/config';
import { Fragment } from 'react';
import type { FC } from 'react';

const ContactPage: FC = async () => {
  const config = await getConfig();

  return (
    <Fragment>
      <main className="flex-1">
        <ContactHero />
        <EmailRow email={config.profile.email} />
      </main>
      <ContactFooter blurb={`${config.profile.location} · ${config.profile.timezone} · ${config.profile.languages}`} />
    </Fragment>
  );
};

export default ContactPage;
