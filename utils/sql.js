const config = require('../config');
const mysql = require('mysql');

var connect  = mysql.createPool({
  connectionLimit : 10,
  queuelimit      : 100,
  waitForConnections : true,
  host            : config.host,
  port            : config.port,
  user            : config.port,
  password        : "",
  database        : config.db
});

module.exports = connect;