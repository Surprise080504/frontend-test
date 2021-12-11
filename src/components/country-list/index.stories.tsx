import { Story, Meta } from '@storybook/react'
import CountryList, { Props } from '.'

export default {
  title: 'CountryList',
  component: CountryList,
} as Meta

export const simple: Story<Props> = args => <CountryList {...args} />

simple.args = {
  items: [
    'United States',
    'Canada',
    'Germany',
    'Netherlands',
    'United Kingdom',
  ],
}
