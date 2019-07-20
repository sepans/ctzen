const Sequelize = require('sequelize')
const config = require('../config/sequelize')
const fs = require('fs')
const path = require('path')

const env = process.env.NODE_ENV || 'development' // TODO: load'

const pool = {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 10000,
}

const db = new Sequelize(
  config[env].database,
  config[env].username,
  config[env].password,
  {
    host: config[env].host,
    dialect: 'postgres',
    pool,
  }
)

// load models similar to https://github.com/sequelize/express-example/blob/master/models/index.js
fs.readdirSync(__dirname)
  .filter(file => file !== 'index.js' && file !== 'sequelize.test.js')
  .forEach(file => {
    const model = db['import'](path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

module.exports = {
  db,
}
