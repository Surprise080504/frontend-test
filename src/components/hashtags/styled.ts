import styled from 'styled-components'
import theme from 'styles/theme'

import { paragraph } from 'styles/typography'

export const Wrapper = styled.div`
  max-width: 37rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const Tag = styled.span<{ color: string }>`
  ${paragraph.small.medium};
  background: ${theme.color.background.white};
  padding: 0.8rem 1rem;
  border-radius: 5rem;
  margin: 0 0.7rem 0.7rem 0;
  color: ${props => props.color};
`
