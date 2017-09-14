var express = require('express');
var app = express();
var path = require('path');
var reload = require('reload');




app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/scripts', express.static(path.join(__dirname, '/node_modules/smoothscroll/')));

app.use(require('./routes/routes'));

/* Load all css/js pages */

var server = app.listen(app.get('port') , function() {
    console.log('Listening on port ' + app.get('port'));
});

reload(server, app);