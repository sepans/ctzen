'use strict';


module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    title: DataTypes.STRING,
    option1: DataTypes.STRING,
    option2: DataTypes.STRING,
    option3: DataTypes.STRING,
    option4: DataTypes.STRING,
    option5: DataTypes.STRING,
    level: DataTypes.INTEGER
  }, {});
  Question.associate = function(models) {
    Question.belongsToMany(models.Candidate, { through: models.CandidateResponse, foreignKey: 'questionId' })
    // Question.belongsToMany(models.User, { through: models.UserResponse, foreignKey: 'questionId' })
  };
  return Question;
};