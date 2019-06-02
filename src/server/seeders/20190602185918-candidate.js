'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Candidates', [{
        firstName: 'Joe',
        lastName: 'Biden',
        age: 77,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Elizabeth',
        lastName: 'Warren',
        age: 71,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Bernie',
        lastName: 'Sanders',
        age: 78,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Candidates', null, {});
  }
};
