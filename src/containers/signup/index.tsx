import { useState } from 'react'
import SignupForm from './signup-form'
import EmailSent from './email-sent'
import api from 'common/api'

const Signup = () => {
  const [isSubmitted, setSubmitted] = useState(false)

  const handleSubmit = async (username: string, email: string) => {
    await api.sendSignupLink(username, email)
    setSubmitted(true)
  }

  return isSubmitted ? <EmailSent /> : <SignupForm onSubmit={handleSubmit} />
}

export default Signup
