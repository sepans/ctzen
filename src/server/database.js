const Sequelize = require('sequelize');
const config = require('./config/sequelize')

// Option 1: Passing parameters separately
const env = process.env.NODE_ENV || 'development' // TODO: load'
console.log('env', env) // TODO: remove
console.log(config[env].host)

const pool = {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 10000
} 

const connection = new Sequelize(config[env].database, config[env].username, config[env].password, {
  host: config[env].host,
  dialect: 'postgres',
  pool
});

module.exports = {
  connection
}