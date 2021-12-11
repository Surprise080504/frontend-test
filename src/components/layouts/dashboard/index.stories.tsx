import { Story, Meta } from '@storybook/react'
import DashboardLayout, { Props } from '.'

export default {
  title: 'Layouts/Dashboard',
  component: DashboardLayout,
} as Meta

export const simple: Story<Props> = args => <DashboardLayout {...args} />

simple.args = {
  navigationActive: false,
}
