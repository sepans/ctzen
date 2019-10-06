'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    const migrations = []

    migrations.push(
      queryInterface.addColumn('Questions', 'category', {
        type: Sequelize.STRING,
        allowNull: true,
      })
    )

    migrations.push(
      queryInterface.addColumn('Questions', 'subcategory', {
        type: Sequelize.STRING,
        allowNull: true,
      })
    )

    return Promise.all(migrations)
  },

  down: (queryInterface, Sequelize) => {
    const migrations = []

    migrations.push(queryInterface.removeColumn('Questions', 'category'))
    migrations.push(queryInterface.removeColumn('Questions', 'subcategory'))

    return Promise.all(migrations)
  },
}
