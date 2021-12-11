import styled from 'styled-components'

import theme from 'styles/theme'
import { paragraph } from 'styles/typography'

export const PrimaryButton = styled.button`
  ${paragraph.large.medium};
  padding: 1.4rem 2rem;
  color: ${theme.color.text.white};
  background: ${theme.color.text.link};
  border: none;
  border-radius: 4rem;
  cursor: pointer;
  display: inline-block;
  width: 100%;

  &:hover {
    opacity: 0.8;
  }

  &[disabled] {
    opacity: 0.3;
  }
`

export const InvertedButton = styled(PrimaryButton)`
  background: ${theme.color.background.white};
  color: ${theme.color.text.link};
  border: none;
`

export const OutlineButton = styled(PrimaryButton)`
  border: 0.1rem solid ${theme.color.text.link};
  background: none;
  color: ${theme.color.text.link};
`

export const RoundButton = styled(PrimaryButton)`
  width: 6.6rem;
  height: 6.6rem;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
