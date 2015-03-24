var path = require('path');

var $ = {};
$.leisureLink = {};
//TODO: rename with the appropriate integrator (ResortZilla, Outrigger, etc.)
$.INTEGRATOR = {};

var leisureLinkApiBase;
if (process.env.NODE_ENV === 'production') {
    //TODO: add production API key
    $.leisureLink.apiKey = 'apiKey=ADD_API_KEY';
    leisureLinkApiBase   = 'http://104.130.250.126/v1/';
}
else {
    //TODO: add dev API key
    $.leisureLink.apiKey = 'apiKey=ADD_API_KEY';
    leisureLinkApiBase   = 'http://23.253.68.152:803/v1/';
}

//Adapter settings
$.port = 3016;

$.leisureLink.URLs = {
    //static API URLs
    'quote'           : $.LL_API_base + 'quote',
    'booking'         : $.LL_API_base + 'booking',
    'cancellation'    : $.LL_API_base + 'cancel',
    'rentalUnitsList' : $.LL_API_base + 'rentalUnits',
    'updateLog'       : $.LL_API_base + 'updateLog',

    //dynamic API URLs
    'rentalUnitDetail'            : function(unitId){return leisureLinkApiBase + 'rentalUnits/' + unitId                        },
    'rentalUnitAvailability'      : function(unitId){return leisureLinkApiBase + 'rentalUnits/' + unitId + '/availability'      },
    'rentalUnitBaseRates'         : function(unitId){return leisureLinkApiBase + 'rentalUnits/' + unitId + '/baseRates'         },
    'rentalUnitStayRestrictions'  : function(unitId){return leisureLinkApiBase + 'rentalUnits/' + unitId + '/stayRestrictions'  },
    'rentalUnitCheckInInformation': function(unitId){return leisureLinkApiBase + 'rentalUnits/' + unitId + '/checkInInformation'},
    'rentalUnitSpecials'          : function(unitId){return leisureLinkApiBase + 'rentalUnits/' + unitId + '/specials'          },
    'specialAvailability'         : function(specialId){return leisureLinkApiBase + 'special/'  + specialId                     },
};

//TODO: rename with the appropriate integrator (ResortZilla, Outrigger, etc.)
    $.INTEGRATOR.URLs = {
    //TODO: add appropriate integrator urls
};

//Log paths
//TODO: change the pathname to include the appropriate integrator name
$.infoLogPath   = path.join(__dirname, '../logs/INTEGRATOR_NAME_adaptor.log');
$.errorLogPath  = path.join(__dirname, '../logs/INTEGRATOR_NAME_adaptor_error.log');

module.exports = $;


