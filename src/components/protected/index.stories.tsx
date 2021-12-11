import { Story, Meta } from '@storybook/react'
import Widget from 'components/widget'
import Protected, { Props } from '.'

export default {
  title: 'Protected',
  component: Protected,
  argTypes: { onSubscribe: { action: 'clicked' } },
} as Meta

export const simple: Story<Props> = args => (
  <Protected {...args}>
    <Widget title="Sample widget">Content</Widget>
  </Protected>
)

simple.args = {
  isLocked: true,
  title: 'Audience report',
}

simple.parameters = {
  backgrounds: {
    default: 'blue',
  },
}
