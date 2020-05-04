const router = require('koa-router')()
const db = require('../sql/sql.js')

router.post('/', async ctx => {
    let user = ctx.request.body.user
    let pass = ctx.request.body.password
    db.query('select * from user where user=? and pass=?;', [user,pass]).then(res => {
        console.log('res')
    })
    ctx.body = {
        user: '111',
        code: 1,
        status: 200
    }
})

module.exports = router.routes()