import { Story, Meta } from '@storybook/react'
import CheckmarkIcon from 'components/icons/checkmark'
import { PrimaryButton, InvertedButton, OutlineButton, RoundButton } from '.'

export default {
  title: 'Button',
  component: PrimaryButton,
} as Meta

export const primary: Story = () => (
  <PrimaryButton>Primary button</PrimaryButton>
)

export const inverted: Story = () => (
  <InvertedButton>Inverted button</InvertedButton>
)

export const outline: Story = () => (
  <OutlineButton>Outline button</OutlineButton>
)

export const round: Story = () => (
  <RoundButton>
    <CheckmarkIcon />
  </RoundButton>
)
