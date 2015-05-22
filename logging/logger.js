var winston = require('winston');
winston.emitErrs = true;

var transportsList = [
    new (winston.transports.Console)({
        timestamp: true,
        prettyPrint: true,
        depth: 2,
        level: 'info',
        handleExceptions: true,
        colorize: true
    })
];

if (process.env.LOCAL_LOG_FILE === 'true') {
    transportsList.push(
        new (winston.transports.File)({
            level: 'debug',
            filename: './logs.log',
            handleExceptions: true,
            json: true,
            maxsize: 5242880, //5MB
            maxFiles: 5,
            colorize: false
        })
    );
}

module.exports = new (winston.Logger)({
    colors: {
        error: 'red',
        info:  'green',
        warn:  'yellow'
    },
    transports: transportsList,
    exitOnError: false
});


