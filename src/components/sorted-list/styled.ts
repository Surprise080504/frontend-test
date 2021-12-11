import styled, { css } from 'styled-components'
import mq from 'styles/mq'
import theme from 'styles/theme'
import { paragraph } from 'styles/typography'

export const List = styled.ul<{ multiColumns: boolean }>`
  margin-bottom: 2rem;
  column-count: 1;

  ${props =>
    props.multiColumns &&
    css`
      ${mq.medium} {
        column-count: 2;
      }

      ${mq.large} {
        column-count: 3;
      }
    `}
`

export const ListItem = styled.li`
  padding: 1.3rem 2rem;
  border-radius: 3rem;
  background: ${theme.color.background.white};
  margin-bottom: 0.4rem;
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

export const Index = styled.span<{ color: string }>`
  min-width: 3.4rem;
  min-height: 3.4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.color.text.white};
  ${paragraph.large.bold};
  background: ${props => props.color};
  margin-right: 1rem;
`

export const Label = styled.span`
  display: flex;
  align-items: center;
  overflow: hidden;
`

export const Text = styled.span`
  ${paragraph.large.medium};
  color: ${theme.color.text.midnight};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  & + * {
    margin-left: 1.5rem;
  }
`
