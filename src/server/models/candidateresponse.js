'use strict';
module.exports = (sequelize, DataTypes) => {
  const CandidateResponse = sequelize.define('CandidateResponse', {
    response: DataTypes.INTEGER
  }, {});
  CandidateResponse.associate = function(models) {
  };
  return CandidateResponse;
};