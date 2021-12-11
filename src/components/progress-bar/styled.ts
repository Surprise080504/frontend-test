import styled from 'styled-components'
import theme from 'styles/theme'

export const Label = styled.div`
  margin-bottom: 0.8rem;
`

export const ProgressWrapper = styled.div`
  background: ${theme.color.background.white};
  height: 0.8rem;
  width: 100%;
  max-width: 67rem;
  border-radius: 2rem;
  margin-bottom: 2rem;
`

export const ProgressValue = styled.div<{ width: number }>`
  background: linear-gradient(
    90deg,
    #91bbfb 4.5%,
    #2489e7 49.76%,
    #3038e5 84.14%
  );
  border-radius: inherit;
  height: inherit;
  clip-path: inset(0% ${props => 100 - props.width}% 0 0% round 2rem);
  transition: clip-path 0.3s ${theme.ease.inOut};
`
