import { Hero } from '@components/ui/Hero';
import { getConfig } from '@core/services/data/config';
import { getAllWorkMetadata } from '@core/services/data/work';
import { Fragment } from 'react';
import type { FC } from 'react';

const HomePage: FC = async () => {
  const config = await getConfig();
  const workMetadata = await getAllWorkMetadata();

  return (
    <Fragment>
      <Hero subCta={`${config.profile.location} · ${config.profile.timezone} · ${config.profile.languages}`} subtitle={config.profile.shortBio} />
      <pre>
        {JSON.stringify(workMetadata, null, 2)}
      </pre>
    </Fragment>
  );
};

export default HomePage;
