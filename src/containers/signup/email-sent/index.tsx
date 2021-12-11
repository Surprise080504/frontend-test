import PulseRings from 'components/pulse-rings'
import EnvelopeIcon from './envelope.png'
import { Wrapper, Inner, Title, Text } from './styled'

const EmailSent = () => (
  <Wrapper>
    <Inner>
      <PulseRings icon={EnvelopeIcon} />
      <Title>Registration email sent</Title>
      <Text>
        To complete the registration process look for an email in your inbox
        that provides further instructions.
      </Text>
    </Inner>
  </Wrapper>
)

export default EmailSent
