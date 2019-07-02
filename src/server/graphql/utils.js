const crypto = require('crypto')
const util = require('util')
const { db } = require('../models')

const randomBytes = util.promisify(crypto.randomBytes)

const findUserByToken = async (token) => {
  return await db.User.findOne({ where: { token: token } })
}

const createUser = async () => {
  const rand = await randomBytes(16)
  const token = rand.toString('base64').replace(/\W/g, '')
  console.log('creating user with token', token)
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

module.exports = {
  createGraphQLContext,
  hasCurrentUser
}