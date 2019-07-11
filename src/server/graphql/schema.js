const { buildASTSchema } = require('graphql');
const gql = require('graphql-tag');

const schema = buildASTSchema(gql`
  scalar Date
  scalar JSON

  type Query {
    candidates: [Candidate]
    candidate(id: ID!): Candidate
    me: User
    users: [User]
    user(id: ID!): User
    myNextQuestion: Question
    question(id: ID!): Question
    questions: [Question]
  }

  type Mutation {
    addQuestion(input: QuestionInput): Question
    addUser(input: UserInput): User
    userAnswerQuestion(questionId: ID!, response: Int): UserQuestionAnswered
    candidateAnswerQuestion(candidateId: ID!, questionId: ID!, response: Int): Candidate
  }

  input QuestionInput {
    title: String!
    option1: String
    option2: String
    option3: String
    option4: String
    option5: String
    level: Int!
  }

  type Question {
    id: ID
    title: String
    option1: String
    option2: String
    option3: String
    option4: String
    option5: String
    level: Int
    parent: Question
    children: [Question]
  }

  input UserInput {
    username: String!
    firstName: String
    lastName: String
    email: String!
    password: String!
    roles: JSON
  }

  type UserQuestionAnswered {
    user: User
    nextQuestion: Question
  }

  type User {
    id: ID
    username: String
    firstName: String
    lastName: String
    email: String
    password: String
    roles: JSON
    answers: [UserAnswer]
  }

  type UserAnswer {
    id: ID
    title: String
    option1: String
    option2: String
    option3: String
    option4: String
    option5: String
    level: Int
    UserResponse: AnswerPick
  }

  type CandidateAnswer {
    id: ID
    title: String
    option1: String
    option2: String
    option3: String
    option4: String
    option5: String
    level: Int
    CandidateResponse: AnswerPick
  }

  type AnswerPick {
    response: Int
  }

  type Candidate {
    id: ID
    name: String
    displayName: String
    image: String
    campaignLogo: String
    dob: Date
    pob: String
    state: String
    campaignStart: Date
    campaignEnd: Date
    experience: String
    bio: String
    miscInfo: JSON
    createdAt: Date
    updatedAt: Date
    answers: [CandidateAnswer]
  }

  type Response {
    id: ID
    response: Int
    question: Question
  }

  type Error {
    message: String
  }
`);

module.exports = {
  schema
}