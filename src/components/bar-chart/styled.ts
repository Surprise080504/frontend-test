import styled from 'styled-components'

export const Bar = styled.div`
  margin-bottom: 3rem;
  height: 1.6rem;
  display: flex;
  border-radius: 1rem;
  overflow: hidden;
`

export const BarItem = styled.div<{ color: string; width: number }>`
  background: ${props => props.color};
  width: ${props => props.width}%;
  height: inherit;
`
