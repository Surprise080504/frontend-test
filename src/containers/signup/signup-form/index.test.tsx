import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import SignupForm from '.'

test('submits valid form', async () => {
  const handleSubmit = jest.fn()
  render(<SignupForm onSubmit={handleSubmit} />)

  await waitFor(() => {
    fireEvent.change(screen.getByLabelText(/Your instagram handle/i), {
      target: {
        value: 'myhandle',
      },
    })
    fireEvent.change(screen.getByLabelText(/Your email/i), {
      target: {
        value: 'user@test.com',
      },
    })
    fireEvent.click(screen.getByText(/Sign up/i))

    expect(handleSubmit.mock.calls.length).toEqual(1)
  })
})

test('requires username', async () => {
  const handleSubmit = jest.fn()
  render(<SignupForm onSubmit={handleSubmit} />)

  await waitFor(() => {
    fireEvent.change(screen.getByLabelText(/Your email/i), {
      target: {
        value: 'user@test.com',
      },
    })
    fireEvent.click(screen.getByText(/Sign up/i))

    expect(handleSubmit.mock.calls.length).toEqual(0)
  })
})

test('requires email', async () => {
  const handleSubmit = jest.fn()
  render(<SignupForm onSubmit={handleSubmit} />)

  await waitFor(() => {
    fireEvent.change(screen.getByLabelText(/Your instagram handle/i), {
      target: {
        value: 'myhandle',
      },
    })
    fireEvent.click(screen.getByText(/Sign up/i))

    expect(handleSubmit.mock.calls.length).toEqual(0)
  })
})
