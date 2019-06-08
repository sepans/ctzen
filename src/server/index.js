const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const path = require('path');

const { schema, resolvers } = require('./graphql')

const app = express();
app.use(cors());

// TODO: limit access
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true,
}));

// TODO: fixme: for heroku serve static files from build direcory
if (process.env.NODE_ENV === 'production') {
  const buildPath = '../../build/'
  const buildDir = path.join(__dirname, buildPath)
  console.log(__dirname, 'serving client from', buildDir)

  app.use(express.static(buildDir))
}

const port = process.env.PORT || 4000
app.listen(port);
console.log(`Running a GraphQL API server at host:${port}/graphql`);