'use strict';
module.exports = (sequelize, DataTypes) => {
  const Candidate = sequelize.define('Candidate', {
    name: DataTypes.STRING
  }, {});
  Candidate.associate = function(models) {
    // associations can be defined here
  };
  return Candidate;
};