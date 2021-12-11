import { Story, Meta } from '@storybook/react'
import Hashtags, { Props } from '.'

export default {
  title: 'Hashtags',
  component: Hashtags,
} as Meta

export const simple: Story<Props> = args => <Hashtags {...args} />

simple.args = {
  items: [
    '#travelling',
    '#friends',
    '#company',
    '#dogs',
    '#ecofriendly',
    '#natural',
    '#children',
  ],
}
