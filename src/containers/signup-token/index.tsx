import { useEffect } from 'react'
import { useLocation } from 'wouter'
import { useUserContext } from 'context/user'
import AuthLayout from 'components/layouts/auth'
import api from 'common/api'

type Props = {
  token: string
}

const SignupToken = ({ token }: Props) => {
  const [, setLocation] = useLocation()
  const { login } = useUserContext()

  const signup = async () => {
    try {
      const response = await api.signup(token)
      login(response)
    } catch {
      setLocation('/signup')
    }
  }
  useEffect(() => {
    signup()
  }, [])

  return <AuthLayout>Creating your account...</AuthLayout>
}

export default SignupToken
