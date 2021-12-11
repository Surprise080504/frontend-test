import ChevronRightIcon from 'components/icons/chevron-right'
import styled from 'styled-components'
import theme from 'styles/theme'
import mq from 'styles/mq'
import { heading, paragraph } from 'styles/typography'

export const Wrapper = styled.li`
  border-radius: 1.5rem;
  list-style: none;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  cursor: pointer;
  margin-bottom: 1.5rem;

  ${mq.medium} {
    padding: 2.5rem;
    background: ${theme.color.background.white};
  }
`

export const AvatarList = styled.div``

export const Avatar = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  border: 0.4rem solid ${theme.color.background.dark};

  &:not(:first-child) {
    margin-left: -2rem;
  }

  ${mq.medium} {
    border-color: ${theme.color.background.white};
  }
`

export const Details = styled.div`
  padding: 0 2rem;
`

export const ChevronRight = styled(ChevronRightIcon)`
  color: ${theme.color.text.white};

  ${mq.medium} {
    color: ${theme.color.text.light};
  }
`

export const Title = styled.strong`
  ${paragraph.small.medium};
  display: block;
  color: ${theme.color.text.white};
  margin-bottom: 0.2rem;

  ${mq.medium} {
    color: unset;
    ${heading.h3.medium};
    margin-bottom: 0.8rem;
  }
`

export const Subtitle = styled.small`
  ${paragraph.smaller.regular};
  color: ${theme.color.text.light};

  span {
    color: ${theme.color.text.link};
  }

  ${mq.medium} {
    ${paragraph.large.regular};
  }
`
