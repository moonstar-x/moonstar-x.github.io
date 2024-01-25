import { Meta, StoryObj } from '@storybook/react';
import { SectionBlock } from './SectionBlock';

const meta: Meta<typeof SectionBlock> = {
  title: 'ui/SectionBlock',
  component: SectionBlock
};

export default meta;
type Story = StoryObj<typeof SectionBlock>;

export const Default: Story = {
  args: {
    title: 'Articles',
    subtitle: "Here's some of my latest articles.",
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc lacus, pellentesque pulvinar felis id, venenatis porta diam. Integer nec diam erat. Sed erat urna, mollis sed gravida eget, tempus et enim. Nunc dapibus egestas augue non faucibus. Mauris consectetur neque et nulla rutrum, ac fermentum nibh convallis. Fusce at dictum erat. Morbi lacinia lectus porttitor tincidunt dictum. Nunc dictum augue eget massa scelerisque, a imperdiet arcu maximus.\n',
      'Sed in ornare est. Aliquam ac enim quis elit tempor suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras in aliquam risus, id dignissim elit. Praesent nibh erat, euismod sed consectetur in, finibus nec quam. Pellentesque imperdiet ipsum eu convallis tempor. Mauris a facilisis ipsum, at auctor lacus. Curabitur vitae hendrerit est. Aliquam fringilla fermentum pulvinar. Quisque at porta eros, nec imperdiet justo.\n'
    ]
  }
};
