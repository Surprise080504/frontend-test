import { Story, Meta } from '@storybook/react'
import SortedList, { Props } from '.'

export default {
  title: 'SortedList',
  component: SortedList,
} as Meta

export const simple: Story<Props> = args => <SortedList {...args} />

simple.args = {
  items: [
    'English',
    'French',
    'Spanish',
    'Portuguese',
    'German',
    'Arabic',
    'Others',
  ],
  multiColumns: false,
}
