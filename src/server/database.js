const Sequelize = require('sequelize');
const config = require('./config/sequelize')

// Option 1: Passing parameters separately
const env = 'development' // TODO: load

const connection = new Sequelize(config[env].database, config[env].username, config[env].password, {
  host: config.host,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }  
});

module.exports = {
  connection
}