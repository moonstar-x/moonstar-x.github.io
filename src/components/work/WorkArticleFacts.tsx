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
import type { ComponentProps, FC } from 'react';

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

interface StatsWorkFactItemProps {
  className?: string | undefined;
  labelClassName?: string | undefined;
  resource: string;
}

const DockerHubStatsWorkFactItem: FC<StatsWorkFactItemProps> = async ({ className, labelClassName, resource }) => {
  const data = await getDockerHubRepoData(resource);
  if (!data) {
    return null;
  }

  return (
    <Fragment>
      <div className={className}>
        <span className={labelClassName}>
          Docker Stars
        </span>
        <span className="font-title font-black text-[42px] leading-none text-accent">
          {compactNumber(data.stars)}
        </span>
      </div>
      <div className={className}>
        <span className={labelClassName}>
          Docker Pulls
        </span>
        <span className="font-title font-black text-[42px] leading-none text-accent">
          {compactNumber(data.pulls)}
        </span>
      </div>
    </Fragment>
  );
};

const NpmStatsWorkFactItem: FC<StatsWorkFactItemProps> = async ({ className, labelClassName, resource }) => {
  const data = await getNpmPackageData(resource);
  if (!data?.downloads) {
    return null;
  }

  return (
    <Fragment>
      <div className={className}>
        <span className={labelClassName}>
          NPM Last Week Downloads
        </span>
        <span className="font-title font-black text-[42px] leading-none text-accent">
          {compactNumber(data.downloads.lastWeek)}
        </span>
      </div>
      <div className={className}>
        <span className={labelClassName}>
          NPM Last Month Downloads
        </span>
        <span className="font-title font-black text-[42px] leading-none text-accent">
          {compactNumber(data.downloads.lastMonth)}
        </span>
      </div>
      <div className={className}>
        <span className={labelClassName}>
          NPM Last Year Downloads
        </span>
        <span className="font-title font-black text-[42px] leading-none text-accent">
          {compactNumber(data.downloads.lastYear)}
        </span>
      </div>
    </Fragment>
  );
};

const GitHubStatsWorkFactItem: FC<StatsWorkFactItemProps> = async ({ className, labelClassName, resource }) => {
  const data = await getGitHubRepoData(resource);
  if (!data) {
    return null;
  }

  return (
    <Fragment>
      <div className={className}>
        <span className={labelClassName}>
          GitHub Stars
        </span>
        <span className="font-title font-black text-[42px] leading-none text-accent">
          {compactNumber(data.stars)}
        </span>
      </div>
      <div className={className}>
        <span className={labelClassName}>
          GitHub Forks
        </span>
        <span className="font-title font-black text-[42px] leading-none text-accent">
          {compactNumber(data.forks)}
        </span>
      </div>
      <div className={className}>
        <span className={labelClassName}>
          GitHub Open Issues
        </span>
        <span className="font-title font-black text-[42px] leading-none text-accent">
          {compactNumber(data.openIssues)}
        </span>
      </div>
      <div className={className}>
        <span className={labelClassName}>
          GitHub Watchers
        </span>
        <span className="font-title font-black text-[42px] leading-none text-accent">
          {compactNumber(data.watchers)}
        </span>
      </div>
    </Fragment>
  );
};

interface StatFetchingWorkFactItemProps {
  className?: string;
  labelClassName?: string;
  resource: string;
  type: WorkStats;
}

const StatFetchingWorkFactItem: FC<StatFetchingWorkFactItemProps> = ({ type, resource, className, labelClassName }) => {
  switch (type) {
    case 'dockerhub':
      return (
        <DockerHubStatsWorkFactItem className={className} labelClassName={labelClassName} resource={resource} />
      );
    case 'github':
      return (
        <GitHubStatsWorkFactItem className={className} labelClassName={labelClassName} resource={resource} />
      );
    case 'npm':
      return (
        <NpmStatsWorkFactItem className={className} labelClassName={labelClassName} resource={resource} />
      );
  }
};

interface WorkFactItemProps {
  className?: string;
  fact: AggregatedWorkFact;
}

const WorkFactItem: FC<WorkFactItemProps> = ({ className, fact }) => {
  const sharedClassName = 'py-5 px-6.5 not-last:border-r border-solid border-border flex flex-col gap-1.25';
  const labelClassName = 'text-[11px] font-semibold tracking-[0.16em] uppercase text-muted';
  const linkTypeToLabel: Record<WorkLink, string> = {
    github: 'Repository',
    dockerhub: 'Docker Image',
    website: 'Website',
    discord: 'Discord',
    npm: 'NPM',
    steam: 'Steam',
    appstore: 'App Store',
    playstore: 'Play Store'
  };

  switch (fact.type) {
    case 'featured':
      return (
        <div className={clsx(sharedClassName, className)}>
          <span className={labelClassName}>
            {fact.label}
          </span>
          <span className="font-title font-black text-[42px] leading-none text-accent">
            {fact.value}
          </span>
        </div>
      );
    case 'link':
      return (
        <div className={clsx(sharedClassName, className)}>
          <span className={labelClassName}>
            {linkTypeToLabel[fact.linkType]}
          </span>
          <Link className="text-[17px] font-medium leading-[1.35] text-accent" href={fact.url}>
            {simplifyUrl(fact.url)}
            {' '}
            ↗
          </Link>
        </div>
      );
    case 'role':
      return (
        <div className={clsx(sharedClassName, className)}>
          <span className={labelClassName}>
            Role
          </span>
          <span className="text-[17px] font-medium leading-[1.35]">
            {fact.role}
          </span>
        </div>
      );
    case 'unfetched_stats':
      return (
        <StatFetchingWorkFactItem className={clsx(sharedClassName, className)} labelClassName={labelClassName} resource={fact.resource} type={fact.statsType} />
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
