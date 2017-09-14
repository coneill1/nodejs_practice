/* Connect to db */
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "coneill",
    password: "chris",
    database: "items"
});


connection.connect(function(err) {
    if(err) throw err;
    console.log('Connected!');
});

module.exports = connection;
