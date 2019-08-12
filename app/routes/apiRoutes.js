//require data from friends.js in data folder
var friendData = require("../data/friends");

module.exports = function(app){

    app.get('/api/friends', function(req, res){
        res.json(friendData);
    });

    app.post('/api/friends', function(req, res){
        //used to handle incoming survey results and compatibility logic.
        var friend = req.body;

        //parses scores to integers
        for(var i = 0; i < friend.scores.length; i++){
            friend.scores[i] = parseInt(friend.scores[i]);
        };
    });
};