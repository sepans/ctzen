'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    const migrations = []

    migrations.push(
      queryInterface.addColumn('CandidateResponses', 'comment', {
        type: Sequelize.TEXT,
        allowNull: true,
      })
    )

    migrations.push(
      queryInterface.addColumn('CandidateResponses', 'source', {
        type: Sequelize.TEXT,
        allowNull: true,
      })
    )

    return Promise.all(migrations)
  },

  down: (queryInterface, Sequelize) => {
    const migrations = []

    migrations.push(
      queryInterface.removeColumn('CandidateResponses', 'comment')
    )
    migrations.push(queryInterface.removeColumn('CandidateResponses', 'source'))

    return Promise.all(migrations)
  },
}
