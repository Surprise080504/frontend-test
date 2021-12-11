import { Story, Meta } from '@storybook/react'
import UserList, { Props } from '.'

export default {
  title: 'UserList',
  component: UserList,
} as Meta

export const simple: Story<Props> = args => <UserList {...args} />

simple.args = {
  items: [
    {
      user: {
        username: '@mightydallas',
        name: 'Bo Dallas',
        imageUrl: 'https://instagirls.live/storage/imgs/l9Ez.jpg',
      },
      value: 96,
    },
    {
      user: {
        username: '@ramirezrihh',
        name: 'Rhianah Ramirez',
        imageUrl: 'https://instagirls.live/storage/imgs/l9Ez.jpg',
      },
      value: 90,
    },
    {
      user: {
        username: '@crazyomary',
        name: 'Omari Ferrell',
        imageUrl: 'https://instagirls.live/storage/imgs/l9Ez.jpg',
      },
      value: 84,
    },
  ],
}
