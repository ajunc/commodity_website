import Koa from 'koa'
import Router from 'Koa-router'

const app = new Koa()
const router = new Router()

router.get('/', async ctx => {
  ctx.body = 'hello world!'
})

app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)
