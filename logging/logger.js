var winston = require('winston');

var transportsList = [
        new (winston.transports.Console)({
            level: 'silly',
            colorize: true
        })
];

module.exports = new (winston.Logger)({
    colors: {
        error: 'red',
        info:  'green',
        warn:  'yellow'
    },
    transports: transportsList
});


