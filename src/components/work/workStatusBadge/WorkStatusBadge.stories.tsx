import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { WorkStatusBadge } from './WorkStatusBadge';
import { WORK_STATUS_TYPES } from '@lib/services/work';

const meta: Meta<typeof WorkStatusBadge> = {
  title: 'work/WorkStatusBadge',
  component: WorkStatusBadge
};

export default meta;
type Story = StoryObj<typeof WorkStatusBadge>;

export const Default: Story = {
  render: (args) => {
    return (
      <div className="flex flex-wrap gap-[0.5rem]">
        {
          WORK_STATUS_TYPES.map((status, idx) => (
            <WorkStatusBadge key={idx} {...args} status={status} />
          ))
        }
      </div>
    );
  }
};
