var pingController = rootRequire('endpoints/controllers/pingController');
var stubController = rootRequire('endpoints/controllers/stub_controller');

module.exports = function (app, router){
    // TODO: Update application name
    router.get('/adaptor-boilerplate/ping', pingController.ping);
    router.get('/adaptor-boilerplate/stub', stubController.stub);

    app.use('/', router);
};