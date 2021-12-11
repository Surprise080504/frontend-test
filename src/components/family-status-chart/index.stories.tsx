import { Story, Meta } from '@storybook/react'
import FamilyStatusChart, { Props } from '.'

export default {
  title: 'FamilyStatusChart',
  component: FamilyStatusChart,
  argTypes: {
    percentage: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    kind: {
      control: false,
    },
  },
} as Meta

export const marriage: Story<Props> = args => <FamilyStatusChart {...args} />

marriage.args = {
  percentage: 20,
  kind: 'marriage',
}

export const kids: Story<Props> = args => <FamilyStatusChart {...args} />

kids.args = {
  percentage: 50,
  kind: 'kids',
}
