'use strict';

var app = require('express')();
var logger = require('lla-logger');

var config = require('./config/config');
require('./config/settings')(app, config);

app.listen(app.get('port'), function () {
    logger.log('info', 'Express server listening on port ' + app.get('port'));
});

module.exports = app;