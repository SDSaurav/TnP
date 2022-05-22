const {DataTypes} = require('sequelize')
const sequelize = require('../config/pg');

const Intern = sequelize.define('Intern', {
    rollNo: {
        type: DataTypes.NUMBER
    },
    companyD: {
        type: DataTypes.NUMBER
    },
    location: {
        type: DataTypes.STRING
    },
    startD: {
        type: DataTypes.NUMBER
    },
    endD: {
        type: DataTypes.NUMBER
    },
    duration: {
        type: DataTypes.STRING
    },
}, {

})

module.exports = Intern;