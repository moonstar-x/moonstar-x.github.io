import { Meta, StoryObj } from '@storybook/react';
import { FriendlyDuration } from './FriendlyDuration';

const meta: Meta<typeof FriendlyDuration> = {
  title: 'utils/FriendlyDuration',
  component: FriendlyDuration,
  argTypes: {
    start: {
      control: {
        type: 'date'
      }
    },
    end: {
      control: {
        type: 'date'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof FriendlyDuration>;

export const Default: Story = {
  args: {
    start: new Date(),
    end: new Date(Date.now() - 100000)
  }
};

