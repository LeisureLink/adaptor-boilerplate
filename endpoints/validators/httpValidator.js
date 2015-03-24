var async = require('async');
var parser = require('xml2js').Parser();

var $ = {};

$.validateAndEncodeJsonResponse = function (response, callback) {
    var body;
    try {
        body = response.body;
        if (typeof body === 'string') {
            body = JSON.parse(body);
        }
    }
    catch (error) {
        error.message = 'Unable to parse data from ' + response.req.path.split('?')[0] + '. We received: \n' + JSON.stringify(response.body);
        return callback(error, null);
    }

    if (body.error) {
        return callback(new Error('Error received from API: ' + JSON.stringify(body.error)), null);
    }
    //for the specifically formatted error returned from API-Axle's throttling
    else if (body.results && body.results.error && body.results.error.message){
        return callback(new Error('Error received from API-Axle: ' + body.results.error.message), null);
    } 
    else if (!response.statusCode || (response.statusCode !== 200 && response.statusCode !== 204)) {
        return callback(new Error('Non successful status code in response: ' + response.statusCode), null);
    }
    else {
        return callback(null, body);
    }
};

$.validateAndEncodeXmlRequest = function (request, callback) {
    try {
        parser.parseString(request.body, function(error, data) {
            if (error) {
                error.message = 'Unable to parse data from ' + request.url + '. We received: \n' + JSON.stringify(request.body);
                return callback(error, null);
            }
            else {
                return callback(null, data);
            }
        });
    }
    catch (error) {
        error.message = 'Unable to parse data from ' + request.url + '. We received: \n' + JSON.stringify(request.body);
        return callback(error, null);
    }
};

$.validateAndEncodeParallelJsonResults = function (error, results, callback) {
    if (error) {
        error.message = 'Error contacting ' + error.url + ': ' + error.message;
        return callback(error, null);
    }
    
    var validateAndEncodeResponse = $.validateAndEncodeJsonResponse;
    async.map(results, validateAndEncodeResponse, function (error, results) {
        return callback(error, results)
    });
};

module.exports = $;