var config      = require(ROOT+'/config/config');
var messenger   = require(ROOT+'/messengers/messenger');
//TODO: import proper transformer
var transformer = require(ROOT+'/endpoints/transformers/stub_Transformer');
var async       = require('async');
var logger      = require(ROOT+'/loggers/logger');
$ = {};

$.stub = function(request, response){
    //TODO: get any params from the url
    //var rentalUnitId = request.params.id;
    async.waterfall([
        //fetch data from external source
        function fetchData(callback) {
            async.parallel([
                //TODO: Get all necessary information from LeisureLink API
                //function (callback) {messenger.get(config.leisureLink.URLs.availability(rentalUnitId), null, callback)},
                //function (callback) {messenger.get(config.leisureLink.URLs.baseRates(rentalUnitId), null, callback)}
            ],function(error, results){
                if (error){
                    //TODO: define appropriate error messages. Remember to log identifying details, like unitId, confirmation#, etc.
                    //error.logMessage = 'Error communicating with LeisureLink API for rental unit ' + rentalUnitId + ': ' + error.stack;
                    //error.responseMessage = 'Error communicating with the LesiureLink API';
                }
                return callback(error, results);
            });
        },

        //validate and encode received data
        function validateAndEncodeResponse(rawData, callback){
            //TODO: decide on appropriate validation (parallel or single, json or xml)
            //httpResponseValidator.validateAndEncodeParallelResults(null, rawData, function(error, encodedData){
            var DELETE_THIS_LINE___IT_IS_ONLY_HERE_SO_THIS_COMPILES = (function(){
                if (error) {
                    //TODO: define appropriate error messages. Remember to log identifying details like unitId, confirmation #, etc.
                    //error.logMessage = 'Error communicating with LeisureLink API for rental unit ' + rentalUnitId + ': ' + error.stack;
                    //error.responseMessage = 'Error communicating with the LesiureLink API';
                }
                return callback(error, encodedData);
            });
        },

        //transform data to appropriate format
        function transformData(encodedData, callback){
            //TODO: extract encoded data based on order
            //var availability = encodedData[0];
            //var baseRates = encodedData[1];
            //TODO: select appropriate method name on the transformer
            transformer.transform(/* necessary args parsed from encodedData ,*/ function(error, transformedData){
                if (error) {
                    //TODO: define appropriate error messages. Remember to log identifying details like unitId, confirmation #, etc.
                    //error.logMessage = 'Error transforming availability data for rental unit ' + rentalUnitId + ': ' + error.stack;
                    //error.responseMessage = 'Error communicating with the LesiureLink API';
                }
                return callback(error, transformedData);
            });
        },

        //send validated data
        function handleValidatedDate(transformedData, callback) {
            //TODO: send the transformed data to the appropriate party, whether that's sending it in a response or sending it to an API endpoint
            //messenger.post(url, transformedData, null, function(error, results){
            // if (error) {
            //      callback(error);
            //  }
            //  else {
            //      return callback(null, null);
            //  }
            // }
            //
            //   OR
            //
            //messenger.sendResponse(response, 200, transformedData);
            return callback(null);
        }
    ],
        //log results
        function(error){
            if (error) {
                logger.log('error', error.logMessage);
                //TODO: define proper way to send failure to caller
                //messenger.sendResponse({'error': error.responseMessage}, 400, transformedData);
            }
            else {
                //TODO: define appropriate log message. Remember to log identifying details like unitId, confirmation #, etc.
                logger.log('info'/*, 'Sent availability info for unit ' + rentalUnitId*/);
            }
        }
    );
};

module.exports = $;