'use strict';

// const CandidateResponse = require("./candidateresponse")
// const Question = require("./question")

module.exports = (sequelize, DataTypes) => {
  debugger
  const Candidate = sequelize.define('Candidate', {
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
  }, {});
  Candidate.associate = function(models) {
    Candidate.belongsToMany(models.Question, { through: models.CandidateResponse, foreignKey: 'candidateId'})
  };
  return Candidate;
};