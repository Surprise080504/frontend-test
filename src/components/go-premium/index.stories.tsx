import { Story, Meta } from '@storybook/react'
import GoPremium, { Props } from '.'

export default {
  title: 'GoPremium',
  component: GoPremium,
} as Meta

export const simple: Story<Props> = args => <GoPremium {...args} />

simple.args = {}
