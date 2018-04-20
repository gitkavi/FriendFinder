var path = require("path");
var friends = require("../app/data/friends");

console.log("friends", friends)

module.exports = function(app){
    app.get("/api/data/friends", function(req, res){
        res.json(friends);
    });

    app.post("/api/data/friends", function(req,res){
        var newFriend = req.body;
        friends.push(newFriend);
    });
}