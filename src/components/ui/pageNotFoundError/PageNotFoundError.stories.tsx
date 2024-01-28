import { Meta, StoryObj } from '@storybook/react';
import { PageNotFoundError } from './PageNotFoundError';

const meta: Meta<typeof PageNotFoundError> = {
  title: 'ui/PageNotFoundError',
  component: PageNotFoundError
};

export default meta;
type Story = StoryObj<typeof PageNotFoundError>;

export const Default: Story = {
  args: {}
};
