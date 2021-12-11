import styled from 'styled-components'
import theme from 'styles/theme'
import { paragraph } from 'styles/typography'

export const Wrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 7rem 1fr;
  margin-bottom: 0.6rem;
`

export const Label = styled.div`
  ${paragraph.large.medium};
  color: ${theme.color.text.midnight};
`

export const Value = styled.div<{ frameUrl: string; value: number }>`
  background: url(${props => props.frameUrl}) 0
      ${props => (props.value + 1) * 6}rem,
    linear-gradient(
      270deg,
      #ffffff 10%,
      rgba(255, 255, 255, 0.29) 60.63%,
      rgba(255, 255, 255, 0.06) 100%
    );
  border-radius: 0.6rem;
  max-width: 89.3rem;
  overflow: hidden;
  height: 6rem;
  display: flex;
  align-items: center;
`
