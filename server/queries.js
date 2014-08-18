var mysql = require('mysql');
var lastMessageId = 0;

var connection = mysql.createConnection({
  user: 'root',
  password: 'superman',
  database: 'chatroom'
});

connection.connect();

exports.getMessages = function(callback) {
  connection.query('select * from messages where messageId > ' + lastMessageId +
                   ' order by messageId desc', function(err, results) {
    if (err) { throw err; }
    if (results && results.length > 0) {
      console.log("query results:", results);         // logging
      lastMessageId = results[0].messageId;
      console.log("lastMessageId:", lastMessageId);         // logging
    }
    console.log("lastMessageId:", lastMessageId);         // logging
    callback(err, results);
  });
};

