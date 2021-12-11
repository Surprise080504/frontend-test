import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'wouter'
import Layout from 'components/layouts/auth'
import TextInput from 'components/text-input'
import { Title, Form, SubmitButton, SignIn, Alert } from './styled'

type Values = {
  email: string
}

type Props = {
  onSubmit: (email: string) => Promise<void>
}

const SigninForm = ({ onSubmit }: Props) => {
  const [error, setError] = useState<string>('')
  const { register, handleSubmit, formState } = useForm({
    mode: 'onChange',
  })

  const onFormSubmit = async (values: Values) => {
    try {
      setError('')
      await onSubmit(values.email)
    } catch (err) {
      setError((err as Error).message)
    }
  }

  return (
    <Layout>
      <Title>Welcome back</Title>
      <Form onSubmit={handleSubmit(onFormSubmit)}>
        {error.length > 0 && <Alert>{error}</Alert>}
        <TextInput
          label="Your email"
          id="email"
          type="email"
          placeholder="example@test.com"
          {...register('email', { required: true })}
        />
        <SubmitButton type="submit" disabled={!formState.isValid}>
          Log in
        </SubmitButton>
      </Form>
      <SignIn>
        New user? <Link href="/signup">Sign up</Link>
      </SignIn>
    </Layout>
  )
}

export default SigninForm
