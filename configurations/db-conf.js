const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host:"z5zm8hebixwywy9d.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user:"jym3ovupo6oq7evn",
    password:"w4aif9qnjobpttqv",
    database:"ds5jkomszlw9hjt5",
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