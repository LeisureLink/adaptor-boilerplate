var request = require('request');
var js2xml = require('js2xmlparser');
var $ = {};

$.get = function(url, args, callback) {
    try{
        args = parseArgs(args);
    }
    catch(error){
        error.message = 'Invalid args: ' + error.message;
        return callback(error, null);
    }
    request({
        'url': url,
        'headers': args.headers,
        'qs': args.urlParams
    },
    function(error, results){
        if (error){
            error.url = url;
            return callback(error, null);
        }
        else {
            return callback(null, results);
        }
    });
};

$.post = function(url, body, args, callback){
    try{
        args = parseArgs(args, body);
    }
    catch(error){
        error.message = 'Invalid args: ' + error.message;
        return callback(error, null);
    }
    request.post({
        'url': url,
        'headers': {'Content-Type' : args.contentType},
        'body': args.message,
        'qs': args.urlParams
    },
    function(error, results){
        if (error){
            error.url = url;
            return callback(error, null);
        }
        else {
            return callback(null, results);
        }
    });
};

$.sendResponse = function(response, code, body){
    //TODO: Set any necessary headers
    //response.header('Content-Type', 'application/xml');
    //response.header('Content-Type', 'application/json');
    response.status(code);
    //TODO: serialize the response appropriately
    //var message = js2xml('ROOT_NAME', body);
    //var message = JSON.stringify(body, null, 3);
    response.send(message);
};

parseArgs = function(args, body){
    // Valid options for args are:
    //
    // ulrParams: A list of parameters to be appended to the url.
    //            Should be a dictionary of key/value pairs.
    //            Defaults to no parameters: {}
    //            e.g. {
	//	             'supplierId': 12345,
	//	             'isActive': true,
	//	             'apiKey': 'asdfsl@sdfa^&8as#2asdf'
	//            }
    //
    // contentType:  The content type to be used.
    //               Defaults to 'json'
    //               Currently the only valid options are 'xml' or 'json'.
    //

    var returnArgs = {
        'message': null,
        'contentType': null,
        'urlParams': {}
    };

    if (args.urlParams){
        returnArgs.urlParams = args.urlParams;
    }
    switch(args.contentType) {
        case null:
        case undefined:
        case 'json':
            returnArgs.contentType = 'application/json';
            if (body){
                returnArgs.message = JSON.stringify(body, null, 3);
            }
            break;
        case 'xml':
            if (!args.rootName) {
                throw new Error('args containing contentType of \'xml\' must supply a root name');
            }
            returnArgs.contentType = 'application/xml';
            if (body){
                returnArgs.message = js2xml(root, body);
            }
            break;
        default:
            throw new Error('Unsupported content type passed in args');
    }

    return returnArgs;
};

module.exports = $;
