var path = require('path');
var winston = require('winston');

var infoLogPath;
var errorLogPath;
if (process.env.LOCAL_LOG_FILE === 'true') {
    infoLogPath = path.normalize(__dirname + '/../logs/info.log');
    errorLogPath = path.normalize(__dirname + '/../logs/error.log');
}

var customColors = {
    info: 'green',
    warn: 'yellow',
    error: 'red'
};

var logger = new (winston.Logger)({
    colors: customColors,
    transports: [
        new (winston.transports.Console)({
            level: 'info',
            colorize: true,
            timestamp: true,
            prettyPrint: true,
            depth: 2,
            handleExceptions: true
        })
    ]
});

if (infoLogPath) {
    logger.add(winston.transports.DailyRotateFile, {
        name: 'file.info',
        filename: infoLogPath,
        level: 'info',
        colorize: true,
        handleExceptions: true,
        json: true
    });
}

if (errorLogPath) {
    logger.add(winston.transports.DailyRotateFile, {
        name: 'file.error',
        filename: errorLogPath,
        level: 'error',
        colorize: true,
        handleExceptions: true,
        json: true
    });
}

module.exports = logger;