const crypto = require('crypto')
const util = require('util')
const { db } = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const getFieldList = require('graphql-list-fields')
const distance = require('ml-distance')

const randomBytes = util.promisify(crypto.randomBytes)

const findUserByToken = async token => {
  return await db.User.findOne({ where: { token: token } })
}

const createUser = async () => {
  const rand = await randomBytes(16)
  const token = rand.toString('base64').replace(/\W/g, '')
  return await db.User.create({ token })
}

const createGraphQLContext = async req => {
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
    currentUser,
  }
}

const hasCurrentUser = next => (args, context, info) => {
  if (!context.currentUser) {
    throw new Error(`Unauthenticated!`)
  }
  return next(args, context, info)
}

// TODO: implement
const authenticated = next => (args, context, info) => {
  if (!context.currentUser) {
    throw new Error(`Unauthenticated!`)
  }
  return next(args, context, info)
}

const getNextQuestion = async user => {
  const answers = await user.getAnswers()
  const answeredQuestionIds = answers.map(answer => answer.id)
  return await db.Question.findOne({
    where: {
      id: {
        [Op.notIn]: answeredQuestionIds,
      },
    },
  })
}

const arrayIntersection = (array1, array2) =>
  array1.filter(value => array2.includes(value))

const arraySubtract = (array1, array2) =>
  array1.filter(n => !array2.includes(n))

const getTopLevelAttributes = queryInfo => {
  const attrs = getFieldList(queryInfo).filter(name => name.indexOf('.') < 0)
  if (!attrs.includes('id')) {
    attrs.push('id')
  }
  return attrs
}

const getQuestionIncludes = queryInfo => {
  const parentPrefix = 'parent.'
  const childrenPrefix = 'children.'
  const parentQuery = getFieldList(queryInfo).filter(
    name => name.indexOf(parentPrefix) > -1
  )
  const childrenQuery = getFieldList(queryInfo).filter(
    name => name.indexOf(childrenPrefix) > -1
  )

  // TODO: similar to getAnswerIncludes pass include attributes
  // const parentAttrs = parentQuery.map(attr => attr.replace(parentPrefix, '')).filter(attr => attr.indexOf('.') < 0)
  // const childrenAttrs = childrenQuery.map(attr => attr.replace(childrenPrefix, '')).filter(attr => attr.indexOf('.') < 0)

  const include = []
  if (parentQuery.length) {
    include.push({
      model: db.Question,
      as: 'parent',
    })
  }
  if (childrenQuery.length) {
    include.push({
      model: db.Question,
      as: 'children',
    })
  }

  return include
}

const getAnswerIncludes = queryInfo => {
  const answerPrefix = 'answers.'
  const answerQuery = getFieldList(queryInfo).filter(
    name => name.indexOf(answerPrefix) > -1
  )
  //console.log('ANS Q', answerQuery)
  // filter answer's own attributes
  const regex = /^([\w]*\.)?answers.([\w]*)$/g
  const attributes = answerQuery
    .map(attr => {
      const match = regex.exec(attr)
      return match && match[2]
    })
    .filter(attr => attr)
  attributes.push('id')
  const include = answerQuery.length
    ? [
        {
          model: db.Question,
          as: 'answers',
          attributes,
          on: {
            '$answers->UserResponse.deleted$': false,
          },
        },
      ]
    : []
  return include
}

const hasNextQuestionQuery = queryInfo => {
  return getFieldList(queryInfo).filter(
    name => name.indexOf('nextQuestion.') > -1
  ).length
}

const hasMatchingCandidatesQuery = queryInfo => {
  return getFieldList(queryInfo).filter(
    name => name.indexOf('matchingCandidates.') > -1
  ).length
}

const getMatchingCandidates = async user => {
  // TODO: remove garabage questions?
  const allQuestionIds = await db.Question.findAll().map(q => q.importId)

  let answers = await user.getAnswers()
  if (!answers || !answers.length) {
    return []
  }
  const userVector = answersToVector(answers, allQuestionIds)
  // the where statement insures only candidates with response are returned
  const candidates = await db.Candidate.findAll({
    include: [
      {
        model: db.Question,
        as: 'answers',
      },
    ],
    where: {
      '$answers->CandidateResponse.deleted$': false,
    },
  })
  const ret = candidates.map(candidate => {
    const answers = candidate.answers
    const candidateVector = answersToVector(answers, allQuestionIds)
    const score = distance.similarity.cosine(userVector, candidateVector)
    // console.log(userVector, candidateVector)
    // console.log('DISTANCE', score)
    return {
      score,
      candidate,
    }
  })
  return ret
}

const VECTOR_UNDEFINED_VALUE = 0

const answersToVector = (answers, allQuestionIds) => {
  const indexedAnswers = answers.reduce((acc, answer) => {
    acc[answer.importId] = answer
    return acc
  }, {})
  const ret = allQuestionIds.map(importId => {
    const answer = indexedAnswers[importId]
    if (!answer) {
      return VECTOR_UNDEFINED_VALUE
    }
    const someonesResponse = answer.UserResponse || answer.CandidateResponse
    return answer ? someonesResponse.response : 0
  })
  return ret
}

// const getAttributesAndIncludesFromArgs = (queryInfo, relations, ignorePrefix = '') => {
//   const queryArgs = getFieldList(queryInfo).map(item => {
//     return item.replace(ignorePrefix, '')
//   });
//   const topLevelArgs = queryArgs.filter(name => name.indexOf('.') < 0)
//   // always load id
//   topLevelArgs.push('id')
//   const deepArgs = new Set( queryArgs.filter(name => name.indexOf('.') > 0).map(item => item.split('.')[0]))
//   const relationsInQueryArgs = arrayIntersection(relations, Array.from(deepArgs))
//   const otherFields = arraySubtract(Array.from(deepArgs), relations)
//   const include = Array.from(relationsInQueryArgs).map(relation => {
//     return {
//       model: db.Question,
//       as: relation,
//     }
//   });
//   const where = {

//   }
//   return {
//     include,
//     attributes: topLevelArgs,
//     where,
//     otherFields
//   };
// }

module.exports = {
  createGraphQLContext,
  hasCurrentUser,
  authenticated,
  getNextQuestion,
  getMatchingCandidates,
  getTopLevelAttributes,
  getAnswerIncludes,
  getQuestionIncludes,
  hasNextQuestionQuery,
  hasMatchingCandidatesQuery,
  answersToVector,
}
