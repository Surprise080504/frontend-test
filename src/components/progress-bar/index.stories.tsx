import { Story, Meta } from '@storybook/react'
import ProgressBar, { Props } from '.'

export default {
  title: 'ProgressBar',
  component: ProgressBar,
  argTypes: {
    max: {
      control: false,
    },
    value: {
      control: { type: 'range', min: 0, max: 10, step: 1 },
    },
  },
} as Meta

export const simple: Story<Props> = args => <ProgressBar {...args} />

simple.args = {
  label: '1-2 years',
  value: 4,
  max: 10,
}
