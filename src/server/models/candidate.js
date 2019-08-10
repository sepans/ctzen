'use strict'

// const CandidateResponse = require("./candidateresponse")
// const Question = require("./question")

module.exports = (sequelize, DataTypes) => {
  const Candidate = sequelize.define(
    'Candidate',
    {
      name: DataTypes.STRING,
      displayName: DataTypes.STRING,
      image: DataTypes.TEXT,
      campaignLogo: DataTypes.STRING,
      dob: DataTypes.DATEONLY,
      pob: DataTypes.STRING,
      state: DataTypes.STRING,
      campaignStart: DataTypes.DATEONLY,
      campaignEnd: DataTypes.DATEONLY,
      experience: DataTypes.TEXT,
      bio: DataTypes.TEXT,
      miscInfo: DataTypes.JSON,
      latestPoll: DataTypes.INTEGER,
    },
    {}
  )
  Candidate.associate = function(models) {
    Candidate.belongsToMany(models.Question, {
      through: models.CandidateResponse,
      as: 'answers',
      foreignKey: 'candidateId',
    })
  }
  return Candidate
}
