'use strict';

var logger = require('lla-logger')();

var $ = {
    ping: function(request, response){
        logger.log('info', 'Ping request received');

        response.status = 200;
        response.send('pong');
    }
};

module.exports = $;