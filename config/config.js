'use strict';

var $ = {};
var deasync = require('deasync');
var Configurator = require('env-configurator');
var configSpec = require('./envConfigSpec');
var config = new Configurator();

try { require('./appDefaultEnv'); } catch (e) { }

deasync(config.fulfill)(configSpec);

function get(name) {
    // TODO: Update name to match name defined in envConfigSpec.json
    return config.get('test', '#/' + name);
}

// TODO: Update config object to assign properties using get()
$.env = get('env') || 'development';
$.port = process.env.PORT_NUMBER || get('server_port');

$.leisureLink = {};
$.leisureLink.apiBase = get('leisure_link/api_base');
$.leisureLink.apiKey = get('leisure_link/api_key');

//TODO: Rename with the appropriate integrator (ResortZilla, Outrigger, etc.)
$.INTEGRATOR = {};
$.INTEGRATOR.URLs = {
    //TODO: Add appropriate integrator URLs
};

$.raygun = get('raygun/api_key');

module.exports = $;