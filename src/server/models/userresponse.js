'use strict';
module.exports = (sequelize, DataTypes) => {
  // TODO: constraint one answer per user 
  const UserResponse = sequelize.define('UserResponse', {
    response: DataTypes.INTEGER
  }, {});
  UserResponse.associate = function(models) {
  };
  return UserResponse;
};