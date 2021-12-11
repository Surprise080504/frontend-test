import { render, fireEvent, screen } from '@testing-library/react'
import Sidebar from '.'

test('triggers section change', () => {
  const handleChange = jest.fn()
  render(<Sidebar currentSection="interests" onSectionChange={handleChange} />)
  fireEvent.click(screen.getByText(/Audience ages/i))
  expect(handleChange.mock.calls.length).toEqual(1)
})
