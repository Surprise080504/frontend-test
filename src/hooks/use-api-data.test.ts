import { renderHook, act } from '@testing-library/react-hooks'
import useApiData from './use-api-data'

test('fetches data from API', async () => {
  const apiData = { items: [] }
  const apiPromise = Promise.resolve(apiData)

  const loader = jest.fn(() => apiPromise)
  const { result } = renderHook(loader => useApiData(loader), {
    initialProps: loader,
  })

  await act(async () => void apiPromise)

  expect(result.current.data).toEqual(apiData)
  expect(loader.mock.calls.length).toEqual(1)
})
