const {DataTypes} = require('sequelize')
const sequelize = require('../config/pg');


const Organization = sequelize.define('Organization', {
    name: {
        type: DataTypes.STRING
    },

    size: {
        type: DataTypes.NUMBER
    },

    type: {
        type: DataTypes.STRING
    },


    basicCriteria: {
        type: DataTypes.STRING
    },

    package: {
        type: DataTypes.NUMBER
    },

    position: {
        type: DataTypes.NUMBER
    },

    bond: {
        type: DataTypes.STRING
    },

    LastPlacedStudents: {
        type: DataTypes.NUMBER
    },
}, {

})

module.exports = Organization;