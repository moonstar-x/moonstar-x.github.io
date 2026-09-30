import { ArtWorkList } from '@components/work/ArtWorkList';
import { HobbyWorkList } from '@components/work/HobbyWorkList';
import { ResearchWorkList } from '@components/work/ResearchWorkList';
import type { WorkMetadata } from '@core/services/data/work';
import type { WorkType } from '@core/services/data/work-type';
import type { ContentMetadata } from '@core/services/markdown';
import type { ComponentProps, FC } from 'react';

interface Props extends Omit<ComponentProps<'div'>, 'children'> {
  items: Array<ContentMetadata<WorkMetadata>>;
  type: WorkType;
}

export const TypedWorkList: FC<Props> = ({ items, type, ...props }) => {
  switch (type) {
    case 'art':
      return <ArtWorkList items={items} {...props} />;
    case 'hobby':
      return <HobbyWorkList items={items} {...props} />;
    case 'research':
      return <ResearchWorkList items={items} {...props} />;
  }
};
