import { Story, Meta } from '@storybook/react'
import BubbleCloud, { Props } from '.'

export default {
  title: 'BubbleCloud',
  component: BubbleCloud,
} as Meta

export const simple: Story<Props> = args => <BubbleCloud {...args} />

simple.args = {
  items: [
    'Adventure travel',
    'Luxury cars',
    'Children',
    'Fitness',
    'Art/Culture',
    'Boating',
    'Dogs',
  ],
}
