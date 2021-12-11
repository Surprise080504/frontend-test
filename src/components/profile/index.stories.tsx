import { Story, Meta } from '@storybook/react'
import Profile, { Props } from '.'

export default {
  title: 'Profile',
  component: Profile,
} as Meta

const args: Props = {
  username: '@royczykova',
  location: 'London, United Kingdom',
  imageUrl: 'https://instagirls.live/storage/imgs/l9Ez.jpg',
  followers: 1_900_000,
  views: 986_643_000,
  engagement: 20.29,
  url: 'https://www.magiclytics.com/verified/@royczykova',
}

export const desktop: Story<Props> = args => <Profile {...args} />

desktop.parameters = {
  backgrounds: {
    default: 'blue',
  },
}

desktop.args = args

export const tablet: Story<Props> = args => <Profile {...args} />

tablet.parameters = {
  backgrounds: {
    default: 'blue',
  },
  viewport: {
    defaultViewport: 'tablet',
  },
}

tablet.args = args

export const mobile: Story<Props> = args => <Profile {...args} />

mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2',
  },
}

mobile.args = args
