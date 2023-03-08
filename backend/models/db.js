const mysql = require("mysql");
const database = require("../config/database.js");

const connection = mysql.createConnection({
    host: database.HOST,
    user: database.USER,
    password: database.PASSWORD,
    database: database.DATABASE,
    port: database.Port
});

// connection.connect(error => {
    // if (error) throw error;
    // console.log("Database is Connected uh..Successfully");
// });

module.exports = connection
