const {DataTypes} = require('sequelize')
const sequelize = require('../config/pg');

const Company = sequelize.define('Company', {
    name: {
        type: DataTypes.STRING
    },

    phNumber: {
        type: DataTypes.NUMBER
    },

    email: {
        type: DataTypes.STRING
    },


    designation: {
        type: DataTypes.STRING
    },

    password: {
        type: DataTypes.STRING
    },
}, {

})

module.exports = Company;