var async = require('async');
var parser = require('xml2js').Parser();
var $ = {};

$.validateJsonResponse = function (response, callback) {
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
    else if (!(response.statusCode && response.statusCode >= 200 && response.statusCode <= 299)) {
        return callback(new Error('Non successful status code in response: ' + response.statusCode), null);
    }
    else {
        return callback(null, body);
    }
};

$.validateXmlResponse = function(response, callback){
    return callback(new Error('XML Validation has not yet been implemented. When you implement it, be sure to add your implemetation to the adapter template!'));
};


module.exports = $;

