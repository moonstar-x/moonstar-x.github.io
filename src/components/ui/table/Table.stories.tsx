import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

const randomText = () => {
  const magnitude = Math.floor(Math.random() * 5) + 3;
  return Math.floor(Math.random() * Math.pow(10, magnitude)).toString();
};

const meta: Meta<React.FC<Parameters<typeof Table>[0] & { cols: number, rows: number }>> = {
  title: 'ui/Table',
  component: Table
};

export default meta;
type Story = StoryObj<React.FC<Parameters<typeof Table>[0] & { cols: number, rows: number }>>;

export const Default: Story = {
  args: {
    cols: 3,
    rows: 10,
    style: { maxWidth: '600px' }
  },
  render: ({ cols, rows, ...args }) => (
    <Table {...args}>
      <thead>
        <tr>
          {
            new Array(cols).fill(null).map((_, idx) => (
              <th key={idx}>
                {randomText()}
              </th>
            ))
          }
        </tr>
      </thead>

      <tbody>
        {
          new Array(rows).fill(null).map((_, idx) => (
            <tr key={idx}>
              {
                new Array(cols).fill(null).map((_, idx) => (
                  <td key={idx}>
                    {randomText()}
                  </td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </Table>
  )
};
