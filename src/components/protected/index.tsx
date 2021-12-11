import { FC } from 'react'
import {
  Wrapper,
  Title,
  Content,
  Overlay,
  Message,
  SubscribeButton,
  LockIcon,
} from './styled'

export type Props = {
  isLocked: boolean
  title: string
  onSubscribe: () => void
}

const Protected: FC<Props> = ({ isLocked, title, onSubscribe, children }) => (
  <Wrapper>
    <Title>
      {isLocked && <LockIcon />} {title}
    </Title>
    <Content>
      {children}
      {isLocked && (
        <Overlay>
          <Message>
            Subscribe to get an access to a full version of the report
          </Message>
          <SubscribeButton onClick={() => onSubscribe()}>
            Subscribe
          </SubscribeButton>
        </Overlay>
      )}
    </Content>
  </Wrapper>
)

export default Protected
