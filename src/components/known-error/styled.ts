import styled from 'styled-components'
import mq from 'styles/mq'
import theme from 'styles/theme'

export const Wrapper = styled.section`
  background: ${theme.color.background.light};
  padding: 4rem 2rem;
  border-radius: 1.2rem;
  text-align: center;
  margin: 1.6rem;

  ${mq.medium} {
    margin: 0;
  }
`
