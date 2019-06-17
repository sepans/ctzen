'use strict';

module.exports = (sequelize, DataTypes) => {
  // TODO: add constraints unique username, email.
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
    User.belongsToMany(models.Question, { through: models.UserResponse, as: 'answers', foreignKey: 'userId' })
  };
  return User;
};