import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Timeline } from './Timeline';
import { Icon } from '@components/ui/icon';
import { EyeIcon } from '@components/ui/icon/library/ui/EyeIcon';


const meta: Meta<typeof Timeline> = {
  title: 'ui/Timeline',
  component: Timeline
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const NoItems: Story = {
  render: (args) => (
    <Timeline {...args} />
  )
};

export const OneItem: Story = {
  render: (args) => (
    <Timeline {...args}>
      <Timeline.Item>
        <div>
          Test
        </div>

        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium in leo ut vehicula. Curabitur auctor sed odio a ullamcorper.
          Ut lacinia vulputate ex, id posuere ipsum dignissim eu.
          Donec metus mi, congue non rutrum quis, varius quis magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Fusce molestie tincidunt tellus, ut
          suscipit velit ultrices sit amet. Nullam rhoncus lorem id libero feugiat rutrum. Nullam mi augue, ultrices rhoncus eros sit amet,
          fermentum hendrerit quam. Cras dui magna, congue nec blandit et, egestas maximus ex.
        </div>
      </Timeline.Item>
    </Timeline>
  )
};

export const MultipleItems: Story = {
  render: (args) => (
    <Timeline {...args}>
      <Timeline.Item>
        <div>
          Test
        </div>

        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium in leo ut vehicula. Curabitur auctor sed odio a ullamcorper.
          Ut lacinia vulputate ex, id posuere ipsum dignissim eu.
          Donec metus mi, congue non rutrum quis, varius quis magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Fusce molestie tincidunt tellus, ut
          suscipit velit ultrices sit amet. Nullam rhoncus lorem id libero feugiat rutrum. Nullam mi augue, ultrices rhoncus eros sit amet,
          fermentum hendrerit quam. Cras dui magna, congue nec blandit et, egestas maximus ex.
        </div>
      </Timeline.Item>

      <Timeline.Item icon={<Icon icon={EyeIcon} color="white" />}>
        <div>
          Test
        </div>

        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium in leo ut vehicula. Curabitur auctor sed odio a ullamcorper.
          Ut lacinia vulputate ex, id posuere ipsum dignissim eu.
          Donec metus mi, congue non rutrum quis, varius quis magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Fusce molestie tincidunt tellus, ut
          suscipit velit ultrices sit amet. Nullam rhoncus lorem id libero feugiat rutrum. Nullam mi augue, ultrices rhoncus eros sit amet,
          fermentum hendrerit quam. Cras dui magna, congue nec blandit et, egestas maximus ex.
        </div>
      </Timeline.Item>

      <Timeline.Item>
        <div>
          Test
        </div>

        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium in leo ut vehicula. Curabitur auctor sed odio a ullamcorper.
          Ut lacinia vulputate ex, id posuere ipsum dignissim eu.
          Donec metus mi, congue non rutrum quis, varius quis magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Fusce molestie tincidunt tellus, ut
          suscipit velit ultrices sit amet. Nullam rhoncus lorem id libero feugiat rutrum. Nullam mi augue, ultrices rhoncus eros sit amet,
          fermentum hendrerit quam. Cras dui magna, congue nec blandit et, egestas maximus ex.
        </div>
      </Timeline.Item>

      <Timeline.Origin />
    </Timeline>
  )
};
