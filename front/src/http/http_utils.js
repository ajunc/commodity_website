import axio from 'axios'
import qs from 'qs'
import i18n from '../i18n/i18n'
import cookies from 'js-cookie'

const baseURL = 'http://127.0.0.1:3000'
let lang = i18n.locale
const headers = {
  'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  'Requst-Language': lang
}

const userTokenKey = 'User-Token'
let userTokeTemp = cookies.get(userTokenKey)

// http request interceptor
function requestInterceptor (request) {
  console.log(request)
  if (request.url && request.baseURL === baseURL) {
    let headers = request.headers
    if (i18n.local && lang !== i18n.local) {
      lang = i18n.local
      request.headers = {
        ...headers,
        'Requst-Language': lang
      }
    }
    if (request.url !== '/login') {
      if (!userTokeTemp) {
        userTokeTemp = cookies.get(userTokenKey)
        console.log(`user token:${userTokeTemp}`)
      }

      request.headers = {
        ...headers,
        'User-Token': userTokeTemp
      }
    } else {
      console.log(`current url:${request.url}, not need token`)
    }
  }
  return request
}

// http response interceptor
function responseInterceptor (response) {
  console.log(`reponse code:${response.status}, data:${JSON.stringify(response.data)}`)
  return response.data
}

const instance = axio.create({
  baseURL,
  timeout: 10000,
  headers
})

// set http request interceptors
instance.interceptors.request.use(requestInterceptor)

// set http response interceptors
instance.interceptors.response.use(responseInterceptor)

// login api
async function login ({account, password}) {
  return instance.post('/login', qs.stringify({
    account,
    password
  }))
    .then(response => {
      console.info(`login response:${JSON.stringify(response)}, status:${response.status}`)
      if (response && response.status === 200 && response.data && response.data.userToken) {
        // set token to cookie
        cookies.set(userTokenKey, response.userToken)
      }
      return response
    })
}

// refresh token api
async function refreshToken ({account, token}) {
  return instance.post('/login', qs.stringify({
    account,
    token
  }))
    .then(response => {
      if (response && response.status === 200) {
        // set token to cookie
        cookies.set(userTokenKey, response.userToken)
      }
      return response
    })
}

// register api
async function register ({account, password, nickname, verifiyCode}) {
  return instance.post('/register', qs.stringify({
    account,
    password,
    nickname,
    verifiyCode
  }))
}

const httpUtils = {
  login,
  register,
  refreshToken
}

export default httpUtils
