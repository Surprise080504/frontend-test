import { forwardRef, InputHTMLAttributes } from 'react'
import { Wrapper, Input, Label } from './styled'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  id: string
}

const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ label, id, ...rest }: Props, ref) => (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} ref={ref} {...rest} />
    </Wrapper>
  )
)

export default TextInput
