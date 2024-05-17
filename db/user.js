
const {DataTypes} = require('sequelize')
const sequelize = require('./db')

const Usuario = sequelize.define('Usuario', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name: DataTypes.STRING,
    email:DataTypes.STRING,
    senha: DataTypes.STRING
})

module.exports = Usuario