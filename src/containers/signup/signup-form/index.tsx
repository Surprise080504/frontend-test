import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'wouter'
import { formatUsername } from 'common/utils'
import Layout from 'components/layouts/auth'
import TextInput from 'components/text-input'
import { Title, Text, Form, SubmitButton, Terms, SignIn, Alert } from './styled'

type Values = {
  username: string
  email: string
}

type Props = {
  onSubmit: (username: string, email: string) => Promise<void>
}

const SignupForm = ({ onSubmit }: Props) => {
  const [error, setError] = useState<string>('')
  const { register, handleSubmit, formState } = useForm({
    mode: 'onChange',
  })

  const onFormSubmit = async (values: Values) => {
    try {
      setError('')
      await onSubmit(formatUsername(values.username), values.email)
    } catch (err) {
      setError((err as Error).message)
    }
  }

  return (
    <Layout>
      <Title>Welcome</Title>
      <Text>Get started by creating your account</Text>
      <Form onSubmit={handleSubmit(onFormSubmit)}>
        {error.length > 0 && <Alert>{error}</Alert>}
        <TextInput
          label="Your instagram handle"
          id="username"
          placeholder="@username"
          {...register('username', { required: true })}
        />
        <TextInput
          label="Your email"
          id="email"
          type="email"
          placeholder="example@test.com"
          {...register('email', { required: true })}
        />
        <SubmitButton type="submit" disabled={!formState.isValid}>
          Sign up
        </SubmitButton>
      </Form>
      <Terms>
        By signin up you agree to our{' '}
        <a href="#" target="_blank" rel="noopener noreferrer">
          Terms & Conditions
        </a>{' '}
        and{' '}
        <a href="#" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>
      </Terms>
      <SignIn>
        Have an account? <Link href="/login">Log in</Link>
      </SignIn>
    </Layout>
  )
}

export default SignupForm
