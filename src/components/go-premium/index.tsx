import ChevronRightIcon from 'components/icons/chevron-right'
import CrownIcon from 'components/icons/crown'
import { Wrapper, Body, Title, Message } from './styled'

export type Props = {}

const GoPremium = ({}: Props) => (
  <Wrapper>
    <Body>
      <Title>
        <CrownIcon />
        <span>Go Premium</span>
      </Title>
      <Message>Buy premium to view audience data</Message>
    </Body>
    <ChevronRightIcon />
  </Wrapper>
)

export default GoPremium
