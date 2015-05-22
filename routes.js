var pingController = rootRequire('endpoints/controllers/pingController');
var stubController = rootRequire('endpoints/controllers/stub_controller');

module.exports = function (app, router){
    router.get('/(*/)?ping', pingController.ping);
    router.get('/(*/)?stub', stubController.stub);

    app.use('/', router);
};