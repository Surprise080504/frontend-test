import { Label, ProgressWrapper, ProgressValue } from './styled'

export type Props = {
  label: string
  value: number
  max: number
}

const ProgressBar = ({ label, value, max }: Props) => {
  const width = (value / max) * 100
  return (
    <>
      <Label>{label}</Label>
      <ProgressWrapper>
        <ProgressValue width={width} />
      </ProgressWrapper>
    </>
  )
}

export default ProgressBar
