import { Story, Meta } from '@storybook/react'
import MusicCloud, { Props } from '.'

export default {
  title: 'MusicCloud',
  component: MusicCloud,
} as Meta

export const simple: Story<Props> = args => <MusicCloud {...args} />

simple.args = {
  items: ['R&B', 'Reggaeton', 'K-Pop', 'Rap/Hip-Hop', 'Rock', 'Classic'],
}
