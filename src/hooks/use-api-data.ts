import { useEffect, useState } from 'react'

const useApiData = <T>(loader: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    loader()
      .then(json => {
        setData(json)
      })
      .catch(err => {
        console.log(err)
        setError(err.message)
      })
      .finally(() => setLoading(false))
  }, [])

  return { data, isLoading, error }
}

export default useApiData
