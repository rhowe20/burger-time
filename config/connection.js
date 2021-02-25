const mysql = require('mysql');
const util = require('util');

const source = {
    localhost: {
      host: "localhost",
      port: 3306,
      user: "root",
      password: "Fru1tBa$ket",
      database: "burger_db"
    },

  };

const connection = mysql.createConnection(source.localhost);

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;