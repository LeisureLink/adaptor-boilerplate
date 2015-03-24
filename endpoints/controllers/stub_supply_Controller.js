var config      = require('../../config/config');
var messenger   = require('../../messengers/messenger.js');
//TODO: import proper transformer
var transformer = require('./transformers/stub_Transformer');
var async       = require('async');
var logger      = require('../../loggers/logger');

$ = {};

$.stub = function(request, response){
    //TODO: get any params from the url
    //var rentalUnitId = request.params.id;
    async.waterfall([
        //fetch data from supplier API
        function fetchData(callback) {
            async.parallel([
                //TODO: Get all necessary information from supplier API
                //function (callback) {messenger.get(config.INTEGRATOR.URLs.availability(rentalUnitId), callback)},
                //function (callback) {messenger.get(config.INTEGRATOR.URLs.baseRates(rentalUnitId), callback)}
            ],function(error, results){
                if (error){
                    //TODO: define appropriate error messages. Remember to log identifying details, like unitId, confirmation#, etc.
                    //error.logMessage = 'Error communicating with LeisureLink API for rental unit ' + rentalUnitId + ': ' + error.stack;
                }
                return callback(error, results);
            });
        },

        //validate and encode received data
        function validateAndEncodeData(rawData, callback){
            //TODO: decide on appropriate validation (parallel or single, json or xml)
            //httpResponseValidator.validateAndEncodeParallelResults(null, rawData, function(error, encodedData){
                if (error) {
                    //TODO: define appropriate error messages. Remember to log identifying details like unitId, confirmation #, etc.
                    //error.logMessage = 'Error communicating with LeisureLink API for rental unit ' + rentalUnitId + ': ' + error.stack;
                }
                return callback(error, encodedData);
            });
        },

        //transform data to supplier format
        function transformData(encodedData, callback){
            //TODO: extract encoded data based on order
            //var availability = encodedData[0];
            //var stayRestrictions = encodedData[1];
            //TODO: select appropriate method name on the transformer
            transformer.transform(/* necessary args parsed from encodedData ,*/ function(error, transformedData){
                if (error) {
                    //TODO: define appropriate error messages. Remember to log identifying details like unitId, confirmation #, etc.
                    //error.logMessage = 'Error transforming availability data for rental unit ' + rentalUnitId + ': ' + error.stack;
                }
                return callback(error, transformedData);
            });
        },

        //send validated data
        function(transformedData, callback) {
            messenger.sendResponse(response, 200, transformedData);
            return callback(null);
        }

    ],
        //log results
        function(error){
            if (error) {
                logger.log('error', error.logMessage);
            }
            else {
                //TOOO: define appropriate log message. Remember to log identifying details like unitId, confirmation #, etc.
                logger.log('info', /*'Sent availability info for unit ' + rentalUnitId*/);
            }
        }
    );
};

module.exports = $;