'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("Candidates", "displayName", {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn("Candidates", "image", {
        type: Sequelize.TEXT
      }),
      queryInterface.addColumn("Candidates", "campaignLogo", {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn("Candidates", "dob", {
        type: Sequelize.DATEONLY
      }),
      queryInterface.addColumn("Candidates", "pob", {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn("Candidates", "state", {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn("Candidates", "campaignStart", {
        type: Sequelize.DATEONLY
      }),
      queryInterface.addColumn("Candidates", "campaignEnd", {
        type: Sequelize.DATEONLY
      }),
      queryInterface.removeColumn("Candidates", "age"),
      queryInterface.addColumn("Candidates", "experience", {
        type: Sequelize.TEXT
      }),
      queryInterface.addColumn("Candidates", "bio", {
        type: Sequelize.TEXT
      }),
      queryInterface.addColumn("Candidates", "miscInfo", {
        type: Sequelize.JSON
      })
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("Candidates", "displayName"),
      queryInterface.removeColumn("Candidates", "image"),
      queryInterface.removeColumn("Candidates", "campaignLogo"),
      queryInterface.removeColumn("Candidates", "dob"),
      queryInterface.removeColumn("Candidates", "pob"),
      queryInterface.removeColumn("Candidates", "state"),
      queryInterface.removeColumn("Candidates", "campaignStart"),
      queryInterface.removeColumn("Candidates", "campaignEnd"),
      queryInterface.removeColumn("Candidates", "bio"),
      queryInterface.removeColumn("Candidates", "experience"),
      queryInterface.removeColumn("Candidates", "miscInfo")
    ]);
  }
};
