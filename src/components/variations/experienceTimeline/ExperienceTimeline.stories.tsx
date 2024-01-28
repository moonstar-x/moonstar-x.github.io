import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ExperienceTimeline } from './ExperienceTimeline';
import { Experience } from '@lib/services/data';

type StoryComponent = React.FC<Parameters<typeof ExperienceTimeline>[0] & Experience & { count: number }>;

const meta: Meta<StoryComponent> = {
  title: 'variations/ExperienceTimeline',
  component: ExperienceTimeline,
  args: {
    count: 3,
    title: 'Software Developer',
    company: 'My Company',
    description: 'I worked by doing some stuff here.',
    bulletPoints: [
      'I did one thing.',
      'I did another one.',
      'I did another another one.'
    ],
    location: 'Planet Earth',
    dateStart: '2020-01-01',
    dateEnd: '2022-02-01',
    logo: '/img/logo.jpg'
  }
};

export default meta;
type Story = StoryObj<StoryComponent>;

export const Default: Story = {
  render: ({ count, title, company, logo, description, bulletPoints, location, dateStart, dateEnd, ...args }) => {
    const experience = new Array(count).fill(null).map(() => ({
      title,
      company,
      logo,
      description,
      bulletPoints,
      location,
      dateStart,
      dateEnd
    }));

    return (
      <ExperienceTimeline {...args} experience={experience} />
    );
  }
};
