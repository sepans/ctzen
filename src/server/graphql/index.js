const graphqlHTTP = require('express-graphql')
const { resolvers } = require('./resolvers')
const { schema } = require('./schema')
const { createGraphQLContext } = require('./utils')

const graphql = graphqlHTTP(async (req, res) => {
  return {
    schema,
    graphiql: true,
    rootValue: resolvers,
    context: await createGraphQLContext(req),
  }
})

module.exports = {
  graphql,
}
