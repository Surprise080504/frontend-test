import { Story, Meta } from '@storybook/react'
import TextInput from '.'

export default {
  title: 'TextInput',
  component: TextInput,
} as Meta

export const simple: Story = () => (
  <TextInput label="Username" id="username" placeholder="enter your username" />
)

simple.parameters = {
  backgrounds: {
    default: 'blank',
  },
}
