import { Story, Meta } from '@storybook/react'
import MatchItem, { Props } from '.'

export default {
  title: 'MatchItem',
  component: MatchItem,
} as Meta

const args: Props = {
  name: 'Name of the list',
  size: 357,
}

export const desktop: Story<Props> = args => <MatchItem {...args} />

desktop.args = args

export const mobile: Story<Props> = args => <MatchItem {...args} />

mobile.parameters = {
  backgrounds: {
    default: 'dark',
  },
  viewport: {
    defaultViewport: 'mobile2',
  },
}

mobile.args = args
