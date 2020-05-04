import axio from 'axios'
import qs from 'qs'
import cookies from 'js-cookie'

const baseURL = 'http://127.0.0.1/weapi'
const headers = {
  'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
}
const userTokenKey = 'User-Token'
let userTokeTemp = ''

// http request interceptor
function requestInterceptor (request) {
  console.log(request)
  if (request.url && request.baseURL === baseURL) {
    if (request.url !== '/login') {
      // TODO 添加token
      let headers = request.headers
      if (!userTokeTemp) {
        userTokeTemp = cookies.get(userTokenKey)
        console.log(`user token:${userTokeTemp}`)
      }
      request.headers = {
        ...headers,
        userToken: userTokeTemp
      }
    } else {
      console.log(`current url:${request.url}, not need token`)
    }
  }
  return request
}

// http response interceptor
function responseInterceptor (response) {
  // TODO auto refresh token
  console.log(response)
  return response
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
      if (response.status === 200) {
        // set token to cookie
        cookies.set(userTokenKey, response.userToken)
      }
    })
}

// refresh token api
async function refreshToken ({account, token}) {
  return instance.post('/login', qs.stringify({
    account,
    token
  }))
    .then(response => {
      if (response.status === 200) {
        // set token to cookie
        cookies.set(userTokenKey, response.userToken)
      }
    })
}

// register api
async function register ({account, password, verifiyCode}) {
  return instance.post('/register', qs.stringify({
    account,
    password,
    verifiyCode
  }))
}

const httpUtils = {
  login,
  register,
  refreshToken
}

export default httpUtils
