import styled from 'styled-components'
import mq from 'styles/mq'
import theme from 'styles/theme'
import { heading, paragraph } from 'styles/typography'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 22.8rem;
`

export const Svg = styled.svg<{ value: number }>`
  path {
    transition: clip-path 0.3s ${theme.ease.inOut};

    &:nth-child(1) {
      fill: white;
    }

    &:nth-child(2) {
      fill: url(#gradient);
      clip-path: inset(${props => 100 - props.value}% 0 0 0);
    }
  }
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
