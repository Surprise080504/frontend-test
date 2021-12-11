import styled from 'styled-components'
import mq from 'styles/mq'
import theme from 'styles/theme'
import { heading, paragraph } from 'styles/typography'

export const Section = styled.section`
  background: ${theme.color.background.light};
  padding: 4rem 2rem;
  border-radius: 1.2rem;
  margin-bottom: 1rem;
  position: relative;

  ${mq.medium} {
    padding: 6rem;
    margin-bottom: 2rem;
  }

  ${mq.large} {
    padding: 6rem 10rem 8rem;
  }
`

export const Header = styled.div`
  ${heading.h4.bold};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Content = styled.div`
  margin-top: 3.5rem;

  ${mq.medium} {
    margin-top: 6rem;
  }
`

export const ShareButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  ${mq.medium} {
    display: none;
  }
`

export const SharedImage = styled.img`
  width: 100%;
  object-fit: contain;
  max-height: 50rem;
  border: 0.2rem solid ${theme.color.text.white};
  border-radius: 1.5rem;
  margin-bottom: 2rem;
`

export const Prompt = styled.p`
  margin: 0 0 2rem;
`

export const Watermark = styled.div`
  ${paragraph.smaller.medium};
  position: absolute;
  right: 0;
  bottom: 1rem;
  left: 0;
  text-align: center;
  display: none;
`
