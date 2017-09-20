const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOSTNAME,
  dialect: 'mysql'
})

let db = fs.readdirSync(__dirname)
  .filter(f => (f.indexOf('.') !== 0) && (f !== 'index.js'))
  .reduce((obj, f) => {
    let model = sequelize.import(path.join(__dirname, f))
    obj[model.name] = model
    return obj
  }, {})

Object.keys(db).forEach(model => {
  db[model].associate(db)
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
