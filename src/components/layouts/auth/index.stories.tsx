import { Story, Meta } from '@storybook/react'
import AuthLayout from '.'

export default {
  title: 'Layouts/Auth',
  component: AuthLayout,
  parameters: {
    backgrounds: {
      default: 'blank',
    },
  },
} as Meta

export const simple: Story = () => <AuthLayout>content here</AuthLayout>
