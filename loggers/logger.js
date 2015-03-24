var winston = require('winston');
var config = require('../config/config');
var $ = {};

var customColors = {
    error: 'red',
    info: 'green',
    warn: 'yellow'
};

var logger = new (winston.Logger)({
    colors: customColors,
    transports: [
        new (winston.transports.Console)({
            level: 'silly',
            colorize: true
        }),
        new (winston.transports.DailyRotateFile)({
            name: 'file.info',
            filename: config.infoLogPath,
            level: 'info',
            colorize: true
        }),
        new (winston.transports.DailyRotateFile)({
            name: 'file.error',
            filename: config.errorLogPath,
            level: 'error',
            colorize: true
        })
    ]
});

module.exports = logger;