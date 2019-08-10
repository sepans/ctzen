const { GraphQLScalarType } = require('graphql')
const { Kind } = require('graphql/language')
const { db } = require('../models')
const GraphQLJSON = require('graphql-type-json')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const {
  hasCurrentUser,
  authenticated,
  getNextQuestion,
  getQuestionIncludes,
  getTopLevelAttributes,
  getAnswerIncludes,
  hasNextQuestionQuery,
  hasMatchingCandidatesQuery,
  getMatchingCandidates,
} = require('./utils')

const resolvers = {
  candidate: async ({ id }, context, info) => {
    const attributes = getTopLevelAttributes(info)
    const include = getAnswerIncludes(info)
    const where = {
      id: parseInt(id),
    }

    return await db.Candidate.findOne({
      attributes,
      include,
      where,
    })
  },

  candidates: async ({ id }, context, info) => {
    const attributes = getTopLevelAttributes(info)
    const include = getAnswerIncludes(info)
    const where = {}

    // Adding where clause, it doesn't return candidates without response
    // const hasAnswerQuery = include.find(item => item.as === 'answers')
    // if (hasAnswerQuery) {
    //   where['$answers->CandidateResponse.deleted$'] = false
    // }
    return await db.Candidate.findAll({
      attributes,
      include,
      where,
      order: [
        [Sequelize.fn('COALESCE', Sequelize.col('latestPoll'), -1), 'DESC'],
      ],
    })
  },
  question: async ({ id }, context, info) => {
    const attributes = getTopLevelAttributes(info)
    const include = getQuestionIncludes(info)
    return await db.Question.findByPk(parseInt(id, { include, attributes }))
  },
  questions: async (args, context, info) => {
    const attributes = getTopLevelAttributes(info)
    const include = getQuestionIncludes(info)
    const questions = await db.Question.findAll({ include, attributes })
    return questions
  },
  me: hasCurrentUser(async (args, context, info) => {
    const userId = context.currentUser.id
    const attributes = getTopLevelAttributes(info)
    const include = getAnswerIncludes(info)
    const where = {
      id: userId,
    }
    // const hasAnswerQuery = include.find(item => item.as === 'answers')
    // if (hasAnswerQuery) {
    //   where['$answers->UserResponse.deleted$'] = false
    // }

    const user = await db.User.findOne({
      where,
      include,
      attributes,
    })
    let nextQuestion
    if (hasNextQuestionQuery(info)) {
      nextQuestion = await getNextQuestion(user)
    }
    let matchingCandidates = []
    if (hasMatchingCandidatesQuery(info)) {
      matchingCandidates = await getMatchingCandidates(user)
    }

    return {
      user,
      nextQuestion,
      matchingCandidates,
    }
  }),
  user: authenticated(async ({ id }, context, info) => {
    const attributes = getTopLevelAttributes(info)
    const include = getAnswerIncludes(info)
    const where = {
      id,
    }
    // Adding where clause, it doesn't return candidates without response
    // const hasAnswerQuery = include.find(item => item.as === 'answers')
    // if (hasAnswerQuery) {
    //   where['$answers->UserResponse.deleted$'] = false
    // }

    const user = await db.User.findOne({
      where,
      include,
      attributes,
    })
    return user
  }),
  users: authenticated(async ({ id }, context, info) => {
    const attributes = getTopLevelAttributes(info)
    const include = getAnswerIncludes(info)
    const where = {}
    // Adding where clause, it doesn't return users without response
    // const hasAnswerQuery = include.find(item => item.as === 'answers')
    // if (hasAnswerQuery) {
    //   where['$answers->UserResponse.deleted$'] = false
    // }

    const users = await db.User.findAll({
      where,
      include,
      attributes,
    })
    return users
  }),
  addQuestion: authenticated(async ({ input }) => {
    const question = await db.Question.create(input)
    return question
  }),
  addUser: authenticated(async ({ input }) => {
    const user = await db.User.create(input)
    return user
  }),
  userAnswerQuestion: hasCurrentUser(
    async ({ questionId, response }, context, info) => {
      const userId = context.currentUser.id
      const attributes = getTopLevelAttributes(info)
      const include = getAnswerIncludes(info)
      let user = await db.User.findByPk(parseInt(userId), {
        include,
        attributes,
      })
      const question = await db.Question.findByPk(parseInt(questionId))
      if (user == null) {
        throw new Error('user does not exist')
      }
      if (question == null) {
        throw new Error('question does not exist')
      }
      await user.addAnswer(question, { through: { response } })

      user = await user.reload()

      const nextQuestion = await getNextQuestion(user)

      const mutationResponse = {
        user,
        nextQuestion,
      }
      return mutationResponse
    }
  ),
  candidateAnswerQuestion: authenticated(
    async ({ candidateId, questionId, response }, context, info) => {
      const attributes = getTopLevelAttributes(info)
      const include = getAnswerIncludes(info)

      const candidate = await db.Candidate.findByPk(parseInt(candidateId), {
        attributes,
        include,
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
    }
  ),
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value)
    },
    serialize(value) {
      return value.getTime()
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10)
      }
      return null
    },
  }),

  JSON: GraphQLJSON,
}

module.exports = {
  resolvers,
}
