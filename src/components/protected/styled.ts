import styled from 'styled-components'
import { PrimaryButton } from 'components/button'
import PadlockIcon from 'components/icons/padlock'
import theme from 'styles/theme'
import { heading, paragraph } from 'styles/typography'
import mq from 'styles/mq'

export const Wrapper = styled.section``

export const Title = styled.h4`
  ${paragraph.large.regular};
  color: ${theme.color.text.white};
  display: flex;
  align-items: center;
  margin: 0 0 1.3rem;

  ${mq.medium} {
    ${heading.h2.light};
  }
`

export const Content = styled.div`
  position: relative;
`

export const Overlay = styled.div`
  position: absolute;
  top: -1rem;
  left: -1rem;
  right: -1rem;
  bottom: -1rem;
  backdrop-filter: blur(0.8rem);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(32 41 90 / 80%);

  ${mq.medium} {
    flex-direction: column;
    background: rgb(49 56 229 / 80%);
  }
`

export const Message = styled.p`
  ${paragraph.large.regular};
  color: ${theme.color.text.white};

  ${mq.medium} {
    margin: 0 0 1.5rem;
  }
`

export const SubscribeButton = styled(PrimaryButton)`
  max-width: 12rem;
  margin: 0 auto;

  ${mq.medium} {
    max-width: 22rem;
  }
`

export const LockIcon = styled(PadlockIcon)`
  width: 2rem;
  height: 2rem;
  margin-right: 0.7rem;

  ${mq.medium} {
    width: 3.6rem;
    height: 3.6rem;
  }
`
