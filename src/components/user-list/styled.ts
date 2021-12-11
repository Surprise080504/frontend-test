import styled from 'styled-components'
import theme from 'styles/theme'
import { paragraph } from 'styles/typography'

export const List = styled.ul``

export const ListItem = styled.li`
  padding: 1.5rem;
  border-radius: 5rem;
  background: ${theme.color.background.white};
  margin-bottom: 0.5rem;
  width: 100%;
  display: grid;
  grid-template-columns: 4.6rem 1fr 5.5rem;
`

export const Picture = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
`

export const Username = styled.strong`
  ${paragraph.small.bold};
  display: block;
`

export const Name = styled.span`
  ${paragraph.smaller.regular};
`

export const Value = styled.span<{ color: string }>`
  ${paragraph.large.bold};
  border-radius: 5rem;
  background: ${props => props.color};
  color: ${theme.color.text.white};
  display: flex;
  align-items: center;
  justify-content: center;
`
