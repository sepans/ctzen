const { GraphQLScalarType} = require('graphql')
const { Kind } = require('graphql/language')
const { schema } = require('./schema')
const { db } = require('../models')
// const Sequelize = require('sequelize');
// const Candidate = require('../models/candidate')(sequelize, Sequelize)
// const CandidateResponse = require('../models/candidateresponse')(sequelize, Sequelize)
// const Question = require('../models/question')(sequelize, Sequelize)

console.log(__dirname)
// const Candidate = sequelize.import('../models/candidate')
// const CandidateResponse = sequelize.import('../models/candidateresponse')
// const Question = sequelize.import('../models/question')

const GraphQLJSON = require('graphql-type-json');

// async function sampleData() {
//   try {
//     console.log('adding some data')
//     const question = await db.Question.create({title: 'whats your name?',
//       level: 1
    
//     })
//     const candidate = await db.Candidate.findByPk(1)
//     // console.log('fetched', candidate)
//     // console.log(candidate.CandidateResponses)
//     //candidate.responses.add(response)
//     // const response = await db.CandidateResponse.create({ response: 2, questionId: question.id, candidateId: candidate.id})
//     // console.log(response)
//     // candidate.createCandidateResponse({response: 2})
//     candidate.addQuestion(question, { through: {response: 5 }})
//     console.log('properties', Object.getOwnPropertyNames(candidate))
//     // candidate.setResponses([response])
  
//     console.log(candidate.getQuestions())

//   }
//   catch(e) {
//     console.log('db err', e)
//   }
  
// }

// sampleData() 

const resolvers = {
  candidates: async () => {
     const list = await db.Candidate.findAll({ include: [{model: db.Question, as: 'responses'}]})
     console.log('list', list)
     return list
  },
  candidate: ({ id }) => { 
    const candidate = db.Candidate.findByPk(parseInt(id))
    return candidate
  },
  question: ({ id }) => {
    return db.Question.findByPk(parseInt(id))
  },
  users: () => db.User.findAll(),
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