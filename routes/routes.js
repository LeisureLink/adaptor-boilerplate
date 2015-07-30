'use strict';

var pingController = require('../lib/controllers/pingController');
var stubController = require('../lib/controllers/stub_controller');

module.exports = function (app, router){
    // TODO: Update application name
    router.get('/adaptor-boilerplate/ping', pingController.ping);
    router.get('/adaptor-boilerplate/stub', stubController.stub);

    app.use('/', router);
};