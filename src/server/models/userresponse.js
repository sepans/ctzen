'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserResponse = sequelize.define('UserResponse', {
    response: DataTypes.INTEGER
  }, {});
  UserResponse.associate = function(models) {
  };
  return UserResponse;
};