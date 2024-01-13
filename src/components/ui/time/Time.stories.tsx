import { Meta, StoryObj } from '@storybook/react';
import { Time } from './Time';

const meta: Meta<typeof Time> = {
  title: 'ui/Time',
  component: Time,
  argTypes: {
    withTime: {
      control: {
        type: 'boolean'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Time>;

export const DateObject: Story = {
  args: {
    date: new Date(),
    withTime: false
  },
  argTypes: {
    date: {
      control: {
        type: 'date'
      }
    }
  }
};

export const DateString: Story = {
  args: {
    date: new Date().toISOString(),
    withTime: false
  },
  argTypes: {
    date: {
      control: {
        type: 'text'
      }
    }
  }
};
