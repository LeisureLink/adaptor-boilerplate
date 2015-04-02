process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//caputre app root for require statements throughout the app
var path = require('path');
var ROOT = path.resolve(__dirname);
global.rootRequire = function(filePath){
    return require(path.join(ROOT, filePath));
};

//create and configure app
var app = require('express')();
var config = rootRequire('/settings/config');
rootRequire('/settings/appSettings')(app, config);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;