import { FC } from 'react'
import { Wrapper, Logo } from './styled'

const AuthLayout: FC = ({ children }) => (
  <Wrapper>
    <Logo />
    {children}
  </Wrapper>
)

export default AuthLayout
