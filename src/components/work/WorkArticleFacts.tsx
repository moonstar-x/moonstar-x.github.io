import type { WorkFact, WorkLink, WorkMetadata, WorkStats } from '@core/services/data/work';
import type { ContentMetadata } from '@core/services/markdown';
import { getDockerHubRepoData } from '@core/services/third-party/dockerhub';
import { getGitHubRepoData } from '@core/services/third-party/github';
import { getNpmPackageData } from '@core/services/third-party/npm';
import { compactNumber } from '@core/utils/number';
import { objectEntries } from '@core/utils/object';
import { simplifyUrl } from '@core/utils/string';
import { clsx } from 'clsx';
import Link from 'next/link';
import { Fragment } from 'react';
import type { ComponentProps, FC, ReactNode } from 'react';

const ITEM_CLASS_NAME = 'py-5 px-6.5 not-last:border-r border-solid border-border flex flex-col gap-1.25';
const LABEL_CLASS_NAME = 'text-[11px] font-semibold tracking-[0.16em] uppercase text-muted';
const FEATURED_VALUE_CLASS_NAME = 'font-title font-black text-[42px] leading-none text-accent';
const STAT_VALUE_CLASS_NAME = 'font-title font-black text-[42px] leading-none text-text';
const VALUE_CLASS_NAME = 'text-[17px] font-medium leading-[1.35]';

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
  <div className={clsx(ITEM_CLASS_NAME, className)}>
    <span className={LABEL_CLASS_NAME}>
      {label}
    </span>
    {children}
  </div>
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
          <span className={STAT_VALUE_CLASS_NAME}>
            {compactNumber(value)}
          </span>
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
          <span className={FEATURED_VALUE_CLASS_NAME}>
            {fact.value}
          </span>
        </WorkFactItemContainer>
      );
    case 'link':
      return (
        <WorkFactItemContainer className={className} label={LINK_TYPE_TO_LABEL[fact.linkType]}>
          <Link className={clsx(VALUE_CLASS_NAME, 'text-accent')} href={fact.url}>
            {simplifyUrl(fact.url)}
            {' '}
            ↗
          </Link>
        </WorkFactItemContainer>
      );
    case 'role':
      return (
        <WorkFactItemContainer className={className} label="Role">
          <span className={VALUE_CLASS_NAME}>
            {fact.role}
          </span>
        </WorkFactItemContainer>
      );
    case 'unfetched_stats':
      return (
        <StatsWorkFactItem className={className} resource={fact.resource} type={fact.statsType} />
      );
  }
};

interface Props extends ComponentProps<'section'> {
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
    <section className={clsx('grid grid-cols-4 border-t border-b border-solid border-border', className)} {...props}>
      {facts.map((fact) => (
        <WorkFactItem fact={fact} key={fact.id} />
      ))}
    </section>
  );
};
