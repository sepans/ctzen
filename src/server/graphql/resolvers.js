const { GraphQLScalarType } = require('graphql')
const { Kind } = require('graphql/language')
const { db } = require('../models')
const GraphQLJSON = require('graphql-type-json');
const { hasCurrentUser } = require("./utils") 

const resolvers = {
  candidates: async () => await db.Candidate.findAll({
    include: [{
      model: db.Question,
      as: 'answers'
    }]
  }),
  candidate: async ({ id }) => await db.Candidate.findByPk(parseInt(id), {
    include: [{
      model: db.Question,
      as: 'answers'
    }]
  }),
  question: async ({ id }) => {
    return await db.Question.findByPk(parseInt(id))
  },
  questions: async () => await db.Question.findAll(),
  user: async ({ id }) => await db.User.findByPk(parseInt(id), {
    include: [{
      model: db.Question,
      as: 'answers'
    }]
  }),
  users: async () => await db.User.findAll({
    include: [{
      model: db.Question,
      as: 'answers'
    }]
  }),
  addQuestion: async ({ input }) => {
    const question = await db.Question.create(input)
    return question
  },
  addUser: async ({ input }) => {
    const user = await db.User.create(input)
    return user
  },
  userAnswerQuestion: hasCurrentUser(async ({questionId, response }, context) => {
    const userId = context.currentUser.id
    const user = await db.User.findByPk(parseInt(userId), {
      include: [{
        model: db.Question,
        as: 'answers'
      }]
    })
    const question = await db.Question.findByPk(parseInt(questionId))
    if (user == null) {
      throw new Error('user does not exist')
    }
    if (question == null) {
      throw new Error('question does not exist')
    }
    await user.addAnswer(question, { through: { response } })
    return await user.reload()
  }),
  candidateAnswerQuestion: async ({ candidateId, questionId, response }) => {
    const candidate = await db.Candidate.findByPk(parseInt(candidateId), {
      include: [{
        model: db.Question,
        as: 'answers'
      }]
    })
    const question = await db.Question.findByPk(parseInt(questionId))
    if (candidate == null) {
      throw new Error('candidate does not exist')
    }
    if (question == null) {
      throw new Error('question does not exist')
    }
    await candidate.addAnswer(question, { through: { response } })
    return await candidate.reload()
  },
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value);
    },
    serialize(value) {
      return value.getTime();
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10);
      }
      return null;
    },
  }),

  JSON: GraphQLJSON,
};

module.exports = {
  resolvers
}