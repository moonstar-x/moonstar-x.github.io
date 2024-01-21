import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { EducationTimeline } from './EducationTimeline';
import { Education } from '@lib/services/data';

const meta: Meta<Parameters<typeof EducationTimeline>[0] & Education & { count: number }> = {
  title: 'variations/EducationTimeline',
  component: EducationTimeline,
  args: {
    count: 3,
    degree: 'Bachelor of Science',
    university: 'My University',
    description: 'I worked by doing some stuff here.',
    grade: 'Magna Cum Laude',
    dateStart: '2020-01-01',
    dateEnd: '2022-02-01',
    logo: '/img/logo.jpg'
  }
};

export default meta;
type Story = StoryObj<Parameters<typeof EducationTimeline>[0] & Education & { count: number }>;

export const Default: Story = {
  render: ({ count, degree, university, logo, description, grade, dateStart, dateEnd, ...args }) => {
    const education = new Array(count).fill(null).map(() => ({
      degree,
      university,
      logo,
      description,
      grade,
      dateStart,
      dateEnd
    }));

    return (
      <EducationTimeline {...args} education={education} />
    );
  }
};
