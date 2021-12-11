import { createContext, FC, useState, useContext } from 'react'
import { useLocation } from 'wouter'
import { TokenResponse } from 'common/types'
import auth from 'common/auth'

type State = {
  isAuthenticated: boolean
  username: string
  login: (payload: TokenResponse) => void
  logout: () => void
}

const UserContext = createContext<State>({
  isAuthenticated: false,
  username: '',
  login: () => ({}),
  logout: () => ({}),
})

const UserContextProvider: FC = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(auth.isAuthenticated())
  const [username, setUsername] = useState(auth.getUsername() || '')
  const [, setLocation] = useLocation()

  const login = (payload: TokenResponse) => {
    auth.login(payload)
    setAuthenticated(true)
    setUsername(payload.handle)
    setLocation('/')
  }

  const logout = () => {
    auth.logout()
    setLocation('/login')
  }

  return (
    <UserContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        username,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider

export const useUserContext = () => {
  return useContext(UserContext)
}
