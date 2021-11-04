const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host:"nnsgluut5mye50or.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user:"d49zdubkzcn7lsna",
    password:"rc19fk3n1fvtcm7v",
    database:"axfy9lnd94l5n0s8",
    multipleStatements: true
  });

  mysqlConnection.connect(function (err) {
    if (err) {
      console.error(err);
      return;
    } else {
      console.log('En linea...');
    }
  });

  module.exports = mysqlConnection;