import styled from 'styled-components'
import mq from 'styles/mq'
import theme from 'styles/theme'

export const Page = styled.section`
  display: grid;
  min-height: 100vh;
  background: ${theme.color.background.dark};

  ${mq.large} {
    grid-template-columns: 32rem 1fr;
  }
`

export const Content = styled.section`
  ${mq.medium} {
    padding: 4.5rem 5rem 10rem;
    background: linear-gradient(180deg, #0d8fe6 0%, #3038e5 10%) no-repeat;
  }

  ${mq.large} {
    border-radius: 3rem 0 0 3rem;
    padding: 4.5rem 10rem 30rem;
  }
`
