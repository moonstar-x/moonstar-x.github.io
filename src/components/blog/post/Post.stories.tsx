import { Meta, StoryObj } from '@storybook/react';
import { Post } from './Post';
import { BlogPost } from '@lib/services/blog';
import { getBlogData } from '@lib/services/data';

const metadata = {
  title: 'Testing',
  cover: 'https://cataas.com/cat',
  date: '2024-01-17T04:15:35+0000',
  slug: '_test',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc lacus, pellentesque pulvinar felis id, venenatis porta diam. Integer nec…',
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

const post: BlogPost = {
  markdown,
  metadata
};

const meta: Meta<typeof Post> = {
  title: 'blog/Post',
  component: Post
};

export default meta;
type Story = StoryObj<typeof Post>;

export const Default: Story = {
  args: {
    post,
    author: getBlogData().author
  }
};
