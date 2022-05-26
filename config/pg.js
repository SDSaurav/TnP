const {Sequelize}  = require('sequelize');

const database = process.env.PG_DATABASE;
const user = process.env.PG_USER;
const password  = process.env.PG_PASSWORD;
const host = process.env.PG_HOST;
const port = process.env.PG_PORT;


const sequelize = new Sequelize(database, user, password, {
    host,
    port,
    dialect: 'postgres',
    logging: true
})

const connect = async () => {
    try{
        await sequelize.authenticate();
        console.log("Pg connection established")
    } catch (error){
        console.log("Error", error);
        throw SQLException;
    }
};

connect().then(() => {
    return sequelize.sync({alter: true});
}).then(() => {
    console.log("ok")
}).catch((err) => {
    console.log("err")
})

module.exports = sequelize;