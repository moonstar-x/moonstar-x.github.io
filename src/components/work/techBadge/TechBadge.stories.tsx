import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { TechBadge, TYPES } from './TechBadge';

const meta: Meta<typeof TechBadge> = {
  title: 'work/TechBadge',
  component: TechBadge
};

export default meta;
type Story = StoryObj<typeof TechBadge>;

export const Default: Story = {
  render: (args) => {
    return (
      <div className="flex flex-wrap gap-[0.5rem]">
        {
          TYPES.map((type, idx) => (
            <TechBadge key={idx} {...args} type={type} />
          ))
        }
      </div>
    );
  }
};
