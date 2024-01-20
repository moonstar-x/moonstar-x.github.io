import { Meta, StoryObj } from '@storybook/react';
import { WorkCard } from './WorkCard';
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
    discord: 'https://discord.com',
    npm: 'https://npmjs.com',
    steam: 'https://steampowered.com'
  },
  stats: {
    github: 'moonstar-x/discord-tts-bot',
    dockerhub: 'moonstarx/discord-tts-bot',
    npm: 'react-twitch-embed'
  },
  slug: '_test',
  readingTime: 2
};

const meta: Meta<typeof WorkCard> = {
  title: 'work/WorkCard',
  component: WorkCard
};

export default meta;
type Story = StoryObj<typeof WorkCard>;

export const Default: Story = {
  args: {
    work: metadata,
    style: { maxWidth: 330 }
  }
};
