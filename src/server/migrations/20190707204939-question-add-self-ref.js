'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const migrations = []

    migrations.push(queryInterface.addColumn(
      'Questions',
      'parentId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Questions',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    ))

    migrations.push(queryInterface.addColumn(
      'Questions',
      'importId',
      {
        type: Sequelize.STRING,
      }
    ))    

    migrations.push(queryInterface.addColumn(
      'CandidateResponses',
      'isOfficial',
      {
        type: Sequelize.BOOLEAN,
      }
    ))
    return Promise.all(migrations)

  },

  down: (queryInterface, Sequelize) => {
    const migrations = []

    migrations.push(queryInterface.removeColumn(
      'Questions',
      'parentId',
    ))

    migrations.push(queryInterface.removeColumn(
      'Questions',
      'importId',
    ))

    migrations.push(queryInterface.removeColumn(
      'CandidateResponses',
      'isOfficial',
    ))

    return Promise.all(migrations)
  }
};
