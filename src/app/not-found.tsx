import { NotFoundEscapeLinks } from '@components/404/NotFoundEscapeLinks';
import type { EscapeLink } from '@components/404/NotFoundEscapeLinks';
import { NotFoundFooter } from '@components/404/NotFoundFooter';
import { NotFoundHero } from '@components/404/NotFoundHero';
import { NotFoundMarquee } from '@components/404/NotFoundMarquee';
import { DynamicRouteDefs, RouteDefs } from '@core/routes/routes';
import { getConfig } from '@core/services/data/config';
import { getAllWorkMetadata } from '@core/services/data/work';
import { createPageMetadata } from '@core/utils/metadata';
import type { Metadata } from 'next';
import { Fragment } from 'react';
import type { FC } from 'react';

const NotFoundPage: FC = async () => {
  const config = await getConfig();
  const workMetadata = await getAllWorkMetadata({ sort: 'date' });
  const firstWorkMetadata = workMetadata[0];
  const escapeLinks: EscapeLink[] = [
    {
      label: 'The Work',
      description: 'Many projects — research systems, art projects and hobby repositories.',
      href: RouteDefs.work
    },
    ...firstWorkMetadata === undefined
      ? []
      : [{
          label: firstWorkMetadata.name,
          description: firstWorkMetadata.description,
          href: DynamicRouteDefs.workBySlug(firstWorkMetadata.slug)
        }],
    {
      label: "Let's connect",
      description: "If you landed here from a link of mine that's broken, tell me — I'll fix it.",
      href: RouteDefs.contact
    }
  ];

  return (
    <Fragment>
      <main className="flex-1">
        <NotFoundHero className="page-horizontal-align" />
        <NotFoundMarquee className="page-horizontal-align" />
        <NotFoundEscapeLinks className="page-horizontal-align" links={escapeLinks} />
      </main>
      <NotFoundFooter className="mt-4" links={config.profile.socials} />
    </Fragment>
  );
};

export const generateMetadata = async (): Promise<Metadata> => await createPageMetadata('/404', {
  title: 'Not Found'
});

export default NotFoundPage;
