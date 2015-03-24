process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('express');
var app = express();
app.set('case sensitive routing', true);

var config = require('./config/config');
require('./settings/settings')(app, config);

app.listen(app.get('port'), '127.0.0.1', function () {
    console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;
