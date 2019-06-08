'use strict';
module.exports = (sequelize, DataTypes) => {
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
    // associations can be defined here
  };
  return Candidate;
};