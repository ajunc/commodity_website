import axio from 'axios'

const baseURL = 'http://127.0.0.1/weapi'

const instance = axio.create({
  baseURL,
  timeout: 10000,
  headers: {}
})

// login api
async function login ({account, password}) {
  return instance.post('/login', {
    account,
    password
  })
    .then(res => {
      console.log(`reponse:${res}`)
    })
}

// register api
async function register ({account, password, verifiyCode}) {
  return instance.post('/register', {
    account,
    password,
    verifiyCode
  })
    .then(res => {
      console.log(`reponse:${res}`)
    })
}

const httpUtils = {
  login,
  register
}

export default httpUtils
