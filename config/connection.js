// connect NODE.js to MySQL database
var mysql = require('mysql');

var connection = mysql.createConnection({
    host    : 'localhost',
    port    : 3306,
    user    : 'root',
    password: 'VH_13Root',
    database: 'burgers_db'
});

connection.connect(function(err) {
    if (err) throw err.stack;
    console.log('connected as id:' + connection.threadId);
});

module.exports = connection;