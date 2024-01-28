import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { WorkLink } from './WorkLink';
import { WORK_LINK_TYPES } from '@lib/services/work';

const meta: Meta<typeof WorkLink> = {
  title: 'work/WorkLink',
  component: WorkLink
};

export default meta;
type Story = StoryObj<typeof WorkLink>;

export const Default: Story = {
  args: {
    href: '#'
  },
  render: (args) => {
    return (
      <div className="flex flex-wrap gap-[0.5rem]">
        {
          WORK_LINK_TYPES.map((link, idx) => (
            <WorkLink key={idx} {...args} link={link} />
          ))
        }
      </div>
    );
  }
};
