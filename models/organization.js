const {DataTypes} = require('sequelize')
const sequelize = require('../config/pg');


const Organization = sequelize.define('Organization', {
    name: {
        type: DataTypes.STRING
    },

    size: {
        type: DataTypes.INTEGER
    },

    type: {
        type: DataTypes.STRING
    },


    basicCriteria: {
        type: DataTypes.STRING
    },

    package: {
        type: DataTypes.INTEGER
    },

    position: {
        type: DataTypes.STRING
    },

    bond: {
        type: DataTypes.INTEGER
    },

    LastPlacedStudents: {
        type: DataTypes.INTEGER
    },
}, {

})

module.exports = Organization;