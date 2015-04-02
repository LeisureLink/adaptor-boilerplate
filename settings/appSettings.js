var express = require('express');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var multer = require('multer');
var errorhandler = require('errorhandler');

module.exports = function (app, config) {
    app.set('port', config.port);
    app.set('case sensitive routing', true);
    app.use(morgan('dev'));
    app.use(methodOverride());
    app.use(bodyParser.json());
    app.use(bodyParser.text({type: 'application/xml'}));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(multer());
    app.use(cookieParser());

    // Load Routes
    var router = express.Router();
    require('../routes.js')(app, router);

    if ('development' === process.env.NODE_ENV) {
        app.use(errorhandler());
    }
};
