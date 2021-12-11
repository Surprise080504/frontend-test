import styled from 'styled-components'
import { PrimaryButton } from 'components/button'
import theme from 'styles/theme'
import mq from 'styles/mq'
import { heading, paragraph } from 'styles/typography'

export const Title = styled.h1`
  ${heading.h2.semiBold};
  margin: 0 0 2rem;
`

export const Text = styled.p`
  ${heading.h3.regular};
  margin: 0 0 4rem;
  text-align: center;

  ${mq.medium} {
    margin: 0 0 6rem;
  }
`

export const Form = styled.form`
  width: 100%;
  margin-bottom: 1.2rem;
`

export const SubmitButton = styled(PrimaryButton)`
  margin-top: 2rem;
`

export const Terms = styled.small`
  ${paragraph.smaller.regular};
  margin-bottom: 4rem;
`

export const SignIn = styled.p`
  ${paragraph.large.regular};
  margin: 0;
  color: ${theme.color.text.light};

  a {
    ${paragraph.large.medium};
  }
`

export const Alert = styled.div`
  ${paragraph.small.medium};
  background: ${theme.color.text.danger};
  padding: 1.5rem;
  border-radius: 1rem;
  color: ${theme.color.text.white};
  text-align: center;
  margin-bottom: 1rem;
`
