import { NotFoundEscapeLinks } from '@components/404/NotFoundEscapeLinks';
import type { EscapeLink } from '@components/404/NotFoundEscapeLinks';
import { NotFoundHero } from '@components/404/NotFoundHero';
import { NotFoundMarquee } from '@components/404/NotFoundMarquee';
import { DynamicRouteDefs, RouteDefs } from '@core/routes/routes';
import { getAllWorkMetadata } from '@core/services/data/work';
import type { FC } from 'react';

const NotFoundPage: FC = async () => {
  const workMetadata = await getAllWorkMetadata({ sort: 'date' });
  const firstWorkMetadata = workMetadata[0];
  const links: EscapeLink[] = [
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
    <main className="flex-1">
      <NotFoundHero />
      <NotFoundMarquee />
      <NotFoundEscapeLinks links={links} />
    </main>
  );
};

export default NotFoundPage;
