import { Story, Meta } from '@storybook/react'
import BarChart, { Props } from '.'

export default {
  title: 'BarChart',
  component: BarChart,
} as Meta

export const simple: Story<Props> = args => <BarChart {...args} />

simple.args = {
  items: [40, 15, 15, 10, 5, 3, 2],
}
