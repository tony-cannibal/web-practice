var mysql = require('mysql');

var con = mysql.createConnection({
  host: "172.18.4.58",
  database: "yura_elaboracion",
  user: "yura_admin",
  password: "Metallica24+",
  port: 3306
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

con.query('SELECT * FROM `materiales` WHERE `tipo` = ?', ['sello'], function (error, results, fields) {
  // error will be an Error if one occurred during the query
  // results will contain the results of the query
  // fields will contain information about the returned results fields (if any)
    console.log(results);
});

con.end(function(err) {
  // The connection is terminated now
});
