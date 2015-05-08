process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = require('express')();
var logger = require('./logging/logger');

// Capture app root for require statements throughout the app
var path = require('path');
var ROOT = path.resolve(__dirname);
global.rootRequire = function(filePath){
    return require(path.join(ROOT, filePath));
};

var config = rootRequire('/settings/config');

var loadApp = function () {
    rootRequire('/settings/appSettings')(app, config);

    app.listen(app.get('port'), function () {
        logger.log('info', 'Express server listening on port ' + app.get('port'));
    });
};

config.init(loadApp);
module.exports = app;