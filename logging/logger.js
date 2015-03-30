var winston = require('winston');
var config = rootRequire('/settings/config');
var fs = require( 'fs' );

if (!fs.existsSync(config.logsRoot)){
    fs.mkdirSync(config.logsRoot);
}

var transportsList = [
        new (winston.transports.Console)({
            level: 'silly',
            colorize: true
        }),
        new (winston.transports.DailyRotateFile)({
            name: 'file.info',
            filename: config.infoLog,
            level: 'info',
            colorize: true
        }),
        new (winston.transports.DailyRotateFile)({
            name: 'file.error',
            filename: config.errorLog,
            level: 'error',
            colorize: true
        })
];

if (process.env.NODE_ENV === 'development'){
   transportsList.push(new (winston.transports.DailyRotateFile)({
        name: 'file.debug',
        filename: config.debugLog,
        level: 'debug',
        colorize: true
    })
   );
}

module.exports = new (winston.Logger)({
    colors: {
        error: 'red',
        info:  'green',
        warn:  'yellow'
    },
    transports: transportsList
});


