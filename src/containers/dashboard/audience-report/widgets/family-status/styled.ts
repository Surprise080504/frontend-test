import styled from 'styled-components'
import mq from 'styles/mq'

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  ${mq.medium} {
    flex-direction: row;
    padding-bottom: 4rem;
  }
`
