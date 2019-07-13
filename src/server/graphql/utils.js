const crypto = require('crypto')
const util = require('util')
const { db } = require('../models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op
const getFieldList  =  require("graphql-list-fields")


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
  const answers = await user.getAnswers()
  const answeredQuestionIds = answers.map(answer => answer.id)
  return await db.Question.findOne({
    where: {
      id: {
        [Op.notIn]: answeredQuestionIds
      }
    }
  })
}

const arrayIntersection = (array1, array2) =>
  array1.filter(value => array2.includes(value))

const arraySubtract = (array1, array2) => array1.filter(n => !array2.includes(n))

const getAttributesAndIncludesFromArgs = (queryInfo, relations, ignorePrefix = '') => {
  const queryArgs = getFieldList(queryInfo).map(item => {
    return item.replace(ignorePrefix, '')
  });
  const topLevelArgs = queryArgs.filter(name => name.indexOf('.') < 0)
  // always load id
  topLevelArgs.push('id')
  const deepArgs = new Set( queryArgs.filter(name => name.indexOf('.') > 0).map(item => item.split('.')[0]))
  const relationsInQueryArgs = arrayIntersection(relations, Array.from(deepArgs))
  const otherFields = arraySubtract(Array.from(deepArgs), relations)
  const include = Array.from(relationsInQueryArgs).map(relation => {
    return {
      model: db.Question,
      as: relation
    };
  });
  return {
    include,
    attributes: topLevelArgs,
    otherFields
  };
}

module.exports = {
  createGraphQLContext,
  hasCurrentUser,
  authenticated,
  getNextQuestion,
  getAttributesAndIncludesFromArgs
}

