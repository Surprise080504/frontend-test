import styled, { keyframes } from 'styled-components'
import mq from 'styles/mq'
import theme from 'styles/theme'
import { heading, paragraph } from 'styles/typography'

const popIn = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`

export const Outer = styled.div`
  width: 100%;
  max-width: 51.1rem;
  max-height: 51.1rem;
`

export const Wrapper = styled.div`
  position: relative;
  padding-top: 100%; /* designHeight / designWidth * 100% */
`

export const Frame = styled.img`
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1;
`

export const Circles = styled.div`
  ${paragraph.large.medium};
  width: 100%;
  max-height: inherit;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;

  ${mq.medium} {
    ${heading.h3.bold};
  }
`

export const Circle = styled.span`
  text-align: center;
  color: ${theme.color.text.white};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  text-shadow: 0 0.6rem 0.6rem rgb(0 0 0 / 25%);
  animation: 0.3s ${popIn} ${theme.ease.inOut} forwards;

  &:nth-child(1) {
    top: 11%;
    left: 18%;
    height: 33%;
    width: 33%;
  }

  &:nth-child(2) {
    top: 65.5%;
    left: 36.5%;
    height: 24%;
    width: 24%;
  }

  &:nth-child(3) {
    top: 17%;
    left: 60.5%;
    height: 19%;
    width: 19%;
  }

  &:nth-child(4) {
    top: 56%;
    left: 69%;
    height: 16%;
    width: 16%;
  }

  &:nth-child(5) {
    top: 57%;
    left: 15.5%;
    height: 13%;
    width: 13%;
  }

  &:nth-child(2),
  &:nth-child(3) {
    font-size: 0.8em;
  }

  &:nth-child(4),
  &:nth-child(5) {
    font-size: 0.7em;
  }
`
