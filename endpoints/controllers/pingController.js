var $ = {
    ping: function(request, response){
        response.status = 200;
        response.send('pong');
    }
};

module.exports = $;