const koa = require('koa')
const bodyparser = require('koa-bodyparser')
const router = require('koa-router')()
const login = require('./router/user.js')
const cors = require('koa-cors')
const app = new koa()

app.use(bodyparser())
app.use(cors({
  origin: function(ctx) {
    if(ctx.url === '/login') {
      return '*'
    }
    return 'http://localhost:8080'
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge:5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept','Requst-Language','User-Token']
}))

router.use('/login', login)
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000, () => {
  console.log('start listener 3000 port')
})
