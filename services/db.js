// mysql连接
const mysql = require('mysql');

var db = {};
var pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'demo',
});

var exec = function (sql, params, callback) {
  pool.getConnection(function (err, con) {
    if (err) {
      callback(err, null, null);
      console.log('mysql connected');
    } else {
      if (params === null || params.length == 0) {
        con.query(sql, function (err, results, fields) {
          con.release();
          callback(err, results, fields);
        });
      } else {
        con.query(sql, params, function (err, results, fields) {
          con.release();
          callback(err, results, fields);
        });
      }
    }
  });
};

db.exec = exec;

module.exports = db;
