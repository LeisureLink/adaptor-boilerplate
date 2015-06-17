var express = require('express');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var multer = require('multer');
var errorhandler = require('errorhandler');
var logger = rootRequire('logging/logger');

module.exports = function (app, config) {
    app.set('port', config.port);
    app.set('case sensitive routing', true);
    app.use(morgan('dev', {
        stream: {
            write: function (message) {
                logger.info(message.slice(0, -1));
            }
        }
    }));
    app.use(methodOverride());
    app.use(bodyParser.json());
    app.use(bodyParser.text({type: 'application/xml'}));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(multer());
    app.use(cookieParser());

    // Load Routes
    var router = express.Router();
    rootRequire('routes/routes')(app, router);

    if (config.env === 'development') {
        app.use(errorhandler());
    }
};
