const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');

const { schema, resolvers } = require('./graphql')

const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true,
}));

const port = process.env.PORT || 4000
app.listen(port);
console.log(`Running a GraphQL API server at localhost:${port}/graphql`);