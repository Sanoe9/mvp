const mysql = require('mysql');
const {password} = require('../server/password.js');

const db = mysql.createConnection({
  user: 'root',
  password: password,
  database: 'newborn'
});

db.connect();

module.exports = db;