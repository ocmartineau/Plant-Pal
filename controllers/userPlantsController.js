//Requiring Express and Router for routes
var express = require("express");
var router = express.router();


//Pulling in the model to use their database functions
var userPlants = require("../models/userPlants");


//-------------------------API ROUTES-------------------------------------







//USER ROUTES
router.post("/users", function(req, res) {
    if( req.body.username == null || req.body.password == null || req.body.email == null) {
    return res.status(404).end();
    } else {
        users.create([
                "username", "password", "email"
            ], [
                req.body.username, req.body.password, req.body.email,
            ], function (result) {
                res.json({result});
            }
        );
    };
});
router.put("/user", function(req, res) {
    users.update({
        username: req.body.username,
        email: req.body.email
    },
    )
})

//Need to add users.auth for passport,




