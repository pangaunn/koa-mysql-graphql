const Koa = require('koa')
const Router = require('koa-router')
const graphqlHTTP = require('koa-graphql')

const app = new Koa()
const router = new Router()

const graphqlSchema = require('./schema')

router.all('/graphql', graphqlHTTP({
  schema: graphqlSchema,
  graphiql: true
}))

app.listen(3000)
console.log('server running on port 3000')
