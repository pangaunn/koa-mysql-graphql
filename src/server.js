const Koa = require('koa')
const Router = require('koa-router')
const graphqlHTTP = require('koa-graphql')

const db = require('./models')

const app = new Koa()
const router = new Router()

const graphqlSchema = require('./schema')

router.get('/test', async function (ctx) {
  const result = await db.sequelize.query('SELECT "Hello World!"', { type: db.sequelize.QueryTypes.SELECT})
  ctx.body = result
})

router.all('/graphql', graphqlHTTP({
  schema: graphqlSchema,
  graphiql: true
}))

app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)
console.log('server running on port 3000')
