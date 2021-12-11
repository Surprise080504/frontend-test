import { Story, Meta } from '@storybook/react'
import EnvelopeIcon from 'containers/signup/email-sent/envelope.png'
import PulseRings from '.'

export default {
  title: 'PulseRings',
  component: PulseRings,
} as Meta

export const simple: Story = () => <PulseRings icon={EnvelopeIcon} />

simple.parameters = {
  backgrounds: {
    default: 'blue',
  },
}
