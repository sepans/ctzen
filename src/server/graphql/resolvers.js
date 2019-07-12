const { GraphQLScalarType } = require('graphql')
const { Kind } = require('graphql/language')
const { db } = require('../models')
const GraphQLJSON = require('graphql-type-json');
const {
  hasCurrentUser,
  authenticated,
  getNextQuestion,
  getAttributesAndIncludesFromArgs
} = require("./utils"); 

const resolvers = {
  candidate: async ({ id }, context, info) => {
    const relations = ["answers"];
    const attrIncs = getAttributesAndIncludesFromArgs(info, relations);
    return await db.Candidate.findByPk(parseInt(id), attrIncs);
  },

  candidates: async ({ id }, context, info) => {
    const relations = ["answers"];
    const attrIncs = getAttributesAndIncludesFromArgs(info, relations);
    return await db.Candidate.findAll(attrIncs);
  },
  question: async ({ id }) => {
    return await db.Question.findByPk(parseInt(id));
  },
  questions: async (args, context, info) => {
    const relations = ["children", "parent"];
    const attrIncs = getAttributesAndIncludesFromArgs(info, relations);
    const questions = await db.Question.findAll(attrIncs);
    return questions;
  },
  me: hasCurrentUser(async ({ id }, context, info) => {
    const userId = context.currentUser.id;
    const relations = ["answers"];
    const attrIncs = getAttributesAndIncludesFromArgs(info, relations);
    return await db.User.findByPk(userId, attrIncs);
  }),
  user: authenticated(async ({ id }, context, info) => {
    const relations = ["answers"];
    const attrIncs = getAttributesAndIncludesFromArgs(info, relations);
    return await db.User.findByPk(parseInt(id), attrIncs);
  }),
  users: authenticated(async ({ id }, context, info) => {
    const relations = ["answers"];
    const attrIncs = getAttributesAndIncludesFromArgs(info, relations);
    return await db.User.findAll(attrIncs);
  }),
  addQuestion: authenticated(async ({ input }) => {
    const question = await db.Question.create(input);
    return question;
  }),
  addUser: authenticated(async ({ input }) => {
    const user = await db.User.create(input);
    return user;
  }),
  userAnswerQuestion: hasCurrentUser(
    async ({ questionId, response }, context, info) => {
      const userId = context.currentUser.id;
      const relations = ["answers"];
      const attrIncs = getAttributesAndIncludesFromArgs(info, relations, 'user.');
      let user = await db.User.findByPk(parseInt(userId), attrIncs);
      const question = await db.Question.findByPk(parseInt(questionId));
      if (user == null) {
        throw new Error("user does not exist");
      }
      if (question == null) {
        throw new Error("question does not exist");
      }
      await user.addAnswer(question, { through: { response } });

      user = await user.reload();

      const nextQuestion = await getNextQuestion(user);

      const mutationResponse = {
        user,
        nextQuestion
      };
      return mutationResponse;
    }
  ),
  myNextQuestion: hasCurrentUser(
    async ({ questionId, response }, context, info) => {
      const userId = context.currentUser.id;
      const relations = ["answers"];
      const attrIncs = getAttributesAndIncludesFromArgs(info, relations);

      let user = await db.User.findByPk(parseInt(userId), attrIncs);
      return await getNextQuestion(user);
    }
  ),
  candidateAnswerQuestion: authenticated(
    async ({ candidateId, questionId, response }, context, info) => {
      const relations = ["answers"];
      const attrIncs = getAttributesAndIncludesFromArgs(info, relations);

      const candidate = await db.Candidate.findByPk(
        parseInt(candidateId),
        attrIncs
      );
      const question = await db.Question.findByPk(parseInt(questionId));
      if (candidate == null) {
        throw new Error("candidate does not exist");
      }
      if (question == null) {
        throw new Error("question does not exist");
      }
      await candidate.addAnswer(question, { through: { response } });
      return await candidate.reload();
    }
  ),
  Date: new GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar type",
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
    }
  }),

  JSON: GraphQLJSON
};

module.exports = {
  resolvers
}