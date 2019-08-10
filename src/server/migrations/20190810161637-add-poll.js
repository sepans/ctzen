'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    const migrations = []

    migrations.push(
      queryInterface.addColumn('Candidates', 'latestPoll', {
        type: Sequelize.INTEGER,
        allowNull: true,
      })
    )

    return Promise.all(migrations)
  },

  down: (queryInterface, Sequelize) => {
    const migrations = []

    migrations.push(queryInterface.removeColumn('Candidates', 'latestPoll'))

    return Promise.all(migrations)
  },
}
