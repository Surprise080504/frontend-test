import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import ExpandableList from '.'

test('does not render expand button when N of items is low', () => {
  render(
    <ExpandableList
      items={['one', 'two', 'three']}
      expandLabel="View all"
      max={3}
    />
  )
  const expandButton = screen.queryByText(/View all/i)
  expect(expandButton).not.toBeInTheDocument()
})

test('shows modal when expand button is clicked', async () => {
  render(
    <ExpandableList
      items={['one', 'two', 'three']}
      expandLabel="View all"
      max={2}
    />
  )
  const expandButton = screen.getByText(/View all/i)
  fireEvent.click(expandButton)

  await waitFor(() => {
    expect(screen.getByRole('dialog')).toHaveTextContent(/three/i)
  })
})
