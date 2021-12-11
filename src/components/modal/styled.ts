import styled from '@emotion/styled'
import Close from 'components/icons/close'
import mq from 'styles/mq'
import theme from 'styles/theme'

export const Overlay = styled.div`
  background: rgb(9 16 55 / 40%);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  transition: opacity 0.3s;

  &.enter {
    opacity: 0;
  }

  &.enter-active {
    opacity: 1;
  }

  &.exit {
    opacity: 1;
  }

  &.exit-active {
    opacity: 0;
  }
`

export const Content = styled.div`
  transition: transform 0.3s ${theme.ease.out};

  &.enter {
    transform: translateY(100%);
  }

  &.enter-active {
    transform: none;
  }

  &.exit {
    transform: none;
  }

  &.exit-active {
    transition-timing-function: ${theme.ease.in};
    transform: translateY(100%);
  }

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  overflow: auto;
  z-index: 4;
  margin: 2.7rem 1.6rem 0;

  ${mq.medium} {
    margin: 5rem 4rem 0;
  }

  ${mq.large} {
    margin: 10rem auto 0;
    width: 100%;
    max-width: 117rem;
  }
`

export const Panel = styled.section`
  background: ${theme.color.background.light};
  padding: 5rem 2rem 8rem;
  text-align: center;
  overflow-y: auto;
  border-radius: 1.2rem;
  margin-top: 3rem;
  max-height: 85vh;

  ${mq.medium} {
    padding: 8rem 10rem 9rem;
  }

  ${mq.large} {
    height: auto;
    max-height: 67rem;
  }
`

export const CloseIcon = styled(Close)`
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  position: absolute;
  right: 0;
  top: 0;

  &:hover {
    transform: rotateZ(-90deg);
  }
`
