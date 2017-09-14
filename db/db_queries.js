
var db = require('./db_connection.js');


/* Get all inventory */
var sqlQ = 'SELECT * FROM tables';

function getInventory(data) {
    db.query(sqlQ, function(err, rows, fields) {
        data = rows;
        console.log("Here are the rows: " + JSON.stringify(rows));
        module.exports = data;
    });

    console.log("Data: " + JSON.stringify(data));
}

var data = {};
getInventory(data);

function sendToPage(data) {
    
}


