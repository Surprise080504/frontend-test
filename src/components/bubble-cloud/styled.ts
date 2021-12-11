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
  max-width: 69.9rem;
  max-height: 68rem;

  ${mq.medium} {
    width: 100%;
  }
`

export const Wrapper = styled.div`
  position: relative;
  padding-top: 97.2818311874%; /* designHeight / designWidth * 100% */
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
  height: 100%;
  max-height: inherit;
  position: absolute;
  left: 0;
  top: 0;
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
    top: 33.2%;
    left: 39.5%;
    height: 27%;
    width: 27%;
  }

  &:nth-child(2) {
    top: 56.7%;
    left: 26.3%;
    height: 19%;
    width: 19%;
  }

  &:nth-child(3) {
    top: 28.8%;
    left: 22%;
    height: 15%;
    width: 15%;
  }

  &:nth-child(4) {
    top: 17%;
    left: 52%;
    height: 15%;
    width: 15%;
  }

  &:nth-child(5) {
    top: 38.9%;
    left: 68.7%;
    height: 13%;
    width: 13%;
  }

  &:nth-child(6) {
    top: 59.7%;
    left: 57.2%;
    height: 13%;
    width: 13%;
  }

  &:nth-child(7) {
    top: 46.2%;
    left: 16.3%;
    height: 11%;
    width: 11%;
  }

  &:nth-child(2),
  &:nth-child(3),
  &:nth-child(4) {
    font-size: 0.8em;
  }

  &:nth-child(5),
  &:nth-child(6),
  &:nth-child(7) {
    font-size: 0.6em;
  }
`
