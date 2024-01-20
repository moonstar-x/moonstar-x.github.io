import { Meta, StoryObj } from '@storybook/react';
import { Work } from './Work';
import { TechType, WorkArticle, WorkStatus, WorkType } from '@lib/services/work';

const metadata = {
  name: 'Testing',
  description: 'A short description.',
  cover: 'https://cataas.com/cat',
  technologies: [
    'nodejs',
    'docker',
    'typescript'
  ] as TechType[],
  status: 'maintained' as WorkStatus,
  type: 'hobby' as WorkType,
  links: {
    github: 'https://github.com',
    dockerhub: 'https://hub.docker.com',
    website: 'https://moonstar-x.dev',
    npm: 'https://npmjs.com',
    steam: 'https://steampowered.com',
    discord: 'https://discord.com'
  },
  slug: '_test',
  readingTime: 2
};

const markdown = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc lacus, pellentesque pulvinar felis id, venenatis porta diam. Integer nec diam erat. Sed erat urna, mollis sed gravida eget, tempus et enim. Nunc dapibus egestas augue non faucibus. Mauris consectetur neque et nulla rutrum, ac fermentum nibh convallis. Fusce at dictum erat. Morbi lacinia lectus porttitor tincidunt dictum. Nunc dictum augue eget massa scelerisque, a imperdiet arcu maximus.

## H2 Heading

enim. Nunc dapibus egestas augue non faucibus. Mauris consectetur neque et nulla rutrum, ac fermentum nibh convallis. Fusce at dictum erat. Morbi lacinia lectus porttitor tincidunt dictum. Nunc dictum augue eget massa scelerisque, a imperdiet arcu maximus.

Sed in ornare est. Aliquam ac enim quis elit tempor suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras in aliquam risus, id dignissim elit. Praesent nibh erat, euismod sed consectetur in, finibus nec quam. Pellentesque imperdiet ipsum eu convallis tempor. Mauris a facilisis ipsum, at auctor lacus. Curabitur vitae hendrerit est. Aliquam fringilla fermentum pulvinar. Quisque at porta eros, nec imperdiet justo.

### H3 Heading

Little code example.

\`\`\`ts
const variable: string = '123';

function test(param?: string): string {
  if (param) {
    return \`\${param}/123\`;
  }
  
  return '123';
}
\`\`\`

> Remember that this code **is just an _example_**.

## Another H2 Heading

Here's an image of a cat.

![A random and funny cat.](https://cataas.com/cat)

## Yet Another H2 Heading

Here's a random list:

1. First.
2. Second.
3. Third.

And unordered:

- One
- Two
    - Three
    - Four
- Five

## Conclusion

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc lacus, pellentesque pulvinar felis id, venenatis porta diam. Integer nec diam erat. Sed erat urna, mollis sed gravida eget, tempus et enim. Nunc dapibus egestas augue non faucibus. Mauris consectetur neque et nulla rutrum, ac fermentum nibh convallis. Fusce at dictum erat. Morbi lacinia lectus porttitor tincidunt dictum. Nunc dictum augue eget massa scelerisque, a imperdiet arcu maximus.
`;

const work: WorkArticle = {
  markdown,
  metadata
};

const meta: Meta<typeof Work> = {
  title: 'work/Work',
  component: Work
};

export default meta;
type Story = StoryObj<typeof Work>;

export const Default: Story = {
  args: {
    work
  }
};
