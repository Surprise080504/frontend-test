import { Story, Meta } from '@storybook/react'
import SparseChart, { Props } from '.'

export default {
  title: 'SparseChart',
  component: SparseChart,
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 0.95, step: 0.05 },
    },
  },
} as Meta

export const simple: Story<Props> = args => <SparseChart {...args} />

simple.args = {
  label: '10-100K',
  value: 0.75,
}
