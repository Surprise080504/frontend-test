import { ProfileResponse, DetailsResponse, TokenResponse } from 'common/types'
import auth from 'common/auth'

type Headers = {
  [key: string]: string
}

const API_URL = 'https://tool.magiclytics.com/api'

const api = async <T>(
  url: string,
  method = 'GET',
  body?: object,
  headers: object = {}
) => {
  const defaultHeaders: Headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }
  const token = auth.getToken()
  const authHeaders = token ? { API_TOKEN: token } : {}

  const response = await fetch(`${API_URL}/${url}`, {
    method,
    ...(body ? { body: JSON.stringify(body) } : null),
    headers: Object.assign(defaultHeaders, authHeaders, headers),
  })

  if (response.status >= 400 && response.status < 599) {
    const err = await response.json()
    throw new Error(err.message)
  }

  const json = (await response.json()) as T
  return json
}

const getProfile = (username: string) =>
  api<ProfileResponse>(`profile/${username}`)

const getDetails = (username: string) =>
  api<DetailsResponse>(`profile_remain/${username}`)

const sendSignupLink = (username: string, email: string) =>
  api(`send_sign_up_link`, 'POST', {
    inst_id: username,
    email,
  })

const signup = (token: string) => api<TokenResponse>(`signup/${token}`, 'POST')

const sendSigninLink = (email: string) =>
  api(`send_login_link`, 'POST', {
    email,
  })

const signin = (token: string) => api<TokenResponse>(`login/${token}`, 'POST')

export default {
  getProfile,
  getDetails,
  sendSignupLink,
  signup,
  sendSigninLink,
  signin,
}
