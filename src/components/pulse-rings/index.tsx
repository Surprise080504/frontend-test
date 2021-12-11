import { Wrapper, Icon } from './styled'

type Props = {
  icon: string
}

const PulseRings = ({ icon }: Props) => (
  <Wrapper>
    <Icon src={icon} />
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
  </Wrapper>
)

export default PulseRings
