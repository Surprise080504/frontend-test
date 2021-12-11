import { Story, Meta } from '@storybook/react'
import Widget from '.'

export default {
  title: 'Widget',
  component: Widget,
  parameters: {
    backgrounds: {
      default: 'blank',
    },
  },
} as Meta

export const simple: Story = () => <Widget title="Simple widget" />
