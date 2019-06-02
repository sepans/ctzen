const gql = require('graphql-tag');
const { buildASTSchema } = require('graphql');
const { connection } = require('../database')
const Sequelize = require('sequelize');
const Candidate = require('../models/candidate')(connection, Sequelize)

const schema = buildASTSchema(gql`
  type Query {
    candidates: [Candidate]
    candidate(id: ID!): Candidate
  }

  type Candidate {
    id: ID
    firstName: String
    lastName: String
    age: Int
  }
`);

const resolvers = {
  candidates: () => Candidate.findAll(),
  candidate: ({ id }) => Candidate.findByPk(parseInt(id)),
};

module.exports = {
  schema,
  resolvers
}