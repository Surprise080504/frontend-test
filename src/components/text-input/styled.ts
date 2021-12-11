import styled from 'styled-components'
import theme from 'styles/theme'
import { paragraph } from 'styles/typography'

export const Wrapper = styled.div`
  position: relative;
  padding-top: 1rem;
  margin-bottom: 2rem;
`

export const Label = styled.label`
  ${paragraph.smaller.regular};
  display: block;
  padding: 0 0.7rem;
  position: absolute;
  left: 2rem;
  top: 0.3rem;
  background: ${theme.color.background.white};
  color: ${theme.color.text.light};
`

export const Input = styled.input`
  display: block;
  ${paragraph.small.medium};
  border: 0.1rem solid ${theme.color.border.light};
  border-radius: 1.5rem;
  background: ${theme.color.background.white};
  box-shadow: none;
  padding: 2rem;
  color: ${theme.color.text.midnight};
  width: 100%;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem ${theme.color.text.link};
  }
`
