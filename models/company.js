const {DataTypes} = require('sequelize')
const sequelize = require('../config/pg');

const Company = sequelize.define('Company', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.Integer
    },
    password: {
        type: DataTypes.STRING
    },
}, {

})

module.exports = Company;