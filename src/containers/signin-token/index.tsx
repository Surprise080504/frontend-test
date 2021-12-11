import { useEffect } from 'react'
import { useLocation } from 'wouter'
import { useUserContext } from 'context/user'
import AuthLayout from 'components/layouts/auth'
import api from 'common/api'

type Props = {
  token: string
}

const SigninToken = ({ token }: Props) => {
  const [, setLocation] = useLocation()
  const { login } = useUserContext()

  const signin = async () => {
    try {
      const response = await api.signin(token)
      login(response)
    } catch {
      setLocation('/login')
    }
  }
  useEffect(() => {
    signin()
  }, [])

  return <AuthLayout>Logging you in...</AuthLayout>
}

export default SigninToken
