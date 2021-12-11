import styled from 'styled-components'
import { PrimaryButton } from 'components/button'
import theme from 'styles/theme'
import mq from 'styles/mq'
import { heading, paragraph } from 'styles/typography'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${theme.color.background.white};
  border-radius: 1.5rem;
  padding: 2rem;

  ${mq.medium} {
    background: unset;
    padding: 0;
    margin: 0 0 5rem;
  }
`

export const Details = styled.div``

export const Title = styled.h4`
  ${paragraph.large.medium};
  margin: 0 0 0.5rem;

  ${mq.medium} {
    ${heading.h2.light};
    color: ${theme.color.text.white};
    margin: 0 0 1rem;
  }
`

export const Message = styled.p`
  ${paragraph.smaller.regular};
  margin: 0;
  color: ${theme.color.text.link};

  ${mq.medium} {
    ${paragraph.large.regular};
    color: ${theme.color.text.white};
  }
`

export const AddButton = styled(PrimaryButton)`
  width: 4.6rem;
  height: 4.6rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  svg:nth-of-type(1) {
    display: none;
    margin-left: 1.3rem;
  }

  span {
    display: none;
  }

  ${mq.medium} {
    width: 36rem;
    height: unset;
    border-radius: 1.5rem;
    padding: 1.4rem 2rem;

    svg:nth-of-type(1),
    span {
      display: unset;
    }

    svg:nth-of-type(2) {
      display: none;
    }
  }
`
