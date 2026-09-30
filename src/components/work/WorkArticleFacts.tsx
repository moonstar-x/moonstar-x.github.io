import { MotionLink } from '@components/motion/MotionLink';
import { fadeUp, REVEAL_VIEWPORT, staggerChildren } from '@components/motion/variants';
import { ExternalLinkArrow } from '@components/ui/ExternalLinkArrow';
import type { WorkFact, WorkLink, WorkMetadata, WorkStats } from '@core/services/data/work';
import type { ContentMetadata } from '@core/services/markdown';
import { getDockerHubRepoData } from '@core/services/third-party/dockerhub';
import { getGitHubRepoData } from '@core/services/third-party/github';
import { getNpmPackageData } from '@core/services/third-party/npm';
import { compactNumber } from '@core/utils/number';
import { objectEntries } from '@core/utils/object';
import { simplifyUrl } from '@core/utils/string';
import { clsx } from 'clsx';
import * as motion from 'framer-motion/client';
import { Fragment } from 'react';
import type { ComponentProps, FC, ReactNode } from 'react';

const ITEM_CLASS_NAME = 'py-4 xl:py-5 px-5 xl:px-6.5 min-w-0 border-r border-b max-xl:nth-[2n+1]:border-l xl:nth-[4n+1]:border-l max-xl:nth-[-n+2]:border-t xl:nth-[-n+4]:border-t border-solid border-border flex flex-col justify-between gap-1 xl:gap-3';
const LABEL_CLASS_NAME = 'text-[10px] xl:text-[11px] font-semibold tracking-[0.16em] uppercase text-muted';
const FEATURED_VALUE_CLASS_NAME = 'font-title font-black text-[30px] xl:text-[42px] leading-none text-accent break-words';
const STAT_VALUE_CLASS_NAME = 'font-title font-black text-[30px] xl:text-[42px] leading-none text-text break-words';
const VALUE_CLASS_NAME = 'text-[15px] xl:text-[17px] font-medium leading-[1.35] break-words';

const LINK_TYPE_TO_LABEL: Record<WorkLink, string> = {
  github: 'Repository',
  dockerhub: 'Docker Image',
  website: 'Website',
  discord: 'Discord',
  npm: 'NPM',
  steam: 'Steam',
  appstore: 'App Store',
  playstore: 'Play Store'
};

type AggregatedWorkFact = (WorkFact | {
  linkType: WorkLink;
  type: 'link';
  url: string;
} | {
  resource: string;
  statsType: WorkStats;
  type: 'unfetched_stats';
}) & {
  id: string;
};

interface WorkFactItemContainerProps {
  children: ReactNode;
  className?: string | undefined;
  label: string;
}

const WorkFactItemContainer: FC<WorkFactItemContainerProps> = ({ children, className, label }) => (
  <motion.div className={clsx(ITEM_CLASS_NAME, className)} variants={staggerChildren(0.06)}>
    <motion.span className={LABEL_CLASS_NAME} variants={fadeUp(0, 12)}>
      {label}
    </motion.span>
    {children}
  </motion.div>
);

type ResolvedStats = Array<[label: string, value: number]>;

const resolveStats = async (type: WorkStats, resource: string): Promise<null | ResolvedStats> => {
  switch (type) {
    case 'dockerhub': {
      const data = await getDockerHubRepoData(resource);
      if (!data) {
        return null;
      }

      return [
        ['Docker Stars', data.stars],
        ['Docker Pulls', data.pulls]
      ];
    }
    case 'github': {
      const data = await getGitHubRepoData(resource);
      if (!data) {
        return null;
      }

      return [
        ['GitHub Stars', data.stars],
        ['GitHub Forks', data.forks],
        ['GitHub Open Issues', data.openIssues],
        ['GitHub Watchers', data.watchers]
      ];
    }
    case 'npm': {
      const data = await getNpmPackageData(resource);
      if (!data?.downloads) {
        return null;
      }

      return [
        ['NPM Last Week Downloads', data.downloads.lastWeek],
        ['NPM Last Month Downloads', data.downloads.lastMonth],
        ['NPM Last Year Downloads', data.downloads.lastYear]
      ];
    }
  }
};

interface StatsWorkFactItemProps {
  className?: string | undefined;
  resource: string;
  type: WorkStats;
}

const StatsWorkFactItem: FC<StatsWorkFactItemProps> = async ({ className, resource, type }) => {
  const stats = await resolveStats(type, resource);
  if (!stats) {
    return null;
  }

  return (
    <Fragment>
      {stats.map(([label, value]) => (
        <WorkFactItemContainer className={className} key={label} label={label}>
          <motion.span className={STAT_VALUE_CLASS_NAME} variants={fadeUp(0, 12)}>
            {compactNumber(value)}
          </motion.span>
        </WorkFactItemContainer>
      ))}
    </Fragment>
  );
};

interface WorkFactItemProps {
  className?: string | undefined;
  fact: AggregatedWorkFact;
}

const WorkFactItem: FC<WorkFactItemProps> = ({ className, fact }) => {
  switch (fact.type) {
    case 'featured':
      return (
        <WorkFactItemContainer className={className} label={fact.label}>
          <motion.span className={FEATURED_VALUE_CLASS_NAME} variants={fadeUp(0, 12)}>
            {fact.value}
          </motion.span>
        </WorkFactItemContainer>
      );
    case 'link':
      return (
        <WorkFactItemContainer className={className} label={LINK_TYPE_TO_LABEL[fact.linkType]}>
          <MotionLink className={clsx(VALUE_CLASS_NAME, 'group text-accent flex flex-row items-center gap-1.5 min-w-0')} href={fact.url} title={fact.url} variants={fadeUp(0, 12)}>
            <span className="truncate link-underline">
              {simplifyUrl(fact.url)}
            </span>
            <ExternalLinkArrow className="shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </MotionLink>
        </WorkFactItemContainer>
      );
    case 'role':
      return (
        <WorkFactItemContainer className={className} label="Role">
          <motion.span className={VALUE_CLASS_NAME} variants={fadeUp(0, 12)}>
            {fact.role}
          </motion.span>
        </WorkFactItemContainer>
      );
    case 'unfetched_stats':
      return (
        <StatsWorkFactItem className={className} resource={fact.resource} type={fact.statsType} />
      );
  }
};

interface Props extends Omit<ComponentProps<typeof motion.section>, 'children'> {
  metadata: ContentMetadata<WorkMetadata>;
}

export const WorkArticleFacts: FC<Props> = ({ metadata, className, ...props }) => {
  const facts: AggregatedWorkFact[] = [
    ...metadata.facts?.map((fact, index): AggregatedWorkFact => ({
      ...fact,
      id: `fact-${index.toString()}`
    })) ?? [],
    ...objectEntries(metadata.stats ?? {}).map(([statsType, resource], index): AggregatedWorkFact => ({
      id: `stats-${index.toString()}`,
      type: 'unfetched_stats',
      statsType,
      resource
    })),
    ...objectEntries(metadata.links ?? {}).map(([linkType, url], index): AggregatedWorkFact => ({
      id: `link-${index.toString()}`,
      type: 'link',
      linkType,
      url
    }))
  ];

  return (
    <motion.section className={clsx('grid grid-cols-2 xl:grid-cols-4', className)} initial="hidden" variants={staggerChildren(0.06, 0.3)} viewport={REVEAL_VIEWPORT} whileInView="shown" {...props}>
      {facts.map((fact) => (
        <WorkFactItem fact={fact} key={fact.id} />
      ))}
    </motion.section>
  );
};
