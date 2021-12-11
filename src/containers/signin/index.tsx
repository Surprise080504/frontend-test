import { useState } from 'react'
import { useLocation } from 'wouter'
import SigninForm from './signin-form'
import EmailSent from './email-sent'
import api from 'common/api'

const Signin = () => {
  const [isSubmitted, setSubmitted] = useState(false)
  const [, setLocation] = useLocation()

  const handleSubmit = async (email: string) => {
    if (process.env.NODE_ENV === 'production') {
      await api.sendSigninLink(email)
      setSubmitted(true)
    } else {
      setLocation('/')
    }
  }

  return isSubmitted ? <EmailSent /> : <SigninForm onSubmit={handleSubmit} />
}

export default Signin
