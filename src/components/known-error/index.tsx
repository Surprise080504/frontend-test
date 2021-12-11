import { Wrapper } from './styled'

type Props = {
  message: string
}

const errorMap: { [str: string]: string } = {
  'Influencer not found': 'No data for this Instagram handle',
}

const KnownError = ({ message }: Props) => {
  const msg = errorMap[message] || message

  return (
    <Wrapper>
      <h3>{msg}</h3>
    </Wrapper>
  )
}

export default KnownError
