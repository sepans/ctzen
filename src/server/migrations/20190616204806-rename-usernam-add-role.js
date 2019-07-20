'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    const migrations = []

    migrations.push(
      queryInterface.removeColumn(
        'Users', // name of Source model
        'usename' // key
      )
    )

    migrations.push(
      queryInterface.addColumn(
        'Users', // name of Source model
        'username', // key
        {
          type: Sequelize.TEXT,
          allowNull: false,
        }
      )
    )
    migrations.push(
      queryInterface.addColumn(
        'Users', // name of Source model
        'roles', // key
        {
          type: Sequelize.JSON,
        }
      )
    )

    return Promise.all(migrations)
  },

  down: (queryInterface, Sequelize) => {
    const migrations = []

    migrations.push(
      queryInterface.addColumn(
        'Users', // name of Source model
        'usename', // key
        {
          type: Sequelize.TEXT,
        }
      )
    )

    migrations.push(
      queryInterface.removeColumn(
        'Users', // name of Source model
        'username' // key
      )
    )
    migrations.push(
      queryInterface.removeColumn(
        'Users', // name of Source model
        'roles' // key
      )
    )

    return Promise.all(migrations)
  },
}
