const { GraphQLScalarType} = require('graphql')
const { Kind } = require('graphql/language')
const { schema } = require('./schema')
const { connection } = require('../database')
const Sequelize = require('sequelize');
const Candidate = require('../models/candidate')(connection, Sequelize)
const GraphQLJSON = require('graphql-type-json');




const resolvers = {
  candidates: () => Candidate.findAll(),
  candidate: ({ id }) => { 
    const candidate = Candidate.findByPk(parseInt(id))
    console.log(candidate)
    console.log(candidate.response)
    return candidate
  },
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return value.getTime(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    },
  }), 
  JSON: GraphQLJSON, 
};

module.exports = {
  schema,
  resolvers
}