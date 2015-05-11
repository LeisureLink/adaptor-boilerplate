var request = require('request');
var js2xml = require('js2xmlparser');
var httpValidator = rootRequire('messenger/httpValidator');
var $ = {};

$.get = function(url, args, callback) {
    args = parseArgs(args);
    if (args.error){
        args.error.message = 'Invalid args: ' + error.message;
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
            return args.transform(results, callback(error, results));
        }
    });
};

$.post = function(url, body, args, callback){
    args = parseArgs(args);
    if (args.error){
        args.error.message = 'Invalid args: ' + error.message;
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
            return args.transform(results, callback(error, results));
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

var parseArgs = function(args, body){
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
        'body': null,
        'contentName': null,
        'content': null,
        'contentTypeHeader': null,
        'transform': null,
        'urlParams': {}
    };

    if (args.urlParams){
        returnArgs.urlParams = args.urlParams;
    }

    //define the arguments based on the content type
    switch(args.contentType) {
        case null:
        case undefined:
        case 'json':
            returnArgs.content = 'json';
            returnArgs.contentTypeHeader = 'application/json';
            returnArgs.transformResponse = httpValidator.validateJsonResponse;
            if (body){
                returnArgs.body = JSON.stringify(body, null, 3);
            }
            break;

        case 'xml':
            if (!args.rootName) {
                returnArgs.error = new Error('args containing contentType of \'xml\' must supply a root name');
                break;
            }
            returnArgs.content = 'xml';
            returnArgs.contentTypeHeader = 'application/xml';
            returnArgs.transformResponse = httpValidator.validateXmlResponse;
            if (body){
                returnArgs.body = js2xml(args.rootName, body);
            }
            break;

        default:
            returnArgs.error = new Error('Unsupported content type passed in args');
    }

    return returnArgs;
};

module.exports = $;
