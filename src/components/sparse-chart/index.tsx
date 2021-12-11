import frame from './frame.png'
import { Wrapper, Label, Value } from './styled'

export type Props = {
  label: string
  value: number
}

const SparseChart = ({ label, value }: Props) => (
  <Wrapper>
    <Label>{label}</Label>
    <Value frameUrl={frame} value={Math.floor(value / 0.25)} />
  </Wrapper>
)

export default SparseChart
