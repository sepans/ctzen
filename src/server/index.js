const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const gql = require('graphql-tag');
const { buildASTSchema } = require('graphql');
// import express from "express"
// import cors from "cors"
// import graphqlHTTP from "express-graphql"
// import gql from "graphql-tag"
// import { buildASTSchema } from "graphql"


const CANDIDATES = [
  { name: "Bernie Sanders", age: 77 },
  { name: "Elizabeth Warren", age: 60 },
];

const schema = buildASTSchema(gql`
  type Query {
    candidates: [Candidate]
    candidate(id: ID!): Candidate
  }

  type Candidate {
    id: ID
    name: String
    age: Int
  }
`);

const mapCandidate = (candidate, id) => candidate && ({ id, ...candidate });

const root = {
  candidates: () => CANDIDATES.map(mapCandidate),
  candidate: ({ id }) => mapCandidate(CANDIDATES[id], id),
};

const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));

const port = process.env.PORT || 4000
app.listen(port);
console.log(`Running a GraphQL API server at localhost:${port}/graphql`);