import styled from 'styled-components'
import mq from 'styles/mq'
import theme from 'styles/theme'
import { heading, paragraph } from 'styles/typography'

export const Wrapper = styled.section`
  background: linear-gradient(180deg, #0d8fe6 21.88%, #3038e5 100%);
  border-radius: 0 0 2.6rem 2.6rem;
  margin-bottom: 4rem;

  ${mq.medium} {
    background: none;
    margin-bottom: 0;
  }

  ${mq.large} {
    margin-bottom: 2.4rem;
  }
`

export const Image = styled.img`
  border-radius: 50%;
  box-shadow: 0 0 0 0.4rem white;
  width: 12.2rem;
  display: block;
  margin: 0 auto 2rem;

  ${mq.large} {
    width: 14rem;
    margin: 0 3rem 0 0;
  }
`

export const Username = styled.p`
  color: ${theme.color.text.white};
  ${heading.h5.regular};
  margin: 0 0 1rem;

  ${mq.medium} {
    ${heading.h2.light};
  }
`

export const Location = styled.span`
  color: ${theme.color.text.muted};
  ${paragraph.large.regular};
`

export const Details = styled.div`
  border-bottom: 0.1rem solid rgb(255 255 255 / 30%);
  padding: 2rem 5rem 3rem;

  ${mq.large} {
    border-bottom: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 0 2.5rem;
  }
`

export const UsernameWrapper = styled.div`
  text-align: center;

  ${mq.large} {
    text-align: left;
  }
`

export const PersonalInfo = styled.div`
  margin-bottom: 3.7rem;

  ${mq.large} {
    display: flex;
    margin-bottom: 0;
    align-items: center;
  }
`

export const StatsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export const StatsItem = styled.div`
  text-align: center;
  margin: 0 2rem;

  ${mq.medium} {
    margin: 0;
  }

  ${mq.large} {
    &:not(:first-child) {
      margin-left: 8rem;
    }
  }
`

export const Value = styled.div`
  ${heading.h5.bold};
  color: ${theme.color.text.white};

  ${mq.medium} {
    ${heading.h3.bold};
  }

  ${mq.large} {
    ${heading.h1.bold};
  }
`

export const Label = styled.div`
  color: ${theme.color.text.muted};
  ${paragraph.smaller.regular};

  ${mq.medium} {
    ${paragraph.large.regular};
  }

  ${mq.large} {
    ${heading.h5.regular};
  }
`
