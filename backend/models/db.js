const mysql = require("mysql");
const database = require("../config/database.js");

const connection = mysql.createConnection({
    host: database.HOST,
    user: database.USER,
    password: database.PASSWORD,
    database: database.DATABASE,
    port: database.Port
});

connection.connect((err) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected as id ' + connection.threadId);
  });
  
  connection.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
    if (error) {
      console.error(error);
      connection.end(); // close the connection to the database
      return;
    }
  
    console.log('The solution is: ', results[0].solution);
    connection.end(); // close the connection to the database
  });

// connection.connect(error => {
//     if (error) throw error;
//     console.log("Database is Connected uh..Successfully");
// });

module.exports = connection
