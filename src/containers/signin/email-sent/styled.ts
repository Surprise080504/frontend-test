import styled from 'styled-components'
import mq from 'styles/mq'
import theme from 'styles/theme'
import { heading } from 'styles/typography'

export const Wrapper = styled.div`
  background: linear-gradient(180deg, #0d8fe6 21.88%, #3038e5 100%);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -2;
  overflow: hidden;
`

export const Inner = styled.div`
  text-align: center;
  max-width: 52rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -15rem;

  ${mq.medium} {
    margin-top: -10rem;
  }
`

export const Title = styled.h1`
  ${heading.h3.bold};
  text-transform: capitalize;
  color: ${theme.color.text.white};
  margin-bottom: 2rem;
`

export const Text = styled.p`
  ${heading.h5.regular};
  color: ${theme.color.text.white};
  margin: 0;
  padding: 0 4.7rem;

  ${mq.medium} {
    padding: 0;
  }
`
