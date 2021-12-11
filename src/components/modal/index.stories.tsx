import { Story, Meta } from '@storybook/react'
import Modal, { Props } from '.'

export default {
  title: 'Modal',
  component: Modal,
  argTypes: { onClose: { action: 'clicked' } },
} as Meta

export const simple: Story<Props> = args => <Modal {...args}>Content</Modal>

simple.args = {
  isOpen: true,
}
