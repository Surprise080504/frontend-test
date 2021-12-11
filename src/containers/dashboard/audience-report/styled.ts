import styled from 'styled-components'
import mq from 'styles/mq'

export const Sections = styled.div`
  padding: 0 1.6rem 7.5rem;

  ${mq.medium} {
    padding: 0;
  }
`

export const TwoColumns = styled.div`
  display: grid;
  column-gap: 2rem;

  ${mq.large} {
    grid-template-columns: 1fr 1fr;
  }
`
