import styled from 'styled-components'
import mq from 'styles/mq'

import theme from 'styles/theme'
import { heading, paragraph } from 'styles/typography'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${theme.color.background.dark};
  border-radius: 1.5rem;
  padding: 2rem;
  color: ${theme.color.text.white};

  ${mq.medium} {
    max-width: 43rem;
  }
`

export const Body = styled.div``

export const Title = styled.h5`
  ${heading.h5.bold};
  display: flex;
  margin: 0 0 0.5rem;

  svg {
    margin-right: 0.7rem;
  }
`

export const Message = styled.p`
  ${paragraph.small.regular};
  margin: 0;
`
