var pingController =  require('../endpoints/controllers/pingController');
var stubController = require('../endpoints/controllers/stub_supply_Controller');

module.exports = function (app, router){
    router.get('/ping', pingController.ping);
    router.get('/stub', stubController.stub);

    app.use('/', router);
};