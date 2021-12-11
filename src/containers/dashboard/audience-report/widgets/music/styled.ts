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

export const ListWrapper = styled.div`
  ${mq.large} {
    max-width: 30rem;
  }
`

export const CloudWrapper = styled.div`
  margin: -3rem 0 0 0;
  max-width: 51.1rem;
  width: 100%;

  ${mq.medium} {
    margin: -8rem 0 0 0;
  }

  ${mq.large} {
    margin: -10rem 0 -5rem 0;
  }
`
