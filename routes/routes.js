var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('graham_creations', {
        title: "Graham Creations"
    });
});

router.get('/inventory', function(req, res) {
    
    var db = require('../db/db_connection.js');


    /* Get all inventory */
    var tables_data = {};
    var chairs_data = {};
    
    var getTables = new Promise(function(resolve, reject) {
        db.query('SELECT * FROM tables', function(err, rows, fields) {
            if(err) {
                reject();
            }
            tables_data = rows;
            resolve(tables_data);
        });
    })
    
    getTables.then(function(data) {
        db.query('SELECT * FROM chairs', function(err, rows, fields) {
            if(err) {
                reject();
            }
            chairs_data = rows;
            sendToPage(data, chairs_data);
        });
    })
    
    .catch(function() {
        console.log("something went wrong: ");
    });


    function sendToPage(tables, chairs) {
        res.render('inventory', {
            title: "Inventory",
            tables: JSON.stringify(tables),
            chairs: JSON.stringify(chairs)
        });
    }
    
    
});


module.exports = router;