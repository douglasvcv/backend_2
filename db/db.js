require('dotenv').config()

const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('okok', 'root', process.env.PASSWORLD_DB, {
    host:'localhost',
    dialect: 'mysql'
})

module.exports = sequelize;