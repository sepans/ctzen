'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    const migrations = []

    migrations.push(
      queryInterface.addColumn('CandidateResponses', 'deleted', {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      })
    )
    migrations.push(
      queryInterface.addColumn('CandidateResponses', 'deletedAt', {
        allowNull: true,
        type: Sequelize.DATE,
      })
    )
    migrations.push(
      queryInterface.addColumn('UserResponses', 'deleted', {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      })
    )
    migrations.push(
      queryInterface.addColumn('UserResponses', 'deletedAt', {
        allowNull: true,
        type: Sequelize.DATE,
      })
    )

    return Promise.all(migrations)
  },

  down: (queryInterface, Sequelize) => {
    const migrations = []

    migrations.push(queryInterface.removeColumn('UserResponses', 'deleted'))

    migrations.push(queryInterface.removeColumn('UserResponses', 'deletedAt'))

    migrations.push(
      queryInterface.removeColumn('CandidateResponses', 'deleted')
    )

    migrations.push(
      queryInterface.removeColumn('CandidateResponses', 'deletedAt')
    )

    return Promise.all(migrations)
  },
}
