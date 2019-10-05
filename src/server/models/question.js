'use strict'

module.exports = (sequelize, DataTypes) => {
  // TODO: foreign key parent? or category, sub category (e.g. E2.5)
  const Question = sequelize.define(
    'Question',
    {
      title: DataTypes.STRING,
      option1: DataTypes.STRING,
      option2: DataTypes.STRING,
      option3: DataTypes.STRING,
      option4: DataTypes.STRING,
      option5: DataTypes.STRING,
      level: DataTypes.INTEGER,
      importId: DataTypes.STRING,
      category: DataTypes.STRING,
      subcategory: DataTypes.STRING,
    },
    {}
  )
  Question.associate = function(models) {
    Question.belongsToMany(models.Candidate, {
      through: models.CandidateResponse,
      foreignKey: 'questionId',
    })
    Question.belongsToMany(models.User, {
      through: models.UserResponse,
      foreignKey: 'questionId',
    })

    Question.belongsTo(Question, { as: 'parent', foreignKey: 'parentId' })
    Question.hasMany(Question, { as: 'children', foreignKey: 'parentId' })
  }
  return Question
}
