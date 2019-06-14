'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const migrations = []

    migrations.push(queryInterface.addColumn(
      'CandidateResponses', // name of Source model
      'candidateId', // key
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Candidates', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    ))
    migrations.push(queryInterface.addColumn(
      'CandidateResponses', // name of Source model
      'questionId', // key
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Questions', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    ))    

    migrations.push(queryInterface.addColumn(
      'UserResponses', // name of Source model
      'userId', // key
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    ))
    migrations.push(queryInterface.addColumn(
      'UserResponses', // name of Source model
      'questionId', // key
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Questions', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    ))     
    
    return Promise.all(migrations)

  },

  down: (queryInterface, Sequelize) => {
    const migrations = []

    migrations.push(queryInterface.removeColumn(
      'CandidateResponses', // name of Source model
      'candidateId', // key
    ))
    migrations.push(queryInterface.removeColumn(
      'CandidateResponses', // name of Source model
      'questionId', // key
    ))

    migrations.push(queryInterface.removeColumn(
      'UserResponses', // name of Source model
      'userId', // key
    ))
    migrations.push(queryInterface.removeColumn(
      'UserResponses', // name of Source model
      'questionId', // key
    ))

    return Promise.all(migrations)
  }
};
