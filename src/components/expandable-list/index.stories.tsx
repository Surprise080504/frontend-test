import { Story, Meta } from '@storybook/react'
import ExpandableList, { Props } from '.'

export default {
  title: 'ExpandableList',
  component: ExpandableList,
} as Meta

export const simple: Story<Props> = args => <ExpandableList {...args} />

simple.args = {
  expandLabel: 'View all interests',
  items: [
    'R&B',
    'Reggaeton',
    'K-Pop',
    'Rap/Hip-Hop',
    'Rock',
    'Classic',
    'Pop',
    'Jazz/Blues',
    'Club/Dance',
    'House',
    'Latin',
    'Country',
    'Electronic',
    'Soul',
    'Alternative',
  ],
}
