import styled from 'styled-components'
import mq from 'styles/mq'
import theme from 'styles/theme'
import { paragraph } from 'styles/typography'

export const Wrapper = styled.div`
  padding: 3rem 4.6rem;
  color: ${theme.color.text.white};
  ${paragraph.smaller.medium};
  text-align: center;

  ${mq.large} {
    padding: 0;
    text-align: right;
  }
`

export const Label = styled.div`
  color: ${theme.color.text.muted};
  ${paragraph.small.regular};
  margin-bottom: 0.7rem;

  ${mq.medium} {
    display: none;
  }
`

export const Link = styled.div`
  cursor: pointer;
  ${paragraph.large.medium};
  word-break: break-all;
  display: inline-flex;
  align-items: center;

  svg {
    display: none;
  }

  &:hover {
    opacity: 0.8;
  }

  ${mq.medium} {
    svg {
      display: unset;
      margin-right: 1rem;
    }
  }
`
