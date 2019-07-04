const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieSession = require('cookie-session')
const { graphql } = require("./graphql")

const app = express();
app.use(cors());

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))

app.use('/graphql', graphql)

// TODO: fixme: for heroku serve static files from build directory
if (process.env.NODE_ENV === 'production') {
  const buildPath = '../../build/'
  const buildDir = path.join(__dirname, buildPath)
  console.log(__dirname, 'serving client from', buildDir)

  app.use(express.static(buildDir))
}

const port = process.env.PORT || 4000
app.listen(port);
console.log(`Running a GraphQL API server at host:${port}/graphql`);