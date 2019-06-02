'use strict';
module.exports = (sequelize, DataTypes) => {
  const Candidate = sequelize.define('Candidate', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.NUMBER
  }, {});
  Candidate.associate = function(models) {
    // associations can be defined here
  };
  return Candidate;
};