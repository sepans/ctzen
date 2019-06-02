const gql = require('graphql-tag');
const { buildASTSchema } = require('graphql');

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

const CANDIDATES = [
  { name: "Bernie Sanders", age: 77 },
  { name: "Elizabeth Warren", age: 60 },
];

const mapCandidate = (candidate, id) => candidate && ({ id, ...candidate });

const resolvers = {
  candidates: () => CANDIDATES.map(mapCandidate),
  candidate: ({ id }) => mapCandidate(CANDIDATES[id], id),
};

module.exports = {
  schema,
  resolvers
}