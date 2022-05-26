// const User = require('./user');
// const sequelize = require("../config/pg");
// // const Order = require('./order');
//
//
//
// module.exports = {
//     User,
//     // Order,
// }

const User = require('./user');
// const Order = require('./order');
const Company = require('./company');
const Intern = require('./intern');
const Organization = require('./organization');
module.exports = {
    User,
    // Order,
    Company,
    Intern,
    Organization,
}