//TODO: Pariveda note: this implementation will make for cleaner/easier require statements, but will prevent the app from being reused as a module. is that acceptable?
global.ROOT = require('path').resolve(__dirname);
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = require('express')();
var config = require(ROOT+'/config/config');
require(ROOT+'/settings/settings')(app, config);

app.listen(app.get('port'), '127.0.0.1', function () {
    console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;
