import { Meta, StoryObj } from '@storybook/react';
import { Markdown } from './Markdown';

const markdown = `
# H1 Heading

## H2 Heading

### H3 Heading

#### H4 Heading

##### H5 Heading

###### H6 Heading

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc lacus, pellentesque pulvinar felis id, venenatis porta diam. Integer nec diam erat. Sed erat urna, mollis sed gravida eget, tempus et enim. Nunc dapibus egestas augue non faucibus. Mauris consectetur neque et nulla rutrum, ac fermentum nibh convallis. Fusce at dictum erat. Morbi lacinia lectus porttitor tincidunt dictum. Nunc dictum augue eget massa scelerisque, a imperdiet arcu maximus.

Sed in ornare est. Aliquam ac enim quis elit tempor suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras in aliquam risus, id dignissim elit. Praesent nibh erat, euismod sed consectetur in, finibus nec quam. Pellentesque imperdiet ipsum eu convallis tempor. Mauris a facilisis ipsum, at auctor lacus. Curabitur vitae hendrerit est. Aliquam fringilla fermentum pulvinar. Quisque at porta eros, nec imperdiet justo.

Proin ultrices, nulla eu fermentum ultricies, risus velit condimentum augue, quis porttitor metus lorem sit amet augue. Donec iaculis tincidunt tellus, eu imperdiet dolor accumsan id. Cras non molestie mauris. Nulla maximus ipsum vitae erat tincidunt luctus. Donec dolor libero, auctor sit amet ante quis, vehicula ullamcorper libero. Maecenas et neque molestie, interdum neque et, blandit dui. Suspendisse ex elit, dapibus ac sem at, faucibus dictum elit. Nulla efficitur orci lectus, id mollis nunc bibendum in. Fusce magna urna, condimentum in libero a, faucibus bibendum nulla. Nulla ac bibendum dolor, a lobortis augue. Suspendisse ut sapien eu turpis placerat vehicula at sed tellus. Cras a eros eros. Vivamus molestie felis nulla. Sed ut metus nunc. Quisque auctor, dui ut mattis mollis, est tellus convallis risus, vel euismod metus elit nec est. Aliquam pharetra pretium diam, sed pellentesque dolor vulputate id.

Divider start.

---

Divider end.

Text in _italics_.
Text in **bold**.
Text in ~~strikethrough~~

[This is a link](https://google.com).

![This is an image.](https://www.shutterstock.com/image-photo/funny-cat-flying-photo-playful-600nw-2315020963.jpg)


\`Inline code\`.

\`\`\`
Regular code block.
\`\`\`

\`\`\`js
const variable = 123;
// Code in JavaScript
\`\`\`

> A small blockquote.

Lists:

1. One.
2. Two.
3. Three.

* One
* Two
  * Three
  * Four
* Five

| 1  | 2   |
|----|-----|
| 2  | 3   |
| 2  | 3   |
| 2  | 3   |

Todo:

- [x] 123
- [ ] 456

https://download.samplelib.com/mp4/sample-5s.mp4
`;

const meta: Meta<typeof Markdown> = {
  title: 'utils/Markdown',
  component: Markdown
};

export default meta;
type Story = StoryObj<typeof Markdown>;

export const Default: Story = {
  args: {
    children: markdown
  }
};
