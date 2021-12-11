import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import SigninForm from '.'

test('submits valid form', async () => {
  const handleSubmit = jest.fn()
  render(<SigninForm onSubmit={handleSubmit} />)

  await waitFor(() => {
    fireEvent.change(screen.getByLabelText(/Your email/i), {
      target: {
        value: 'user@test.com',
      },
    })
    fireEvent.click(screen.getByText(/Log in/i))

    expect(handleSubmit.mock.calls.length).toEqual(1)
  })
})

test('requires email', async () => {
  const handleSubmit = jest.fn()
  render(<SigninForm onSubmit={handleSubmit} />)

  await waitFor(() => {
    fireEvent.click(screen.getByText(/Log in/i))

    expect(handleSubmit.mock.calls.length).toEqual(0)
  })
})
