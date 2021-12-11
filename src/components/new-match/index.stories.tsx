import { Story, Meta } from '@storybook/react'
import NewMatch, { Props } from '.'

export default {
  title: 'NewMatch',
  component: NewMatch,
  argTypes: { onClick: { action: 'clicked' } },
  parameters: {
    backgrounds: {
      default: 'blue',
    },
  },
} as Meta

export const desktop: Story<Props> = args => <NewMatch {...args} />

export const mobile: Story<Props> = args => <NewMatch {...args} />

mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2',
  },
}
