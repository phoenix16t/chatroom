var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: 'superman',
  database: 'chatroom'
});

connection.connect();

exports.getMessages = function(callback) {
  connection.query('select * from messages', function(err, results) {
    if (err) { throw err; }
    //console.log("query results:", results);         // logging
    callback(err, results);
  });
};

