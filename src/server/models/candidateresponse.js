'use strict'
module.exports = (sequelize, DataTypes) => {
  // TODO: constraint one answer per candidate
  const CandidateResponse = sequelize.define(
    'CandidateResponse',
    {
      response: DataTypes.INTEGER,
      deleted: DataTypes.BOOLEAN,
    },
    {}
  )
  CandidateResponse.associate = function(models) {}
  return CandidateResponse
}
