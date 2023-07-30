var mysql = require('mysql');

// Datatbase Connection !!
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "rental_management_db"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

module.exports = con;