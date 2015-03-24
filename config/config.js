var $ = {};
$.leisureLink = {};
//TODO: rename with the appropriate integrator (ResortZilla, Outrigger, etc.)
$.INTEGRATOR = {};

var leisureLinkApiBase;
if (process.env.NODE_ENV === 'production') {
    //TODO: add production API key
    $.leisureLink.apiKey  = 'apiKey=ADD_API_KEY';
    leisureLinkApiBase = 'http://104.130.250.126/v1/';
}
else {
    //TODO: add dev API key
    $.leisureLink.apiKey  = 'apiKey=ADD_API_KEY';
    leisureLinkApiBase = 'http://23.253.68.152:803/v1/';
}

//Adapter settings
$.port = 3016;

$.leisureLink.URLs = {
    //static API URLs
    quote           : $.LL_API_base + 'quote',
    booking         : $.LL_API_base + 'booking',
    rentalUnitsList : $.LL_API_base + 'rentalUnits',
    updateLog       : $.LL_API_base + 'updateLog',

    //dynamic API URLs
    rentalUnitDetails  : function(unitId){return leisureLinkApiBase + 'rentalUnits/' + unitId                      },
    availability       : function(unitId){return leisureLinkApiBase + 'rentalUnits/' + unitId + '/availability'    },
    baseRates          : function(unitId){return leisureLinkApiBase + 'rentalUnits/' + unitId + '/baseRates'       },
    stayRestrictions   : function(unitId){return leisureLinkApiBase + 'rentalUnits/' + unitId + '/stayRestrictions'}
};

//TODO: rename with the appropriate integrator (ResortZilla, Outrigger, etc.)
    $.INTEGRATOR.URLs = {
    //TODO: add appropriate integrator urls
};

module.exports = $;


