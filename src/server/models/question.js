'use strict';

const CandidateResponse = require("./candidateresponse")
const Candidate = require("./candidate")
const UserResponse = require("./userresponse")
const User = require("./user")

module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    title: DataTypes.STRING,
    option1: DataTypes.STRING,
    option2: DataTypes.STRING,
    option3: DataTypes.STRING,
    option4: DataTypes.STRING,
    option5: DataTypes.STRING,
    level: DataTypes.Integer
  }, {});
  Question.associate = function(models) {
    Question.belongsToMany(Candidate, { through: CandidateResponse })
    Question.belongsToMany(User, { through: UserResponse })
  };
  return Question;
};