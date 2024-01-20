import { Meta, StoryObj } from '@storybook/react';
import { WorkSuggestions } from './WorkSuggestions';
import { TechType, WorkStatus, WorkType } from '@lib/services/work';

const metadata = {
  name: 'Testing',
  description: 'A short description.',
  cover: 'https://cataas.com/cat',
  technologies: [
    'nodejs',
    'docker',
    'typescript'
  ] as TechType[],
  status: 'maintained' as WorkStatus,
  type: 'hobby' as WorkType,
  links: {
    github: 'https://github.com',
    dockerhub: 'https://hub.docker.com',
    website: 'https://moonstar-x.dev',
    npm: 'https://npmjs.com',
    steam: 'https://steampowered.com',
    discord: 'https://discord.com'
  },
  slug: '_test',
  readingTime: 2
};

const meta: Meta<typeof WorkSuggestions> = {
  title: 'work/WorkSuggestions',
  component: WorkSuggestions
};

export default meta;
type Story = StoryObj<typeof WorkSuggestions>;

export const NoCards: Story = {
  args: {
    allWork: [],
    currentWorkSlug: '123'
  }
};

export const SingleCard: Story = {
  args: {
    allWork: [metadata],
    currentWorkSlug: '123'
  }
};

export const MultipleCards: Story = {
  args: {
    allWork: new Array(11).fill(null).map(() => metadata),
    currentWorkSlug: '123'
  }
};
