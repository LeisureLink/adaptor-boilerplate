var $ = {};
var util = require('util');
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

// TODO: Update populateConfig to assign config object properties using get()
function populateConfig() {
    $.port = process.env.PORT_NUMBER || get('adaptor_port');

    $.leisureLink = {};
    $.leisureLink.apiBase = get('leisure_link/api_base');
    $.leisureLink.apiKey = get('leisure_link/api_key');

    $.leisureLink.URLs = {
        // Static API URLs
        'quote'           : $.leisureLink.apiBase + 'quote',
        'booking'         : $.leisureLink.apiBase + 'booking',
        'cancellation'    : $.leisureLink.apiBase + 'cancel',
        'rentalUnitsList' : $.leisureLink.apiBase + 'rentalUnits',
        'updateLog'       : $.leisureLink.apiBase + 'updateLog',

        // Dynamic API URLs
        'rentalUnitDetail'            : function(unitId){return $.leisureLink.apiBase + 'rentalUnits/' + unitId;                        },
        'rentalUnitAvailability'      : function(unitId){return $.leisureLink.apiBase + 'rentalUnits/' + unitId + '/availability';      },
        'rentalUnitBaseRates'         : function(unitId){return $.leisureLink.apiBase + 'rentalUnits/' + unitId + '/baseRates';         },
        'rentalUnitStayRestrictions'  : function(unitId){return $.leisureLink.apiBase + 'rentalUnits/' + unitId + '/stayRestrictions';  },
        'rentalUnitCheckInInformation': function(unitId){return $.leisureLink.apiBase + 'rentalUnits/' + unitId + '/checkInInformation';},
        'rentalUnitSpecials'          : function(unitId){return $.leisureLink.apiBase + 'rentalUnits/' + unitId + '/specials';          },
        'specialAvailability'         : function(specialId){return $.leisureLink.apiBase + 'special/'  + specialId;                     }
    };

    //TODO: Rename with the appropriate integrator (ResortZilla, Outrigger, etc.)
    $.INTEGRATOR = {};
    $.INTEGRATOR.URLs = {
        //TODO: Add appropriate integrator URLs
    };
}

module.exports = $;