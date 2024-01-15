import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';
import { Origin } from './animations';

const loremIpsum = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium in leo ut vehicula. Curabitur auctor sed odio a ullamcorper. Ut lacinia vulputate ex, id posuere ipsum dignissim eu. Donec metus mi, congue non rutrum quis, varius quis magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce molestie tincidunt tellus, ut suscipit velit ultrices sit amet. Nullam rhoncus lorem id libero feugiat rutrum. Nullam mi augue, ultrices rhoncus eros sit amet, fermentum hendrerit quam. Cras dui magna, congue nec blandit et, egestas maximus ex.

Curabitur ornare, urna id dapibus dignissim, lacus sapien aliquam enim, eget maximus lacus libero euismod ante. Suspendisse scelerisque condimentum diam, eu aliquam elit dictum sit amet. Etiam eget sapien ac libero scelerisque tincidunt. Pellentesque finibus auctor eros egestas pulvinar. Vivamus ac vestibulum odio. Praesent viverra porttitor nisl ut blandit. Cras eu venenatis massa. Curabitur mattis faucibus congue. Cras non turpis quis ante elementum iaculis. Curabitur ac neque erat.

Curabitur varius pulvinar purus. Suspendisse eros tellus, vehicula id orci vitae, lobortis tempor nulla. Ut in urna vitae ex mollis dictum at ac est. Cras pellentesque vitae dolor sed tempus. Aenean in pretium tellus. Cras eu magna diam. Nam et porta risus. Suspendisse potenti. Nam mollis, dolor eu ornare ultrices, dui ex tincidunt neque, id tincidunt leo ligula vitae mauris. Mauris dictum dignissim lorem, ut finibus ante dictum efficitur. Nunc at ex consectetur, convallis ipsum eget, ornare risus. Phasellus odio leo, rutrum sit amet tortor et, commodo dignissim mi. Proin condimentum cursus magna, ut pretium dui rutrum eget. Mauris fringilla dui eget est venenatis, non dapibus dui ullamcorper. Aenean porta nisi et ex gravida, ut pellentesque lectus tristique.
`;

const meta: Meta<Parameters<typeof Hero>[0] & { origin: Origin }> = {
  title: 'ui/Hero',
  component: Hero,
  args: {
    origin: 'bottom'
  },
  argTypes: {
    origin: {
      control: 'radio',
      options: ['top', 'right', 'bottom', 'left']
    }
  }
};

export default meta;
type Story = StoryObj<Parameters<typeof Hero>[0] & { origin: Origin }>;

export const Single: Story = {
  render: ({ origin, ...args }) => (
    <Hero {...args}>
      <Hero.Single origin={origin}>
        {loremIpsum}
      </Hero.Single>
    </Hero>
  )
};

export const OnlyLeft: Story = {
  render: ({ origin, ...args }) => (
    <Hero {...args}>
      <Hero.Double>
        <Hero.Double.Side origin={origin}>
          {loremIpsum}
        </Hero.Double.Side>
      </Hero.Double>
    </Hero>
  )
};

export const OnlyRight: Story = {
  render: ({ origin, ...args }) => (
    <Hero {...args}>
      <Hero.Double>
        <Hero.Double.Side />

        <Hero.Double.Side origin={origin}>
          {loremIpsum}
        </Hero.Double.Side>
      </Hero.Double>
    </Hero>
  )
};

export const BothSides: Story = {
  render: ({ origin, ...args }) => (
    <Hero {...args}>
      <Hero.Double>
        <Hero.Double.Side origin={origin}>
          {loremIpsum}
        </Hero.Double.Side>

        <Hero.Double.Side origin={origin}>
          {loremIpsum}
        </Hero.Double.Side>
      </Hero.Double>
    </Hero>
  )
};
