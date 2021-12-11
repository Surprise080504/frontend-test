import { Story, Meta } from '@storybook/react'
import GenderChart, { Props } from '.'

export default {
  title: 'GenderChart',
  component: GenderChart,
  argTypes: {
    gender: {
      control: false,
    },
    percentage: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
} as Meta

export const male: Story<Props> = args => <GenderChart {...args} />

male.args = {
  gender: 'male',
  percentage: 40,
}

export const female: Story<Props> = args => <GenderChart {...args} />

female.args = {
  gender: 'female',
  percentage: 80,
}
