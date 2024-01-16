import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';

const meta: Meta<typeof Code> = {
  title: 'ui/Code',
  component: Code
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Inline: Story = {
  args: {
    children: 'const a = "this is a var";'
  },
  render: (args) => (
    <p>
      This is some text code in the middle. <Code {...args} />. Enjoy!
    </p>
  )
};

export const CodeBlockWithLanguage: Story = {
  args: {
    language: 'js',
    children: `
const a = 123;
const b = 123;

function sum(a, b) {
  return a + b;
}
    `
  }
};

export const CodeBlockNoLanguage: Story = {
  args: {
    multiLine: true,
    children: `
const a = 123;
const b = 123;

function sum(a, b) {
  return a + b;
}
    `
  }
};

