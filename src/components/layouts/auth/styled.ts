import LogoAlt from 'components/icons/logo-alt'
import styled from 'styled-components'
import mq from 'styles/mq'

export const Wrapper = styled.section`
  max-width: 52rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  padding: 0 4rem;

  ${mq.medium} {
    padding: 0;
    width: 40rem;
  }
`

export const Logo = styled(LogoAlt)`
  display: none;
  margin-bottom: 7.6rem;

  ${mq.medium} {
    display: unset;
  }
`
