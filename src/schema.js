const GraphQLTools = require('graphql-tools')

const Schema = `
  schema {
    query: Query
  }
`

const Query = `
  type Query {
    Hello: String
  }
`

const Resolver = {
  Query: {
    Hello () {
      return 'Hello GraphQL'
    }
  }
}

module.exports = GraphQLTools.makeExecutableSchema({
  typeDefs: [Schema, Query],
  resolvers: Resolver
})
