const {DataTypes} = require('sequelize')
const sequelize = require('../config/pg');

const Intern = sequelize.define('Intern', {
    rollNo: {
        type: DataTypes.INTEGER
    },
    companyD: {
        type: DataTypes.INTEGER
    },
    location: {
        type: DataTypes.STRING
    },
    startD: {
        type: DataTypes.INTEGER
    },
    endD: {
        type: DataTypes.INTEGER
    },
    duration: {
        type: DataTypes.STRING
    },
}, {

})

module.exports = Intern;