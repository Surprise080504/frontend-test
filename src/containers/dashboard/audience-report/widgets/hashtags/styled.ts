import styled from 'styled-components'
import mq from 'styles/mq'

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  align-items: center;

  ${mq.large} {
    flex-direction: row;
  }
`

export const CloudWrapper = styled.div`
  margin: -5rem -2rem 0 -2rem;
  max-width: 69.9rem;
  width: 100%;

  ${mq.medium} {
    margin: -8rem 0 -4rem 0;
  }

  ${mq.large} {
    margin: -12rem -10rem -10rem 0;
  }
`
