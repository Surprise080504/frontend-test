import styled, { css } from 'styled-components'
import mq from 'styles/mq'
import theme from 'styles/theme'
import { paragraph, heading } from 'styles/typography'

export const Wrapper = styled.section`
  display: none;
  padding: 4rem;
  height: 100%;

  ${mq.large} {
    display: unset;
  }
`

export const Inner = styled.div`
  top: 4rem;
  position: sticky;
`

export const List = styled.ul`
  margin-top: 8rem;
`

export const ListItem = styled.li`
  ${paragraph.large.medium};
  margin-bottom: 2rem;

  a {
    color: ${theme.color.text.white};
    display: flex;
    align-items: center;
  }
`

export const Circle = styled.span<{ active: boolean; large?: boolean }>`
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
  background: blue;
  display: inline-block;
  margin-right: 1.8rem;
  background: linear-gradient(180deg, #0d8de6 12.5%, #3038e5 112.5%);
  opacity: ${props => (props.active ? 1 : 0)};
  transition: opacity 0.3s ${theme.ease.inOut};
  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    props.large &&
    css`
      width: 4rem;
      height: 4rem;
      opacity: ${props.active ? 1 : 0.2};
    `}
`

export const Title = styled.span<{ active: boolean; large?: boolean }>`
  display: inline-block;
  opacity: ${props => (props.active ? 1 : 0.3)};
  transition: transform 0.3s ${theme.ease.inOut};
  transform: translateX(${props => (props.active ? 0 : -3.4)}rem);

  &:hover {
    opacity: ${props => (props.active ? 1 : 0.7)};
  }

  ${props =>
    props.large &&
    css`
      ${heading.h5.regular};
      transform: none;
    `}
`
