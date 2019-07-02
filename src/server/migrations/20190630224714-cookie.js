'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const migrations = []

    migrations.push(queryInterface.addColumn(
      'Users',
      'token',
      {
        type: Sequelize.TEXT,
        allowNull: false
      }
    ))

    migrations.push(queryInterface.changeColumn(
      'Users',
      'username',
      {
        type: Sequelize.TEXT,
        allowNull: true
      }
    ))

    return Promise.all(migrations)
  },

  down: (queryInterface, Sequelize) => {
    const migrations = []

    migrations.push(queryInterface.removeColumn(
      'Users',
      'token',
    ))

    migrations.push(queryInterface.changeColumn(
      'Users',
      'username',
      {
        type: Sequelize.TEXT,
        allowNull: false
      }
    ))

    return Promise.all(migrations)

  }
};
