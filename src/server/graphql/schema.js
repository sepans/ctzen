const { buildASTSchema } = require('graphql');
const gql = require('graphql-tag');

const schema = buildASTSchema(gql`
  scalar Date
  scalar JSON

  type Query {
    candidates: [Candidate]
    candidate(id: ID!): Candidate
    user(id: ID!): User
  }

  type User {
    username: String
  }

  type Candidate {
    id: ID
    name: String
    displayName: String
    image: String
    campaignLogo: String
    dob: Date
    pob: String
    state: String
    campaignStart: Date
    campaignEnd: Date
    experience: String
    bio: String
    miscInfo: JSON
    createdAt: Date
    updatedAt: Date
    responses: [Response]
  }

  type Response {
    response: Int
  }
`);

module.exports = {
  schema
}