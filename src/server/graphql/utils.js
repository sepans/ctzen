const crypto = require('crypto')
const util = require('util')
const { db } = require('../models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op


const randomBytes = util.promisify(crypto.randomBytes)

const findUserByToken = async (token) => {
  return await db.User.findOne({ where: { token: token } })
}

const createUser = async () => {
  const rand = await randomBytes(16)
  const token = rand.toString('base64').replace(/\W/g, '')
  return await db.User.create({ token })

}

const createGraphQLContext = async (req) => {
  const token = req.session.token
  let currentUser
  if (token) {
    currentUser = await findUserByToken(token)
  }
  if (!token || !currentUser) {
    currentUser = await createUser()
    req.session.token = currentUser.token
  }

  return {
    req,
    currentUser
  }
}


const hasCurrentUser = next => (args, context, info) => {
  if (!context.currentUser) {
    throw new Error(`Unauthenticated!`);
  }
  return next(args, context, info);
}

// TODO: implement
const authenticated = next => (args, context, info) => {
  if (!context.currentUser) {
    throw new Error(`Unauthenticated!`);
  }
  return next(args, context, info);
}

const getNextQuestion = async (user) => {
  const answeredQuestionIds = user.answers.map(answer => answer.id)
  return await db.Question.findOne({
    where: {
      id: {
        [Op.notIn]: answeredQuestionIds
      }
    }
  })
}

const getQueryArgs = (info) => {
  return info.fieldNodes[0].selectionSet.selections.map(
    selection => selection.name.value
  )
}

module.exports = {
  createGraphQLContext,
  hasCurrentUser,
  authenticated,
  getNextQuestion,
  getQueryArgs
}

