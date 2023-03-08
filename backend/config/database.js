require('dotenv').config();
module.exports = {
    HOST: process.env.dbHost,
    USER: process.env.dbUser,
    PASSWORD: process.env.dbPassword,
    Port: process.env.dbPort,
    DATABASE: process.env.database,
    multipleStatements : true
};