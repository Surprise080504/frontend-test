import { TokenResponse } from 'common/types'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'

const ACCESS_TOKEN = 'access_token'
const USER_HANDLE = 'user_handle'

const isTokenValid = (token: string) => {
  try {
    const decoded: { exp: number } = jwtDecode(token)
    return new Date(decoded.exp * 1000) > new Date()
  } catch {
    return false
  }
}

const login = (payload: TokenResponse) => {
  Cookies.set(ACCESS_TOKEN, payload.api_token)
  Cookies.set(USER_HANDLE, payload.handle)
}

const logout = () => {
  Cookies.remove(ACCESS_TOKEN)
  Cookies.remove(USER_HANDLE)
}

const getToken = () => Cookies.get(ACCESS_TOKEN)

const getUsername = () => Cookies.get(USER_HANDLE)

const isAuthenticated = () => {
  const token = getToken()
  const username = getUsername()

  if (!token || !username) {
    return false
  }
  return true // isTokenValid(token)
}

export default {
  login,
  logout,
  getToken,
  getUsername,
  isAuthenticated,
  isTokenValid,
}
