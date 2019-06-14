'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.TEXT,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    lastLogin: DataTypes.DATE,
    roles: DataTypes.JSON
  }, {});
  User.associate = function(models) {
    User.belongsToMany(models.Question, { through: models.UserResponse, foreignKey: 'userId' })
  };
  return User;
};