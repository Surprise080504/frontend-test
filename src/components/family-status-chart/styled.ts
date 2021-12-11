import styled from 'styled-components'
import { heading, paragraph } from 'styles/typography'
import mq from 'styles/mq'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 45rem;
`

export const Svg = styled.svg`
  max-width: 47.6rem;
`

export const Progress = styled.circle`
  transform-origin: center;
  transform: rotate(-90deg) translateX(1.05rem);
  stroke-linecap: round;
`

export const Text = styled.text`
  ${heading.h3.bold};
  transform-origin: center;
`

export const Title = styled.h3`
  ${paragraph.large.bold};
  margin-bottom: 1.7rem;
  text-align: center;
  text-transform: capitalize;

  ${mq.medium} {
    ${heading.h5.bold};
    margin-bottom: 2.4rem;
  }
`
