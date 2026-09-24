import type { WorkFact, WorkLink, WorkMetadata } from '@core/services/data/work';
import type { ContentMetadata } from '@core/services/markdown';
import { objectEntries } from '@core/utils/object';
import { simplifyUrl } from '@core/utils/string';
import { clsx } from 'clsx';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';

type AggregatedWorkFact = (WorkFact | {
  linkType: WorkLink;
  type: 'link';
  url: string;
}) & {
  id: string;
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
