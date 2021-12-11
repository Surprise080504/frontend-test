import React from 'react'
import GlobalStyles from 'styles/global'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'widget',
    values: [
      {
        name: 'widget',
        value: '#E9EFF4',
      },
      {
        name: 'blank',
        value: '#fff',
      },
      {
        name: 'blue',
        value: '#1A71E6',
      },
      {
        name: 'dark',
        value: '#20295A',
      },
    ],
  },
  layout: 'fullscreen',
}

export const decorators = [
  Story => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
]
